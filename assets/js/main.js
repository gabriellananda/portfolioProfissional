/* =============================================================
   Portfólio Profissional — 
   PUC Minas · Projeto de Software · Laboratório 1 (Lab01S01)

   JavaScript único e sem dependências. Responsável por:
     1. Menu de navegação mobile
     2. Alternador de idioma PT / EN
     3. Filtro da linha do tempo de projetos
     4. Validação básica do formulário de contato
     5. Ano automático no rodapé
   ============================================================= */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Armazenamento tolerante a falhas: em alguns contextos (iframe com
     sandbox, modo privado restrito) o localStorage lança exceção.
     ------------------------------------------------------------------ */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* silencioso */ } }
  };

  /* =========================================== 1. Navegação mobile */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav-principal');
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }

    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // fecha ao clicar em um link do menu
    nav.addEventListener('click', function (ev) {
      if (ev.target.closest('.nav__link')) setOpen(false);
    });

    // fecha com ESC
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // fecha ao clicar fora
    document.addEventListener('click', function (ev) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (!nav.contains(ev.target) && !toggle.contains(ev.target)) setOpen(false);
    });

    // ao voltar para desktop, garante estado limpo
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /* ====================================== 2. Alternador PT / EN
     Cada elemento traduzível carrega os dois textos em data-pt e
     data-en. O HTML entregue já vem em português, então a página
     continua legível mesmo com o JavaScript desativado.
     ------------------------------------------------------------ */
  function initLang() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-lang-btn]'));
    if (!buttons.length) return;

    function apply(lang) {
      document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

      document.querySelectorAll('[data-pt][data-en]').forEach(function (el) {
        var value = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
        if (value === null) return;
        if (el.hasAttribute('data-lang-attr')) {
          el.setAttribute(el.getAttribute('data-lang-attr'), value);
        } else {
          el.textContent = value;
        }
      });

      buttons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-btn') === lang));
      });

      store.set('portfolio-lang', lang);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang-btn'));
      });
    });

    apply(store.get('portfolio-lang') === 'en' ? 'en' : 'pt');
  }

  /* ================================ 3. Filtro da linha do tempo */
  function initFilters() {
    var filters = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-categorias]'));
    var empty = document.querySelector('[data-empty-state]');
    if (!filters.length || !items.length) return;

    function apply(value) {
      var visiveis = 0;

      items.forEach(function (item) {
        var cats = (item.getAttribute('data-categorias') || '').split(/\s+/);
        var show = value === 'todos' || cats.indexOf(value) !== -1;
        item.hidden = !show;
        if (show) visiveis++;
      });

      filters.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-filter') === value));
      });

      if (empty) empty.hidden = visiveis > 0;
    }

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-filter')); });
    });

    apply('todos');
  }

  /* ========================= 4. Validação e envio do formulário */
  function initForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var status = form.querySelector('[data-form-status]');
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setError(input, message) {
      var holder = input.closest('.field');
      var slot = holder ? holder.querySelector('.field__error') : null;
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (slot) slot.textContent = message || '';
      return !message;
    }

    function validate(input) {
      var valor = input.value.trim();

      if (input.name === 'nome') {
        if (!valor) return setError(input, 'Informe seu nome.');
        if (valor.length < 3) return setError(input, 'O nome precisa ter ao menos 3 caracteres.');
      }
      if (input.name === 'email') {
        if (!valor) return setError(input, 'Informe seu e-mail.');
        if (!EMAIL_RE.test(valor)) return setError(input, 'Digite um e-mail válido, como nome@dominio.com.');
      }
      if (input.name === 'mensagem') {
        if (!valor) return setError(input, 'Escreva sua mensagem.');
        if (valor.length < 10) return setError(input, 'A mensagem precisa ter ao menos 10 caracteres.');
      }
      return setError(input, '');
    }

    var campos = Array.prototype.slice.call(form.querySelectorAll('input[name], textarea[name]'));

    campos.forEach(function (input) {
      input.addEventListener('blur', function () { validate(input); });
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') validate(input);
      });
    });

    form.addEventListener('submit', async function (ev) {
      ev.preventDefault();

      var ok = true;
      var primeiroInvalido = null;

      campos.forEach(function (input) {
        var valido = validate(input);
        if (!valido) {
          ok = false;
          if (!primeiroInvalido) primeiroInvalido = input;
        }
      });

      if (!ok) {
        if (status) {
          status.hidden = false;
          status.classList.remove('form-status--ok', 'form-status--error');
          status.textContent = 'Revise os campos destacados antes de enviar.';
        }
        if (primeiroInvalido) primeiroInvalido.focus();
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      var lang = document.documentElement.lang === 'en' ? 'en' : 'pt';
      var originalText = button.textContent;

      button.disabled = true;
      button.textContent = lang === 'en' ? 'Sending…' : 'Enviando…';
      if (status) {
        status.hidden = false;
        status.classList.remove('form-status--ok', 'form-status--error');
        status.textContent = lang === 'en'
          ? 'Sending your message…'
          : 'Enviando sua mensagem…';
      }

      try {
        var response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        var result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Falha no envio');
        }

        if (status) {
          status.classList.add('form-status--ok');
          status.textContent = lang === 'en'
            ? 'Message sent successfully. Thank you for getting in touch!'
            : 'Mensagem enviada com sucesso. Obrigada pelo contato!';
        }
        form.reset();
        campos.forEach(function (input) { setError(input, ''); });
      } catch (error) {
        if (status) {
          status.classList.add('form-status--error');
          status.textContent = lang === 'en'
            ? 'The message could not be sent. Please try again or use the e-mail link.'
            : 'Não foi possível enviar a mensagem. Tente novamente ou utilize o link de e-mail.';
        }
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    });
  }

  /* ============================================ 5. Ano no rodapé */
  function initYear() {
    var alvo = document.querySelectorAll('[data-year]');
    var ano = String(new Date().getFullYear());
    alvo.forEach(function (el) { el.textContent = ano; });
  }

  /* ---------------------------------------------------- bootstrap */
  function init() {
    initNav();
    initLang();
    initFilters();
    initForm();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* Google Analytics 4: load only after analytics consent. */
(() => {
  'use strict';
  if (window.ioAnalyticsInstalled) return;
  window.ioAnalyticsInstalled = true;
  const id = 'G-CW7VD8J6G1';
  const key = 'io-analytics-consent-v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  let granted = false;
  let loaded = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window['ga-disable-' + id] = true;
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  function enable() {
    granted = true;
    window['ga-disable-' + id] = false;
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    if (loaded) return;
    loaded = true;
    window.gtag('js', new Date());
    window.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function clearCookies() {
    const host = location.hostname.split('.');
    const domains = ['', location.hostname];
    for (let i = 0; i < host.length - 1; i++) domains.push('.' + host.slice(i).join('.'));
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      domains.forEach(domain => {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + (domain ? '; domain=' + domain : '');
      });
    });
  }
  const style = document.createElement('style');
  style.textContent = '#io-consent{position:fixed;z-index:10000;left:16px;right:16px;bottom:16px;max-width:620px;max-height:80vh;overflow:auto;padding:22px;background:#fffcf5;color:#142b4d;border:1px solid #142b4d;border-radius:16px;box-shadow:0 8px 35px #142b4d33;font:15px/1.5 system-ui,sans-serif}#io-consent[hidden]{display:none}#io-consent p{margin:0 0 16px}#io-consent .io-buttons{display:flex;gap:12px;flex-wrap:wrap}#io-consent button{flex:1;padding:12px 18px;border:1px solid #142b4d;border-radius:9px;background:#142b4d;color:#fff;font:600 15px system-ui,sans-serif;cursor:pointer}#io-consent a{color:inherit;text-decoration:underline}#io-cookie-settings{display:block;margin:24px auto;padding:9px 14px;border:1px solid #142b4d;border-radius:8px;background:#fffcf5;color:#142b4d;font:14px system-ui,sans-serif;cursor:pointer}#io-consent button:focus-visible,#io-cookie-settings:focus-visible{outline:3px solid #265af0;outline-offset:3px}';
  document.head.appendChild(style);
  const banner = document.createElement('section');
  banner.id = 'io-consent';
  banner.hidden = true;
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Preferencias de cookies');
  banner.innerHTML = '<p><strong>Cookies de analítica</strong><br>Si aceptas, utilizaremos Google Analytics para medir las visitas y los clics de contacto y mejorar la web. Puedes rechazarlo y seguir navegando. Tu elección se recuerda durante 6 meses y puedes cambiarla en «Configurar cookies». <a href="/privacidad/#analitica">Más información</a>.</p><div class="io-buttons"><button type="button" data-choice="denied">Rechazar</button><button type="button" data-choice="granted">Aceptar</button></div>';
  document.body.appendChild(banner);
  const settings = document.createElement('button');
  settings.id = 'io-cookie-settings';
  settings.type = 'button';
  settings.textContent = 'Configurar cookies';
  settings.setAttribute('aria-controls', 'io-consent');
  (document.querySelector('footer') || document.body).appendChild(settings);
  settings.addEventListener('click', () => {
    banner.hidden = false;
    banner.querySelector('button').focus();
  });
  banner.addEventListener('click', event => {
    const button = event.target.closest('[data-choice]');
    if (!button) return;
    const choice = button.dataset.choice;
    try { localStorage.setItem(key, JSON.stringify({ choice, time: Date.now() })); } catch (_) { /* Session choice still applies. */ }
    if (choice === 'granted') enable();
    else {
      granted = false;
      window['ga-disable-' + id] = true;
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
      clearCookies();
    }
    banner.hidden = true;
    settings.focus();
  });
  let saved;
  try { saved = JSON.parse(localStorage.getItem(key)); } catch (_) { /* Ask again if storage is unavailable. */ }
  if (saved && ['granted', 'denied'].includes(saved.choice) && saved.time <= Date.now() && Date.now() - saved.time < lifetime) {
    if (saved.choice === 'granted') enable();
    else clearCookies();
  } else { clearCookies(); banner.hidden = false; }
  document.addEventListener('click', event => {
    if (!granted) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    const channel = /^https:\/\/wa\.me\//i.test(href) ? 'whatsapp' : /^mailto:/i.test(href) ? 'email' : null;
    if (channel) window.gtag('event', 'contact_click', { contact_method: channel, transport_type: 'beacon' });
  });
})();

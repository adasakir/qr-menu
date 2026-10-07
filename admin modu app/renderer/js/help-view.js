// ===== Yardımcı: Kullanım Kılavuzu penceresi (kasiyer + admin ortak) =====
// openHelp(TOPICS, title) -> konulu yardım penceresi acar.
// TOPICS = [{ t: 'Baslik', h: '<html icerik>' }]
// Icerikte kullanilabilir siniflar:
//   .help-step  (adim kutusu, otomatik numarali)
//   .help-warn  (kirmizi uyari kutusu)
//   .help-ok    (yesil bilgi kutusu)
//   .help-table (tablo)

(function () {
  const CSS = `
  .help-box{max-width:860px;width:92vw;max-height:88vh;display:flex;flex-direction:column}
  .help-layout{display:flex;gap:12px;min-height:0;flex:1}
  .help-topics{width:220px;flex:none;overflow-y:auto;display:flex;flex-direction:column;gap:6px;max-height:60vh}
  .help-topic{text-align:left;padding:10px 12px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-family:inherit;font-size:14px;cursor:pointer}
  .help-topic.active{background:var(--primary);color:#1a1206;border-color:var(--primary);font-weight:700}
  .help-content{flex:1;overflow-y:auto;line-height:1.65;font-size:14.5px;max-height:60vh;padding-right:6px}
  .help-content h4{margin:14px 0 6px}
  .help-step{counter-increment:helpstep;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px 12px 10px 44px;margin:8px 0;position:relative}
  .help-steps{counter-reset:helpstep}
  .help-step::before{content:counter(helpstep);position:absolute;left:12px;top:10px;width:22px;height:22px;border-radius:50%;background:var(--primary);color:#1a1206;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}
  .help-warn{background:rgba(239,68,68,.12);border:1px solid var(--danger);border-radius:10px;padding:10px 12px;margin:8px 0}
  .help-ok{background:rgba(16,185,129,.12);border:1px solid var(--success);border-radius:10px;padding:10px 12px;margin:8px 0}
  @media (max-width:700px){.help-layout{flex-direction:column}.help-topics{width:100%;max-height:22vh}}
  `;
  let cssDone = false;

  window.openHelp = function (topics, title) {
    if (!Array.isArray(topics) || topics.length === 0) return;
    if (!cssDone) {
      try {
        const st = document.createElement('style');
        st.textContent = CSS;
        document.head.appendChild(st);
        cssDone = true;
      } catch (e) {}
    }
    window._helpTopics = topics;
    let ov = document.getElementById('helpOverlay');
    if (ov) ov.remove();
    ov = document.createElement('div');
    ov.id = 'helpOverlay';
    ov.className = 'modal';
    ov.innerHTML = `
      <div class="modal-box help-box">
        <div class="modal-header">
          <h2>❓ ${title || 'Kullanım Kılavuzu'}</h2>
          <button class="icon-btn" onclick="closeHelp()">✕</button>
        </div>
        <div class="modal-body">
          <div class="help-layout">
            <aside class="help-topics" id="helpTopics"></aside>
            <article class="help-content" id="helpContent"></article>
          </div>
        </div>
      </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', (e) => { if (e.target && e.target.id === 'helpOverlay') closeHelp(); });
    const list = document.getElementById('helpTopics');
    topics.forEach((tp, i) => {
      const b = document.createElement('button');
      b.className = 'help-topic' + (i === 0 ? ' active' : '');
      b.textContent = tp.t;
      b.addEventListener('click', () => window.showHelpTopic(i));
      list.appendChild(b);
    });
    window.showHelpTopic(0);
  };

  window.showHelpTopic = function (i) {
    const topics = window._helpTopics || [];
    const tp = topics[i];
    if (!tp) return;
    document.querySelectorAll('.help-topic').forEach((b, j) => b.classList.toggle('active', j === i));
    const c = document.getElementById('helpContent');
    if (c) { c.innerHTML = tp.h; c.scrollTop = 0; }
  };

  window.closeHelp = function () {
    const ov = document.getElementById('helpOverlay');
    if (ov) ov.remove();
  };
})();

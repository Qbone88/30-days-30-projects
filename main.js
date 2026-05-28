// ---- Render projects ----
const grid = document.getElementById('projectGrid');

const maxVisibleDay = Math.max(...PROJECTS.filter(p => !p.hidden).map(p => p.day));

PROJECTS.forEach((p, i) => {
  const isHidden = !!p.hidden;
  const isLocked = isHidden || !p.live;
  const tag = isLocked ? 'div' : 'a';
  const el = document.createElement(tag);

  el.className = 'card' + (isLocked ? ' card--locked' : ' card--unlocked') + (p.current ? ' card--current' : '');

  if (!isLocked) {
    el.href = p.url || '#';
    if (p.url && p.url.startsWith('http')) el.target = '_blank';
    el.rel = 'noopener';
  }

  const dayStr = String(p.day).padStart(2, '0');

  let title, desc, tagsHtml;
  if (isHidden) {
    const waitDays = p.day - maxVisibleDay;
    title = '[HIDDEN]';
    desc = `wait ${waitDays} ${waitDays === 1 ? 'day' : 'days'}`;
    tagsHtml = '';
  } else {
    title = p.title;
    desc = p.desc;
    tagsHtml = (p.tags || []).map(t => `<span class="card__tag">${t}</span>`).join('');
  }

  el.innerHTML = `
    <span class="card__num">${dayStr}</span>
    <span class="card__arrow">${isLocked ? '◌' : '↗'}</span>
    <h3 class="card__title">${title}</h3>
    <p class="card__desc">${desc}</p>
    <div class="card__tags">${tagsHtml}</div>
  `;

  grid.appendChild(el);

  // gentle staggered fade-in
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  setTimeout(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 50 + i * 35);
});

// ---- Stats ----
const completed = PROJECTS.filter(p => p.live).length;
const remaining = PROJECTS.length - completed;
const pct = Math.round((completed / PROJECTS.length) * 100);

document.getElementById('completedCount').textContent = completed;
document.getElementById('remainingCount').textContent = remaining;
document.getElementById('progressPct').textContent = pct + '%';
document.getElementById('progressBar').style.width = pct + '%';

// ---- Current day ----
const currentDay = PROJECTS.find(p => p.current)?.day || completed;
document.getElementById('dayCounter').textContent = currentDay;

// ---- Date in masthead ----
const now = new Date();
const dateStr = now.toLocaleDateString('en-US', {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}).toUpperCase();
document.getElementById('liveDate').textContent = dateStr;

// ---- GitHub link ----
document.getElementById('githubLink').href = `https://github.com/${GITHUB_USERNAME}`;

// ---- Konami-style easter egg: type "arch" to reveal something ----
let buffer = '';
document.addEventListener('keydown', (e) => {
  buffer = (buffer + e.key.toLowerCase()).slice(-4);
  if (buffer === 'arch') {
    const msg = document.createElement('div');
    msg.textContent = 'btw i use arch';
    msg.style.cssText = `
      position: fixed; bottom: 20px; left: 50%;
      transform: translateX(-50%);
      background: var(--accent); color: var(--bg);
      padding: 12px 20px; font-family: var(--mono);
      font-weight: 700; letter-spacing: .15em;
      text-transform: uppercase; z-index: 1000;
      animation: rise .4s ease;
    `;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2500);
    buffer = '';
  }
});

const GAME = {
  totalCells: 16,
  startPosition: 1,
  startTrust: 60,
};

/*
  Content is based on the uploaded group presentation.
  The game is intentionally simple: the board and dice provide the delivery format;
  the ethical decisions and lessons carry the educational value.
*/
const cells = [
  { id: 1, type: 'start', title: 'START', subtitle: 'Enter the workplace', icon: '🚀' },
  {
    id: 2, type: 'question', title: 'Gifts & Hospitality', subtitle: 'Bribery is more than cash', icon: '🎁', image: 'assets/gift_hospitality.svg',
    source: 'Report · p.4 & p.11', kicker: 'SCENARIO 01', badge: 'GIFT / HOSPITALITY',
    scenario: 'You are responsible for a project that is currently being evaluated. Before the final decision, a supplier offers you an expensive dinner and a luxury trip, saying: “It is simply business courtesy.”\n\nWhat would you do?',
    options: [
      'Accept it because it is not cash and it is common in business.',
      'Accept it now and tell your manager after the contract decision.',
      'Decline it and record or report the arrangement according to company rules.'
    ],
    correct: 2,
    risk: [1],
    result: 'A benefit linked to a business decision can create an improper influence risk.',
    lesson: 'Bribery is not limited to cash. It can involve gifts, privileges or lavish hospitality offered to influence a decision or action.',
    move: 1, trust: 8,
  },
  {
    id: 3, type: 'question', title: 'Procurement Bribery', subtitle: 'One contract. An unfair advantage.', icon: '🤝', image: 'assets/procurement_bribe.svg',
    source: 'Report · p.4', kicker: 'SCENARIO 02', badge: 'BRIBERY FORM',
    scenario: 'A company secretly pays a procurement manager so that its own company will win a business contract.\n\nWhich form of bribery does this most clearly represent?',
    options: [
      'Procurement bribery',
      'Public-sector bribery',
      'A normal business commission'
    ],
    correct: 0,
    risk: [2],
    result: 'This is procurement bribery: an improper benefit is used to influence a contract decision.',
    lesson: 'Procurement, engineering tenders and medical purchasing are among the areas identified in the report as high-risk environments for bribery. Fair competition is directly distorted.',
    move: 1, trust: 7,
  },
  {
    id: 4, type: 'question', title: 'Public-Sector Bribery', subtitle: 'Approvals and release decisions', icon: '🏛️', image: 'assets/government_bribe.svg',
    source: 'Report · p.4', kicker: 'SCENARIO 03', badge: 'PUBLIC SECTOR',
    scenario: 'A company gives a government official an improper benefit to speed up project approval or customs clearance.\n\nWhat is the ethical risk?',
    options: [
      'It is simply a way to improve efficiency.',
      'Public-sector bribery.',
      'It is acceptable as long as the amount is small.'
    ],
    correct: 1,
    risk: [0],
    result: 'Speeding up an approval or release does not make an improper benefit legitimate.',
    lesson: 'The report describes payments or benefits to government officials intended to influence approvals, releases or similar decisions as a public-sector bribery risk.',
    move: 1, trust: 8,
  },
  {
    id: 5, type: 'question', title: 'Hidden Bribery', subtitle: 'Consulting fees and off-book payments', icon: '🕶️', image: 'assets/hidden_payment.svg',
    source: 'Report · p.4 & p.11', kicker: 'SCENARIO 04', badge: 'HIDDEN PAYMENT',
    scenario: 'You find a “consulting fee” with no clear business purpose. The payment is routed through an external intermediary.\n\nWhat is the most responsible first response?',
    options: [
      'Pay first and collect the supporting documents later.',
      'Treat it as a normal consulting fee and do not ask questions.',
      'Treat it as a high-risk warning sign, investigate it and pause the suspicious payment.'
    ],
    correct: 2,
    risk: [1],
    result: 'An unclear payment with no clear business purpose is a warning sign, especially when an intermediary is involved.',
    lesson: 'Hidden bribery can be disguised as consulting fees, travel, gifts or other transactions. Transparency and financial controls are essential.',
    move: 1, trust: 9,
  },
  {
    id: 6, type: 'question', title: 'Three Ethical Principles', subtitle: 'Integrity · Fairness · Transparency', icon: '⚖️', image: 'assets/three_pillars.svg',
    source: 'Report · p.5', kicker: 'SCENARIO 05', badge: 'ETHICAL PRINCIPLES',
    scenario: 'Why does the report describe bribery as an ethical failure, not simply a rule violation?\n\nWhich answer is most complete?',
    options: [
      'It only affects personal integrity.',
      'Integrity, fairness and transparency are all damaged at the same time.',
      'If nobody discovers it, nobody is affected.'
    ],
    correct: 1,
    risk: [0],
    result: 'The report presents bribery as a failure that breaks integrity, distorts fairness and hides the decision process.',
    lesson: 'Integrity is sacrificed for private interest; fairness is distorted because rule-following competitors lose opportunities; transparency disappears when the exchange is hidden.',
    move: 1, trust: 10,
  },
  {
    id: 7, type: 'case', title: 'The Siemens Case', subtitle: 'Siemens Global Bribery Scandal', icon: '🏢', image: 'assets/siemens_case.svg',
    source: 'Report · p.6–7', kicker: 'REAL-LIFE CASE', badge: 'CASE FILE',
    caseStats: [
      ['~20 years', 'Duration described in the report'],
      ['20+ countries', 'International reach'],
      ['US$1.6B', '2008 global fines / settlement amount']
    ],
    scenario: 'The report states that Siemens used secret bank accounts and external intermediaries to channel bribes in order to obtain telecommunications, transport and infrastructure contracts. German and U.S. investigations later exposed undisclosed payments.\n\nThe parties involved included senior Siemens managers, external consultants or intermediaries, government officials, and banks and lawyers that helped conceal transactions.',
    infoOnly: true,
    lesson: 'The report presents this as systemic corruption, not simply the behavior of one bad employee. Pressure, weak controls, a tolerant culture and external competition reinforced one another.',
  },
  {
    id: 8, type: 'question', title: 'Four Root Causes', subtitle: 'Why Did It Happen?', icon: '🧩', image: 'assets/root_causes.svg',
    source: 'Report · p.7', kicker: 'SCENARIO 06', badge: 'ROOT CAUSES',
    scenario: 'Why did the Siemens case become systemic corruption rather than an isolated incident?\n\nWhich answer best matches the report?',
    options: [
      'Only a few employees had poor personal ethics.',
      'Only competitors were paying bribes.',
      'Aggressive targets, weak controls, a tolerant culture and external pressure acted together.'
    ],
    correct: 2,
    risk: [0],
    result: 'The report identifies four connected root causes and describes the corruption as systemic and top-down.',
    lesson: 'Aggressive targets can push employees toward shortcuts; weak controls allow misconduct to continue; cultural tolerance lowers the psychological barrier; external pressure can erode ethical standards.',
    move: 1, trust: 10,
  },
  {
    id: 9, type: 'question', title: 'Individual & Organisational Costs', subtitle: 'Impact · People and Business', icon: '👥', image: 'assets/impact_people.svg',
    source: 'Report · p.8', kicker: 'SCENARIO 07', badge: 'IMPACT',
    scenario: 'Imagine that an employee never participated in the bribery, but the company is investigated and heavily penalised. What could still happen?',
    options: [
      'Employees could lose jobs or see retirement benefits reduced.',
      'Shareholders and investors could suffer major losses.',
      'Both can happen, and senior managers can also face investigations and career-ending consequences.'
    ],
    correct: 2,
    risk: [0, 1],
    result: 'The report stresses that even people who did not participate can still pay a price.',
    lesson: 'Individual costs can include job loss, reduced retirement benefits, investigations and career damage. Organisational costs include major fines, reputational damage and years of costly compliance reform.',
    move: 1, trust: 8,
  },
  {
    id: 10, type: 'question', title: 'Society & Governance', subtitle: 'Public Trust · Governance', icon: '🌐', image: 'assets/public_trust.svg',
    source: 'Report · p.9', kicker: 'SCENARIO 08', badge: 'SOCIAL IMPACT',
    scenario: 'Why can the damage caused by bribery extend far beyond one company?\n\nWhich answer is most complete?',
    options: [
      'It only affects the company share price.',
      'Public money can be lost, competition can become unfair, public trust can fall, and regulation or enforcement can be weakened.',
      'Once the company pays the fine, the social impact is over.'
    ],
    correct: 1,
    risk: [0],
    result: 'The report extends the impact from the organisation to public trust and the wider governance system.',
    lesson: 'When resources do not reach the communities that need them, fair competitors are pushed out, or oversight is weakened, citizens can lose confidence in institutions.',
    move: 1, trust: 9,
  },
  {
    id: 11, type: 'question', title: 'When Controls Fail', subtitle: 'Management · Finance · Audit · Board', icon: '🛡️', image: 'assets/responsibility.svg',
    source: 'Report · p.10', kicker: 'SCENARIO 09', badge: 'RESPONSIBILITY',
    scenario: 'Senior management, finance, internal audit and the board all fail to stop suspicious transactions in time. What is the central lesson?',
    options: [
      'It is only the finance department’s responsibility.',
      'It is acceptable as long as the board learns about it eventually.',
      'When multiple lines of defence fail at the same time, systemic corruption can develop.'
    ],
    correct: 2,
    risk: [0],
    result: 'The report assigns responsibility across several functions, not to one department alone.',
    lesson: 'Anti-corruption requires multiple lines of defence: top-level governance, financial controls, independent audit and board oversight.',
    move: 1, trust: 9,
  },
  {
    id: 12, type: 'question', title: 'Spot the Red Flags', subtitle: 'Warning Signs', icon: '🚨', image: 'assets/warning_signs.svg',
    source: 'Report · p.11', kicker: 'SCENARIO 10', badge: 'RED FLAGS',
    scenario: 'A project shows several warning signs at once: expensive hospitality, an off-book payment with no clear business purpose, one person approving procurement and making the payment, and a manager saying, “Just this once.”\n\nWhat should happen next?',
    options: [
      'Treat it as evidence of strong business efficiency.',
      'Question the situation and trigger a review because several red flags are appearing together.',
      'Ignore it because the contract has already been signed.'
    ],
    correct: 1,
    risk: [0],
    result: 'Several warning signs appearing together should trigger questions and closer review.',
    lesson: 'The report highlights four warning signs: unusually generous hospitality, unclear or off-book payments, one-person control, and pressure to hit performance targets. Asking early is better than investigating later.',
    move: 1, trust: 10,
  },
  {
    id: 13, type: 'question', title: 'Siemens Remediation', subtitle: 'System-Level Reform', icon: '🔧', image: 'assets/remediation.svg',
    source: 'Report · p.12', kicker: 'SCENARIO 11', badge: 'SOLUTIONS',
    scenario: 'For a company facing a Siemens-style corruption problem, which package best matches the report’s proposed remediation measures?',
    options: [
      'Send one internal email reminding everyone to behave ethically.',
      'Replace ineffective senior leaders, strengthen approval for large payments, control disguised consulting payments, provide anonymous reporting, and strengthen independent audit reporting to the board.',
      'Keep the old process and simply ask employees to be more ethical.'
    ],
    correct: 1,
    risk: [0],
    result: 'The report proposes system-level reform rather than relying on personal goodwill alone.',
    lesson: 'Top-level governance, financial reform, trust rebuilding, business-partner controls and audit reform need to move together to restore transparency and control.',
    move: 1, trust: 10,
  },
  {
    id: 14, type: 'question', title: 'Prevention Strategy', subtitle: 'Building an Anti-Corruption System', icon: '🏢', image: 'assets/prevention.svg',
    source: 'Report · p.13', kicker: 'SCENARIO 12', badge: 'PREVENTION',
    scenario: 'You are designing an anti-corruption system for a listed company. Which combination best matches the report?',
    options: [
      'Use slogans and posters to remind employees to be honest.',
      'Create one compliance team and send every problem to that team.',
      'Lead from the top, build three independent control lines, provide reporting channels and support external oversight.'
    ],
    correct: 2,
    risk: [1],
    result: 'The report combines leadership, independent control lines, reporting mechanisms and external oversight.',
    lesson: 'Prevention is not a slogan. It needs ethical leadership, independent business/compliance/audit controls, reporting mechanisms and external supervision.',
    move: 1, trust: 10,
  },
  {
    id: 15, type: 'question', title: 'Final Ethical Decision', subtitle: 'Pressure Test', icon: '🔥', image: 'assets/final_choice.svg',
    source: 'Report · p.7 & p.11–13', kicker: 'FINAL CHALLENGE', badge: 'INTEGRITY TEST',
    scenario: 'You are under aggressive performance pressure. Competitors are rumoured to be paying bribes, and internal controls are weak. Someone suggests: “Use an external intermediary and give a little benefit. Everyone is doing it.”\n\nWhat do you do?',
    options: [
      'Accept it because refusing could mean losing the contract.',
      'Pay the intermediary first and wait for an audit to discover it later.',
      'Stop the questionable arrangement, raise the risk, involve compliance or independent audit, and use the formal reporting channel.'
    ],
    correct: 2,
    risk: [0, 1],
    result: 'You turned pressure into a compliance action instead of allowing pressure to become a reason for bribery.',
    lesson: 'The report links pressure, weak controls and cultural tolerance to systemic corruption. Those conditions make independent oversight, transparent processes and reporting mechanisms more important, not less.',
    move: 0, trust: 14, directFinish: true,
  },
  { id: 16, type: 'finish', title: 'TRUSTED LEADER', subtitle: 'You reached the finish line', icon: '🏆', image: 'assets/trust_victory.svg' }
];

const positionMap = {
  1:[4,1], 2:[4,2], 3:[4,3], 4:[4,4],
  5:[3,4], 6:[3,3], 7:[3,2], 8:[3,1],
  9:[2,1], 10:[2,2], 11:[2,3], 12:[2,4],
  13:[1,4], 14:[1,3], 15:[1,2], 16:[1,1],
};

// Direction of the next move for every numbered cell. This follows the serpentine path.
const directionMap = {
  1: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  2: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  3: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  4: { symbol: '↑', className: 'arrow-up', label: 'Next: up' },
  5: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  6: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  7: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  8: { symbol: '↑', className: 'arrow-up', label: 'Next: up' },
  9: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  10: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  11: { symbol: '→', className: 'arrow-right', label: 'Next: right' },
  12: { symbol: '↑', className: 'arrow-up', label: 'Next: up' },
  13: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  14: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  15: { symbol: '←', className: 'arrow-left', label: 'Next: left' },
  16: null,
};

let state = {
  position: GAME.startPosition,
  trust: GAME.startTrust,
  correct: 0,
  risky: 0,
  wrong: 0,
  answered: 0,
  rolls: 0,
  moving: false,
  modalOpen: false,
  activeCell: null,
  pendingMove: 0,
};

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }
function cellById(id) { return cells.find(c => c.id === id); }

function renderBoard() {
  const board = $('board');
  board.innerHTML = '';
  cells.forEach(cell => {
    const div = document.createElement('div');
    div.className = `board-cell ${cell.type}`;
    const [row, col] = positionMap[cell.id];
    div.style.gridRow = String(row);
    div.style.gridColumn = String(col);
    div.dataset.cellId = cell.id;

    const direction = directionMap[cell.id];
    const arrow = direction
      ? `<div class="cell-arrow ${direction.className}" aria-label="${direction.label}">${direction.symbol}</div>`
      : '<div class="cell-arrow finish-arrow" aria-hidden="true">★</div>';

    div.innerHTML = `
      <div class="cell-number">${String(cell.id).padStart(2, '0')}</div>
      ${arrow}
      <div class="cell-icon">${cell.icon}</div>
      <div class="cell-title">${cell.title}</div>
      <div class="cell-sub">${cell.subtitle}</div>
    `;
    board.appendChild(div);
  });
  highlightCurrentCell();
}

function highlightCurrentCell() {
  document.querySelectorAll('.board-cell').forEach(el => el.classList.remove('current'));
  const current = getCellElement(state.position);
  if (current) current.classList.add('current');
}

function setDiceFace(value) {
  $('dice').className = `dice face-${value}`;
}

function updateHUD() {
  $('positionValue').textContent = `${state.position} / ${GAME.totalCells}`;
  $('trustScore').textContent = state.trust;
  $('trustBar').style.width = `${clamp(state.trust, 0, 100)}%`;
  $('decisionCount').textContent = state.answered;
  $('correctCount').textContent = state.correct;
  $('riskCount').textContent = state.risky;
  $('wrongCount').textContent = state.wrong;
  $('rollCount').textContent = state.rolls;

  const caption = state.trust >= 80
    ? 'Strong ethical standing'
    : state.trust >= 60
      ? 'Balanced'
      : state.trust >= 40
        ? 'Risk is accumulating'
        : 'High ethical risk';
  $('scoreCaption').textContent = caption;
  highlightCurrentCell();
}

function getCellElement(id) { return document.querySelector(`.board-cell[data-cell-id="${id}"]`); }

function moveTokenToCell(id, immediate = false) {
  const stage = $('boardStage');
  const token = $('playerToken');
  const cell = getCellElement(id);
  if (!stage || !cell) return;
  const sr = stage.getBoundingClientRect();
  const cr = cell.getBoundingClientRect();
  const left = cr.left - sr.left + cr.width / 2;
  const top = cr.top - sr.top + cr.height / 2;
  if (immediate) token.style.transition = 'none';
  token.style.left = `${left}px`;
  token.style.top = `${top}px`;
  if (immediate) {
    requestAnimationFrame(() => {
      token.style.transition = 'left .45s cubic-bezier(.22,.85,.27,1.18), top .45s cubic-bezier(.22,.85,.27,1.18)';
    });
  }
}

async function animateMove(from, to) {
  state.moving = true;
  $('rollBtn').disabled = true;
  const step = from <= to ? 1 : -1;
  let pos = from;
  while (pos !== to) {
    pos += step;
    moveTokenToCell(pos);
    $('positionValue').textContent = `${pos} / ${GAME.totalCells}`;
    highlightCurrentCellFor(pos);
    await sleep(360);
  }
  state.position = to;
  state.moving = false;
  updateHUD();
}

function highlightCurrentCellFor(id) {
  document.querySelectorAll('.board-cell').forEach(el => el.classList.remove('current'));
  const target = getCellElement(id);
  if (target) target.classList.add('current');
}

function flashBoard(kind) {
  const stage = $('boardStage');
  stage.style.animation = 'none';
  void stage.offsetWidth;
  stage.style.animation = kind === 'bad' ? 'shake .35s ease' : 'pulseBoard .55s ease';
}

function showToast(text) {
  const toast = $('toast');
  toast.textContent = text;
  toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add('hidden'), 2100);
}

function openModal(cell) {
  state.modalOpen = true;
  state.activeCell = cell;
  $('modalBackdrop').classList.remove('hidden');
  $('feedbackBox').classList.add('hidden');
  $('optionList').innerHTML = '';
  $('caseStats').classList.add('hidden');
  $('infoActions').classList.add('hidden');
  $('closeModalBtn').classList.add('hidden');

  $('modalBadge').textContent = cell.badge || (cell.type === 'case' ? 'CASE FILE' : 'ETHICAL SCENARIO');
  $('modalSource').textContent = cell.source || '';
  $('modalKicker').textContent = cell.kicker || 'SCENARIO';
  $('modalTitle').textContent = cell.title;
  $('modalScenario').textContent = cell.scenario || '';
  $('modalImage').src = cell.image || 'assets/warning_signs.svg';

  if (cell.type === 'case') {
    $('caseStats').innerHTML = cell.caseStats.map(([value, label]) => `<div class="case-stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
    $('caseStats').classList.remove('hidden');
    $('infoActions').classList.remove('hidden');
    $('infoActions').dataset.ready = 'true';
    return;
  }

  cell.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.addEventListener('click', () => chooseOption(index));
    $('optionList').appendChild(btn);
  });
}

function closeModal() {
  state.modalOpen = false;
  state.activeCell = null;
  $('modalBackdrop').classList.add('hidden');
  $('infoActions').classList.add('hidden');
  $('feedbackBox').classList.add('hidden');
  $('optionList').innerHTML = '';
  $('closeModalBtn').classList.remove('hidden');
}

function chooseOption(choiceIndex) {
  const cell = state.activeCell;
  if (!cell || cell.type === 'case') return;

  const buttons = [...document.querySelectorAll('.option-btn')];
  if (buttons.some(btn => btn.classList.contains('disabled'))) return;
  buttons.forEach(btn => btn.classList.add('disabled'));

  const correct = choiceIndex === cell.correct;
  const isRisky = !correct && Array.isArray(cell.risk) && cell.risk.includes(choiceIndex);
  let status = 'WRONG';

  if (correct) {
    status = 'CORRECT';
    state.correct += 1;
    state.trust = clamp(state.trust + (cell.trust || 6), 0, 100);
    state.pendingMove = cell.move || 0;
    $('feedbackStatus').style.color = '#3f8d5d';
    $('feedbackMove').textContent = state.pendingMove > 0 ? `+${state.pendingMove} STEP` : 'DIRECT TO FINISH';
    flashBoard('good');
  } else if (isRisky) {
    status = 'RISKY';
    state.risky += 1;
    state.trust = clamp(state.trust - 3, 0, 100);
    state.pendingMove = 0;
    $('feedbackStatus').style.color = '#9b7b3a';
    $('feedbackMove').textContent = 'NO MOVE';
  } else {
    state.wrong += 1;
    state.trust = clamp(state.trust - 10, 0, 100);
    state.pendingMove = -2;
    $('feedbackStatus').style.color = '#a7524c';
    $('feedbackMove').textContent = '-2 STEPS';
    flashBoard('bad');
  }

  state.answered += 1;
  buttons.forEach((btn, idx) => {
    if (idx === cell.correct) btn.classList.add('correct');
    if (idx === choiceIndex && idx !== cell.correct) btn.classList.add('incorrect');
  });

  $('feedbackStatus').textContent = status;
  $('feedbackTitle').textContent = cell.result;
  $('feedbackText').textContent = correct
    ? 'Your decision better protects integrity and reduces the risk of bribery or control failure.'
    : isRisky
      ? 'This choice does not automatically prove bribery, but it creates avoidable ethical or control risk.'
      : 'This choice could increase bribery risk, weaken controls or damage fair decision-making.';
  $('lessonText').textContent = cell.lesson;
  $('feedbackBox').classList.remove('hidden');
  $('lastLesson').textContent = cell.lesson;
  updateHUD();

  if (correct && cell.directFinish) {
    $('feedbackMove').textContent = 'DIRECT TO FINISH 🏆';
    state.pendingMove = GAME.totalCells - state.position;
  }
}

async function continueAfterAnswer() {
  const move = state.pendingMove;
  closeModal();
  if (move !== 0) {
    const target = clamp(state.position + move, 1, GAME.totalCells);
    await animateMove(state.position, target);
  }
  state.pendingMove = 0;
  if (state.position === GAME.totalCells) showEndScreen();
  else $('rollBtn').disabled = false;
}

async function rollDice() {
  if (state.moving || state.modalOpen) return;
  $('rollBtn').disabled = true;
  state.rolls += 1;
  updateHUD();
  const finalValue = Math.floor(Math.random() * 6) + 1;
  $('dice').style.transform = 'rotateX(18deg) rotateY(18deg) scale(.92)';
  for (let i = 0; i < 10; i++) {
    setDiceFace(Math.floor(Math.random() * 6) + 1);
    await sleep(70);
  }
  setDiceFace(finalValue);
  $('dice').style.transform = 'none';
  await sleep(220);
  const target = clamp(state.position + finalValue, 1, GAME.totalCells);
  await animateMove(state.position, target);
  await sleep(180);
  landOnCell(state.position);
}

function landOnCell(position) {
  const cell = cellById(position);
  if (!cell) return;
  if (cell.type === 'finish') {
    showEndScreen();
    return;
  }
  openModal(cell);
}

let endFxStop = null;

function clearEndEffects() {
  if (typeof endFxStop === 'function') endFxStop();
  endFxStop = null;
  const fx = $('fxLayer');
  if (fx) {
    fx.className = 'fx-layer';
    const items = $('fxItems');
    if (items) items.innerHTML = '';
    const canvas = $('fxCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  document.body.classList.remove('fx-shake', 'fx-flash', 'fx-muted');
  const card = document.querySelector('.end-card');
  if (card) card.classList.remove('epic', 'good', 'caution', 'danger');
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function spawnFallingPieces({ count = 90, type = 'confetti', delayMax = 0.8 } = {}) {
  const wrap = $('fxItems');
  if (!wrap) return;
  const pieces = [];
  const colors = ['#f0d58d', '#63d996', '#4ec9c3', '#f3c7b4', '#f3e5b6', '#7bc9ff', '#d891dd'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = `fx-particle ${type}`;
    if (type === 'confetti') {
      el.style.setProperty('--c', colors[i % colors.length]);
    } else {
      el.textContent = type === 'coin' ? '🪙' : '💎';
    }
    el.style.left = `${randomBetween(-4, 104)}vw`;
    el.style.setProperty('--x', `${randomBetween(-18, 18)}vw`);
    el.style.setProperty('--r', `${randomBetween(-1080, 1080)}deg`);
    el.style.setProperty('--s', `${randomBetween(.72, 1.35)}`);
    el.style.setProperty('--dur', `${randomBetween(3.7, 6.8)}s`);
    el.style.setProperty('--delay', `${randomBetween(0, delayMax)}s`);
    pieces.push(el);
    wrap.appendChild(el);
  }
  return pieces;
}

function launchFireworks({ bursts = 5, duration = 6200 } = {}) {
  const canvas = $('fxCanvas');
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const resize = () => {
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const rockets = [];
  const particles = [];
  let running = true;
  const start = performance.now();
  let nextLaunch = start + 140;
  let launched = 0;
  const hues = [43, 157, 176, 332, 198, 281];

  function createBurst(x, y, baseHue) {
    const count = 54 + Math.floor(Math.random() * 20);
    for (let i = 0; i < count; i++) {
      const a = (Math.PI * 2 * i) / count + randomBetween(-.06, .06);
      const speed = randomBetween(2.8, 6.8);
      particles.push({
        x, y,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        alpha: 1,
        size: randomBetween(1.4, 3.4),
        hue: baseHue + randomBetween(-16, 16),
        drag: randomBetween(.968, .986),
      });
    }
  }

  function frame(now) {
    if (!running) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const elapsed = now - start;

    if (launched < bursts && now >= nextLaunch) {
      launched += 1;
      const targetX = randomBetween(window.innerWidth * .18, window.innerWidth * .82);
      const targetY = randomBetween(window.innerHeight * .17, window.innerHeight * .52);
      rockets.push({
        x: targetX + randomBetween(-10, 10),
        y: window.innerHeight + 8,
        targetY,
        speed: randomBetween(7.5, 10.5),
        hue: hues[(launched - 1) % hues.length],
      });
      nextLaunch = now + randomBetween(720, 1120);
    }

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.y -= r.speed;
      r.speed *= .992;
      ctx.save();
      ctx.globalAlpha = .75;
      ctx.fillStyle = `hsl(${r.hue} 88% 70%)`;
      ctx.beginPath();
      ctx.arc(r.x, r.y, 2.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      if (r.y <= r.targetY) {
        createBurst(r.x, r.y, r.hue);
        rockets.splice(i, 1);
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + .055;
      p.alpha *= .972;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = `hsl(${p.hue} 90% 72%)`;
      ctx.shadowBlur = 11;
      ctx.shadowColor = `hsla(${p.hue}, 90%, 72%, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      if (p.alpha < .045) particles.splice(i, 1);
    }

    if (elapsed < duration || particles.length || rockets.length) {
      requestAnimationFrame(frame);
    } else {
      stop();
    }
  }

  function stop() {
    if (!running) return;
    running = false;
    window.removeEventListener('resize', resize);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(frame);
  return stop;
}

function runEndCelebration(trust) {
  clearEndEffects();
  const fx = $('fxLayer');
  const card = document.querySelector('.end-card');
  if (!fx || !card) return;

  fx.classList.add('active');

  if (trust >= 90) {
    // Legendary: full celebration — fireworks, confetti, coins, gems and a strong reveal.
    fx.classList.add('celebrate');
    card.classList.add('epic');
    document.body.classList.add('fx-shake', 'fx-flash');
    spawnFallingPieces({ count: 180, type: 'confetti', delayMax: .9 });
    spawnFallingPieces({ count: 30, type: 'coin', delayMax: 1.1 });
    spawnFallingPieces({ count: 22, type: 'gem', delayMax: 1.2 });
    const stopFireworks = launchFireworks({ bursts: 7, duration: 7600 });
    endFxStop = () => stopFireworks();
    showToast('LEGENDARY TRUST — THE SYSTEM REWARDS INTEGRITY');
  } else if (trust >= 75) {
    // Strong: joyful but a little more restrained.
    fx.classList.add('celebrate');
    card.classList.add('good');
    document.body.classList.add('fx-flash');
    spawnFallingPieces({ count: 125, type: 'confetti', delayMax: .75 });
    spawnFallingPieces({ count: 17, type: 'coin', delayMax: .9 });
    spawnFallingPieces({ count: 11, type: 'gem', delayMax: 1.0 });
    const stopFireworks = launchFireworks({ bursts: 4, duration: 6200 });
    endFxStop = () => stopFireworks();
    showToast('TRUST BUILDER — A STRONG ETHICAL FINISH');
  } else if (trust >= 60) {
    // Balanced: soft confetti and a gentle gold-green particle shower.
    fx.classList.add('celebrate');
    card.classList.add('caution');
    spawnFallingPieces({ count: 75, type: 'confetti', delayMax: .6 });
    spawnFallingPieces({ count: 8, type: 'coin', delayMax: .8 });
    const stopFireworks = launchFireworks({ bursts: 2, duration: 4300 });
    endFxStop = () => stopFireworks();
    showToast('ETHICAL LEARNER — KEEP BUILDING TRUST');
  } else if (trust >= 40) {
    // High risk: the celebration collapses into a warning — frozen time + cracked screen.
    fx.classList.add('alert', 'freeze', 'shatter');
    card.classList.add('danger');
    document.body.classList.add('fx-muted', 'fx-shake');
    setTimeout(() => document.body.classList.remove('fx-shake'), 900);
    showToast('WARNING — TRUST IS UNDER PRESSURE');
  } else {
    // Critical risk: grayscale, freeze, violent shake, glass crack and ink-like spread.
    fx.classList.add('alert', 'freeze', 'shatter', 'ink');
    card.classList.add('danger');
    document.body.classList.add('fx-muted', 'fx-shake');
    setTimeout(() => fx.classList.add('ink'), 280);
    setTimeout(() => document.body.classList.remove('fx-shake'), 1000);
    showToast('CRITICAL RISK — THE COST OF UNETHICAL CHOICES');
  }
}

function calculateSpeedBonus(rolls) {
  // From cell 1 to cell 16, three dice rolls is the theoretical minimum.
  // Every extra roll reduces the efficiency bonus by 4 points, down to zero.
  if (rolls <= 0) return 0;
  return clamp(18 - Math.max(0, rolls - 3) * 3, 0, 18);
}

function getFinalTrust(baseTrust, rolls) {
  return clamp(baseTrust + calculateSpeedBonus(rolls), 0, 100);
}

function showEndScreen() {
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  const speedBonus = calculateSpeedBonus(state.rolls);
  const finalTrust = getFinalTrust(state.trust, state.rolls);

  let title = 'TRUST BUILDER';
  let subtitle = 'You completed the 16-cell ethical journey.';
  let message = 'You turned anti-corruption knowledge into decisions in realistic workplace situations.';

  if (finalTrust >= 90) {
    title = 'LEGENDARY TRUST';
    subtitle = 'Excellent ethical judgement — and an exceptionally efficient finish.';
    message = 'You protected integrity under pressure and reached the finish line efficiently. In this game, ethical judgement and disciplined execution work together.';
  } else if (finalTrust >= 75) {
    title = 'TRUST BUILDER';
    subtitle = 'A strong ethical finish with solid decision-making.';
    message = 'You recognised major bribery risks and connected your choices to stronger controls, reporting and ethical leadership.';
  } else if (finalTrust >= 60) {
    title = 'ETHICAL LEARNER';
    subtitle = 'You identified many of the key risks and lessons.';
    message = 'Hospitality, hidden payments, weak controls and pressure can interact. Strong anti-corruption systems help people make better choices.';
  } else if (finalTrust >= 40) {
    title = 'HIGH RISK';
    subtitle = 'Your journey shows how quickly trust can come under pressure.';
    message = 'The report shows why early warning signs, independent oversight and formal reporting channels matter before problems become systemic.';
  } else {
    title = 'CRITICAL RISK';
    subtitle = 'The cost of unethical choices has become impossible to ignore.';
    message = 'Systemic corruption can grow when pressure, weak controls, cultural tolerance and hidden transactions reinforce one another.';
  }

  $('resultEthics').textContent = `${accuracy}%`;
  $('resultTrust').textContent = state.trust;
  $('resultSpeedBonus').textContent = `+${speedBonus}`;
  $('resultFinalTrust').textContent = finalTrust;
  $('resultAnswered').textContent = state.answered;
  $('resultRolls').textContent = state.rolls;
  $('endTitle').textContent = title;
  $('endSubtitle').textContent = subtitle;
  $('endMessage').textContent = message;

  const overlay = $('endOverlay');
  overlay.classList.remove('hidden', 'revealed');
  overlay.classList.add('pre-reveal');
  requestAnimationFrame(() => {
    runEndCelebration(finalTrust);
    // Let the visual finale read first; then reveal the score card through the effects.
    setTimeout(() => {
      overlay.classList.remove('pre-reveal');
      overlay.classList.add('revealed');
    }, finalTrust >= 60 ? 1100 : 850);
  });
}

function resetGame() {
  clearEndEffects();
  state = {
    position: GAME.startPosition,
    trust: GAME.startTrust,
    correct: 0,
    risky: 0,
    wrong: 0,
    answered: 0,
    rolls: 0,
    moving: false,
    modalOpen: false,
    activeCell: null,
    pendingMove: 0,
  };
  $('endOverlay').classList.add('hidden', 'pre-reveal');
  $('endOverlay').classList.remove('revealed');
  $('modalBackdrop').classList.add('hidden');
  setDiceFace(1);
  updateHUD();
  requestAnimationFrame(() => moveTokenToCell(1, true));
  $('rollBtn').disabled = false;
  $('lastLesson').textContent = 'Your first ethical decision is waiting.';
}

function startGame() {
  $('startScreen').classList.add('hidden');
  $('gameScreen').classList.remove('hidden');
  resetGame();
}

$('startBtn').addEventListener('click', startGame);
$('restartBtn').addEventListener('click', resetGame);
$('playAgainBtn').addEventListener('click', resetGame);
$('rollBtn').addEventListener('click', rollDice);
$('closeModalBtn').addEventListener('click', closeModal);
$('continueInfoBtn').addEventListener('click', () => {
  const cell = state.activeCell;
  if (cell) $('lastLesson').textContent = cell.lesson;
  closeModal();
  $('rollBtn').disabled = false;
});
$('continueBtn').addEventListener('click', continueAfterAnswer);
$('modalBackdrop').addEventListener('click', (e) => {
  if (e.target === $('modalBackdrop')) {
    // Scenario dialogs intentionally stay open until the player finishes the decision.
  }
});

window.addEventListener('resize', () => {
  if (!$('gameScreen').classList.contains('hidden')) moveTokenToCell(state.position, true);
});

renderBoard();
setDiceFace(1);
updateHUD();

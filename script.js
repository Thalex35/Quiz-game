const BANK = {
  science: {
    label: 'Science', icon: 'ti-flask',
    questions: [
      { q: "Quelle est la formule chimique de l'eau ?", opts: ["H₂O","CO₂","O₂","H₂O₂"], ans: 0, exp: "L'eau est composée de 2 atomes d'hydrogène et 1 d'oxygène." },
      { q: "Quelle planète est la plus proche du Soleil ?", opts: ["Vénus","Mercure","Mars","Terre"], ans: 1, exp: "Mercure est la planète la plus proche du Soleil." },
      { q: "Combien de chromosomes possède l'être humain ?", opts: ["23","44","46","48"], ans: 2, exp: "Les humains ont 46 chromosomes, soit 23 paires." },
      { q: "Quel gaz les plantes absorbent-elles lors de la photosynthèse ?", opts: ["O₂","N₂","CO₂","H₂"], ans: 2, exp: "Les plantes absorbent le CO₂ pour produire de l'oxygène et du glucose." },
      { q: "Quelle est la vitesse de la lumière ?", opts: ["300 000 km/s","150 000 km/s","3 000 km/s","30 000 km/s"], ans: 0, exp: "La lumière se déplace à environ 300 000 km/s dans le vide." },
      { q: "Quel est l'élément le plus abondant dans l'univers ?", opts: ["Hélium","Oxygène","Carbone","Hydrogène"], ans: 3, exp: "L'hydrogène représente environ 75 % de la masse ordinaire de l'univers." },
      { q: "Combien de dents permanentes possède un adulte ?", opts: ["28","32","30","36"], ans: 1, exp: "Un adulte possède 32 dents permanentes, dont les 4 dents de sagesse." },
      { q: "Quelle force maintient les planètes en orbite autour du Soleil ?", opts: ["Magnétisme","Électricité","Gravité","Friction"], ans: 2, exp: "La gravité est la force qui maintient les planètes sur leurs orbites." },
      { q: "Quel organe produit l'insuline ?", opts: ["Foie","Reins","Pancréas","Rate"], ans: 2, exp: "Le pancréas produit l'insuline pour réguler la glycémie." },
      { q: "Quelle est la particule chargée négativement dans un atome ?", opts: ["Proton","Neutron","Électron","Quark"], ans: 2, exp: "L'électron est la particule de charge négative gravitant autour du noyau." },
    ]
  },
  geo: {
    label: 'Géographie', icon: 'ti-world',
    questions: [
      { q: "Quelle est la capitale de l'Australie ?", opts: ["Sydney","Melbourne","Canberra","Brisbane"], ans: 2, exp: "Canberra est la capitale fédérale de l'Australie, et non Sydney." },
      { q: "Quel est le plus grand pays du monde par superficie ?", opts: ["Canada","États-Unis","Chine","Russie"], ans: 3, exp: "La Russie couvre environ 17 millions de km², c'est le plus grand pays." },
      { q: "Sur quel continent se trouve le désert du Sahara ?", opts: ["Asie","Afrique","Amérique du Sud","Australie"], ans: 1, exp: "Le Sahara est le plus grand désert chaud du monde, situé en Afrique." },
      { q: "Quel est le fleuve le plus long du monde ?", opts: ["Amazone","Nil","Yangtsé","Mississippi"], ans: 1, exp: "Le Nil, avec ses ~6 650 km, est généralement considéré comme le plus long." },
      { q: "Quelle montagne est la plus haute du monde ?", opts: ["K2","Mont Blanc","Everest","Kilimandjaro"], ans: 2, exp: "L'Everest culmine à 8 848 m, c'est le sommet le plus haut de la Terre." },
      { q: "Combien de continents y a-t-il sur Terre ?", opts: ["5","6","7","8"], ans: 2, exp: "Il y a 7 continents : Afrique, Antarctique, Asie, Europe, Amérique du Nord, Océanie, Amérique du Sud." },
      { q: "Quelle est la capitale du Brésil ?", opts: ["Rio de Janeiro","São Paulo","Brasília","Salvador"], ans: 2, exp: "Brasília est la capitale du Brésil depuis 1960." },
      { q: "Quel océan est le plus grand ?", opts: ["Atlantique","Indien","Arctique","Pacifique"], ans: 3, exp: "L'océan Pacifique est le plus grand, couvrant plus de 165 millions de km²." },
      { q: "Dans quel pays se trouve la Tour de Pise ?", opts: ["Espagne","France","Italie","Portugal"], ans: 2, exp: "La Tour de Pise se trouve à Pise, en Toscane, Italie." },
      { q: "Quel pays possède le plus grand nombre d'îles ?", opts: ["Indonésie","Philippines","Suède","Japon"], ans: 2, exp: "La Suède compte environ 221 800 îles, le plus grand nombre au monde." },
    ]
  },
  history: {
    label: 'Histoire', icon: 'ti-book',
    questions: [
      { q: "En quelle année la Première Guerre mondiale a-t-elle commencé ?", opts: ["1910","1912","1914","1916"], ans: 2, exp: "La Première Guerre mondiale a débuté le 28 juillet 1914." },
      { q: "Qui a peint la Joconde ?", opts: ["Michel-Ange","Raphaël","Léonard de Vinci","Botticelli"], ans: 2, exp: "Léonard de Vinci a peint la Joconde entre 1503 et 1519." },
      { q: "En quelle année a eu lieu la Révolution française ?", opts: ["1769","1779","1789","1799"], ans: 2, exp: "La Révolution française débuta en 1789 avec la prise de la Bastille." },
      { q: "Qui était le premier président des États-Unis ?", opts: ["Thomas Jefferson","Abraham Lincoln","George Washington","John Adams"], ans: 2, exp: "George Washington fut le premier président américain de 1789 à 1797." },
      { q: "Quelle civilisation a construit les pyramides de Gizeh ?", opts: ["Romaine","Grecque","Sumérienne","Égyptienne"], ans: 3, exp: "Les pyramides de Gizeh ont été construites par les Égyptiens anciens." },
      { q: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?", opts: ["1965","1967","1969","1971"], ans: 2, exp: "Neil Armstrong a marché sur la Lune le 20 juillet 1969, lors d'Apollo 11." },
      { q: "Qui a inventé l'imprimerie à caractères mobiles en Europe ?", opts: ["Galilée","Gutenberg","Copernic","Newton"], ans: 1, exp: "Johannes Gutenberg a inventé l'imprimerie à caractères mobiles vers 1450." },
      { q: "En quelle année a eu lieu la chute du Mur de Berlin ?", opts: ["1985","1987","1989","1991"], ans: 2, exp: "Le Mur de Berlin est tombé le 9 novembre 1989." },
      { q: "Quel empire fut le plus grand de l'histoire ?", opts: ["Romain","Mongol","Britannique","Ottoman"], ans: 2, exp: "L'Empire britannique était le plus grand empire de l'histoire en superficie." },
      { q: "Qui a écrit 'L'Iliade' et 'L'Odyssée' ?", opts: ["Platon","Homère","Sophocle","Aristote"], ans: 1, exp: "Ces épopées sont attribuées au poète grec Homère, au 8e siècle av. J.-C." },
    ]
  },
  tech: {
    label: 'Tech & Code', icon: 'ti-code',
    questions: [
      { q: "Que signifie HTML ?", opts: ["HyperText Markup Language","High Transfer Markup Language","HyperText Method Language","High Text Media Link"], ans: 0, exp: "HTML = HyperText Markup Language, le langage de base du web." },
      { q: "Quel langage est principalement utilisé pour les scripts côté navigateur ?", opts: ["Python","Ruby","JavaScript","PHP"], ans: 2, exp: "JavaScript est le langage natif des navigateurs web." },
      { q: "Qu'est-ce qu'un algorithme ?", opts: ["Un bug","Un type de variable","Une suite d'instructions","Un langage de programmation"], ans: 2, exp: "Un algorithme est une séquence d'instructions pour résoudre un problème." },
      { q: "Que représente 'CSS' ?", opts: ["Computer Style Sheets","Cascading Style Sheets","Creative Style Syntax","Colorful Styling System"], ans: 1, exp: "CSS = Cascading Style Sheets, utilisé pour styliser les pages web." },
      { q: "Quelle structure de données fonctionne en mode LIFO ?", opts: ["File (Queue)","Arbre","Pile (Stack)","Graphe"], ans: 2, exp: "Une pile (Stack) suit le principe Last In, First Out (LIFO)." },
      { q: "Combien vaut 2^10 ?", opts: ["512","1024","2048","256"], ans: 1, exp: "2^10 = 1024, c'est pourquoi 1 Ko ≈ 1024 octets." },
      { q: "Quel protocole est utilisé pour sécuriser les sites web (HTTPS) ?", opts: ["FTP","SSL/TLS","SSH","UDP"], ans: 1, exp: "HTTPS utilise SSL/TLS pour chiffrer la communication." },
      { q: "Qu'est-ce qu'une boucle infinie ?", opts: ["Une boucle qui s'arrête seule","Une boucle sans condition d'arrêt","Une boucle exécutée une seule fois","Une boucle récursive"], ans: 1, exp: "Une boucle infinie s'exécute indéfiniment faute de condition de sortie." },
      { q: "Quel est le rôle d'un compilateur ?", opts: ["Exécuter du code","Déboguer un programme","Traduire le code source en code machine","Tester les performances"], ans: 2, exp: "Un compilateur traduit le code source lisible en instructions machine." },
      { q: "Quelle est la complexité temporelle de la recherche binaire ?", opts: ["O(n)","O(n²)","O(log n)","O(1)"], ans: 2, exp: "La recherche binaire divise l'espace de recherche de moitié à chaque étape : O(log n)." },
    ]
  }
};

// --- État global ---
let selCat = null;
let qList = [];
let qIdx = 0;
let score = 0;
let timeLimit = 15;
let timerInterval = null;
let timeLeft = 0;
let startTime = 0;
let timesArr = [];

// --- Navigation ---
function goHome() {
  clearInterval(timerInterval);
  selCat = null;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('sel'));
  document.getElementById('start-btn').disabled = true;
  showScreen('screen-home');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// --- Accueil ---
function buildCatGrid() {
  const g = document.getElementById('cat-grid');
  g.innerHTML = Object.entries(BANK).map(([key, cat]) =>
    `<div class="cat-card" id="cat-${key}" onclick="selectCat('${key}')">
      <div class="cat-icon"><i class="ti ${cat.icon}" aria-hidden="true"></i></div>
      <div class="cat-name">${cat.label}</div>
    </div>`
  ).join('');
}

function selectCat(key) {
  selCat = key;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('sel'));
  document.getElementById('cat-' + key).classList.add('sel');
  document.getElementById('start-btn').disabled = false;
}

// --- Utilitaire ---
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// --- Démarrage ---
function startQuiz() {
  const n = +document.getElementById('qcount').value;
  timeLimit = +document.getElementById('tcount').value;

  qList = shuffle(BANK[selCat].questions).slice(0, n).map(q => {
    const indices = [0, 1, 2, 3];
    const shuffled = shuffle(indices);
    const newOpts = shuffled.map(i => q.opts[i]);
    const newAns = shuffled.indexOf(q.ans);
    return { ...q, opts: newOpts, ans: newAns };
  });

  qIdx = 0;
  score = 0;
  timesArr = [];
  showScreen('screen-question');
  renderQuestion();
}

// --- Question ---
function renderQuestion() {
  const q = qList[qIdx];
  document.getElementById('q-cat-label').textContent = BANK[selCat].label;
  document.getElementById('q-progress').textContent = `Question ${qIdx + 1} / ${qList.length}`;
  document.getElementById('q-text').textContent = q.q;

  const container = document.getElementById('options-container');
  container.innerHTML = q.opts.map((opt, i) =>
    `<button class="opt-btn" onclick="selectAnswer(${i})">${opt}</button>`
  ).join('');

  document.getElementById('feedback-box').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  startTimer();
}

// --- Compte à rebours ---
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = timeLimit;
  startTime = Date.now();

  const bar = document.getElementById('timer-bar');
  bar.style.width = '100%';
  bar.style.background = '#378ADD';

  timerInterval = setInterval(() => {
    timeLeft--;
    const pct = Math.max(0, Math.round((timeLeft / timeLimit) * 100));
    bar.style.width = pct + '%';

    if (pct < 30) bar.style.background = '#E24B4A';
    else if (pct < 60) bar.style.background = '#EF9F27';

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeOut();
    }
  }, 1000);
}

function timeOut() {
  const elapsed = (Date.now() - startTime) / 1000;
  timesArr.push(elapsed);

  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === qList[qIdx].ans) b.classList.add('correct');
  });

  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback bad';
  fb.textContent = 'Temps écoulé. ' + qList[qIdx].exp;
  fb.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

// --- Réponse ---
function selectAnswer(i) {
  clearInterval(timerInterval);
  const elapsed = (Date.now() - startTime) / 1000;
  timesArr.push(elapsed);

  const q = qList[qIdx];
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => b.disabled = true);

  const fb = document.getElementById('feedback-box');

  if (i === q.ans) {
    btns[i].classList.add('correct');
    const pts = Math.max(10, Math.round(100 * (timeLeft / timeLimit)));
    score += pts;
    fb.className = 'feedback ok';
    fb.textContent = '+' + pts + ' pts. ' + q.exp;
  } else {
    btns[i].classList.add('wrong');
    btns[q.ans].classList.add('correct');
    fb.className = 'feedback bad';
    fb.textContent = 'Incorrect. ' + q.exp;
  }

  fb.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  qIdx++;
  if (qIdx >= qList.length) showResults();
  else renderQuestion();
}

// --- Résultats ---
function showResults() {
  const avgTime = timesArr.length
    ? (timesArr.reduce((a, b) => a + b, 0) / timesArr.length).toFixed(1)
    : '—';

  const pct = Math.round((score / (qList.length * 100)) * 100);

  let comment = '';
  if (pct >= 80) comment = 'Excellent ! Vous maîtrisez ce sujet.';
  else if (pct >= 50) comment = 'Bien joué ! Encore quelques progrès à faire.';
  else comment = 'Continuez à pratiquer, vous progresserez !';

  document.getElementById('r-score').textContent = score;
  document.getElementById('r-correct').textContent = '—';
  document.getElementById('r-time').textContent = avgTime + 's';
  document.getElementById('result-comment').textContent = comment;

  const hist = document.getElementById('history-list');
  hist.innerHTML = qList.map((q, i) => {
    const t = timesArr[i] ? timesArr[i].toFixed(1) + 's' : '—';
    return `<div class="history-row">
      <i class="ti ti-circle-check" aria-hidden="true" style="font-size:16px;color:var(--color-text-tertiary);flex-shrink:0;"></i>
      <span style="flex:1;color:var(--color-text-primary);">${q.q}</span>
      <span class="pill pill-blue" style="flex-shrink:0;">${t}</span>
    </div>`;
  }).join('');

  showScreen('screen-results');
}

// --- Rejouer ---
function restartSame() {
  qIdx = 0;
  score = 0;
  timesArr = [];

  const n = qList.length;
  qList = shuffle(BANK[selCat].questions).slice(0, n).map(q => {
    const indices = [0, 1, 2, 3];
    const shuffled = shuffle(indices);
    const newOpts = shuffled.map(i => q.opts[i]);
    const newAns = shuffled.indexOf(q.ans);
    return { ...q, opts: newOpts, ans: newAns };
  });

  showScreen('screen-question');
  renderQuestion();
}

// --- Init ---
buildCatGrid();
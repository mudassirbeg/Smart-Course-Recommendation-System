// ── DATA ──
const COURSES = [
    { id: "C001", title: "Python for Beginners", category: "Programming", difficulty: "Beginner", rating: 4.7, tags: "python programming basics coding" },
    { id: "C002", title: "Machine Learning A-Z", category: "AI/ML", difficulty: "Intermediate", rating: 4.8, tags: "machine learning algorithms supervised unsupervised" },
    { id: "C003", title: "Deep Learning with TensorFlow", category: "AI/ML", difficulty: "Advanced", rating: 4.6, tags: "deep learning neural networks tensorflow keras" },
    { id: "C004", title: "Data Science Bootcamp", category: "Data Science", difficulty: "Intermediate", rating: 4.9, tags: "data science python statistics visualization" },
    { id: "C005", title: "Web Development with Django", category: "Web Dev", difficulty: "Intermediate", rating: 4.5, tags: "web development python django backend" },
    { id: "C006", title: "JavaScript Essentials", category: "Web Dev", difficulty: "Beginner", rating: 4.3, tags: "javascript web frontend programming" },
    { id: "C007", title: "React & Redux", category: "Web Dev", difficulty: "Intermediate", rating: 4.6, tags: "react redux javascript frontend spa" },
    { id: "C008", title: "SQL for Data Analysis", category: "Data Science", difficulty: "Beginner", rating: 4.4, tags: "sql database queries data analysis" },
    { id: "C009", title: "Natural Language Processing", category: "AI/ML", difficulty: "Advanced", rating: 4.7, tags: "nlp text mining language python" },
    { id: "C010", title: "Computer Vision with OpenCV", category: "AI/ML", difficulty: "Advanced", rating: 4.5, tags: "computer vision image recognition opencv" },
    { id: "C011", title: "Cybersecurity Fundamentals", category: "Security", difficulty: "Beginner", rating: 4.2, tags: "cybersecurity network firewall threats" },
    { id: "C012", title: "Cloud Computing AWS", category: "Cloud", difficulty: "Intermediate", rating: 4.5, tags: "cloud aws infrastructure devops" },
    { id: "C013", title: "Android App Development", category: "Mobile", difficulty: "Intermediate", rating: 4.3, tags: "android java kotlin mobile app" },
    { id: "C014", title: "iOS Development with Swift", category: "Mobile", difficulty: "Intermediate", rating: 4.4, tags: "ios swift apple mobile app" },
    { id: "C015", title: "Blockchain Basics", category: "Blockchain", difficulty: "Beginner", rating: 4.1, tags: "blockchain cryptocurrency decentralized" },
    { id: "C016", title: "Statistics for Data Science", category: "Data Science", difficulty: "Beginner", rating: 4.6, tags: "statistics probability data analysis" },
    { id: "C017", title: "R Programming", category: "Data Science", difficulty: "Intermediate", rating: 4.4, tags: "r programming statistical computing" },
    { id: "C018", title: "Power BI for Business", category: "Business", difficulty: "Beginner", rating: 4.5, tags: "power bi dashboard visualization business" },
    { id: "C019", title: "Excel Advanced Analytics", category: "Business", difficulty: "Beginner", rating: 4.3, tags: "excel spreadsheet analytics business" },
    { id: "C020", title: "Project Management PMP", category: "Management", difficulty: "Intermediate", rating: 4.2, tags: "project management pmp planning" },
    { id: "C021", title: "Digital Marketing", category: "Marketing", difficulty: "Beginner", rating: 4.1, tags: "digital marketing seo social media" },
    { id: "C022", title: "UI/UX Design Fundamentals", category: "Design", difficulty: "Beginner", rating: 4.4, tags: "ui ux design user experience wireframe" },
    { id: "C023", title: "Graphic Design with Photoshop", category: "Design", difficulty: "Beginner", rating: 4.3, tags: "graphic design photoshop illustrator creative" },
    { id: "C024", title: "Game Development Unity", category: "Game Dev", difficulty: "Intermediate", rating: 4.5, tags: "game development unity 3d csharp" },
    { id: "C025", title: "Ethical Hacking", category: "Security", difficulty: "Advanced", rating: 4.6, tags: "ethical hacking penetration testing security" },
    { id: "C026", title: "DevOps and CI/CD", category: "DevOps", difficulty: "Advanced", rating: 4.7, tags: "devops ci cd pipeline automation" },
    { id: "C027", title: "Kubernetes & Docker", category: "DevOps", difficulty: "Advanced", rating: 4.8, tags: "kubernetes docker containers orchestration" },
    { id: "C028", title: "Artificial Intelligence Overview", category: "AI/ML", difficulty: "Beginner", rating: 4.5, tags: "artificial intelligence overview concepts" },
    { id: "C029", title: "Big Data with Hadoop", category: "Data Science", difficulty: "Advanced", rating: 4.4, tags: "big data hadoop spark distributed" },
    { id: "C030", title: "Agile Scrum Methodology", category: "Management", difficulty: "Beginner", rating: 4.2, tags: "agile scrum sprint management" },
];

// ── SIMPLE TF-IDF-LIKE VECTORIZER ──
function buildVocab(docs) {
    const vocab = {};
    let idx = 0;
    docs.forEach(doc => doc.toLowerCase().split(/\s+/).forEach(w => {
        if (w.length > 2 && !vocab[w]) vocab[w] = idx++;
    }));
    return vocab;
}

function tfVec(text, vocab) {
    const words = text.toLowerCase().split(/\s+/);
    const vec = new Array(Object.keys(vocab).length).fill(0);
    const counts = {};
    words.forEach(w => { if (vocab[w] !== undefined) counts[w] = (counts[w] || 0) + 1; });
    Object.keys(counts).forEach(w => { vec[vocab[w]] = counts[w] / words.length; });
    return vec;
}

function cosineSim(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
    if (!na || !nb) return 0;
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// Build vocab from all course features
const allDocs = COURSES.map(c => c.tags + " " + c.category + " " + c.difficulty);
const VOCAB = buildVocab(allDocs);
const COURSE_VECS = allDocs.map(d => tfVec(d, VOCAB));

// ── INTEREST TAGS ──
document.querySelectorAll('.int-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('active');
        const active = [...document.querySelectorAll('.int-tag.active')].map(t => t.dataset.val).join(' ');
        document.getElementById('userInterests').value = active;
    });
});

// ── RECOMMEND ──
function recommend() {
    const interests = document.getElementById('userInterests').value.trim();
    if (!interests) { alert('Please enter your interests first!'); return; }

    const btn = document.getElementById('recBtn');
    btn.classList.add('loading');

    setTimeout(() => {
        const diffPref = document.getElementById('diffPref').value;
        const topN = parseInt(document.getElementById('topN').value);
        const userName = document.getElementById('userName').value || 'You';
        const diffMap = { Beginner: 0, Intermediate: 1, Advanced: 2 };
        const userLevel = diffMap[diffPref];

        const userVec = tfVec(interests + " " + diffPref, VOCAB);

        const scored = COURSES.map((course, i) => {
            let sim = cosineSim(userVec, COURSE_VECS[i]);
            const courseLevel = diffMap[course.difficulty];
            const diff = Math.abs(userLevel - courseLevel);
            const boost = diff === 0 ? 1.0 : diff === 1 ? 0.85 : 0.65;
            const final = 0.8 * sim * boost + 0.2 * (course.rating / 5);
            return { ...course, sim, final };
        });

        scored.sort((a, b) => b.final - a.final);
        const top = scored.slice(0, topN);

        renderResults(top, userName, topN);
        btn.classList.remove('loading');
        document.getElementById('emptyState').style.display = 'none';
        document.getElementById('resultsContent').style.display = 'block';
    }, 900);
}

function renderResults(courses, name, topN) {
    const maxScore = courses[0]?.final || 1;
    document.getElementById('resultsTitle').textContent = `${name}'s Top Picks`;
    document.getElementById('resultsCount').textContent = `${courses.length} matches found`;

    document.getElementById('courseCards').innerHTML = courses.map((c, i) => {
        const pct = Math.round((c.final / maxScore) * 100);
        const stars = '★'.repeat(Math.round(c.rating)) + '☆'.repeat(5 - Math.round(c.rating));
        const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
        const diffClass = `tag-${c.difficulty.toLowerCase()}`;
        return `
    <div class="course-card ${rankClass}" style="animation-delay:${i * 0.07}s">
      <div class="course-rank">#${i + 1}</div>
      <div class="course-info">
        <h3>${c.title}</h3>
        <div class="course-meta">
          <span class="tag tag-category">${c.category}</span>
          <span class="tag ${diffClass}">${c.difficulty}</span>
        </div>
        <div class="score-bar-wrap">
          <div class="score-bar"><div class="score-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="course-score-wrap">
        <div class="match-score">${Math.round(c.final * 100)}%</div>
        <div class="match-label">match</div>
        <div class="star-row">${stars} ${c.rating}</div>
      </div>
    </div>`;
    }).join('');
}

// ── CATALOG ──
let activeCat = 'All';
function setCatFilter(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    filterCatalog();
}
function filterCatalog() {
    const q = document.getElementById('searchBox').value.toLowerCase();
    const filtered = COURSES.filter(c => {
        const catMatch = activeCat === 'All' || c.category === activeCat;
        const searchMatch = !q || c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.tags.includes(q);
        return catMatch && searchMatch;
    });
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = filtered.map(c => {
        const diffClass = `tag-${c.difficulty.toLowerCase()}`;
        const stars = '★'.repeat(Math.round(c.rating)) + '☆'.repeat(5 - Math.round(c.rating));
        return `
    <div class="cat-card">
      <div class="cat-card-top">
        <h4>${c.title}</h4>
        <div class="cat-rating">${stars} ${c.rating}</div>
      </div>
      <div class="cat-card-meta">
        <span class="tag tag-category">${c.category}</span>
        <span class="tag ${diffClass}">${c.difficulty}</span>
      </div>
    </div>`;
    }).join('');
}
filterCatalog();

// ── VECTOR DEMO ANIMATION ──
function animateVecs() {
    const colors = [
        'rgba(79,142,247,0.7)', 'rgba(124,58,237,0.7)', 'rgba(6,214,160,0.7)',
        'rgba(245,158,11,0.5)', 'rgba(248,113,113,0.4)', 'rgba(79,142,247,0.3)',
        'rgba(6,214,160,0.4)', 'rgba(124,58,237,0.3)'
    ];
    const vals = [0.12, 0.87, 0.34, 0.61, 0.05, 0.79, 0.43, 0.28];
    const valsB = [0.08, 0.91, 0.27, 0.58, 0.11, 0.82, 0.39, 0.31];
    const makeRow = (arr) => arr.map((v, i) => `
    <div class="vec-cell" style="background:${colors[i]};opacity:${0.3 + v * 0.7}">${v.toFixed(2)}</div>
  `).join('');
    document.getElementById('userVec').innerHTML = makeRow(vals);
    document.getElementById('courseVec').innerHTML = makeRow(valsB);
    const dot = vals.reduce((s, v, i) => s + v * valsB[i], 0);
    const na = Math.sqrt(vals.reduce((s, v) => s + v * v, 0));
    const nb = Math.sqrt(valsB.reduce((s, v) => s + v * v, 0));
    document.getElementById('simVal').textContent = (dot / (na * nb)).toFixed(2);
}
animateVecs();
setInterval(animateVecs, 3000);

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── SMOOTH SCROLL ──
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

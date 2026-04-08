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
    { id: "C031", title: "C++ Programming Mastery", category: "Programming", difficulty: "Intermediate", rating: 4.5, tags: "c++ programming oop data structures" },
    { id: "C032", title: "Java Programming Fundamentals", category: "Programming", difficulty: "Beginner", rating: 4.4, tags: "java programming basics oop" },
    { id: "C033", title: "Advanced Java Spring Boot", category: "Web Dev", difficulty: "Advanced", rating: 4.6, tags: "java spring boot backend api" },
    { id: "C034", title: "Full Stack Web Development", category: "Web Dev", difficulty: "Intermediate", rating: 4.7, tags: "full stack html css javascript node" },
    { id: "C035", title: "MongoDB Database Guide", category: "Database", difficulty: "Beginner", rating: 4.3, tags: "mongodb nosql database queries" },
    { id: "C036", title: "Advanced SQL Optimization", category: "Database", difficulty: "Advanced", rating: 4.6, tags: "sql optimization indexing performance" },
    { id: "C037", title: "Data Structures and Algorithms", category: "Programming", difficulty: "Intermediate", rating: 4.8, tags: "dsa algorithms coding interview" },
    { id: "C038", title: "Competitive Programming", category: "Programming", difficulty: "Advanced", rating: 4.7, tags: "competitive programming problem solving" },
    { id: "C039", title: "Linux Command Line Basics", category: "Operating System", difficulty: "Beginner", rating: 4.4, tags: "linux terminal commands shell" },
    { id: "C040", title: "Operating Systems Concepts", category: "Operating System", difficulty: "Intermediate", rating: 4.5, tags: "os processes memory scheduling" },
    { id: "C041", title: "Computer Networks Fundamentals", category: "Networking", difficulty: "Beginner", rating: 4.3, tags: "networking protocols tcp ip osi" },
    { id: "C042", title: "Advanced Networking", category: "Networking", difficulty: "Advanced", rating: 4.6, tags: "network security routing switching" },
    { id: "C043", title: "Firebase App Development", category: "Mobile", difficulty: "Intermediate", rating: 4.4, tags: "firebase backend realtime database" },
    { id: "C044", title: "Flutter App Development", category: "Mobile", difficulty: "Intermediate", rating: 4.5, tags: "flutter dart cross platform mobile" },
    { id: "C045", title: "Augmented Reality Basics", category: "AR/VR", difficulty: "Beginner", rating: 4.2, tags: "augmented reality ar unity" },
    { id: "C046", title: "Virtual Reality Development", category: "AR/VR", difficulty: "Advanced", rating: 4.5, tags: "virtual reality vr headset unity" },
    { id: "C047", title: "Data Visualization with Tableau", category: "Data Science", difficulty: "Beginner", rating: 4.6, tags: "tableau dashboard charts analytics" },
    { id: "C048", title: "Time Series Analysis", category: "Data Science", difficulty: "Advanced", rating: 4.7, tags: "time series forecasting arima data" },
    { id: "C049", title: "Soft Skills and Communication", category: "Personal Development", difficulty: "Beginner", rating: 4.3, tags: "communication skills personality growth" },
    { id: "C050", title: "Entrepreneurship Essentials", category: "Business", difficulty: "Beginner", rating: 4.4, tags: "startup business planning innovation" }
];

function buildVocab(docs) {
    const vocab = {};
    let index = 0;

    docs.forEach((doc) => {
        doc.toLowerCase().split(/\s+/).forEach((word) => {
            if (word.length > 2 && vocab[word] === undefined) {
                vocab[word] = index;
                index += 1;
            }
        });
    });

    return vocab;
}

function tfVec(text, vocab) {
    const words = text.toLowerCase().split(/\s+/);
    const vector = new Array(Object.keys(vocab).length).fill(0);
    const counts = {};

    words.forEach((word) => {
        if (vocab[word] !== undefined) {
            counts[word] = (counts[word] || 0) + 1;
        }
    });

    Object.keys(counts).forEach((word) => {
        vector[vocab[word]] = counts[word] / words.length;
    });

    return vector;
}

function cosineSim(a, b) {
    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i += 1) {
        dot += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    if (!normA || !normB) {
        return 0;
    }

    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

const allDocs = COURSES.map((course) => `${course.tags} ${course.category} ${course.difficulty}`);
const VOCAB = buildVocab(allDocs);
const COURSE_VECS = allDocs.map((doc) => tfVec(doc, VOCAB));
const difficultyIndex = { Beginner: 0, Intermediate: 1, Advanced: 2 };
const themeSequence = [
    { key: 'midnight', label: 'Midnight' },
    { key: 'sunrise', label: 'Sunrise' },
    { key: 'aurora', label: 'Aurora' }
];

let activeCat = 'All';
let currentTheme = localStorage.getItem('theme') || 'midnight';

function setTheme(themeKey) {
    currentTheme = themeKey;

    if (themeKey === 'midnight') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeKey);
    }

    localStorage.setItem('theme', themeKey);

    const themeToggle = document.getElementById('themeToggle');
    const activeTheme = themeSequence.find((theme) => theme.key === themeKey) || themeSequence[0];
    if (themeToggle) {
        themeToggle.textContent = activeTheme.label;
    }
}

function toggleTheme() {
    const currentIndex = themeSequence.findIndex((theme) => theme.key === currentTheme);
    const nextTheme = themeSequence[(currentIndex + 1) % themeSequence.length];
    setTheme(nextTheme.key);
}

function syncInterestTags() {
    const activeValues = [...document.querySelectorAll('.int-tag.active')].map((tag) => tag.dataset.val);
    const interests = document.getElementById('userInterests');
    if (interests) {
        interests.value = activeValues.join(' ');
    }
}

function recommend() {
    const interestField = document.getElementById('userInterests');
    const interests = interestField.value.trim();

    if (!interests) {
        window.alert('Please add a few interests first.');
        interestField.focus();
        return;
    }

    const button = document.getElementById('recBtn');
    const emptyState = document.getElementById('emptyState');
    const resultsContent = document.getElementById('resultsContent');
    button.classList.add('loading');

    window.setTimeout(() => {
        const diffPref = document.getElementById('diffPref').value;
        const topN = Number.parseInt(document.getElementById('topN').value, 10);
        const userName = document.getElementById('userName').value.trim() || 'You';
        const userLevel = difficultyIndex[diffPref];
        const userVec = tfVec(`${interests} ${diffPref}`, VOCAB);

        const rankedCourses = COURSES.map((course, index) => {
            const similarity = cosineSim(userVec, COURSE_VECS[index]);
            const levelGap = Math.abs(userLevel - difficultyIndex[course.difficulty]);
            const difficultyBoost = levelGap === 0 ? 1 : levelGap === 1 ? 0.87 : 0.68;
            const finalScore = 0.8 * similarity * difficultyBoost + 0.2 * (course.rating / 5);
            return { ...course, similarity, finalScore };
        }).sort((a, b) => b.finalScore - a.finalScore).slice(0, topN);

        renderResults(rankedCourses, userName);
        emptyState.style.display = 'none';
        resultsContent.style.display = 'block';
        button.classList.remove('loading');
        document.getElementById('resultsPanel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
}

function renderResults(courses, userName) {
    const topCourse = courses[0];
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const spotlight = document.getElementById('resultsSpotlight');
    const cards = document.getElementById('courseCards');

    resultsTitle.textContent = `${userName}'s top matches`;
    resultsCount.textContent = `${courses.length} recommendations ready`;

    spotlight.innerHTML = `
        <div class="spotlight-top">
            <div>
                <div class="panel-kicker">Best overall match</div>
                <h3>${topCourse.title}</h3>
                <p class="course-summary">${topCourse.category} · ${topCourse.difficulty} · Rated ${topCourse.rating.toFixed(1)}/5</p>
            </div>
            <div class="spotlight-score">${Math.round(topCourse.finalScore * 100)}%</div>
        </div>
        <div class="course-meta">
            <span class="tag">${topCourse.category}</span>
            <span class="tag tag-${topCourse.difficulty.toLowerCase()}">${topCourse.difficulty}</span>
            <span class="tag">Similarity ${(topCourse.similarity * 100).toFixed(0)}%</span>
        </div>
    `;

    cards.innerHTML = courses.map((course, index) => {
        const scorePercent = Math.round(course.finalScore * 100);
        const stars = '?'.repeat(Math.round(course.rating)) + '?'.repeat(5 - Math.round(course.rating));

        return `
            <article class="course-card">
                <div class="course-rank">#${index + 1}</div>
                <div>
                    <h3>${course.title}</h3>
                    <div class="course-meta">
                        <span class="tag">${course.category}</span>
                        <span class="tag tag-${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                    </div>
                    <div class="score-bar">
                        <div class="score-fill" style="width:${scorePercent}%"></div>
                    </div>
                </div>
                <div class="course-score-wrap">
                    <div class="match-score">${scorePercent}%</div>
                    <div class="match-label">match score</div>
                    <div class="star-row">${stars} ${course.rating.toFixed(1)}</div>
                </div>
            </article>
        `;
    }).join('');
}

function setCatFilter(button) {
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeCat = button.dataset.cat;
    filterCatalog();
}

function filterCatalog() {
    const query = document.getElementById('searchBox').value.trim().toLowerCase();
    const filteredCourses = COURSES.filter((course) => {
        const matchesCategory = activeCat === 'All' || course.category === activeCat;
        const haystack = `${course.title} ${course.category} ${course.tags}`.toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        return matchesCategory && matchesQuery;
    });

    const catalogGrid = document.getElementById('catalogGrid');
    const catalogSummary = document.getElementById('catalogSummary');
    catalogSummary.textContent = `Showing ${filteredCourses.length} of ${COURSES.length} courses`;

    catalogGrid.innerHTML = filteredCourses.map((course) => {
        const stars = '?'.repeat(Math.round(course.rating)) + '?'.repeat(5 - Math.round(course.rating));
        return `
            <article class="cat-card">
                <div class="cat-card-top">
                    <div>
                        <h4>${course.title}</h4>
                        <p>${course.tags}</p>
                    </div>
                    <div class="cat-rating">${stars} ${course.rating.toFixed(1)}</div>
                </div>
                <div class="course-meta">
                    <span class="tag">${course.category}</span>
                    <span class="tag tag-${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                </div>
            </article>
        `;
    }).join('');
}

function animateVectors() {
    const palette = [
        'rgba(125, 211, 252, 0.85)',
        'rgba(56, 189, 248, 0.82)',
        'rgba(251, 191, 36, 0.82)',
        'rgba(134, 239, 172, 0.82)',
        'rgba(96, 165, 250, 0.8)',
        'rgba(250, 204, 21, 0.78)',
        'rgba(34, 197, 94, 0.74)',
        'rgba(14, 165, 233, 0.76)'
    ];

    const base = Array.from({ length: 8 }, (_, index) => Number((0.15 + Math.random() * 0.75).toFixed(2)));
    const variant = base.map((value) => {
        const nextValue = Math.max(0.08, Math.min(0.98, value + (Math.random() * 0.2 - 0.1)));
        return Number(nextValue.toFixed(2));
    });

    const createRow = (values) => values.map((value, index) => `
        <div class="vec-cell" style="background:${palette[index]}; opacity:${0.45 + value * 0.55}">${value.toFixed(2)}</div>
    `).join('');

    document.getElementById('userVec').innerHTML = createRow(base);
    document.getElementById('courseVec').innerHTML = createRow(variant);

    const dot = base.reduce((sum, value, index) => sum + value * variant[index], 0);
    const normA = Math.sqrt(base.reduce((sum, value) => sum + value * value, 0));
    const normB = Math.sqrt(variant.reduce((sum, value) => sum + value * value, 0));
    document.getElementById('simVal').textContent = (dot / (normA * normB)).toFixed(2);
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initInterestTags() {
    document.querySelectorAll('.int-tag').forEach((tag) => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
            syncInterestTags();
        });
    });
}

function init() {
    setTheme(currentTheme);
    initReveal();
    initInterestTags();
    filterCatalog();
    animateVectors();
    window.setInterval(animateVectors, 2800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

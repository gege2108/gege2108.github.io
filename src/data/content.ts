// Tout le contenu du portfolio est ici : modifie ce fichier pour mettre à jour le site.
// Chaque texte traduit est un objet { fr, en }.

export type Lang = 'fr' | 'en';
type L = { fr: string; en: string };

export const site = {
  name: 'Germain Potet',
  email: 'germainlepotet@gmail.com',
  github: 'https://github.com/gege2108',
  linkedin: 'https://www.linkedin.com/in/germain-potet', // laissé vide = lien masqué
  cv: { fr: 'CV_Germain_Potet_FR.pdf', en: 'CV_Germain_Potet_EN.pdf' }, // fichiers dans /public
  photo: 'images/profile.jpg',
};

export const ui = {
  nav: {
    about: { fr: 'À propos', en: 'About' },
    experience: { fr: 'Expérience', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    skills: { fr: 'Compétences', en: 'Skills' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  hero: {
    status: {
      fr: 'Recherche un stage de fin d’études de 6 mois · dès mars 2027',
      en: 'Looking for a 6-month end-of-studies internship · from March 2027',
    },
    hello: { fr: 'Bonjour, je suis', en: 'Hi, I’m' },
    roles: { fr: 'Ingénieur IA · Data Engineer', en: 'AI Engineer · Data Engineer' },
    tagline: {
      fr: 'Étudiant ingénieur en informatique et mathématiques appliquées à Polytech Paris-Saclay. Je suis passionné par l’intelligence artificielle, la data science et l’ingénierie logicielle.',
      en: "Computer Science & Applied Mathematics engineering student at Polytech Paris-Saclay. I’m passionate about artificial intelligence, data science and software engineering.",
    },
    contact: { fr: 'Me contacter', en: 'Contact me' },
    cv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
  },
  stats: [
    { value: { fr: '96,7 %', en: '96.7%' }, label: { fr: 'de sensibilité en détection (Faster R-CNN)', en: 'detection sensitivity (Faster R-CNN)' } },
    { value: { fr: '98,37 %', en: '98.37%' }, label: { fr: 'de précision en détection (Faster R-CNN)', en: 'detection precision (Faster R-CNN)' } },
    { value: { fr: '17', en: '17' }, label: { fr: 'semaines de recherche à Sydney', en: 'weeks of research in Sydney' } },
    { value: { fr: '875', en: '875' }, label: { fr: 'au TOEIC (B2)', en: 'TOEIC score (B2)' } },
  ],
  sections: {
    about: { fr: 'À propos', en: 'About me' },
    education: { fr: 'Formation', en: 'Education' },
    languages: { fr: 'Langues', en: 'Languages' },
    experience: { fr: 'Expérience', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    skills: { fr: 'Compétences', en: 'Skills' },
    contact: { fr: 'Travaillons ensemble', en: 'Let’s work together' },
  },
  about: {
    fr: 'Passionné par l’intelligence artificielle et la donnée, j’ai effectué un stage de recherche de 17 semaines à l’University of Technology Sydney, où j’ai appliqué la vision par ordinateur à l’imagerie médicale. Je poursuis actuellement un semestre à l’Université de Porto en Machine Learning et IA agentique. Je cherche un stage de fin d’études de 6 mois en tant qu’ingénieur IA ou data engineer, à partir de mars 2027.',
    en: 'Passionate about artificial intelligence and data, I spent 17 weeks as a research intern at the University of Technology Sydney, applying computer vision to medical imaging. I am currently studying Machine Learning and Agentic AI at the University of Porto. I am looking for a 6-month end-of-studies internship as an AI engineer or data engineer, starting March 2027.',
  },
  filters: {
    all: { fr: 'Tous', en: 'All' },
    ai: { fr: 'IA / ML', en: 'AI / ML' },
    data: { fr: 'Data', en: 'Data' },
    software: { fr: 'Logiciel', en: 'Software' },
    graphics: { fr: '3D / Graphisme', en: 'Graphics' },
  },
  links: {
    code: { fr: 'Code', en: 'Code' },
    demo: { fr: 'Démo', en: 'Live demo' },
    dataset: { fr: 'Dataset', en: 'Dataset' },
  },
  contact: {
    text: {
      fr: 'Vous recrutez un stagiaire IA ou data pour 6 mois à partir de mars 2027 ? Écrivez-moi, je réponds rapidement.',
      en: 'Hiring an AI or data intern for 6 months from March 2027? Drop me a line, I reply quickly.',
    },
    location: { fr: 'Île-de-France · mobile en France et à l’international', en: 'Paris area, France · open to relocation' },
  },
  footer: { fr: 'Conçu et développé par Germain Potet avec Astro & Tailwind CSS.', en: 'Designed and built by Germain Potet with Astro & Tailwind CSS.' },
} as const;

export const experience: {
  role: L;
  org: string;
  place: L;
  flag: string; // code pays pour flagcdn.com
  dates: L;
  bullets: L[];
  tags: string[];
}[] = [
  {
    role: { fr: 'Stagiaire Ingénieur de Recherche en IA', en: 'AI Research Engineer Intern' },
    org: 'University of Technology Sydney (UTS)',
    place: { fr: 'Sydney, Australie', en: 'Sydney, Australia' },
    flag: 'au',
    dates: { fr: 'Avril – Août 2026 · 17 semaines', en: 'April – August 2026 · 17 weeks' },
    bullets: [
      {
        fr: 'Détection d’objets : configuration et fine-tuning d’un Faster R-CNN pour détecter le disque optique chez des patients atteints d’œdème papillaire, atteignant 96,7 % de sensibilité et 98,37 % de précision.',
        en: 'Object detection: configured and fine-tuned a Faster R-CNN model for optic disc detection in patients with papilledema, achieving 96.7% sensitivity and 98.37% precision.',
      },
      {
        fr: 'Benchmark de modèles : évaluation d’architectures de deep learning (ResNet + LSTM, 3D-CNN avec EVM) sur des données d’imagerie médicale.',
        en: 'Model benchmarking: evaluated deep learning architectures (ResNet + LSTM, 3D-CNN with EVM) on medical imaging data.',
      },
      {
        fr: 'Pipelines de données : augmentation de données (fenêtre glissante, transformations géométriques) pour l’analyse de micro-mouvements dans des vidéos.',
        en: 'Data pipelines: applied data augmentation (sliding window, geometric transformations) for video micro-movement analysis.',
      },
    ],
    tags: ['Python', 'Faster R-CNN', 'ResNet', 'LSTM', '3D-CNN', 'Computer Vision'],
  },
  {
    role: { fr: 'Tuteur en informatique', en: 'Computer Science Tutor' },
    org: 'Tutorat',
    place: { fr: 'France', en: 'France' },
    flag: 'fr',
    dates: { fr: '2024 – 2025', en: '2024 – 2025' },
    bullets: [
      {
        fr: 'Accompagnement d’étudiants de première année de licence en programmation et en algorithmique.',
        en: 'Supported first-year undergraduate students in programming and algorithms.',
      },
    ],
    tags: ['Pédagogie / Teaching'],
  },
  {
    role: { fr: 'Stagiaire Assistant Technique', en: 'Technical Assistant Intern' },
    org: 'New Imaging Technologies',
    place: { fr: 'France', en: 'France' },
    flag: 'fr',
    dates: { fr: 'Juin 2023', en: 'June 2023' },
    bullets: [
      {
        fr: 'Travail en salle blanche chez un fabricant de caméras infrarouges : test et inspection de composants électroniques.',
        en: 'Worked in a clean room at an infrared camera manufacturer, testing and inspecting electronic components.',
      },
    ],
    tags: ['Hardware', 'Quality control'],
  },
];

export const education: { school: string; degree: L; dates: string; flag: string }[] = [
  {
    school: 'Universidade do Porto',
    degree: { fr: 'Semestre d’échange — Machine Learning & IA agentique', en: 'Exchange semester — Machine Learning & Agentic AI' },
    dates: '2026 –',
    flag: 'pt',
  },
  {
    school: 'Polytech Paris-Saclay',
    degree: { fr: 'Diplôme d’ingénieur (Master) — Informatique & Mathématiques appliquées', en: 'Engineering degree (MSc) — Computer Science & Applied Mathematics' },
    dates: '2024 – 2027',
    flag: 'fr',
  },
  {
    school: 'Polytech Sorbonne',
    degree: { fr: 'Cycle préparatoire intégré (PeiP) — Licence de mathématiques', en: 'Integrated preparatory program (PEIP) — Bachelor’s in Mathematics' },
    dates: '2022 – 2024',
    flag: 'fr',
  },
];

export const languages: { name: L; level: L; percent: number }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' }, percent: 100 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2 — TOEIC 875', en: 'B2 — TOEIC 875' }, percent: 75 },
  { name: { fr: 'Allemand', en: 'German' }, level: { fr: 'A2', en: 'A2' }, percent: 30 },
  { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'A2', en: 'A2' }, percent: 30 },
];

export type Category = 'ai' | 'data' | 'software' | 'graphics';

export const projects: {
  title: string;
  categories: Category[];
  summary: L;
  details: L[];
  stack: string[];
  image?: string;
  imageFit?: 'cover' | 'contain'; // 'contain' = image affichée en entier (graphiques)
  imageBg?: string; // fond derrière une image 'contain' (blanc par défaut)
  cover: string; // dégradé CSS utilisé quand il n'y a pas d'image
  coverLabel: string;
  links: { code?: string; demo?: string; dataset?: string };
}[] = [
  {
    title: 'Food Image Clustering',
    categories: ['ai'],
    summary: {
      fr: 'Benchmark de méthodes de clustering sur des images de nourriture, avec un dashboard de comparaison déployé avec Docker.',
      en: 'Benchmark of clustering methods on food images, with a comparison dashboard deployed with Docker.',
    },
    details: [
      { fr: 'Comparaison de k-means, DBSCAN et GMM.', en: 'Compared k-means, DBSCAN and GMM.' },
      { fr: 'Extraction de features par deep learning (ResNet, ViT).', en: 'Deep feature extraction (ResNet, ViT).' },
      { fr: 'Dashboard Streamlit conteneurisé avec Docker.', en: 'Streamlit dashboard containerised with Docker.' },
    ],
    stack: ['Python', 'scikit-learn', 'ResNet', 'ViT', 'Streamlit', 'Docker'],
    image: 'images/clustering.png',
    imageFit: 'contain',
    imageBg: '#000000',
    cover: 'linear-gradient(135deg,#0f766e 0%,#14b8a6 55%,#99f6e4 100%)',
    coverLabel: 'k-means · DBSCAN · GMM',
    links: { code: 'https://github.com/gege2108/ClusteringProject' },
  },
  {
    title: 'Social Reproduction in Europe',
    categories: ['data'],
    summary: {
      fr: 'Pipeline de nettoyage et d’harmonisation de données hétérogènes (Eurostat, OCDE) et notebook de visualisation interactive des inégalités socio-économiques en Europe.',
      en: 'Pipeline that cleans and harmonises heterogeneous data (Eurostat, OECD), plus an interactive notebook visualising socio-economic disparities across Europe.',
    },
    details: [
      { fr: 'Fusion de 3 jeux de données open source en un dataset original.', en: 'Merged 3 open-source datasets into an original dataset.' },
      { fr: 'Manipulation de DataFrames avec Pandas.', en: 'DataFrame wrangling with Pandas.' },
      { fr: 'Visualisations interactives publiées sur Observable.', en: 'Interactive visualisations published on Observable.' },
    ],
    stack: ['Python', 'Pandas', 'JavaScript', 'Observable', 'Eurostat', 'OECD'],
    image: 'images/social-reproduction.png',
    imageFit: 'contain',
    cover: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 55%,#bfdbfe 100%)',
    coverLabel: 'ETL · Data viz',
    links: {
      code: 'https://github.com/gege2108/datavisualization-SocialReproductionEurope',
      demo: 'https://observablehq.com/@dorafworkspace/final-social-reproduction-in-europe@97',
      dataset: 'https://github.com/gege2108/dataset-project',
    },
  },
  {
    title: 'PolySteam',
    categories: ['data', 'software'],
    summary: {
      fr: 'Clone d’une plateforme de publication et de lancement de jeux vidéo, construit autour de flux de données Kafka entre plusieurs applications indépendantes.',
      en: 'Clone of a video game publishing and launching platform, built around Kafka data streams between several independent applications.',
    },
    details: [
      { fr: 'Architecture orientée événements avec Apache Kafka.', en: 'Event-driven architecture with Apache Kafka.' },
      { fr: 'Schémas de données Avro partagés entre services.', en: 'Avro data schemas shared across services.' },
      { fr: 'Applications écrites en Java et Kotlin.', en: 'Applications written in Java and Kotlin.' },
    ],
    stack: ['Kafka', 'Avro', 'Java', 'Kotlin'],
    image: 'images/polysteam.png',
    cover: 'linear-gradient(135deg,#312e81 0%,#7c3aed 55%,#ddd6fe 100%)',
    coverLabel: 'Producer → Kafka → Consumer',
    links: { code: 'https://github.com/gege2108/PolySteam' },
  },
  {
    title: 'GrandTheftAutoEcole',
    categories: ['graphics', 'software'],
    summary: {
      fr: 'Moteur de rendu 3D temps réel en C++/OpenGL : une petite ville dans laquelle on conduit une voiture modélisée à la main.',
      en: 'Real-time 3D rendering engine in C++/OpenGL: a small city where you drive a hand-modelled car.',
    },
    details: [
      { fr: 'Graphe de scène (hiérarchie parent–enfant) et caméra dynamique.', en: 'Scene graph (parent–child hierarchy) and dynamic camera.' },
      { fr: 'Maillages VBO/IBO écrits à la main, textures et shaders.', en: 'Hand-written VBO/IBO meshes, textures and shaders.' },
      { fr: 'Éclairage de Phong (ambiant, diffus, spéculaire).', en: 'Phong lighting (ambient, diffuse, specular).' },
    ],
    stack: ['C++', 'OpenGL', 'GLM', 'GLFW', 'GLSL'],
    image: 'images/gta.png',
    cover: 'linear-gradient(135deg,#7c2d12 0%,#f97316 55%,#fed7aa 100%)',
    coverLabel: 'OpenGL',
    links: { code: 'https://github.com/gege2108/GrandTheftAutoEcole' },
  },
];

// Icônes : https://skillicons.dev (liste des noms disponibles sur le site)
export const skills: { title: L; icons?: string; items: string[] }[] = [
  {
    title: { fr: 'Langages', en: 'Languages' },
    icons: 'python,java,kotlin,cpp,c,js',
    items: ['Python', 'Java', 'Kotlin', 'C++', 'C', 'JavaScript'],
  },
  {
    title: { fr: 'IA & Machine Learning', en: 'AI & Machine Learning' },
    icons: 'pytorch,sklearn',
    items: ['Deep learning', 'Computer vision', 'Faster R-CNN', 'ResNet', 'ViT', 'LSTM', '3D-CNN', 'k-means', 'DBSCAN', 'GMM', 'Data augmentation'],
  },
  {
    title: { fr: 'Data Engineering', en: 'Data Engineering' },
    icons: 'kafka,docker',
    items: ['Pandas', 'Apache Kafka', 'Avro', 'ETL / data cleaning', 'Data visualisation', 'Streamlit', 'Observable'],
  },
  {
    title: { fr: 'Outils & autres', en: 'Tools & more' },
    icons: 'git,github,linux,vscode',
    items: ['Git', 'Docker', 'Linux', 'OpenGL', 'GLSL'],
  },
];

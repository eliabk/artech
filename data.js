export const IMG = {
  hero: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  infra: 'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  security: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  energy: 'https://images.pexels.com/photos/4254163/pexels-photo-4254163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  epi: 'https://images.pexels.com/photos/8488037/pexels-photo-8488037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  training: 'https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  it: 'https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  partner: 'https://images.pexels.com/photos/955388/pexels-photo-955388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  negotiate: 'https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  office: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
}

export const POLES = [
  { num: '01', title: 'NÉGOCE INTERNATIONAL', subtitle: 'Votre besoin. Notre capacité d’approvisionnement.', desc: 'Nous recherchons et fournissons des équipements, matériels et fournitures auprès de fournisseurs et fabricants nationaux et internationaux.', items: ['Matériels informatiques et bureautiques','Équipements technologiques','Consommables','Équipements techniques et industriels','Quincaillerie et fournitures générales','Produits spécifiques sur demande','Sourcing et approvisionnement international'], cta: 'EXPRIMER UN BESOIN', img: IMG.negotiate },
  { num: '02', title: 'INFRASTRUCTURES IT & RÉSEAUX', subtitle: 'Des infrastructures fiables pour des opérations performantes.', desc: 'Nous concevons, déployons et maintenons les infrastructures technologiques nécessaires au bon fonctionnement de votre organisation.', items: ['Réseaux informatiques','Câblage et infrastructure réseau','Serveurs et systèmes','Installation et configuration','Maintenance informatique','Maintenance préventive et corrective','Audit et diagnostic technique','Infrastructures IT et électriques associées','Solutions de continuité informatique'], cta: 'PARLER À UN EXPERT', img: IMG.infra },
  { num: '03', title: 'EPI & CONSOMMABLES', subtitle: 'Équipez vos collaborateurs. Sécurisez vos opérations.', desc: 'ART-TECH SARL accompagne les entreprises et organisations dans l’approvisionnement de leurs équipements de protection et fournitures professionnelles.', items: ['Chaussures de sécurité','Casques','Lunettes de protection','Gants','Équipements de protection individuelle','Consommables informatiques','Consommables bureautiques','Fournitures générales'], cta: 'DEMANDER UN DEVIS', img: IMG.epi, extra: 'Une solution particulièrement adaptée aux entreprises, industries, chantiers, sites techniques et environnements professionnels exigeants.' },
  { num: '04', title: 'SÉCURITÉ ÉLECTRONIQUE & CYBERSÉCURITÉ', subtitle: 'Protégez vos personnes. Vos infrastructures. Vos données.', desc: 'La sécurité d’une organisation ne se limite plus à la protection physique de ses locaux. ART-TECH SARL combine sécurité électronique et protection des infrastructures numériques pour contribuer à réduire les risques auxquels votre organisation est exposée.', items: ['Vidéosurveillance','Caméras IP','Contrôle d’accès','Systèmes de pointage','Sécurité électronique','Sécurisation des réseaux','Protection des systèmes informatiques','Solutions de cybersécurité','Accompagnement et conseil'], cta: 'SÉCURISER MON ORGANISATION', img: IMG.security },
  { num: '05', title: 'SOLUTIONS ÉNERGÉTIQUES', subtitle: 'Parce que votre activité ne doit pas s’arrêter.', desc: 'Les infrastructures technologiques et professionnelles nécessitent une alimentation énergétique fiable. ART-TECH SARL propose des solutions adaptées aux besoins des entreprises, bureaux, infrastructures techniques et sites isolés.', items: ['Solaire','Onduleurs','Systèmes d’alimentation de secours','Groupes électrogènes','Solutions hybrides','Protection électrique','Alimentation des infrastructures IT','Solutions d’autonomie énergétique'], cta: 'ÉTUDIER MON BESOIN ÉNERGÉTIQUE', img: IMG.energy, extra: 'Notre objectif : contribuer à la continuité de vos activités, même dans les environnements soumis à des contraintes énergétiques.' },
  { num: '06', title: 'FORMATION', subtitle: 'Investir dans la technologie, c’est aussi investir dans les compétences.', desc: 'Nous accompagnons les organisations dans le développement des compétences de leurs collaborateurs.', items: ['Informatique','Réseaux','Technologies numériques','Sécurité informatique','Utilisation des équipements technologiques','Outils professionnels','Renforcement des compétences techniques'], cta: 'DEMANDER UNE FORMATION', img: IMG.training },
]

export const SECTORS = [
  { icon: '⛏️', title: 'MINES & INDUSTRIES', desc: 'Approvisionnement, IT, réseaux, EPI, sécurité, énergie et maintenance pour les environnements industriels et les sites opérationnels.' },
  { icon: '🏢', title: 'ENTREPRISES & PME', desc: 'Équipements informatiques, infrastructures, réseaux, cybersécurité, énergie, consommables et support technique.' },
  { icon: '🌍', title: 'ONG & ORGANISATIONS INTERNATIONALES', desc: 'Fourniture d’équipements, déploiement d’infrastructures, solutions de sécurité, énergie et accompagnement technique.' },
  { icon: '🏛️', title: 'ADMINISTRATIONS & INSTITUTIONS', desc: 'Équipements, réseaux, bureautiques, sécurité, maintenance et solutions adaptées aux exigences institutionnelles.' },
  { icon: '🏗️', title: 'PROJETS & INFRASTRUCTURES', desc: 'Approvisionnement multi-produits, équipements techniques, EPI, énergie, IT et solutions de sécurité.' },
  { icon: '🏪', title: 'COMMERCE & SERVICES', desc: 'Solutions informatiques, réseaux, sécurité, énergie, équipements et consommables pour assurer la continuité des opérations.' },
]

export const CLIENTS = [
  { name: 'FEKOLA', desc: 'Solutions et fournitures destinées à un environnement minier exigeant.' },
  { name: 'B2GOLD', desc: 'Accompagnement et fourniture de solutions adaptées aux besoins professionnels.' },
  { name: 'LITHIUM DU MALI SA — LMSA', desc: 'Réponse aux besoins d’un acteur industriel et minier en développement.' },
  { name: 'SOTELMA', desc: 'Accompagnement dans un environnement technologique et télécom.' },
  { name: 'DIAMOND CEMENT MALI — DCM', desc: 'Fourniture et solutions destinées à un environnement industriel.' },
  { name: 'SOMAFEC', desc: 'Accompagnement et fourniture de solutions adaptées aux besoins professionnels et techniques.' },
  { name: 'IMAGRI', desc: 'Solutions et équipements répondant aux besoins d’un acteur du secteur agricole.' },
]

export const REASONS = [
  { num: '01', title: 'UNE OFFRE MULTISOLUTION', desc: 'Six pôles complémentaires réunis au sein d’une même entreprise.' },
  { num: '02', title: 'UNE CAPACITÉ DE SOURCING', desc: 'Nous recherchons les produits et équipements correspondant aux spécifications et contraintes de votre projet.' },
  { num: '03', title: 'UNE EXPERTISE TECHNIQUE', desc: 'Nous ne nous limitons pas à la fourniture : nous pouvons intervenir dans l’installation, la configuration, la maintenance et l’assistance.' },
  { num: '04', title: 'UNE APPROCHE B2B', desc: 'Nous comprenons les exigences des entreprises, organisations, projets et services achats.' },
  { num: '05', title: 'UNE CONNAISSANCE DU TERRAIN', desc: 'Nos solutions tiennent compte des réalités opérationnelles, climatiques, énergétiques et techniques locales.' },
  { num: '06', title: 'UN ACCOMPAGNEMENT DANS LA DURÉE', desc: 'Notre objectif est de construire des relations professionnelles durables fondées sur la confiance, la réactivité et la qualité de service.' },
]

export const STEPS = [
  { num: '01', title: 'VOUS NOUS EXPOSEZ VOTRE BESOIN', desc: 'Produit, infrastructure, projet, maintenance, sécurité ou approvisionnement.' },
  { num: '02', title: 'NOUS ANALYSONS VOTRE BESOIN', desc: 'Nos équipes identifient les contraintes techniques, opérationnelles et budgétaires.' },
  { num: '03', title: 'NOUS PROPOSONS LA SOLUTION', desc: 'Nous recherchons et sélectionnons les produits, équipements ou services les mieux adaptés.' },
  { num: '04', title: 'NOUS APPROVISIONNONS', desc: 'Nous organisons la fourniture et la livraison de votre solution.' },
  { num: '05', title: 'NOUS INSTALLONS ET INTÉGRONS', desc: 'Lorsque nécessaire, nos équipes assurent l’installation, la configuration et la mise en service.' },
  { num: '06', title: 'NOUS ASSURONS LE SUIVI', desc: 'Maintenance, assistance technique, consommables et accompagnement selon vos besoins.' },
]

export const NEEDS = [
  'un équipement informatique ?',
  'une infrastructure réseau ?',
  'des EPI ?',
  'des consommables ?',
  'une solution de vidéosurveillance ?',
  'une solution cybersécurité ?',
  'un système solaire ou une solution de secours énergétique ?',
  'une formation ?',
  'un approvisionnement spécifique depuis l’international ?',
]

export function renderHeader(activePage = 'home') {
  const navItems = [
    { label: 'Accueil', href: '#/', page: 'home' },
    { label: 'À propos', href: '#/a-propos', page: 'about' },
    { label: "Pôles d'expertise", href: '#/#poles', page: 'poles' },
    { label: 'Secteurs', href: '#/#secteurs', page: 'secteurs' },
    { label: 'Références', href: '#/#clients', page: 'clients' },
    { label: 'Contact', href: '#/#contact', page: 'contact' },
  ]
  const links = navItems.map(n => `<a href="${n.href}" class="${n.page === activePage ? 'active' : ''}">${n.label}</a>`).join('')
  return `
    <header class="header" id="top">
      <div class="container nav-bar">
        <a class="logo" href="#/">
          <span class="logo-mark">AT</span>
          <span class="logo-text">ART-TECH <b>SARL</b></span>
        </a>
        <nav class="nav-links" id="navLinks">
          ${links}
        </nav>
        <div class="nav-cta">
          <a class="btn btn-primary btn-sm" href="#/#contact">Demander un devis</a>
        </div>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>
  `
}

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="logo" href="#/">
            <span class="logo-mark">AT</span>
            <span class="logo-text">ART-TECH <b>SARL</b></span>
          </a>
          <p class="footer-tagline">L'expertise technologique à vos côtés.</p>
          <p class="footer-desc">Nous mettons la technologie, l'expertise technique et notre capacité d'approvisionnement au service de la performance de nos clients.</p>
          <p class="footer-tags">Négoce international • IT & Réseaux • EPI & Consommables • Sécurité • Cybersécurité • Énergie • Formation</p>
          <p class="footer-mission"><strong>Votre réussite, notre mission.</strong></p>
          <div class="footer-contact">
            <p>Tél. : <a href="tel:+22379089465">+223 79 08 94 65</a></p>
            <p>Email : <a href="mailto:info@artechmali.com">info@artechmali.com</a></p>
            <p>Web : <a href="https://www.artechmali.com">www.artechmali.com</a></p>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary btn-sm" href="#/#contact">[ DEMANDER UN DEVIS ]</a>
            <a class="btn btn-ghost btn-sm" href="#/#contact">[ NOUS CONTACTER ]</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Nos pôles</h4>
          <a href="#/#pole01">Négoce international</a>
          <a href="#/#pole02">Infrastructures IT & Réseaux</a>
          <a href="#/#pole03">EPI & Consommables</a>
          <a href="#/#pole04">Sécurité & Cybersécurité</a>
          <a href="#/#pole05">Solutions énergétiques</a>
          <a href="#/#pole06">Formation</a>
        </div>
        <div class="footer-links">
          <h4>Navigation</h4>
          <a href="#/">Accueil</a>
          <a href="#/a-propos">À propos</a>
          <a href="#/#poles">Pôles d'expertise</a>
          <a href="#/#secteurs">Secteurs</a>
          <a href="#/#clients">Références</a>
          <a href="#/#contact">Contact</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2024 ART-TECH SARL. Tous droits réservés.</span>
        <span>ART-TECH SARL Mali • Bamako</span>
      </div>
    </footer>
  `
}

export function setupNav() {
  const burger = document.getElementById('burger')
  const navLinks = document.getElementById('navLinks')
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open')
      burger.setAttribute('aria-expanded', String(open))
    })
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open')
      burger.setAttribute('aria-expanded', 'false')
    }))
  }
}

export function setupForm() {
  const form = document.getElementById('quoteForm')
  if (!form) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    if (!btn) return
    btn.textContent = 'Demande envoyée ✓'
    btn.style.background = 'var(--success)'
    form.reset()
    setTimeout(() => { btn.textContent = 'Envoyer la demande'; btn.style.background = '' }, 4000)
  })
}

export const poleCard = (p) => `
  <article class="pole-card" id="pole${p.num}">
    <div class="pole-head">
      <span class="pole-num">${p.num}</span>
      <span class="pole-line"></span>
      <h3 class="pole-title">${p.title}</h3>
    </div>
    <p class="pole-subtitle">${p.subtitle}</p>
    <div class="pole-body">
      <div class="pole-text">
        <p class="pole-desc">${p.desc}</p>
        ${p.extra ? `<p class="pole-extra">${p.extra}</p>` : ''}
        <ul class="pole-items">${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <a class="btn btn-outline" href="#/#contact">[ ${p.cta} ]</a>
      </div>
      <div class="pole-visual"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
    </div>
  </article>
`

export const sectorCard = (s) => `
  <article class="sector-card">
    <span class="sector-icon">${s.icon}</span>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
  </article>
`

export const reasonCard = (r) => `
  <article class="reason-card">
    <span class="reason-num">${r.num}</span>
    <h4>${r.title}</h4>
    <p>${r.desc}</p>
  </article>
`

export const stepCard = (s) => `
  <article class="step-card">
    <span class="step-num">${s.num}</span>
    <div class="step-line"></div>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
  </article>
`

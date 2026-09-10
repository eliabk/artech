import { IMG, POLES, SECTORS, CLIENTS, REASONS, STEPS, renderHeader, renderFooter, setupNav, setupForm } from '../data.js'

const VALUES = [
  { icon: '🎯', title: 'Performance', desc: 'Des solutions pensées pour la performance et la continuité de vos opérations.' },
  { icon: '🤝', title: 'Confiance', desc: 'Des relations professionnelles durables, fondées sur la transparence et la fiabilité.' },
  { icon: '⚡', title: 'Réactivité', desc: "Une équipe à l'écoute, capable de répondre rapidement à vos besoins." },
  { icon: '🔧', title: 'Expertise terrain', desc: 'Une connaissance approfondie des réalités opérationnelles, climatiques et techniques locales.' },
]

const STATS = [
  { num: '6', label: "Pôles d'expertise" },
  { num: '7+', label: 'Clients de référence' },
  { num: '100%', label: 'Approche B2B' },
  { num: '3', label: 'Principes fondamentaux' },
]

export function renderAbout(app) {
  app.innerHTML = `
    <div class="page">
      ${renderHeader('about')}

      <section class="about-hero">
        <div class="hero-bg"><img src="${IMG.team}" alt="" aria-hidden="true" /></div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <p class="hero-eyebrow">À PROPOS DE NOUS</p>
          <h1>ART-TECH SARL</h1>
          <p class="hero-tagline">L'expertise technologique à vos côtés.</p>
          <p class="hero-desc">Nous mettons la technologie, l'expertise technique et notre capacité d'approvisionnement au service de la performance de nos clients.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/#contact">[ DEMANDER UN DEVIS ]</a>
            <a class="btn btn-ghost-light" href="#/#contact">[ NOUS CONTACTER ]</a>
          </div>
        </div>
      </section>

      <section class="about-story">
        <div class="container about-split">
          <div class="about-story-text">
            <p class="eyebrow">NOTRE HISTOIRE <span></span></p>
            <h2 class="section-title">Un interlocuteur unique pour des <span>solutions complètes</span></h2>
            <p class="section-text">ART-TECH SARL accompagne les entreprises, industries, sites miniers, ONG, administrations et organisations professionnelles dans la fourniture, l'intégration et la maintenance de solutions adaptées à leurs besoins.</p>
            <p class="section-text">De l'approvisionnement international aux infrastructures IT, de la sécurité électronique aux solutions énergétiques, des EPI et consommables à la formation, nous proposons un interlocuteur unique pour des solutions complètes, fiables et adaptées au terrain.</p>
            <p class="section-text">Les besoins des organisations évoluent. Leurs contraintes aussi. C'est pourquoi ART-TECH SARL a développé une offre multisectorielle permettant de répondre à plusieurs catégories de besoins au sein d'une même organisation.</p>
          </div>
          <div class="about-story-visual">
            <img src="${IMG.office}" alt="Environnement professionnel ART-TECH SARL" />
          </div>
        </div>
      </section>

      <section class="about-approach">
        <div class="container">
          <h2 class="section-title center">NOTRE <span>APPROCHE</span></h2>
          <p class="section-lead center">Notre approche repose sur trois principes :</p>
          <div class="principles">
            <div class="principle"><span>1</span><p>Comprendre votre besoin</p></div>
            <div class="principle-arrow">→</div>
            <div class="principle"><span>2</span><p>Proposer la bonne solution</p></div>
            <div class="principle-arrow">→</div>
            <div class="principle"><span>3</span><p>Assurer son déploiement et son suivi</p></div>
          </div>
        </div>
      </section>

      <section class="about-stats">
        <div class="container stats-grid">
          ${STATS.map(s => `
            <div class="stat-card">
              <strong>${s.num}</strong>
              <span>${s.label}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="about-values">
        <div class="container">
          <h2 class="section-title center">NOS <span>VALEURS</span></h2>
          <p class="section-lead center">Ce qui guide notre action au quotidien.</p>
          <div class="values-grid">
            ${VALUES.map(v => `
              <article class="value-card">
                <span class="value-icon">${v.icon}</span>
                <h4>${v.title}</h4>
                <p>${v.desc}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="about-poles">
        <div class="container">
          <h2 class="section-title center">NOS 6 PÔLES <span>D'EXPERTISE</span></h2>
          <p class="section-lead center">Six pôles complémentaires réunis au sein d'une même entreprise.</p>
          <div class="about-poles-grid">
            ${POLES.map(p => `
              <a class="about-pole-card" href="#/#pole${p.num}">
                <span class="about-pole-num">${p.num}</span>
                <h4>${p.title}</h4>
                <p>${p.subtitle}</p>
                <span class="about-pole-link">En savoir plus →</span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="about-clients">
        <div class="container">
          <h2 class="section-title center">ILS NOUS FONT <span>CONFIANCE</span></h2>
          <p class="section-lead center">Des organisations de secteurs différents.</p>
          <p class="section-text center">Notre expérience auprès d'acteurs opérant dans différents environnements témoigne de notre capacité à répondre à des besoins professionnels variés.</p>
          <div class="clients-grid">
            ${CLIENTS.map(c => `
              <article class="client-card">
                <h4>${c.name}</h4>
                <p>${c.desc}</p>
              </article>
            `).join('')}
          </div>
          <p class="clients-note">Notre expérience ne se limite pas à un secteur. Elle nous permet au contraire de comprendre les contraintes de différents environnements et de proposer des solutions adaptées à chaque organisation.</p>
        </div>
      </section>

      <section class="about-reasons">
        <div class="container">
          <h2 class="section-title center">POURQUOI CHOISIR <span>ART-TECH SARL ?</span></h2>
          <p class="section-lead center">Plus qu'un fournisseur : un partenaire.</p>
          <div class="reasons-grid">
            ${REASONS.map(r => `
              <article class="reason-card">
                <span class="reason-num">${r.num}</span>
                <h4>${r.title}</h4>
                <p>${r.desc}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="about-cta">
        <div class="container about-cta-box">
          <div>
            <p class="eyebrow">PARLONS DE VOTRE BESOIN <span></span></p>
            <h2 class="section-title light">Votre réussite, <span>notre mission.</span></h2>
            <p class="section-lead light">Que vous recherchiez un équipement, une infrastructure, une solution de sécurité ou un accompagnement technique, ART-TECH SARL peut vous accompagner.</p>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/#contact">[ DEMANDER UN DEVIS ]</a>
            <a class="btn btn-ghost-light" href="#/#contact">[ CONTACTER ART-TECH SARL ]</a>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `
  setupNav()
}

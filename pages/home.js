import { IMG, POLES, SECTORS, CLIENTS, REASONS, STEPS, NEEDS, renderHeader, renderFooter, setupNav, setupForm, poleCard, sectorCard, reasonCard, stepCard } from '../data.js'

export function renderHome(app) {
  app.innerHTML = `
    <div class="page">
      ${renderHeader('home')}

      <section class="hero">
        <div class="hero-bg"><img src="${IMG.hero}" alt="" aria-hidden="true" /></div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <p class="hero-eyebrow">ART-TECH SARL</p>
          <h1>L'expertise technologique à vos côtés.</h1>
          <p class="hero-tagline">Des solutions technologiques, techniques et d'approvisionnement pour accompagner durablement votre performance.</p>
          <p class="hero-desc">ART-TECH SARL accompagne les entreprises, industries, sites miniers, ONG, administrations et organisations professionnelles dans la fourniture, l'intégration et la maintenance de solutions adaptées à leurs besoins.</p>
          <p class="hero-desc">De l'approvisionnement international aux infrastructures IT, de la sécurité électronique aux solutions énergétiques, des EPI et consommables à la formation, nous vous proposons un interlocuteur unique pour des solutions complètes, fiables et adaptées au terrain.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/#contact">[ DEMANDER UN DEVIS ]</a>
            <a class="btn btn-ghost" href="#/#contact">[ PARLER À UN EXPERT ]</a>
          </div>
        </div>
      </section>

      <section class="partner-section">
        <div class="container">
          <h2 class="section-title">UN PARTENAIRE UNIQUE. <span>DES SOLUTIONS COMPLÈTES.</span></h2>
          <p class="section-lead">Les besoins des organisations évoluent. Leurs contraintes aussi.</p>
          <p class="section-text">ART-TECH SARL a développé une offre multisectorielle permettant de répondre à plusieurs catégories de besoins au sein d'une même organisation.</p>
          <p class="section-text">Notre approche repose sur trois principes :</p>
          <div class="principles">
            <div class="principle"><span>1</span><p>Comprendre votre besoin</p></div>
            <div class="principle-arrow">→</div>
            <div class="principle"><span>2</span><p>Proposer la bonne solution</p></div>
            <div class="principle-arrow">→</div>
            <div class="principle"><span>3</span><p>Assurer son déploiement et son suivi</p></div>
          </div>
        </div>
      </section>

      <section class="poles-section" id="poles">
        <div class="container">
          <h2 class="section-title center">NOS 6 PÔLES <span>D'EXPERTISE</span></h2>
          <div class="poles-grid">
            ${POLES.map(poleCard).join('')}
          </div>
        </div>
      </section>

      <section class="sectors-section" id="secteurs">
        <div class="container">
          <h2 class="section-title center">DES SOLUTIONS POUR <span>PLUSIEURS SECTEURS</span></h2>
          <p class="section-lead center">Une expertise adaptée à votre environnement</p>
          <p class="section-text center">ART-TECH SARL ne s'adresse pas à un seul secteur d'activité. Notre approche multisolution nous permet d'accompagner différents types d'organisations, avec des besoins et des contraintes spécifiques.</p>
          <div class="sectors-grid">
            ${SECTORS.map(sectorCard).join('')}
          </div>
        </div>
      </section>

      <section class="clients-section" id="clients">
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
          <div class="center-action">
            <a class="btn btn-primary" href="#/#contact">[ VOIR NOS RÉALISATIONS ]</a>
          </div>
        </div>
      </section>

      <section class="reasons-section" id="pourquoi">
        <div class="container">
          <h2 class="section-title center">POURQUOI CHOISIR <span>ART-TECH SARL ?</span></h2>
          <p class="section-lead center">Plus qu'un fournisseur : un partenaire.</p>
          <div class="reasons-grid">
            ${REASONS.map(reasonCard).join('')}
          </div>
        </div>
      </section>

      <section class="steps-section" id="methode">
        <div class="container">
          <h2 class="section-title center">COMMENT <span>TRAVAILLONS-NOUS ?</span></h2>
          <p class="section-lead center">Une démarche simple et professionnelle.</p>
          <div class="steps-grid">
            ${STEPS.map(stepCard).join('')}
          </div>
        </div>
      </section>

      <section class="cta-section" id="contact">
        <div class="container cta-grid">
          <div class="cta-left">
            <h2 class="section-title light">BESOIN D'UN FOURNISSEUR POUR VOTRE <span>PROCHAIN PROJET ?</span></h2>
            <p class="section-lead light">Parlons de votre besoin.</p>
            <p class="cta-intro">Vous recherchez :</p>
            <ul class="needs-list">
              ${NEEDS.map(n => `<li>${n}</li>`).join('')}
            </ul>
            <p class="cta-conclusion">ART-TECH SARL peut vous accompagner.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contact-form">[ DEMANDER UN DEVIS ]</a>
              <a class="btn btn-ghost-light" href="#contact-form">[ CONTACTER ART-TECH SARL ]</a>
            </div>
          </div>
          <div class="cta-right" id="contact-form">
            <form class="contact-form" id="quoteForm">
              <h3>Demandez votre devis</h3>
              <label>Nom complet<input type="text" placeholder="Votre nom" required /></label>
              <label>Email<input type="email" placeholder="vous@entreprise.com" required /></label>
              <label>Téléphone<input type="tel" placeholder="+223 ..." /></label>
              <label>Votre besoin
                <select>
                  <option>Négoce international</option>
                  <option>Infrastructures IT & Réseaux</option>
                  <option>EPI & Consommables</option>
                  <option>Sécurité électronique & Cybersécurité</option>
                  <option>Solutions énergétiques</option>
                  <option>Formation</option>
                  <option>Autre</option>
                </select>
              </label>
              <label>Message<textarea placeholder="Décrivez votre projet..." rows="4"></textarea></label>
              <button class="btn btn-primary" type="submit">Envoyer la demande</button>
            </form>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `
  setupNav()
  setupForm()
}

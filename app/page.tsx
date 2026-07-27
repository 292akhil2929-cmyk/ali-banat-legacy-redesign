"use client";

import { useState } from "react";

const MATW = "https://matwproject.org/";

const projects = [
  { tag: "Sadaqah Jariyah", title: "Build a water well", copy: "Provide safe water for a community and a source of ongoing benefit for years to come.", href: "https://matwproject.org/sadaqah-jariyah/build-a-water-well", tone: "blue" },
  { tag: "Ongoing care", title: "Care for an orphan", copy: "Support food, education, healthcare and a safe environment for a child who needs the Ummah.", href: "https://matwproject.org/sponsor-an-orphan", tone: "pink" },
  { tag: "Immediate relief", title: "Feed a family", copy: "Help deliver meals, food packs and clean drinking water where the need is urgent.", href: "https://matwproject.org/food-and-water-aid", tone: "sand" },
  { tag: "Obligation", title: "Give your Zakat", copy: "Fulfil your obligation and help eligible families facing poverty and hardship.", href: "https://matwproject.org/zakat", tone: "navy" },
];

const faqs = [
  ["Who was Ali Banat?", "Ali was an Australian Muslim businessman and humanitarian who founded Muslims Around The World Project after being diagnosed with cancer in 2015. He passed away in 2018, but the mission he began continues today."],
  ["Is MATW still continuing his work?", "Yes. MATW continues to deliver humanitarian and development programmes including orphan care, emergency relief, food and water aid, Zakat and Sadaqah Jariyah projects."],
  ["Can I donate in memory of someone?", "Yes. Many supporters give Sadaqah Jariyah on behalf of someone they love. You can choose a project and set your intention through MATW."],
  ["Can I contribute without funding a full project?", "Yes. Your donation can be combined with the generosity of other supporters to help complete a project or provide immediate relief."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Ali Banat Legacy home" onClick={closeMenu}>
            <img src="/assets/favicon.svg" alt="" className="brand-mark" />
            <span>Ali Banat <em>Legacy</em></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#story">His story</a><a href="#mission">The mission</a><a href="#impact">Impact</a><a href="#continue">Give</a><a href="#faq">FAQ</a>
          </nav>
          <a className="button button-pink header-donate" href={MATW} target="_blank" rel="noreferrer">Donate</a>
          <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#story" onClick={closeMenu}>His story</a><a href="#mission" onClick={closeMenu}>The mission</a><a href="#impact" onClick={closeMenu}>Impact</a><a href="#continue" onClick={closeMenu}>Give</a><a href="#faq" onClick={closeMenu}>FAQ</a><a className="button button-pink" href={MATW} target="_blank" rel="noreferrer">Donate through MATW</a></nav>}
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content" id="main">
          <p className="eyebrow eyebrow-light">The story behind MATW Project</p>
          <h1>He was given limited time.<br /><i>He chose lasting impact.</i></h1>
          <p className="hero-copy">Ali Banat used the time Allah gave him to build a mission of water, dignity and care. Today, you can help carry that mission forward.</p>
          <div className="hero-actions"><a className="button button-pink button-large" href={MATW} target="_blank" rel="noreferrer">Donate through MATW <span>↗</span></a><a className="text-link light-link" href="#story">Discover Ali&apos;s story <span>↓</span></a></div>
          <div className="hero-proof"><span className="proof-dot" /> <span>Continuing the mission Ali began in 2015</span></div>
        </div>
        <div className="hero-note">One life. One decision.<br /><span>A legacy that continues.</span></div>
      </section>

      <section className="intro section-paper" id="story"><div className="content-grid"><div><p className="section-index">01 / His story</p><h2>What can I send ahead for my <i>Akhirah?</i></h2></div><div className="body-copy"><p>Before his diagnosis, Ali was a successful businessman living in Sydney. He had built a comfortable life and enjoyed the things many of us associate with achievement.</p><p>Then, in 2015, he was diagnosed with an aggressive form of cancer. The value of everything around him changed. His question became simple, urgent and lasting.</p><blockquote>“What can I send ahead for my Akhirah?”</blockquote><p>Ali began giving away what once mattered to him. He travelled to Togo, saw communities in need, and decided that whatever time remained would be used in service of others.</p></div></div></section>

      <section className="story-band" id="mission"><div className="band-inner"><p className="section-index section-index-light">02 / The beginning</p><div className="band-grid"><div><h2>One man.<br /><i>Three first steps.</i></h2><p className="light-copy">An orphan to care for. A well to build. A masjid where a community could gather. These first acts became the foundation of Muslims Around The World Project.</p><a className="button button-white" href="https://matwproject.org/about-us" target="_blank" rel="noreferrer">Meet the MATW mission <span>↗</span></a></div><div className="step-list"><div><span>01</span><strong>Care for an orphan</strong><p>Food, protection and education for children who had lost so much.</p></div><div><span>02</span><strong>Provide clean water</strong><p>Wells for drinking, washing, cooking and Wudu.</p></div><div><span>03</span><strong>Build a place of worship</strong><p>A masjid where people could pray, learn and gather.</p></div></div></div></div></section>

      <section className="message section-paper"><div className="narrow-copy"><p className="section-index">03 / The reminder</p><h2>His illness did not take away his purpose. <i>It revealed it.</i></h2><p>Ali called his diagnosis a gift—not because illness was easy, but because it awakened him before it was too late. His story asks each of us a quiet question: what will we leave behind?</p><div className="callout"><span>“</span><p>Do not wait. Do not assume you have more time. Leave behind something that continues to serve others.</p></div></div></section>

      <section className="impact-section" id="impact"><div className="impact-inner"><div className="impact-heading"><p className="section-index section-index-light">04 / The impact</p><h2>The mission grew.<br /><i>The purpose stayed.</i></h2><p>MATW continues to serve vulnerable communities through practical projects that turn compassion into lasting change.</p></div><div className="impact-stats"><div><strong>10+</strong><span>years of mission</span></div><div><strong>Global</strong><span>community-led work</span></div><div><strong>100%</strong><span>Zakat policy</span></div><div><strong>One</strong><span>legacy to continue</span></div></div><div className="impact-foot"><span>Impact figures should be updated from MATW&apos;s latest verified annual report.</span><a className="text-link light-link" href="https://matwproject.org/annual-reports" target="_blank" rel="noreferrer">View verified reports ↗</a></div></div></section>

      <section className="give-section section-paper" id="continue"><div className="wide-inner"><div className="give-heading"><div><p className="section-index">05 / Continue the legacy</p><h2>Choose where your<br /><i>intention takes you.</i></h2></div><p>Ali did not believe you had to be wealthy to make a difference. Start with a sincere intention and a project that matters to you.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card tone-${project.tone}`} key={project.title}><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.copy}</p><a className="card-link" href={project.href} target="_blank" rel="noreferrer">Support this project <span>↗</span></a></article>)}</div><div className="center-cta"><p>Giving in memory of someone you love?</p><a className="button button-pink" href="https://matwproject.org/sadaqah-jariyah" target="_blank" rel="noreferrer">Give Sadaqah Jariyah <span>↗</span></a></div></div></section>

      <section className="trust-section"><div className="content-grid"><div><p className="section-index">06 / Your trust</p><h2>Every donation is an <i>Amanah.</i></h2></div><div className="body-copy"><p>When you give, you are entrusting an intention, a sacrifice and a hope that Allah accepts your charity. MATW continues to treat that trust as an Amanah.</p><ul className="trust-list"><li>100% donation policy</li><li>Field monitoring and completion updates</li><li>Annual impact reporting</li><li>Dignified treatment of beneficiaries</li></ul><a className="text-link" href="https://matwproject.org/100-donation-policy" target="_blank" rel="noreferrer">Read the donation policy <span>↗</span></a></div></div></section>

      <section className="faq-section section-paper" id="faq"><div className="narrow-copy"><p className="section-index">07 / Questions</p><h2>Before you give, <i>know the mission.</i></h2><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div><p className="section-index section-index-light">A legacy that continues</p><h2>His story has been written.<br /><i>Yours is still being built.</i></h2><p>May every sincere act become a source of benefit that continues long after we leave this world.</p><a className="button button-pink button-large" href={MATW} target="_blank" rel="noreferrer">Continue Ali&apos;s legacy <span>↗</span></a></div></section>

      <footer className="site-footer"><div className="footer-inner"><div><a className="brand footer-brand" href="#top"><img src="/assets/favicon.svg" alt="" className="brand-mark" /><span>Ali Banat <em>Legacy</em></span></a><p>Honouring the life, message and humanitarian mission of Ali Banat, founder of Muslims Around The World Project.</p></div><div><strong>Explore</strong><a href="#story">His story</a><a href="#impact">Impact</a><a href="#faq">FAQ</a></div><div><strong>Continue the legacy</strong><a href={MATW} target="_blank" rel="noreferrer">MATW Project ↗</a><a href="https://matwproject.org/sadaqah-jariyah" target="_blank" rel="noreferrer">Sadaqah Jariyah ↗</a><a href="https://matwproject.org/annual-reports" target="_blank" rel="noreferrer">Annual reports ↗</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Ali Banat Legacy · Built around a mission that continues.</div></footer>

      <a className="mobile-donate" href={MATW} target="_blank" rel="noreferrer">Donate through MATW <span>↗</span></a>
      {cookieOpen && <div className="cookie"><p>This site uses anonymous analytics to understand how the story is read.</p><div><button className="cookie-decline" onClick={() => setCookieOpen(false)}>Decline</button><button className="cookie-accept" onClick={() => setCookieOpen(false)}>Accept</button></div></div>}
    </main>
  );
}

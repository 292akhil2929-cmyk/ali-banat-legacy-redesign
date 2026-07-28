"use client";

import { useEffect, useState } from "react";
import CircularGallery from "../components/CircularGallery";

const MATW = "https://matwproject.org/";

const heroGalleryItems = [
  { image: "/assets/matw-ali-banat.jpg", text: "Founder · Ali Banat" },
  { image: "/assets/ali-banat-child.jpg", text: "MATW Project · Service" },
  { image: "/assets/matw-community-2.jpg", text: "Community · Hope in action" },
  { image: "/assets/matw-legacy-children.png", text: "Orphan care · Dignity" },
  { image: "/assets/matw-legacy-community.png", text: "The legacy · Continues" },
  { image: "/assets/matw-ali-message.jpg", text: "Purpose · A final message" },
];

const projects: Array<{
  tag: string;
  title: string;
  copy: string;
  href: string;
  action: string;
  tone: string;
  quote?: string;
  cite?: string;
  subHref?: string;
  subAction?: string;
}> = [
  {
    tag: "Urgent",
    title: "Gaza Emergency",
    copy: "As the crisis continues, families face displacement, hunger and loss. Help deliver urgent relief where it is needed most, right now.",
    href: "https://matwproject.org/gaza-emergency",
    action: "Support Gaza",
    tone: "urgent",
  },
  {
    tag: "Sadaqah Jariyah",
    title: "Build a water well",
    copy: "Clean water can transform a community's health, dignity and future — and long after your donation, the water may continue to flow.",
    quote:
      "When asked which charity is best, the Prophet ﷺ replied: ‘Providing water.’",
    cite: "Sunan Abi Dawud",
    href: "https://matwproject.org/sadaqah-jariyah/build-a-water-well",
    action: "Build a water well",
    tone: "blue",
  },
  {
    tag: "Ongoing care",
    title: "Care for an orphan",
    copy: "Give a vulnerable child food, education, healthcare and a safe environment — and the reminder that they have not been forgotten by the Ummah.",
    quote:
      "‘I and the one who looks after an orphan will be like this in Paradise.’",
    cite: "The Messenger of Allah ﷺ, Sahih al-Bukhari",
    href: "https://matwproject.org/sponsor-an-orphan",
    action: "Support an orphan",
    tone: "pink",
  },
  {
    tag: "Sadaqah Jariyah",
    title: "Build a masjid",
    copy: "A masjid is more than a building — it becomes the spiritual heart of a community, where every prayer and every lesson may become ongoing reward.",
    quote:
      "‘Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise.’",
    cite: "Sahih al-Bukhari & Muslim",
    href: "https://matwproject.org/sadaqah-jariyah/build-a-masjid",
    action: "Help build a masjid",
    tone: "sand",
  },
  {
    tag: "Obligation",
    title: "Give your Zakat",
    copy: "Fulfil your obligation, purify your wealth and support eligible families facing poverty and hardship — with a 100% Zakat policy.",
    href: "https://matwproject.org/zakat",
    action: "Give Zakat",
    subHref: "https://matwproject.org/zakat-calculator",
    subAction: "Calculate your Zakat",
    tone: "navy",
  },
  {
    tag: "Immediate relief",
    title: "Food & water aid",
    copy: "Hot meals, food packs and clean drinking water for families surviving conflict, displacement and poverty. A meal may seem simple — for a hungry child, it is relief.",
    href: "https://matwproject.org/food-and-water-aid",
    action: "Provide food & water",
    tone: "blue",
  },
];

const faqs = [
  [
    "Who was Ali Banat?",
    "Ali Banat was an Australian Muslim businessman and humanitarian who founded Muslims Around The World Project. After being diagnosed with an aggressive form of cancer in 2015, he reassessed his life and dedicated his time and wealth to helping people in need. His story became widely known through the ‘Gifted with Cancer’ interview. Ali passed away in 2018, but the organisation and mission he began continue today.",
  ],
  [
    "What did Ali Banat mean by ‘Gifted with Cancer’?",
    "Ali described his diagnosis as a gift because it changed the way he viewed his life — helping him recognise that material possessions were temporary and that his remaining time could be used to seek the pleasure of Allah and help others. He did not mean the illness was easy; he saw the awakening it created as a mercy and an opportunity to prepare for the Hereafter.",
  ],
  [
    "How did Ali Banat start MATW Project?",
    "After his diagnosis, Ali travelled to Togo in West Africa and witnessed communities facing poverty, water scarcity and a lack of essential services. He began supporting orphan care, water wells and masjid construction — projects that became the foundation of Muslims Around The World Project.",
  ],
  [
    "What does MATW stand for?",
    "MATW stands for Muslims Around The World — a name reflecting Ali's vision of uniting Muslims from different communities and countries behind meaningful humanitarian work.",
  ],
  [
    "Is MATW still continuing Ali's work?",
    "Yes. MATW continues the mission Ali began across multiple countries — orphan care, emergency relief, food and water aid, masjids, water projects, healthcare, education, Zakat and Sadaqah Jariyah.",
  ],
  [
    "How can I continue Ali Banat's legacy?",
    "Support a project that creates lasting benefit: sponsor an orphan, build a water well, build a masjid, give Zakat, provide food and water, or support emergency relief through MATW.",
  ],
  [
    "Can I donate in memory of someone?",
    "Yes. Many supporters give Sadaqah Jariyah on behalf of a loved one who has passed away. Projects like wells and masjids may continue benefiting people for years, creating the possibility of continuous reward, Insha Allah.",
  ],
  [
    "Can I contribute without funding a full project?",
    "Yes — contribute any amount. Your donation is combined with the generosity of other supporters to help complete a well, build a masjid, provide food or support other initiatives. Every contribution matters.",
  ],
  [
    "Where does MATW work?",
    "MATW delivers humanitarian and development programmes across countries affected by poverty, conflict, displacement and crisis. Locations change with current needs — explore MATW's current campaigns for the latest work.",
  ],
];

const chapterRailItems = [
  ["story", "A life of success"],
  ["turning-point", "The turning point"],
  ["legacy", "From reflection to action"],
  ["legacy", "The birth of MATW"],
  ["turning-point", "His final wish"],
  ["story", "The legacy lives on"],
  ["impact", "Ten years of impact"],
  ["continue", "Continue the legacy"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [railOnDark, setRailOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main > section"));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting)
          ?.target as HTMLElement | undefined;
        if (!current) return;
        setRailOnDark(
          current.classList.contains("hero") ||
            current.classList.contains("dark-story") ||
            current.classList.contains("blue-mission") ||
            current.classList.contains("impact-section") ||
            current.classList.contains("final-cta"),
        );
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Ali Banat Legacy home"
            onClick={closeMenu}
          >
            <img src="/assets/favicon.svg" alt="" className="brand-mark" />
            <span>
              Ali Banat <em>Legacy</em>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#story">His story</a>
            <a href="#legacy">The legacy</a>
            <a href="#impact">Impact</a>
            <a href="#continue">Continue it</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="button button-pink header-donate"
            href={MATW}
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#story" onClick={closeMenu}>
              His story
            </a>
            <a href="#legacy" onClick={closeMenu}>
              The legacy
            </a>
            <a href="#impact" onClick={closeMenu}>
              Impact
            </a>
            <a href="#continue" onClick={closeMenu}>
              Continue it
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a
              className="button button-pink"
              href={MATW}
              target="_blank"
              rel="noreferrer"
            >
              Donate through MATW
            </a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-circular-gallery" aria-label="Ali Banat and MATW Project image gallery">
          <CircularGallery
            items={heroGalleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 18px Figtree"
            scrollEase={0.05}
            scrollSpeed={2}
          />
        </div>
        <div className="hero-content" id="main">
          <p className="eyebrow eyebrow-light">
            The story of Ali Banat &amp; MATW Project
          </p>
          <h1>
            One life.
            <br />
            One decision.
            <br />
            <i>A legacy that continues.</i>
          </h1>
          <p className="hero-copy">
            When Ali Banat was told his life could soon come to an end, he made
            a decision that would transform the lives of people around the
            world. From that decision,{" "}
            <a
              href="https://matwproject.org/about-us"
              target="_blank"
              rel="noreferrer"
            >
              Muslims Around The World Project
            </a>{" "}
            was born.
          </p>
          <div className="hero-actions">
            <a
              className="button button-pink button-large"
              href={MATW}
              target="_blank"
              rel="noreferrer"
            >
              Continue the legacy <span>↗</span>
            </a>
            <a className="text-link light-link" href="#story">
              Read his story <span>↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-dot" />{" "}
            <span>Honouring the mission Ali began in 2015</span>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Ali Banat serving children through the MATW mission"
        >
          <div className="hero-visual-frame" aria-hidden="true" />
          <img
            className="hero-visual-main"
            src="/assets/matw-ali-banat.jpg"
            alt="Ali Banat speaking about the humanitarian mission he founded"
          />
          <img
            className="hero-visual-secondary"
            src="/assets/matw-community-2.jpg"
            alt="Children supported through MATW humanitarian work"
          />
          <p className="hero-visual-caption">
            <span>Ali Banat</span>
            <br />A mission that continues
          </p>
        </div>
      </section>

      <section className="intro section-paper chapter-one" id="story">
        <nav
          className={`chapter-rail ${railOnDark ? "is-on-dark" : "is-on-light"}`}
          aria-label="Story chapters"
        >
          {chapterRailItems.map(([id, label], index) => (
            <a className="chapter-rail-item" href={`#${id}`} key={id}>
              <span className="chapter-rail-tick" />
              <span className="chapter-rail-label">
                <b>{String(index + 1).padStart(2, "0")}</b>
                {label}
              </span>
            </a>
          ))}
        </nav>
        <div className="content-grid chapter-one-grid">
          <div className="chapter-one-lead">
            <p className="section-index">Chapter 01 — A life of success</p>
            <h2>
              Who was <i>Ali Banat?</i>
            </h2>
            <p className="chapter-one-subtitle">
              Ali Banat, founder of MATW Project
              <br />
              <span>
                Ali Banat (1982–2018), founder of Muslims Around The World
                Project
              </span>
            </p>
            <figure className="chapter-one-image">
              <img
                src="/assets/ali-banat-child.jpg"
                alt="Ali Banat with a child during his humanitarian work"
              />
              <figcaption>
                <span>Before the diagnosis</span>
                <strong>A life that looked complete.</strong>
              </figcaption>
            </figure>
          </div>
          <div className="body-copy">
            <p>
              Before his diagnosis, Ali Banat was a successful businessman
              living in Sydney, Australia. He had worked hard to build a
              comfortable life and enjoyed many of the things commonly
              associated with achievement — businesses, luxury vehicles,
              designer clothing and material security.
            </p>
            <p>From the outside, it looked like success.</p>
            <p>
              But in 2015, Ali received news that would change the direction of
              his life: a diagnosis of an aggressive form of cancer, and the
              possibility that his time was limited. The value of everything
              around him changed. The question was no longer how much he could
              accumulate.
            </p>
            <blockquote>“What can I send ahead for my Akhirah?”</blockquote>
            <p>
              Ali understood that wealth was an Amanah. Time was an Amanah.
              Health was an Amanah. And whatever remained of his life was an
              opportunity to seek the pleasure of Allah.
            </p>
            <p>
              He began giving away possessions that had once been important to
              him. He stepped away from the life he had known and focused his
              attention on people who had far less. He did not know how much
              time he had left — but he knew how he wanted to use it.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-story" id="turning-point">
        <div className="section-inner">
          <p className="section-index section-index-light">
            Chapter 02 — The turning point
          </p>
          <div className="story-two-col">
            <div>
              <h2>
                He called it <i>a gift.</i>
              </h2>
              <p className="light-copy">
                For many people, such a diagnosis would represent only fear,
                pain and uncertainty. For Ali, it became an awakening. He
                described his diagnosis as being{" "}
                <strong>“gifted with cancer”</strong>—not because the illness
                was easy, but because it awakened him before it was too late.
              </p>
              <p className="light-copy">
                His message was not that illness should be desired. It was that
                Allah can place an awakening inside even the most difficult
                test. This life is temporary, our possessions will remain
                behind—but the good we do for the sake of Allah can continue
                long after we leave this world.
              </p>
            </div>
            <a
              className="video-card"
              href="https://www.youtube.com/watch?v=dzL6BLPAFBo"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Ali Banat Gifted with Cancer interview"
            >
              <img
                src="https://i.ytimg.com/vi/dzL6BLPAFBo/maxresdefault.jpg"
                alt="Ali Banat in the Gifted with Cancer interview"
              />
              <span className="play-button">▶</span>
              <strong>Watch — “Gifted with Cancer” ↗</strong>
            </a>
          </div>
          <div className="quote-light">
            His illness did not take away his purpose. By the mercy of Allah, it
            revealed it.
          </div>
        </div>
      </section>

      <section className="mission-section section-paper" id="legacy">
        <div className="section-inner">
          <p className="section-index">
            Chapter 03 — From reflection to action
          </p>
          <div className="mission-head">
            <div>
              <h2>
                He travelled to Togo—and <i>could not look away.</i>
              </h2>
            </div>
            <div className="body-copy">
              <p>
                Ali&apos;s transformation was not limited to words. He wanted to
                act. He travelled to Togo in West Africa, where he witnessed
                communities living without many of the things most of us take
                for granted: families facing poverty, children without education
                or proper care, communities struggling to access clean water and
                Muslims without a safe, dignified place to pray.
              </p>
              <p>
                The experience moved him deeply. It showed him that even one
                person, with sincere intention and determined action, could help
                transform the future of an entire community.
              </p>
            </div>
          </div>
          <div className="first-mission">
            <div>
              <span>١</span>
              <h3>Care for an orphan</h3>
              <p>
                Children who had lost everything received food, protection and
                education.
              </p>
            </div>
            <div>
              <span>٢</span>
              <h3>Provide clean water</h3>
              <p>
                Wells brought safe water for drinking, cooking, washing and
                Wudu.
              </p>
            </div>
            <div>
              <span>٣</span>
              <h3>Build a place of worship</h3>
              <p>A masjid where a community could pray, learn and gather.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-mission">
        <div className="section-inner">
          <p className="section-index section-index-light">
            Chapter 04 — The birth of MATW
          </p>
          <div className="story-two-col">
            <div>
              <h2>
                A mission for Muslims <i>around the world.</i>
              </h2>
            </div>
            <div className="light-copy">
              <p>
                Ali founded{" "}
                <a
                  href="https://matwproject.org/purpose"
                  target="_blank"
                  rel="noreferrer"
                >
                  Muslims Around The World Project
                </a>{" "}
                with a clear purpose: to serve vulnerable people, strengthen
                communities and give others the opportunity to invest in their
                Hereafter.
              </p>
              <p>
                MATW was not created to be a monument to one man. It was created
                to help people—to turn compassion into action and to bring
                together Muslims from around the world behind projects that
                create immediate relief and lasting change.
              </p>
              <p>
                Ali knew he could not complete this mission alone. He invited
                the Ummah to join him. What started as one man&apos;s deeply
                personal mission became a movement.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-white"
                  href={MATW}
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn about MATW <span>↗</span>
                </a>
                <a
                  className="text-link light-link"
                  href="https://matwproject.org/sadaqah-jariyah"
                  target="_blank"
                  rel="noreferrer"
                >
                  Give Sadaqah Jariyah ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-story final-message">
        <div className="section-inner">
          <p className="section-index section-index-light">
            Chapter 05 — His final wish
          </p>
          <div className="story-two-col">
            <div>
              <h2>
                A reminder for those of us <i>who remain.</i>
              </h2>
              <p className="light-copy">
                As Ali&apos;s health declined, his concern remained focused on
                the mission. He wanted the work to continue. He encouraged
                people to have a goal, develop a plan and support a project that
                could benefit others.
              </p>
              <p className="light-copy">
                His final message was not centred on what he had lost. It was
                centred on what the rest of us could still do.
              </p>
            </div>
            <a
              className="video-card"
              href="https://www.youtube.com/watch?v=KBRMP9t36go"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Ali Banat His Final Message"
            >
              <img
                src="https://i.ytimg.com/vi/KBRMP9t36go/maxresdefault.jpg"
                alt="Ali Banat delivering his final message"
              />
              <span className="play-button">▶</span>
              <strong>Watch — Ali&apos;s final message ↗</strong>
            </a>
          </div>
          <ul className="creed">
            <li>Do not wait.</li>
            <li>Do not assume you have more time.</li>
            <li>
              Do not underestimate what Allah can place in a sincere act of
              charity.
            </li>
            <li>
              Leave behind something that continues to serve others after you
              are gone.
            </li>
          </ul>
        </div>
      </section>

      <section className="intro section-paper">
        <div className="content-grid">
          <div>
            <p className="section-index">Chapter 06 — The legacy lives on</p>
            <h2>
              Ali returned to Allah. <i>His mission did not stop.</i>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Ali Banat passed away in May 2018. But the projects he began
              continued. The wells continued to provide water. The masjids
              continued to welcome worshippers. The children continued to
              receive care. And the people inspired by his story continued to
              give.
            </p>
            <p>
              This is the beauty of{" "}
              <a
                href="https://matwproject.org/sadaqah-jariyah"
                target="_blank"
                rel="noreferrer"
              >
                Sadaqah Jariyah
              </a>
              . A person may leave this world, but the reward of their good
              deeds may continue to reach them—every prayer offered in a masjid
              they helped build, every sip taken from a well they helped
              provide, every child educated or cared for because of their
              generosity.
            </p>
            <blockquote>
              A legacy is not measured by how long we live. It is measured by
              what we leave behind.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-inner">
          <p className="section-index section-index-light">
            Chapter 07 — Ten years of impact
          </p>
          <div className="impact-heading">
            <h2>
              From one mission to a <i>decade of service.</i>
            </h2>
            <p>
              What began with an orphan, a water well and a masjid in Togo has
              grown into an international humanitarian organisation — responding
              wherever poverty, conflict, disaster and displacement leave
              families in urgent need. The scale has grown. The purpose has not:
              to serve for the sake of Allah, honour the Amanah of every donor,
              and help people with dignity.
            </p>
          </div>
          <ol className="impact-timeline">
            <li>
              <span>2015</span>
              <div>
                <h3>The diagnosis</h3>
                <p>
                  Ali is diagnosed with an aggressive cancer—and calls it a
                  gift. He begins giving his wealth away.
                </p>
              </div>
            </li>
            <li>
              <span>2015–16</span>
              <div>
                <h3>Togo, and the birth of MATW</h3>
                <p>
                  Ali travels to West Africa and founds Muslims Around The World
                  Project: orphan care, water and a masjid.
                </p>
              </div>
            </li>
            <li>
              <span>2018</span>
              <div>
                <h3>Ali returns to Allah</h3>
                <p>
                  Ali passes away in May 2018. The projects he began keep
                  serving—and his story keeps spreading.
                </p>
              </div>
            </li>
            <li>
              <span>2018–24</span>
              <div>
                <h3>A movement grows</h3>
                <p>
                  MATW expands into emergency relief, food and water aid, Zakat
                  distribution, healthcare and education across many countries.
                </p>
              </div>
            </li>
            <li>
              <span>Today</span>
              <div>
                <h3>The legacy is still growing</h3>
                <p>
                  Donors, volunteers, field teams and communities around the
                  world continue what one man began.
                </p>
              </div>
            </li>
          </ol>
          <div className="impact-stats">
            <div>
              <strong>18,000+</strong>
              <span>Orphans under ongoing care</span>
            </div>
            <div>
              <strong>2,900+</strong>
              <span>Water wells built</span>
            </div>
            <div>
              <strong>Hundreds</strong>
              <span>Masjids constructed</span>
            </div>
            <div>
              <strong>Millions</strong>
              <span>Meals &amp; food items distributed</span>
            </div>
          </div>
          <div className="impact-foot">
            <span>
              Figures reflect the working copy for this page. Confirm MATW&apos;s
              latest verified cumulative figures before launch.
            </span>
            <a
              className="text-link light-link"
              href="https://matwproject.org/annual-reports"
              target="_blank"
              rel="noreferrer"
            >
              Explore MATW&apos;s impact ↗
            </a>
            <a className="text-link light-link" href="https://matwproject.org/live-on-field" target="_blank" rel="noreferrer">
              See MATW live on the field →
            </a>
          </div>
        </div>
      </section>

      <section className="give-section section-paper" id="continue">
        <div className="wide-inner">
          <div className="give-heading">
            <div>
              <p className="section-index">Chapter 08 — Continue the legacy</p>
              <h2>
                What will you <i>leave behind?</i>
              </h2>
            </div>
            <p>
              Ali&apos;s story was never intended to end with Ali. It was intended
              to awaken something in the rest of us. You do not need to be
              wealthy to make a difference. You do not need to fund an entire
              project alone. You do not need to wait until you feel ready.
            </p>
          </div>
          <p className="give-intro">
            Your act may feel small to you. But when it is sincere and accepted
            by Allah, its reward can be greater than you imagine.
          </p>
          <div className="project-grid" id="donate">
            {projects.map((project) => (
              <article
                className={`project-card tone-${project.tone}`}
                key={project.title}
              >
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                {project.quote && (
                  <blockquote className="project-quote">
                    {project.quote} <cite>— {project.cite}</cite>
                  </blockquote>
                )}
                <a
                  className="card-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.action}{" "}
                  <span>↗</span>
                </a>
                {project.subHref && (
                  <a className="project-sub-link" href={project.subHref} target="_blank" rel="noreferrer">
                    {project.subAction} →
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="center-cta">
            <p>
              You can give on behalf of someone you love, or in memory of
              someone who has returned to Allah.
            </p>
            <a
              className="button button-pink"
              href="https://matwproject.org/sadaqah-jariyah"
              target="_blank"
              rel="noreferrer"
            >
              Give Sadaqah Jariyah <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="content-grid">
          <div>
            <p className="section-index">Trust</p>
            <h2>
              A legacy built on <i>Amanah.</i>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Every donation is more than a transaction. It represents
              someone&apos;s intention, someone&apos;s sacrifice, someone&apos;s
              hope that Allah will accept their charity. MATW understands that
              this trust is an Amanah — and the principles that guided Ali&apos;s
              original mission continue to shape how donations are handled,
              projects are delivered and impact is reported.
            </p>
            <ul className="trust-list">
              <li>100% donation policy</li>
              <li>Field monitoring &amp; completion updates</li>
              <li>Annual impact reporting</li>
              <li>Respect for donor intentions</li>
              <li>Dignified treatment of beneficiaries</li>
              <li>Careful, responsible project selection</li>
            </ul>
            <div className="hero-actions">
              <a
                className="text-link"
                href="https://matwproject.org/100-donation-policy"
                target="_blank"
                rel="noreferrer"
              >
                Read the 100% donation policy ↗
              </a>
              <a
                className="text-link"
                href="https://matwproject.org/annual-reports"
                target="_blank"
                rel="noreferrer"
              >
                View impact reports ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-paper" id="faq">
        <div className="narrow-copy">
          <p className="section-index">Search-led content</p>
          <h2>
            Frequently <i>asked questions.</i>
          </h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-index section-index-light">Epilogue</p>
          <h2>
            His story has been written.
            <br />
            <i>His legacy is still being built.</i>
          </h2>
          <p>
            Ali used the time Allah gave him to begin something that would
            continue beyond his lifetime. Today, that responsibility passes to
            us.
          </p>
          <p>
            You may not know how long the impact will continue. You may never
            meet the people who benefit. But Allah sees every sincere intention
            — and Allah never allows a good deed to be lost.
          </p>
          <a
            className="button button-pink button-large"
            href={MATW}
            target="_blank"
            rel="noreferrer"
          >
            Continue Ali&apos;s legacy <span>↗</span>
          </a>
          <a className="text-link light-link final-project-link" href="#donate">Choose a project →</a>
          <div className="dua">
            <p>
              May Allah have mercy on our brother Ali Banat, forgive his
              shortcomings and grant him the highest levels of Jannatul Firdaus.
            </p>
            <p>
              May Allah accept every orphan cared for, every meal provided,
              every drop of water given and every masjid built through the
              mission he began as an ongoing source of reward for him.
            </p>
            <p>
              May Allah awaken our hearts before it is too late, and help each
              of us leave behind deeds that continue benefiting others after we
              return to Him. <i>Ameen.</i>
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <a className="brand footer-brand" href="#top">
              <img src="/assets/favicon.svg" alt="" className="brand-mark" />
              <span>
                Ali Banat <em>Legacy</em>
              </span>
            </a>
            <p>
              Honouring the life, message and humanitarian mission of Ali Banat,
              founder of Muslims Around The World Project.
            </p>
          </div>
          <div>
            <strong>Explore</strong>
            <a href="https://matwproject.org/ali-banat" target="_blank" rel="noreferrer">Ali&apos;s story on MATW</a>
            <a href="https://matwproject.org/about-us" target="_blank" rel="noreferrer">About MATW Project</a>
            <a href="https://matwproject.org/purpose" target="_blank" rel="noreferrer">MATW&apos;s purpose</a>
            <a href="https://matwproject.org/annual-reports" target="_blank" rel="noreferrer">Annual impact reports</a>
            <a href="https://matwproject.org/live-on-field" target="_blank" rel="noreferrer">Live on the field</a>
          </div>
          <div>
            <strong>Continue the legacy</strong>
            <a href={MATW} target="_blank" rel="noreferrer">
              MATW Project ↗
            </a>
            <a
              href="https://matwproject.org/sadaqah-jariyah"
              target="_blank"
              rel="noreferrer"
            >
              Sadaqah Jariyah ↗
            </a>
            <a
              href="https://matwproject.org/annual-reports"
              target="_blank"
              rel="noreferrer"
            >
              Annual reports ↗
            </a>
          </div>
          <div>
            <strong>Information &amp; trust</strong>
            <a href="https://matwproject.org/100-donation-policy" target="_blank" rel="noreferrer">100% donation policy</a>
            <a href="https://matwproject.org/100-zakat-donation-policy" target="_blank" rel="noreferrer">100% Zakat policy</a>
            <a href="https://matwproject.org/faq/" target="_blank" rel="noreferrer">MATW FAQs</a>
            <a href="https://matwproject.org/contact" target="_blank" rel="noreferrer">Contact MATW</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Ali Banat Legacy · A legacy that
          continues.
        </div>
      </footer>

      <a className="mobile-donate" href={MATW} target="_blank" rel="noreferrer">
        Continue Ali&apos;s legacy <span>↗</span>
      </a>
      {cookieOpen && (
        <div className="cookie">
          <p>
            This site uses anonymous analytics to understand how the story is
            read.
          </p>
          <div>
            <button
              className="cookie-decline"
              onClick={() => setCookieOpen(false)}
            >
              Decline
            </button>
            <button
              className="cookie-accept"
              onClick={() => setCookieOpen(false)}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

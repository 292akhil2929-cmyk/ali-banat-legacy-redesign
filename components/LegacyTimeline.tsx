"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import {
  actions,
  chapters,
  commonQuestions,
  finalReminders,
  firstActs,
  impactImages,
  impactMetrics,
  impactTimeline,
  trustPrinciples,
  type Chapter,
} from "../app/story-data";

const MATW = "https://matwproject.org/";

function ChapterNavigation({ active, progress }: { active: number; progress: number }) {
  return (
    <aside className="story-rail" aria-label="Story chapters">
      <a className="rail-brand" href="#opening" aria-label="Ali Banat Legacy, return to opening">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-words">ALI BANAT <em>LEGACY</em></span>
      </a>
      <div className="rail-line" aria-hidden="true">
        <span style={{ height: `${progress * 100}%` }} />
      </div>
      <nav>
        {chapters.map((chapter, index) => (
          <a className={index === active ? "active" : ""} href={`#${chapter.id}`} key={chapter.id}>
            <i aria-hidden="true" />
            <b>{chapter.number}</b>
            <span>{chapter.nav}</span>
          </a>
        ))}
      </nav>
      <div className="rail-count" aria-live="polite">
        <strong>{chapters[active]?.number}</strong><span>/ {chapters.length.toString().padStart(2, "0")}</span>
      </div>
    </aside>
  );
}

function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <span className="ambient ambient-one" />
      <span className="ambient ambient-two" />
      <span className="grain" />
    </div>
  );
}

function LifeThread({ progress }: { progress: number }) {
  return (
    <div className="life-thread" aria-hidden="true">
      <span className="thread-track" />
      <span className="thread-live" style={{ height: `${progress * 100}%` }} />
      <i className="thread-pulse" style={{ top: `${Math.min(progress * 100, 99.5)}%` }} />
    </div>
  );
}

function ArchiveImage({ chapter }: { chapter: Chapter }) {
  return (
    <figure className={`archive archive-${chapter.treatment}`} data-cursor="View">
      <div className="archive-frame">
        <img src={chapter.image} alt={chapter.alt} loading={chapter.number === "01" ? "eager" : "lazy"} />
        <span className="archive-shine" aria-hidden="true" />
      </div>
      <figcaption><span>{chapter.year}</span>{chapter.caption}</figcaption>
      {chapter.treatment === "orbit" && <div className="matw-orbit" aria-hidden="true"><i>M</i><i>A</i><i>T</i><i>W</i></div>}
      {chapter.treatment === "branches" && <div className="legacy-branches" aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>}
    </figure>
  );
}

function QuoteMoment({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote className="quote-moment">
      <span aria-hidden="true">“</span>
      <p>{quote}</p>
      <cite>— {attribution || "Ali Banat Legacy"}</cite>
    </blockquote>
  );
}

function ImpactMoment() {
  return (
    <div className="impact-moment">
      <div className="impact-gallery" aria-label="MATW Project humanitarian work">
        <div className="impact-gallery-intro">
          <span>MATW / ON THE FIELD</span>
          <strong>One mission.<br />Millions of lives.</strong>
          <p>Real imagery sourced from MATW Project’s official website.</p>
        </div>
        {impactImages.map((image, index) => (
          <figure className={`impact-photo impact-photo-${index + 1}`} key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="history-direction" aria-label="MATW legacy timeline from 2015 to 2026">
        <span>2015</span>
        <i aria-hidden="true"><b /></i>
        <strong>2026</strong>
      </div>
      <div className="impact-history" aria-label="Ali Banat and MATW timeline">
        {impactTimeline.map((event, index) => (
          <article key={event.year}>
            <div className="history-marker"><i /><span>{String(index + 1).padStart(2, "0")}</span></div>
            <p>{event.year}</p>
            <h3>{event.title}</h3>
            <div>{event.body}</div>
          </article>
        ))}
      </div>
      <div className="metric-header">
        <span>The work, in numbers</span>
        <p>One intention, carried forward through millions of acts of service.</p>
      </div>
      <div className="metric-stream">
        {impactMetrics.map((metric) => (
          <div key={metric.label}>
            <CountUp end={metric.value} suffix={metric.suffix} />
            <p>{metric.label}</p>
          </div>
        ))}
      </div>
      <small>Figures are presented as MATW’s published 2024 impact data. Current totals may change as programmes continue.</small>
      <div className="impact-source">
        <span>Verified against MATW’s published 2024 figures</span>
        <a href="https://matwproject.org/pdf/MATW_General_2024_Achievements_Report_V7.pdf" target="_blank" rel="noreferrer">Read the 2024 achievements report ↗</a>
      </div>
    </div>
  );
}

function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <section className={`story-chapter chapter-${chapter.treatment} ${reverse ? "reverse" : ""}`} id={chapter.id} data-chapter={index}>
      <div className="chapter-node" aria-hidden="true"><span>{chapter.number}</span></div>
      <div className="chapter-shell">
        <header className="chapter-heading reveal">
          <p className="chapter-kicker"><span>Chapter {chapter.number}</span><i>{chapter.year}</i></p>
          <p className="chapter-eyebrow">{chapter.eyebrow}</p>
          <h2>{chapter.title} <em>{chapter.accent}</em></h2>
        </header>
        <div className="chapter-composition">
          <ArchiveImage chapter={chapter} />
          <div className="chapter-copy reveal">
            {chapter.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
            {chapter.quote && <QuoteMoment quote={chapter.quote} attribution={chapter.quoteAttribution} />}
            {chapter.number === "03" && (
              <div className="first-acts">
                {firstActs.map((act) => (
                  <article key={act.title}>
                    <span>{act.number}</span>
                    <div><strong>{act.title}</strong><p>{act.body}</p></div>
                  </article>
                ))}
                <small>Those first acts of service became the foundations of something much greater.</small>
              </div>
            )}
            {chapter.number === "05" && (
              <ol className="final-reminders">
                {finalReminders.map((reminder) => <li key={reminder}>{reminder}</li>)}
              </ol>
            )}
            {chapter.number === "04" && (
              <a className="story-link" href="https://matwproject.org/purpose" target="_blank" rel="noreferrer">
                Discover the beginning <span>↗</span>
              </a>
            )}
          </div>
        </div>
        {chapter.treatment === "impact" && <ImpactMoment />}
        {chapter.number === "08" && (
          <div className="chapter-eight-archive">
            <div className="legacy-actions" id="donate">
              {actions.map((action) => (
                <a href={action.href} target="_blank" rel="noreferrer" key={action.title}>
                  <span>{action.tag}</span>
                  <strong>{action.title}</strong>
                  <p>{action.description}</p>
                  {action.quote && <blockquote>{action.quote}<cite>— {action.citation}</cite></blockquote>}
                  <b>{action.cta} <i>↗</i></b>
                </a>
              ))}
            </div>
            <p className="memory-giving">You can give on behalf of someone you love, or in memory of someone who has returned to Allah.</p>
            <section className="amanah-panel" aria-labelledby="amanah-title">
              <div>
                <p>TRUST &amp; TRANSPARENCY</p>
                <h3 id="amanah-title">A legacy built on <em>Amanah.</em></h3>
                <p>Every donation is more than a transaction. It represents someone’s intention, someone’s sacrifice, someone’s hope that Allah will accept their charity. MATW understands that this trust is an Amanah — and the principles that guided Ali’s original mission continue to shape how donations are handled, projects are delivered and impact is reported.</p>
                <a href="https://matwproject.org/our-promise/100-donation-policy" target="_blank" rel="noreferrer">Read the current donation policy ↗</a>
              </div>
              <ul>{trustPrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section className="story-questions" aria-labelledby="questions-title">
              <p>REFERENCE NOTES</p>
              <h3 id="questions-title">The story, <em>clearly answered.</em></h3>
              <div>
                {commonQuestions.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}<span>+</span></summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const move = (event: MouseEvent) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
      const target = (event.target as HTMLElement).closest("[data-cursor],a");
      cursor.current.classList.toggle("is-active", Boolean(target));
      cursor.current.dataset.label = target?.getAttribute("data-cursor") || (target ? "Open" : "");
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="custom-cursor" ref={cursor} aria-hidden="true" />;
}

export default function LegacyTimeline() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? Math.min(Math.max(scrollY / max, 0), 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const nodes = chapters.map((chapter) => document.getElementById(chapter.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number((entry.target as HTMLElement).dataset.chapter);
        setActive(index);
        entry.target.classList.add("is-active");
      });
    }, { rootMargin: "-36% 0px -52% 0px", threshold: 0 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <a className="skip-link" href="#spark">Skip to the story</a>
      <Atmosphere />
      <LifeThread progress={progress} />
      <CustomCursor />
      <ChapterNavigation active={active} progress={progress} />

      <header className="document-nav">
        <a href="#opening" className="wordmark" aria-label="Ali Banat Legacy, return to opening">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-words">ALI BANAT <em>LEGACY</em></span>
        </a>
        <button aria-label="Toggle chapter menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#spark" onClick={() => setMenuOpen(false)}>The story</a>
          <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#legacy" onClick={() => setMenuOpen(false)}>Legacy</a>
          <a className="nav-cta" href={MATW} target="_blank" rel="noreferrer">Support the mission ↗</a>
        </nav>
      </header>

      <section className="opening" id="opening">
        <div className="opening-image" aria-hidden="true">
          <img src="/assets/hero-ali-children.jpg" alt="" />
        </div>
        <div className="opening-copy">
          <p className="opening-overline">A journey of faith, compassion and service</p>
          <h1><span>A life that</span><strong>became a legacy.</strong></h1>
          <div className="opening-name"><i />Ali Banat <small>Founder of MATW · returned to Allah in 2018</small></div>
          <div className="opening-actions">
            <a className="opening-support" href={MATW} target="_blank" rel="noreferrer" data-cursor="Support">
              <span>Support the cause</span>
              <i aria-hidden="true">↗</i>
            </a>
            <small>Continue Ali’s legacy through MATW Project.</small>
          </div>
        </div>
        <a className="scroll-cue" href="#spark"><span>Scroll to begin</span><i /></a>
        <div className="ignition" aria-hidden="true"><i /><span /></div>
      </section>

      <div className="chapters">
        {chapters.map((chapter, index) => <ChapterSection chapter={chapter} index={index} key={chapter.id} />)}
      </div>

      <section className="legacy-finale">
        <p>EPILOGUE</p>
        <h2><span>His story has been written.</span><em>His legacy is still being built.</em></h2>
        <p className="finale-copy">Ali used the time Allah gave him to begin something that would continue beyond his lifetime. Today, that responsibility passes to us.</p>
        <p className="finale-copy">You may not know how long the impact will continue. You may never meet the people who benefit. But Allah sees every sincere intention — and Allah never allows a good deed to be lost.</p>
        <div className="finale-dua">
          <p>May Allah have mercy on our brother Ali Banat, forgive his shortcomings and grant him the highest levels of Jannatul Firdaus.</p>
          <p>May Allah accept every orphan cared for, every meal provided, every drop of water given and every masjid built through the mission he began as an ongoing source of reward for him.</p>
          <p>May Allah awaken our hearts before it is too late, and help each of us leave behind deeds that continue benefiting others after we return to Him. Ameen.</p>
        </div>
        <a href={MATW} target="_blank" rel="noreferrer">Continue the legacy <span>↗</span></a>
        <div className="final-beam" aria-hidden="true"><i /></div>
      </section>

      <footer>
        <div><strong>ALI BANAT <span>LEGACY</span></strong><p>Honouring a life of faith, compassion and service.</p></div>
        <div><span className="footer-label">EXPLORE</span><a href="https://matwproject.org/about-us" target="_blank" rel="noreferrer">About MATW ↗</a><a href="https://matwproject.org/annual-reports" target="_blank" rel="noreferrer">Impact reports ↗</a><a href="https://matwproject.org/purpose" target="_blank" rel="noreferrer">MATW’s purpose ↗</a></div>
        <div><span className="footer-label">INFORMATION &amp; TRUST</span><a href="https://matwproject.org/our-promise/100-donation-policy" target="_blank" rel="noreferrer">Donation policy ↗</a><a href="https://matwproject.org/faq/" target="_blank" rel="noreferrer">MATW FAQs ↗</a><a href="https://matwproject.org/contact" target="_blank" rel="noreferrer">Contact MATW ↗</a></div>
        <small>Ali Banat Legacy is an initiative connected to MATW Project, the humanitarian organisation founded by Ali Banat. All donations are processed securely on matwproject.org.<br />© {new Date().getFullYear()} Ali Banat Legacy</small>
      </footer>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { actions, chapters, commonQuestions, impactMetrics, trustPrinciples, type Chapter } from "../app/story-data";

const MATW = "https://matwproject.org/";

function ChapterNavigation({ active, progress }: { active: number; progress: number }) {
  return (
    <aside className="story-rail" aria-label="Story chapters">
      <a className="rail-brand" href="#opening">ALI BANAT <span>LEGACY</span></a>
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
      <div className="impact-map" aria-hidden="true">
        <span className="world-core" />
        {Array.from({ length: 10 }, (_, i) => <i key={i} />)}
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
              {actions.map(([tag, title, href]) => (
                <a href={href} target="_blank" rel="noreferrer" key={title}>
                  <span>{tag}</span><strong>{title}</strong><i>↗</i>
                </a>
              ))}
            </div>
            <section className="amanah-panel" aria-labelledby="amanah-title">
              <div>
                <p>TRUST &amp; TRANSPARENCY</p>
                <h3 id="amanah-title">A legacy built on <em>Amanah.</em></h3>
                <p>MATW describes every donation as a trust. Its current policy explains how donations are used, while field updates and annual reports let supporters inspect the work.</p>
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
        <a href="#opening" className="wordmark">ALI BANAT <span>LEGACY</span></a>
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
        </div>
        <a className="scroll-cue" href="#spark"><span>Scroll to begin</span><i /></a>
        <div className="ignition" aria-hidden="true"><i /><span /></div>
      </section>

      <div className="chapters">
        {chapters.map((chapter, index) => <ChapterSection chapter={chapter} index={index} key={chapter.id} />)}
      </div>

      <section className="legacy-finale">
        <p>EPILOGUE</p>
        <h2><span>A life may end.</span><em>A legacy continues.</em></h2>
        <p className="finale-copy">Ali used the time Allah gave him to begin something that would continue beyond his lifetime. Today, that responsibility passes to us.</p>
        <a href={MATW} target="_blank" rel="noreferrer">Continue the legacy <span>↗</span></a>
        <div className="final-beam" aria-hidden="true"><i /></div>
      </section>

      <footer>
        <div><strong>ALI BANAT <span>LEGACY</span></strong><p>Honouring a life of faith, compassion and service.</p></div>
        <div><a href="https://matwproject.org/about-us" target="_blank" rel="noreferrer">About MATW ↗</a><a href="https://matwproject.org/annual-reports" target="_blank" rel="noreferrer">Impact reports ↗</a><a href="https://matwproject.org/our-promise/100-donation-policy" target="_blank" rel="noreferrer">Donation policy ↗</a></div>
        <div><a href="https://matwproject.org/contact" target="_blank" rel="noreferrer">Contact ↗</a><a href="https://matwproject.org/faq/" target="_blank" rel="noreferrer">MATW FAQs ↗</a><a href="https://matwproject.org/purpose" target="_blank" rel="noreferrer">Purpose ↗</a></div>
        <small>© {new Date().getFullYear()} Ali Banat Legacy</small>
      </footer>
    </main>
  );
}

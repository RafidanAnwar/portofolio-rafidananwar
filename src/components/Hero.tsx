import { personalInfo, socialLinks } from '../data/projects';
import { useTypingEffect } from '../hooks/useAnimations';
import { generateCV } from '../utils/generateCV';
import './Hero.css';

export default function Hero() {
  const typedText = useTypingEffect(
    ['Junior Web Developer', 'Junior IT Support', 'Junior AI Engineer'],
    80,
    40,
    2500
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__greeting">
              <span className="hero__wave">👋</span> Halo, saya
            </p>
            <h1 className="hero__name">{personalInfo.name}</h1>
            <div className="hero__role">
              <span className="hero__role-text">{typedText}</span>
              <span className="hero__cursor">|</span>
            </div>
            <p className="hero__description">{personalInfo.tagline}</p>

            <div className="hero__actions">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Lihat Project
              </button>
              <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Hubungi Saya
              </button>
              <button className="btn btn-secondary" onClick={generateCV} title="Download format CV ramah ATS">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download ATS CV
              </button>
            </div>

            <div className="hero__socials">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-glow" />
              <div className="hero__avatar-ring" />
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="hero__avatar"
                loading="eager"
              />
            </div>
            <div className="hero__floating-badge hero__floating-badge--1">
              <span>⚛️</span> React
            </div>
            <div className="hero__floating-badge hero__floating-badge--2">
              <span>🔷</span> TypeScript
            </div>
            <div className="hero__floating-badge hero__floating-badge--3">
              <span>🚀</span> Vite
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator" onClick={() => scrollTo('about')}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
}

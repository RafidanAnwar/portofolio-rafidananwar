import { personalInfo, projects, skills } from '../data/projects';
import { useScrollAnimation, useCounter } from '../hooks/useAnimations';
import './About.css';

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const stats = [
    { label: 'Projects', value: projects.length, suffix: '' },
    { label: 'Tech Stack', value: skills.length, suffix: '' },
    { label: 'Tahun Coding', value: 1, suffix: '' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Tentang Saya</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div ref={sectionRef} className={`about__content ${isVisible ? 'visible' : ''}`}>
          <div className="about__info">
            <div className="about__bio glass-card">
              <p>{personalInfo.bio}</p>
              <div className="about__location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="about__stats">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} delay={i} />
              ))}
            </div>
          </div>

          <div className="about__highlights">
            <div className="about__highlight-card glass-card">
              <div className="about__highlight-icon">🎯</div>
              <h3>Problem Solver</h3>
              <p>Mengubah kebutuhan bisnis menjadi solusi digital yang efektif dan efisien.</p>
            </div>
            <div className="about__highlight-card glass-card">
              <div className="about__highlight-icon">🚀</div>
              <h3>Fast Learner</h3>
              <p>Cepat beradaptasi dengan teknologi baru dan tren development terkini.</p>
            </div>
            <div className="about__highlight-card glass-card">
              <div className="about__highlight-icon">💬</div>
              <h3>Tech Communicator</h3>
              <p>Mampu menjembatani komunikasi teknis dan memberikan konsultasi IT yang mudah dipahami.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const { count, ref } = useCounter(stat.value, 1500);
  return (
    <div ref={ref} className={`about__stat animate-delay-${delay + 1}`}>
      <span className="about__stat-value">{count}{stat.suffix}</span>
      <span className="about__stat-label">{stat.label}</span>
    </div>
  );
}

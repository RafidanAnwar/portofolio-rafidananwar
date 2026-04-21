import { useState } from 'react';
import { skills } from '../data/projects';
import { useScrollAnimation } from '../hooks/useAnimations';
import './Skills.css';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'tools', label: 'Tools' },
] as const;

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, isVisible } = useScrollAnimation();

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Keahlian</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Teknologi dan tools yang saya gunakan untuk membangun solusi digital.
          </p>
        </div>

        <div className="skills__filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`skills__filter ${activeFilter === cat.key ? 'skills__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={ref} className={`skills__grid ${isVisible ? 'visible' : ''}`}>
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="skills__card glass-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__icon">
                  {skill.icon.startsWith('http') ? (
                    <img src={skill.icon} alt={skill.name} width="24" height="24" style={{ display: 'block' }} />
                  ) : (
                    skill.icon
                  )}
                </span>
                <span className="skills__name">{skill.name}</span>
                <span className="skills__level-text">{skill.level}%</span>
              </div>
              <div className="skills__bar">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${i * 0.1 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './Skills-section-component.css';
import { SkillCard } from './Skill-card/Skill-card-component.jsx';
import { skillsCard } from './Skill-card/skills-card.js';

export function Skills() {
  return (
    <>
      <div className='skills-section'>
        <div className='wrapper'>
          <div className='skills-section__item-container'>
            <h1 className='skills-section__title'>Skills</h1>
            <p className='skills-section__subtitle'>The main technologies and tools that I own.</p>
          </div>
          <div className='skills-section__skill-card-container'>
            <ul className='skills-section__skill-card-list'>
              {skillsCard.map((card) => (
                <SkillCard key={card.id} image={card.image} name={card.name}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

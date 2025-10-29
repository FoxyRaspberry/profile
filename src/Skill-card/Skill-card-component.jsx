import './Skill-card-component.css';
import { skillsCard } from './skills-card.js'

export function SkillCard({image, name}) {

  return (
    <li className='skills-section__skill-card skills-section__skill-card--gradient-border'>
      <img className='skills-section__skill-card-image' src={image} alt="skill" />
      <span className='skills-section__skill-card-name'>{name}</span>
    </li>
  );
}

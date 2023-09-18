

import React from 'react';
import SkillBar from '../components/SkillBar';

export default function Skill() {
    return (
        <div className="skill-bars">
          <SkillBar skillName="HTML" percentage="90%" />
          <SkillBar skillName="CSS" percentage="60%" />
          <SkillBar skillName="jQuery" percentage="85%" />
          <SkillBar skillName="Python" percentage="50%" />
          <SkillBar skillName="MySQL" percentage="75%" />
        </div>
      );
}


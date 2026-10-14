import SkillItem from "./skillItem";
import skillsData from "./skillsdata";

function Skills() {
  return (
    <section>
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiVuedotjs,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiWebpack,
  SiGraphql,
  SiSocketdotio,
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import styles from './SkillsShowcase.module.css';

interface Skill {
  name: string;
  proficiency: number;
  years: number;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsData {
  categories: SkillCategory[];
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  Go: <SiGo />,
  SQL: <FaDatabase />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <SiNodedotjs />,
  Express: <SiExpress />,
  'Vue.js': <SiVuedotjs />,
  FastAPI: <SiFastapi />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Redis: <SiRedis />,
  Elasticsearch: <SiElasticsearch />,
  AWS: <SiAmazonwebservices />,
  Docker: <SiDocker />,
  Kubernetes: <SiKubernetes />,
  Terraform: <SiTerraform />,
  Git: <SiGit />,
  Webpack: <SiWebpack />,
  GraphQL: <SiGraphql />,
  WebSockets: <SiSocketdotio />,
  Testing: <DiDatabase />,
  'CI/CD': <DiDatabase />,
};

const getProficiencyColor = (proficiency: number): string => {
  if (proficiency >= 90) return 'var(--skill-expert)';
  if (proficiency >= 80) return 'var(--skill-advanced)';
  if (proficiency >= 70) return 'var(--skill-proficient)';
  if (proficiency >= 60) return 'var(--skill-intermediate)';
  return 'var(--skill-beginner)';
};

const getProficiencyLabel = (proficiency: number): string => {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 80) return 'Advanced';
  if (proficiency >= 70) return 'Proficient';
  if (proficiency >= 60) return 'Intermediate';
  return 'Beginner';
};

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const icon = iconMap[skill.name];
  const proficiencyColor = getProficiencyColor(skill.proficiency);
  const proficiencyLabel = getProficiencyLabel(skill.proficiency);

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon} style={{ color: proficiencyColor }}>
        {icon || <DiDatabase />}
      </div>
      <div className={styles.skillInfo}>
        <h4 className={styles.skillName}>{skill.name}</h4>
        <div className={styles.skillMeta}>
          <span className={styles.skillYears}>{skill.years}+ years</span>
          <span className={styles.skillLevel} style={{ color: proficiencyColor }}>
            {proficiencyLabel}
          </span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${skill.proficiency}%`,
              backgroundColor: proficiencyColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface SkillsShowcaseProps {
  data: SkillsData;
}

export default function SkillsShowcase({ data }: SkillsShowcaseProps) {
  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>
          Expertise across the full stack with years of hands-on experience
        </p>
      </div>

      <div className={styles.categories}>
        {data.categories.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span
            className={styles.legendDot}
            style={{ backgroundColor: 'var(--skill-expert)' }}
          />
          <span>Expert (90+)</span>
        </div>
        <div className={styles.legendItem}>
          <span
            className={styles.legendDot}
            style={{ backgroundColor: 'var(--skill-advanced)' }}
          />
          <span>Advanced (80-89)</span>
        </div>
        <div className={styles.legendItem}>
          <span
            className={styles.legendDot}
            style={{ backgroundColor: 'var(--skill-proficient)' }}
          />
          <span>Proficient (70-79)</span>
        </div>
        <div className={styles.legendItem}>
          <span
            className={styles.legendDot}
            style={{ backgroundColor: 'var(--skill-intermediate)' }}
          />
          <span>Intermediate (60-69)</span>
        </div>
      </div>
    </section>
  );
}


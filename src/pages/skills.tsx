import Layout from '../components/Layout'
import portfolioData from '../data/portfolio.json'

export default function Skills() {
  return (
    <Layout title="Skills">
      <section>
        <h1>Skills & Expertise</h1>
        <p>My technical expertise and proficiency across different technologies</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          {portfolioData.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong> - {exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
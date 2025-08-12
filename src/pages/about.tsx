import Layout from '../components/Layout'
import portfolioData from '../data/portfolio.json'

export default function About() {
  return (
    <Layout title="About">
      <section>
        <h1>About Me</h1>
        <p>{portfolioData.contact.description}</p>
      </section>

      <section>
        <h2>Background</h2>
        <p>
          My journey as a self-taught professional has equipped me with a profound 
          understanding of software development, design, and multimedia. With a 
          relentless drive for excellence, I have honed my expertise in delivering 
          robust software architectures, seamless user experiences, and visually 
          captivating designs.
        </p>
      </section>

      <section>
        <h2>Philosophy</h2>
        <ul>
          <li><strong>Iterative Excellence:</strong> Code and art thrive through iterative processes.</li>
          <li><strong>User-Centric Empathy:</strong> Guided by empathy, I design from a user-centric perspective.</li>
          <li><strong>Problem Definition:</strong> Effective design starts with clear problem definition.</li>
          <li><strong>Ethics and Impact:</strong> I prioritize privacy, security, and ethics.</li>
        </ul>
      </section>

      <section>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: {portfolioData.contact.email}</li>
          <li>Location: {portfolioData.contact.location}</li>
          <li>Website: {portfolioData.contact.website}</li>
          <li>LinkedIn: {portfolioData.contact.linkedin}</li>
        </ul>
      </section>
    </Layout>
  )
}
import Layout from '../components/Layout'
import portfolioData from '../data/portfolio.json'

export default function Home() {
  return (
    <Layout title="Home">
      <section>
        <h1>Hi, I'm {portfolioData.contact.name}</h1>
        <h2>{portfolioData.contact.role}</h2>
        <p>{portfolioData.contact.description}</p>
        
        <div>
          <p>Years of Experience: {portfolioData.contact.yearsOfExperience}</p>
          <p>Location: {portfolioData.contact.location}</p>
        </div>

        <div>
          <a href="/portfolio">View My Work</a>
          <a href="/contact">Get in Touch</a>
        </div>
      </section>

      <section>
        <h2>Services</h2>
        <div>
          {portfolioData.services.map((service, index) => (
            <div key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
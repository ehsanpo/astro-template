import Layout from '../components/Layout'
import portfolioData from '../data/portfolio.json'

export default function Contact() {
  return (
    <Layout title="Contact">
      <section>
        <h1>Get in Touch</h1>
        <p>Have a project in mind? Let's discuss how we can work together.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div>
          <h3>Location</h3>
          <p>{portfolioData.contact.location}</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>
            <a href={`mailto:${portfolioData.contact.email}`}>
              {portfolioData.contact.email}
            </a>
          </p>
        </div>

        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={portfolioData.contact.website} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Send a Message</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </Layout>
  )
}
import Layout from '../components/Layout'

const portfolioItems = [
  {
    title: "Telavox",
    description: "Redesigned Telavox's softphone application with a sleek, modern interface, adding RTL support for Arabic users.",
    client: "Telavox",
    year: "2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Electron"]
  },
  {
    title: "Bredband2",
    description: "Redesigned Bredband2's website for a fresh, WCAG-compliant visual identity and developed the customer portal.",
    client: "Bredband2",
    year: "2023",
    technologies: ["React", "Ruby", "Gatsby", "UX"]
  },
  {
    title: "Malmö Saluhall",
    description: "Malmö Saluhall's award-winning website in collaboration with Guts & Glory.",
    client: "Malmö Saluhall",
    year: "2017",
    technologies: ["WordPress", "CSS", "HTML", "PHP"]
  },
  {
    title: "ToolPool",
    description: "Developed the award-winning ToolPool platform, enabling free tool lending via Facebook.",
    client: "Malmö Järnhandel",
    year: "2012",
    technologies: ["JavaScript", "PHP", "Facebook API"]
  }
]

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <section>
        <h1>Portfolio</h1>
        <p>A showcase of my selected works and projects</p>
      </section>

      <section>
        <div>
          {portfolioItems.map((item, index) => (
            <article key={index}>
              <h2>{item.title}</h2>
              <p><strong>Client:</strong> {item.client}</p>
              <p><strong>Year:</strong> {item.year}</p>
              <p>{item.description}</p>
              <div>
                <strong>Technologies:</strong>
                <ul>
                  {item.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
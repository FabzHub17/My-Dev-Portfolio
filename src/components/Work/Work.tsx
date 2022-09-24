import ProjectBlock from "../ProjectBlock/ProjectBlock";
import "./_work.scss";

function Work() {
  const projects = [
    {
      title: "Web Scraper",
      description: "Simple JS code to scrape data from a website",
    },
    {
      title: "Crypto Dashboard",
      description:
        "Crypto currency coverter and news feed about the latest crypto stuff.",
    },
    {
      title: "Fylo dark theme landing page",
      description:
        "Frontend dark theme landing page designed by FrontendMaster",
    },
  ];

  return (
    <>
      <section className="work">
        <h1 className="heading heading-primary">My Work</h1>
        <div className="work__grid">
          {projects.map((project, _index) => {
            return (
              <ProjectBlock
                key={_index}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Work;

import ProjectBlock from "../ProjectBlock/ProjectBlock";
import "./_work.scss";

function Work() {
  interface Project {
    title:string,
    description:string,
    url:string,
  }

  const projects : Project[] = [
    {
      title: "Web Scraper",
      description: "Simple JS code to scrape data from a website",
      url: "https://github.com/FabzHub17/Web-Scraper",
    },
    {
      title: "Crypto Dashboard",
      description:
        "Crypto currency coverter and news feed about the latest crypto stuff.",
      url: "https://gitlab.com/fabio17.vitharana/crypto-dashboard",
    },
    {
      title: "Fylo dark theme landing page",
      description:
        "Frontend dark theme landing page designed by FrontendMaster",
      url: "https://github.com/FabzHub17/Fylo-page-FrontendMaster",
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
                url={project.url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Work;

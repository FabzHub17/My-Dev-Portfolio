import "./_about.scss";

function About() {
  return (
    <>
      <section className="about">
        <h1 className="heading heading-primary">About Me</h1>
        <div className="about__content">
          <p className="paragraph paragraph-thin">
            Hey there! I'm Fabio and I enjoy making things on the internet and Software
            in general.I first realized my interest for computer science and software development
            soon after graduating highschool, when I pondered deeply on the so ever famous question
            that every teenager has asked him/her self. 'What am I going to do here on after?'.
          </p>
          <p className="paragraph paragraph-thin">
           Fast-forward to today.....
          </p>
          <p className="paragraph paragraph-thin">
            I recently...
          </p>
          <p className="paragraph paragraph-thin">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="about__list-tech">
            <li className="about__list-tech__item">JavaScript (ES6+)</li>
            <li className="about__list-tech__item">React JS</li>
            <li className="about__list-tech__item">Node JS</li>
            <li className="about__list-tech__item">C#</li>
            <li className="about__list-tech__item">Unity C#</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;

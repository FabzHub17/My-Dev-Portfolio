import "./_about.scss";

function About() {
  return (
    <>
      <section className="about">
        <h1 className="heading heading-primary">About Me</h1>
        <div className="about__content">
          <p className="paragraph paragraph-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex
            ante, feugiat a laoreet quis, scelerisque eu lectus. Donec
            sollicitudin scelerisque purus, et auctor ipsum hendrerit nec.
            Nullam fringilla mi et elit luctus vehicula. Nullam aliquet diam
            pretium, elementum ligula sit amet, pretium elit. Vivamus tempus
            suscipit eleifend. Quisque tincidunt
          </p>
          <p className="paragraph paragraph-thin">
            efficitur turpis. Fusce sagittis massa at ipsum efficitur sagittis.
            Curabitur tempor condimentum nunc non scelerisque. Nulla at maximus
            nisi. Curabitur magna sem, tempus ut vestibulum et, hendrerit et
            tortor. Nullam facilisis lorem libero, non tincidunt quam mattis ut.
            Suspendisse vitae imperdiet nunc. Integer accumsan accumsan aliquet.
          </p>
          <p className="paragraph paragraph-thin">
            Nullam tristique massa nec sodales mollis. Vivamus eu vestibulum
            velit, sit amet tincidunt magna. Aenean metus felis, malesuada sed
            finibus a, molestie placerat nulla.
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

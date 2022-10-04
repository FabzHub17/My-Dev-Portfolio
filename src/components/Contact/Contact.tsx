import "./_contact.scss";

function Contact() {

  const sendEmail = () =>{
    window.location.href='mailto:fabio17.vitharana@gmail.com?';

  }
  return (
    <>
      <section className="contact">
        <h1 className="heading heading-primary">Hire Me!</h1>
        <p className="paragraph">
          Let's work together! I'm eager to get my hands dirty with code and
          bring about my best work to satisfy my clients.
        </p>
        <button className="btn btn-primary" onClick={sendEmail}>Get In Touch</button>
      </section>
    </>
  );
}

export default Contact;

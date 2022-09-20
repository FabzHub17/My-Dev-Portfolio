import './_hero.scss';
import heroBg from '../../assets/hero-bg.jpg'
import heroAvatar from '../../assets/hero-avatar.jpg'

function Hero(): JSX.Element {
    return (
        <>
            <section className="hero">
                <div className="hero__bg-img-wrapper">
                    <img src={heroBg} alt="hero background" className="hero__bg-img" />
                </div>
                <div className="hero__content">
                    <div className="hero__avatar-wrapper">
                        <img src={heroAvatar} alt="avatar" className="hero__avatar" />
                    </div>
                    <div className="hero__name-wrapper">
                        <span className="hero__name__line"> - </span>
                        <span className="hero__name heading heading--name"> T.C.Fabio Vitharana</span>
                        <span className="hero__name__line"> - </span>
                    </div>
                    <div className="hero__description"> Web Developer / Software Programmer</div>
                    <div className="hero__social-wrapper">
                        <div className="hero__social">github</div>
                        <div className="hero__social">gitlab</div>
                        <div className="hero__social">linkedin</div>
                    </div>
                </div>

            </section>
        </>
    )


}
export default Hero
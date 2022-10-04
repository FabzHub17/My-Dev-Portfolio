import './_hero.scss';
import heroBg from '../../assets/hero-bg.jpg'
import heroAvatar from '../../assets/hero-avatar.jpg'
import heroBg02 from '../../assets/hero-bg-02.jpg'

function Hero(): JSX.Element {
    return (
        <>
            <section className="hero">
                <div className="hero__bg-img-wrapper">
                    <img src={heroBg02} alt="hero background" className="hero__bg-img" />
                </div>
                <div className="hero__content">
                    <div className="hero__avatar-wrapper">
                        <img src={heroAvatar} alt="avatar" className="hero__avatar" />
                    </div>
                    <div className="hero__name-wrapper">
                        {/* <span className="hero__name__line"> - </span> */}
                        <span className="hero__name heading heading--name"> T.C.Fabio Vitharana</span>
                        {/* <span className="hero__name__line"> - </span> */}
                    </div>
                    <div className="hero__description"> Web Developer / Software Programmer</div>
                    <div className="hero__social-wrapper">
                    <div className="hero__social"><a href="https://github.com/FabzHub17" target="_blank" className=' link link-animate--1'>Github</a></div>
                    <div className="hero__social"><a href="https://gitlab.com/fabio17.vitharana" target="_blank" className=' link link-animate--1'>Gitlab</a></div>
                    <div className="hero__social"><a href="www.linkedin.com/in/fabio-vitharana-788191215" target="_blank" className=' link link-animate--1'>LinkedIn</a></div>
                    </div>
                </div>

            </section>
        </>
    )


}
export default Hero
import facebookLogo from '../../assets/facebookLogo.png'
import twitterLogo from '../../assets/twitterLogo.png'
import youtubeLogo from '../../assets/youtubeLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'

import s from './footer.module.scss'

export default function Footer (){
    return(
        <footer>
            <section className={s.footerBox1}>
                <div>
                <p>4002-8922</p>
                <nav className={s.navLinks}>
                    <a href=""><img src={facebookLogo} alt="Imagem da logo do Facebook." /></a>
                    <a href=""><img src={twitterLogo} alt="Imagem da logo do Twitter." /></a>
                    <a href=""><img src={youtubeLogo} alt="Imagem da logo do YouTube." /></a>
                    <a href=""><img src={linkedinLogo} alt="Imagem da logo do Linkedin." /></a>
                    <a href=""><img src={instagramLogo} alt="Imagem da logo do Instagram." /></a>
                </nav>
                </div>
            </section>
            <section className={s.footerBox2}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}
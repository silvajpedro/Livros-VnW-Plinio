import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import s from './Main.module.scss'

export default function Main(){
    return(
        <main className={s.main2}>
            <h2>Por que devo doar?</h2>
            <section>
                <article>
                    <figure className={s.cards}>
                        <img src={card1} alt="" />
                        <figcaption> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                        <img src={card2} alt="" />
                        <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
                        <img src={card3} alt="" />
                        <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                        <img src={card4} alt="" />
                        <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                    </figure>
                </article>
            </section>
        </main>
        
    )
}
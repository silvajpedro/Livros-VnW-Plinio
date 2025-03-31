import imagemLivro from '../../assets/imagemLivro.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.containerLivros}>
            <h2>Livros Doados</h2>
            <section>
                <img src={imagemLivro} alt="" />
                <div>
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </div>
            </section>
        </section>
    )
}
import imagemLivro from '../../assets/imagemLivro.png'
import s from '../../assets/imagemLivro.png'

export default function LivrosDoados(){
    return(
        <section className={s.imagemLivro}>
            <h2>Livros Doados</h2>
            <section>
                <img src={imagemLivro} alt="Imagem do livro O Protagonista" />
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
    )
}
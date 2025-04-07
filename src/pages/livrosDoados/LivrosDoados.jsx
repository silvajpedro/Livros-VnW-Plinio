import imagemLivro from '../../assets/imagemLivro.png'
import s from './livrosDoados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const puxarDados = async () => {
        const resposta = await axios.get("https://api-livros-vai-na-web-4xmk.onrender.com/livros")
        setLivros(resposta.data)
    }
    useEffect(() => {
        puxarDados()
    }, [])

    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {livros.map((item) => (
                    <section>
                        <img src={item.image_url} alt={`Imagem do livro ${item.titulo}`} />
                        <div>
                            <h3>{item.titulo}</h3>
                        </div>
                    </section>
                ))}
            </section>
            </section>
            )
}
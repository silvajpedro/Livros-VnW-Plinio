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
                        <img src={item.imagem_url} alt={`Imagem do livro ${item.titulo}`} />
                        <div>
                            <h4>{item.titulo}</h4>
                            <h4>{item.categoria}</h4>
                            <h4>{item.autor}</h4>
                        </div>
                    </section>
                ))}
            </section>
        </section>
            )
}
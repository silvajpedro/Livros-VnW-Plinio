import inputLogo from '../../assets/inputLogo.png'
import s from './queroDoar.module.scss'
import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar(){

const [titulo, setTitulo] = useState("")
const [autor, setAutor] = useState("")
const [categoria, setCategoria] = useState ("")
const [imagem_url, setImagem_url] = useState ("")

const capturaTitulo = (e)=>{
    setTitulo(e.target.value)
}
const capturaCategoria = (e)=>{
    setCategoria(e.target.value)
}
const capturaAutor = (e)=>{
    setAutor(e.target.value)
}
const capturaImagem_url = (e)=>{
    setImagem_url(e.target.value)
}

const enviarDados = async()=>{
    const livro = {
        titulo,
        categoria,
        autor,
        imagem_url
    }
    await axios.post("https://api-livros-vai-na-web-4xmk.onrender.com/doar", livro)
}

    return(
        <section className={s.queroDoar}>
            <div className={s.titulo}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </div>
            <form action="">
                <section className={s.infoLivros}>
                    <img src={inputLogo} alt="Imagem de um livro aberto." />
                    <p>Informações do Livro</p>
                </section>
                <section className={s.inputs}>
                    <input type="text" name="" id="" placeholder='Titulo' onChange={capturaTitulo} />
                    <input type="text" name="" id="" placeholder='Categoria' onChange={capturaCategoria} />
                    <input type="text" name="" id="" placeholder='Autor' onChange={capturaAutor} />
                    <input type="text" name="" id="" placeholder='Link da Imagem' onChange={capturaImagem_url} />
                </section>
                <div className={s.doar}>
                    <input type="button" value="Doar" onClick={enviarDados} />
                </div>
            </form>
        </section>
    )
}
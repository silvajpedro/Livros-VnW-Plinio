import inputLogo from '../../assets/inputLogo.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.queroDoar}>
            <div className={s.titulo}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </div>
            <form action="" className={s.form}>
                <section className={s.infoLivros}>
                    <img src={inputLogo} alt="Imagem de um livro aberto." />
                    <p>Informações do Livro</p>
                </section>
                <section className={s.inputs}>
                    <input type="text" name="" id="" placeholder='Titulo' />
                    <input type="text" name="" id="" placeholder='Categoria' />
                    <input type="text" name="" id="" placeholder='Autor' />
                    <input type="text" name="" id="" placeholder='Link da Imagem' />
                </section>
                <div className={s.doar}>
                    <input type="button" value="Doar" />
                </div>
            </form>
        </section>
    )
}
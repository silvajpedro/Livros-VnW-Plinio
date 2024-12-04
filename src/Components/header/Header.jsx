import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import s from './header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
            <header>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt="Imagem de um livro aberto representando a logo do site." />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li className={s.link}><Link to='/'>Início</Link></li>
                        <li className={s.link}><Link to='/livrosDoados'>Livros Doados</Link></li>
                        <li className={s.link}><Link to='/queroDoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.input}>
                    <input type="search" name="" id="" placeholder='O que você procura?' />
                    <button><img src={lupa} alt="Ilustração de uma lupa para pesquisas." /></button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosDoados' element={<LivrosDoados/>}/>
                <Route path='/queroDoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}
import './GlobalStyle.scss'
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"
import Main from './Components/main/Main'

export default function App(){
  return(
    <section>
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}
import './styles.scss'

export function Footer() {
  return  (
    <footer className='footer'>
      <div className='footer__top'>
        <span>Brasil</span>
      </div>
      <div className='footer__bottom'>
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__item">
              <a href="/">Sobre</a>
            </li>
            <li className="footer__item">
              <a href="/">Publicidade</a>
            </li>
            <li className="footer__item">
              <a href="/">Negócios</a>
            </li>
            <li className="footer__item">
              <a href="/">Como funciona a Pesquisa</a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__item">
              <a href="/">Publicidade</a>
            </li>
            <li className="footer__item">
              <a href="/">Termos</a>
            </li>
            <li className="footer__item">
              <a href="/">Configurações</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
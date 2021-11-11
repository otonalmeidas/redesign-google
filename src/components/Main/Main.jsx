import { FaSearch, FaKeyboard } from 'react-icons/fa'

import './styles.scss'

export function Main() {
  return (
    <main className='main'>
      <img src="logo.svg" alt="" className='main__logo' />
      <div className='main__search'>
        <div className='main__left'>
          <FaSearch />
        </div>
        <input type='text' className='main__input' />
        <div className="main__right">
          <FaKeyboard />
          <img src="mic.svg" alt="Microfone" />
        </div>
      </div>
      <div className="main__buttons">
        <butto className="main__button">
          <span>Pesquisa Google</span>
        </butto>
        <butto className="main__button">
          <span>Estou com sorte</span>
        </butto>
      </div>
    </main>
  )
}
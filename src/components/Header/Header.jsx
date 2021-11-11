import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { Menu } from '../Menu/Menu'

import { Profile } from '../Profile/Profile'

import './styles.scss'

export function Header() {
  const { handleMenu, handleProfile } = useContext(Context)

  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="header__text">Gmail</a>
        <a href="/" className="header__text">Imagens</a>
      </div>
      <div className="header__right">
        <button className="header__button" onClick={handleMenu}>
          <img src="menu.svg" alt="Menu" />
        </button>
        <button className="header__profile" onClick={handleProfile}>
          <img src="perfil.png" alt="Foto de perfil" />
        </button>
        <Menu />
        <Profile />
      </div>
    </header>
  )
}
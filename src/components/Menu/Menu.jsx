import { useContext } from 'react'
import { Context } from '../../contexts/Context'

import './styles.scss'

export function Menu() {
  const { menu } = useContext(Context)

  return (
    <div className={menu ? 'menu' : 'menu disabled'}>
      <a href="/" className='menu__link'>
        <img src="perfil.png" alt="Foto de perfil" />
        <span>Conta</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="search.svg" alt="Pesquisa" />
        <span>Pesquisa</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="maps.svg" alt="Mapas" />
        <span>Mapas</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="youtube.svg" alt="YouTube" />
        <span>YouTube</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="play.svg" alt="Play Store" />
        <span>Play</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="gmail.svg" alt="Gmail" />
        <span>Gmail</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="contacts.svg" alt="Contatos" />
        <span>Contatos</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="drive.svg" alt="Drive" />
        <span>Drive</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="schedule.svg" alt="Agenda" />
        <span>Agenda</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="translate.svg" alt="Tradutor" />
        <span>Tradutor</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="photos.svg" alt="Fotos" />
        <span>Fotos</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="shop.svg" alt="Shopping" />
        <span>Shopping</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="duo.svg" alt="Duo" />
        <span>Duo</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="news.svg" alt="News" />
        <span>News</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="meet.svg" alt="Meet" />
        <span>Meet</span>
      </a>
      <a href="/" className='menu__link'>
        <img src="chat.svg" alt="Chat" />
        <span>Chat</span>
      </a>
    </div>
  )
}
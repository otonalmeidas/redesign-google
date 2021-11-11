import { useContext } from 'react'
import { Context } from '../../contexts/Context'

import { TiCamera } from 'react-icons/ti'
import { BsPersonPlusFill } from 'react-icons/bs'

import './styles.scss'

export function Profile() {
  const { profile } = useContext(Context)

  return (
    <div className={profile ? 'profile' : 'profile disabled'}>
      <div className='profile__photo'>
        <img src='perfil.png' alt='Foto de perfil' />
        <TiCamera />
      </div>
      <span className='profile__text'>Ton Almeida</span>
      <span className='profile__text'>otonalmeidas@hotmail.com</span>
      <button className='profile__button'>
        <span>Gerenciar sua Conta do Google</span>
      </button>
      <button className='profile__new'>
        <BsPersonPlusFill />
        <span>adicionar outra conta</span>
      </button>
      <button className='profile__signup'>
        <span>Sair</span>
      </button>
      <nav className='profile__nav'>
        <ul className="footer__menu">
          <li className="profile__item">
            <a href="/">Política de Privacidade</a>
          </li>
          <li className="profile__item">
            <a href="/">Termos de Serviço</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
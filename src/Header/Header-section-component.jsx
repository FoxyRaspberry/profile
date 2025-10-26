import reactLogo from '../assets/react.svg'
import './Header-section-component.css'

export function Header () {
  return (
    <>
      <div className='header-section-logo-container'>
        <img src={reactLogo} className='header-section-logo' />
      </div>
    </>
  )
}

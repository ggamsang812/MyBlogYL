import './Header.css';
//use home.svg file as a logo
import logo from '../assets/home.svg';


function Header() {
  return (
    

    <div className='header'>
      <h1>TodoList</h1>
      <img src={logo} alt='logo' />
    </div>
      
  );
}

export default Header;

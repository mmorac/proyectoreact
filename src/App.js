import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import CountdownComponent from './components/CountdownComponent';
import CursosComponent from './components/CursosComponent';

function App() {
  let component;
  switch(window.location.pathname){
    case "/inicio":
      component = <HomeComponent></HomeComponent>;
      break;
    case "/contador":
      component = <CountdownComponent></CountdownComponent>;
      break;
    case "/cursos":
      component = <CursosComponent></CursosComponent>;
      break;
  }
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      {component}
      <FooterComponent></FooterComponent>
      <a href="https://api.whatsapp.com/send?phone=50672637716" className="contacto" target="_blank">
        <i className="fa fa-whatsapp iconowa" />
      </a>
    </div>
  );
}

export default App;

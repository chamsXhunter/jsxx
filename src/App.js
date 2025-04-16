import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Title from './components/Title';
import Card1 from './components/Card1';
import Card3 from './components/Card3';
import Card2 from './components/Card2';
function App() {
  return (
    <>
      
      <Navbarr/>
      <Title/>
      <div className='cards'>
      <Card1/>
      <Card2/>
      <Card3/>
      </div>
        </>
   
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      
      <SideBar/>
    
      <div className="SideContent" style={{width:"calc(100% - 150px)"}} >
      <Header />
      <MainContent/>
      </div>
    </div>
  );
}

export default App;

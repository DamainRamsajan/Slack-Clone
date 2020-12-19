import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      
      <Header/>

      <div className = "app__body">
        <Sidebar/>
        <h1>router-chat window</h1>
      </div>
      
    </div>
  );
}

export default App;

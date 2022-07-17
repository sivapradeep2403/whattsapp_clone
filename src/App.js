import './App.css';
import SideBar from './components/SideBar'
import Chat from './components/Chat'

function App() {
  return (
    <div className="Parent">

      <div className="AppBody">
        <SideBar/>
        <Chat/>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import { HeaderIndigo } from './components/header';
import Parallax from './components/parallax';
import UserList from './components/userlist';

function App() {

  return (<>
    <HeaderIndigo headerText={'Component Rush'} nav1={"Home"} nav2={"Load"} />
    <Parallax />
    <UserList />
    </>
  );
}

export default App;


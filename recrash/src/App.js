import './App.css';
import UserForm from './components/form';
import { HeaderIndigo } from './components/header';
import Parallax from './components/parallax';
import UserList, { UserList2} from './components/userlist';

function App() {

  return (<>
    <HeaderIndigo headerText={'Component Rush'} nav1={"Home"} nav2={"Load"} />
    <Parallax />
    <UserList />
    <UserList2 />
    <UserForm />
    </>
  );
}

export default App;


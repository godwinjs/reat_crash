import './App.css';
import { HeaderIndigo } from './components/header';
import LandingPage from './parallax';

function App() {

  return (<>
    <HeaderIndigo headerText={'Component Rush'} nav1={"Home"} nav2={"Load"} />
    <LandingPage />
    </>
  );
}

export default App;


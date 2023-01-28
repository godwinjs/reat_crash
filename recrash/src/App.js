import './App.css';
import Chatnotification from './components/chatnotification'
import ProfileCard from './components/profile_card';

function App() {
  return (<>
    <h1 className='text-5xl font-bold underline text-center'>
      Components Rush
    </h1>
    <Chatnotification />
    <ProfileCard />
    </>
  );
}

export default App;

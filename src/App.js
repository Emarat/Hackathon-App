import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import ParticipateReasons from './Components/ParticipateReasons/ParticipateReasons';
import Stat from './Components/Stat/Stat';
import Search from './Search/Search';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Stat></Stat>
      <ParticipateReasons></ParticipateReasons>
      <Search></Search>
    </div>
  );
}

export default App;

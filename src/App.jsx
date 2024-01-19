import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'timer'} targetTime={1} />
        <TimerChallenge title={'timer 2'} targetTime={5} />
        <TimerChallenge title={'timer'} targetTime={5} />
        <TimerChallenge title={'timer 2'} targetTime={5} />
      </div>
    </>
  );
}

export default App;

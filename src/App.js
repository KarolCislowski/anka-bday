import cat from './assets/img/cat.png';
import './App.css';
import { useState } from 'react';
import YouTube from 'react-youtube';

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='App'>
      <header className={clicked ? 'App-header-clicked' : 'App-header'}>
        <h1>HEPI BERZDEJ!!!</h1>
        {clicked ? (
          <YouTube
            videoId='8IDWk183xE4'
            opts={{
              height: '200',
              width: '320',
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
              },
            }}
          />
        ) : (
          <img
            src={cat}
            className='App-logo'
            alt='logo'
            onClick={() => setClicked(true)}
          />
        )}

        {!clicked ? (
          <>
            <p>Dużo zdrówka i słodyczy, Team ze Szwecji Tobie życzy!!!</p>
            <p>P.S. Zlituj się nad biedakiem i go kliknij :D</p>
          </>
        ) : (
          <p>Tort był, ale kot Ci go zeżarł 🤷‍♀️ </p>
        )}
      </header>
    </div>
  );
}

export default App;

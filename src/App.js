import './App.css';
import { useState } from "react";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie Please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
  "Think of the love!",
  "I'll make you my princess",
  "Let's write our love story together!",
  "Please reconsider!",
];

function App() {
  const [no_cnt, setNoCount] = useState(0);
  const [yes_pressed, setYesPressed] = useState(0);
  const yes_btn_size = no_cnt * 20 + 16;

  function handleNoClick() {
    setNoCount(no_cnt + 1);
  }
  function getNoBtnTxt() {
    return phrases[Math.min(no_cnt, phrases.length - 1)];
  }


  return (
    <div className="App">
      <div className='valentine-container'>
        {yes_pressed ? (
          <>
            <img
              alt='bears kissing'
              src="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif"
            >
            </img>

            <div className='text'>
              Yay!!!
            </div>
          </>

        ) : (
          <>
          <img
              alt='bears kissing'
              src="https://tenor.com/view/jump-bear-cute-hearts-love-gif-16290134.gif"
            >
            </img>
            <div>
              Will you be my Valentine💘?
            </div>
            <div>
              <button
                className='yes-btn'
                style={{ fontSize: yes_btn_size }}
                onClick={() => setYesPressed(true)}
              >
                yes
              </button>

              <button
                onClick={handleNoClick}
                className='no-btn'
              >
                {getNoBtnTxt()}
              </button>
            </div>


          </>

        )

        }

      </div>
    </div>
  );
}

export default App;

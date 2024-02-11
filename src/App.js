import './App.css';
import { useState } from "react";

const phrases = [
  "No",
  "Are you sure?",
  "Please reconsider!",
  "Really sure?",
  "Pookie Please",
  "I'll make you my princess",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];

function App() {
  const [no_cnt, setNoCount] = useState(0);
  const [yes_pressed, setYesPressed] = useState(0);
  const yes_btn_size = no_cnt * 20 + 40;

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
              <h1>Yay!!!💖</h1>
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
              <h1>Will you be my Valentine💘?</h1>
            </div>
            <div>
              <button
                className='yes-btn'
                style={{ 
                  backgroundColor: 'green',
                  color: 'white',
                  fontSize: yes_btn_size ,
                  borderRadius: '2rem',
                  border: 'none',
                  paddingLeft:'20px',
                  paddingRight:'20px'
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                onClick={handleNoClick}
                className='no-btn'
                style={{ 
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '2rem',
                  border: 'none',
                  paddingLeft:'20px',
                  paddingRight:'20px'
                }}
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

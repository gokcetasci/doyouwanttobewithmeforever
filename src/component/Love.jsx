import React, { useState } from "react";

function Homepage({ onYesClick }) {
  const [position, setPosition] = useState(false);

  function moveButton() {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 80);
    setPosition({ left: `${x}px`, top: `${y}px` });
  }

  return (
    <div id="homepage" className="flex flex-col items-center justify-center">
      <div className='flex container mx-auto text-center'>
        <p className="text-4xl font-bold font-mono text-pink-800 container mx-auto">Do you want to be with me forever?</p>
      </div>
      <div>
        <img
          src="https://media4.giphy.com/media/evCPQk1auQyRwpelDr/giphy.gif?cid=ecf05e47eak3y5ovz7ebbkjp1w6qfeled5g9tx5aduv0mery&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          alt="happy-cute"
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="flex flex-row mt-10 container pl-[15%] sm:pl-[30%] ">
        <div>
          <button 
            className="yes-button text-red-900 py-3 p-10 text-2xl bg-pink-400 rounded-xl font-medium hover:scale-110" 
            onClick={onYesClick}
          >
            Yes
          </button>
        </div>
        <div className="">
          <button 
            id="noButton" 
            className="text-red-900 py-3 p-10 text-2xl bg-pink-400 rounded-xl font-medium" 
            onMouseOver={moveButton}
            onClick={moveButton}
            style={{ position: 'absolute', ...position }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

function YesPage() {
  return (
    <div 
      id="yes" 
      style={{
        backgroundImage: 'url("https://media1.giphy.com/media/gCxd0kUSR6I9dflWgm/giphy.gif?cid=ecf05e4722wudfusmq1btp4ese2xh2bzgeb8lkpm0nuc5o5v&ep=v1_stickers_search&rid=giphy.gif&ct=s")',
       
      }}
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <div className='flex container items-center justify-center '>
        <p className="text-6xl font-bold font-mono text-pink-900">YEEEYYYYY!!</p>
      </div>
      <div>
        <img
          src="https://media2.giphy.com/media/tRGrBV2zSzFAEGNflv/giphy.gif?cid=ecf05e47eo3c6ob8zgw3ey9icclphskdtsxxqha0qux2cb6v&ep=v1_gifs_related&rid=giphy.gif&ct=s"
          alt="happy-cute"
          className="w-[400px] h-[400px] mt-8"
        />
      </div>
    </div>
  );
}


function Love() {
  const [showYesDiv, setShowYesDiv] = useState(false);

  function handleYesButtonClick() {
    setShowYesDiv(true);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-400/25">
      {showYesDiv ? <YesPage /> : <Homepage onYesClick={handleYesButtonClick} />}
    </div>
  );
}

export default Love;

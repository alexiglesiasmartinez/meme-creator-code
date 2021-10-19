import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const [topLine, setTopLine] = useState("");
  const [bottomLine, setBottomLine] = useState("");
  const [myImage, setMyImage] = useState("");

  const writeTopLine = (e) => {
    setTopLine(e.target.value);
  };

  const writeBottomLine = (e) => {
    setBottomLine(e.target.value);
  };

  const selectImageHandler = (e) => {
    setMyImage(e.target.value);
  };

  const exportAsImageHandler = () => {
    html2canvas(document.querySelector("#exportMeme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'myMeme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <div className="pickImage">
        <select className="pickImageSelect" onChange={selectImageHandler}>
          <option value="" selected disabled hidden>Choose your meme</option>
          <option value="fire">Girl on fire</option>
          <option value="futurama">Bender from Futurama</option>
          <option value="history">History channel</option>
          <option value="matrix">Morpheous from Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart guy</option>
        </select>
      </div>

      {myImage !== ""
        ?
        <>
          <div className="firstInput">
            <input
              type="text"
              placeholder="Type the line above"
              className="firstValueInput"
              onChange={writeTopLine}
            ></input>
          </div>

          <div className="secondInput">
            <input
              type="text"
              placeholder="Write the bottom line"
              className="secondValueInput"
              onChange={writeBottomLine}
            ></input>
          </div>

          <div class="imageContainer">
            <div id="exportMeme" class="imageToExport">
              <div class="topLine">
                <h2>{topLine}</h2>
              </div>
              <div class="bottomLine">
                <h2>{bottomLine}</h2>
              </div>
              <img class="image" src={`img/${myImage}.png`} alt={`${myImage} meme`} />
            </div>
          </div>

          <div className="buttonContainer">
            <button
              class="button"
              onClick={exportAsImageHandler}
            >Export image</button>
          </div>
        </>
        :
        <div className="pickYourMeme">
          <h1>Pick your meme</h1>
        </div>
      }
      <div className="visit-me">
        <a href="https://www.alexiglesias.in/#work" target="__blank" className="visit-me-link">Go back</a>
      </div>
    </div>
  );
}

export default App;

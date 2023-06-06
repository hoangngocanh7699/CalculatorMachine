import "./App.css";
import { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import Number from "./number";
import ShowResult from "./showResult";

function App() {
  const [currentNumber, setcurrentNumber] = useState(0);
  const [first, setFirst] = useState({ value: '' })
  const [second, setSecond] = useState({ value: '' })
  const [historyLog, setHistoryLog] = useState([])
  console.log('tessttt');

  const [isOpen, setIsopen] = useState(false);
  const [history, setHistory] = useState(false)

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const showHistory = () => {
    history === true ? setHistory(false) : setHistory(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
          <div className="border">
            <h2 style={{ color: "black" }}>
              <Icon name="calculator"></Icon>Calculator
            </h2>
            <div className="icons-button">
              <Button>
                <Icon name="window minimize outline"></Icon>
              </Button>
              <Button>
                <Icon name="window restore outline"></Icon>
              </Button>
              <Button className="closebtn">
                <Icon name="window close outline"></Icon>
              </Button>
            </div>
          </div>
          <div className="content-btn">
            <Button className="standard-btn" onClick={ToggleSidebar}>
              <Icon name="bars">Standard</Icon>
              <div className={`sidebar ${isOpen === true ? '' : 'active'}`}>
                <div className="sd-header">
                  <h4>Calculator</h4>
                  <div className="sd-body">
                    <ul>
                      <li><a className="sd-link">Standard</a></li>
                      <li><a className="sd-link">Information</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Button>
            <div>
              <Button onClick={showHistory}>
                <Icon name="history"></Icon>
                <div className={`sidebar ${history === true ? '' : 'active'}`}>
                  <div className="sd-header">
                    <h4>Calculator</h4>
                    <div className="sd-body">
                      {historyLog.map(x => <><div>{x.spe} {x.result}</div><br></br></>)}
                    </div>
                  </div>
                  <Button className="trashbtn" onClick={()=>{setHistoryLog([])}}>
                    <Icon name="trash alternate"></Icon>
                  </Button>
                </div>
              </Button>
            </div>
          </div>
          <ShowResult currentNumber={currentNumber} />
          <Number currentNumber={currentNumber} setcurrentNumber={setcurrentNumber} firstNumber={first} secondNumber={second} handleResult={(e) => {
            let result = 0
            switch (e) {
              case "+":
                result = parseInt(first.value) + parseInt(second.value);
                break;
              case "-":
                result = parseInt(first.value) - parseInt(second.value);
                break;
              case "x":
                result = parseInt(first.value) * parseInt(second.value);

                break;
              case "/":
                result = parseInt(first.value) / parseInt(second.value);
                break;
              default:
                break;
            }
            setHistoryLog([...historyLog, { spe: first.value + " " + e + " " + second.value + " =", result: result }])
            first.value = result
            setcurrentNumber(result)
          }} />
        </div>
      </header>
    </div>
  );
}

export default App;
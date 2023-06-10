import "./App.css";
import { useEffect, useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import Number from "./number";
import ShowResult from "./showResult";
import { Calculate, Call } from "./designPatten";

function App() {
  const [currentNumber, setcurrentNumber] = useState(0);
  const [topResult, setTopResult] = useState(0)
  const [topDisplay, setTopDisplay] = useState()
  const [first] = useState({ value: '' })
  const [second] = useState({ value: '' })
  const [historyLog, setHistoryLog] = useState([])

  const [isOpen, setIsopen] = useState(false);
  const [history, setHistory] = useState(false)

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const showHistory = () => {
    history === true ? setHistory(false) : setHistory(true)
  }

  const [reCall, setReCall] = useState(false);

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
                      <li><a className="sd-link">Information
                      </a></li>
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
                  <Button className="trashbtn" onClick={() => { setHistoryLog([]) }}>
                    <Icon name="trash alternate"></Icon>
                  </Button>
                </div>
              </Button>
            </div>
          </div>
          <ShowResult currentNumber={currentNumber} topResult={topResult} topDisplay={topDisplay}/>
          <Number setTopDisplay={setTopDisplay} topDisplay={topDisplay} setTopResult={setTopResult} reCall={reCall} currentNumber={currentNumber} 
          setcurrentNumber={setcurrentNumber} firstNumber={first} secondNumber={second} handleResult={(e,reCallBool) => {
            
            var call = new Call();
            var calculate = new Calculate();

            calculate.set(call)
            let result = calculate.get({one: parseInt(first.value), two:parseInt(second.value), value: e})
            setHistoryLog([...historyLog, { spe: first.value + " " + e + " " + second.value + " =", result: result }])
            first.value = result
            setTopDisplay(result)
            setTopResult(result)

            if(reCallBool) setReCall(!reCall)
          }} />
        </div>
      </header>
    </div>
  );
}

export default App;
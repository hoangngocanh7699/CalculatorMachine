import { useState } from "react"
import { Icon } from "semantic-ui-react"

function Number({ currentNumber, setcurrentNumber, firstNumber, secondNumber ,handleResult}) {
    const [firstNum] = useState({ value: true })
    const [calculator] = useState({value:''})
    const clickNumber = (e) => {
        let submitNum = e.target.innerText
        
        if (submitNum === '=') {
            handleResult(calculator.value)
           
            calculator.value = '';
            secondNumber.value = ''
            firstNum.value = true;
            return ;
        }
        if (!['+', '-', 'x', '/'].includes(submitNum)) {
            if (firstNum.value) {
                firstNumber.value = firstNumber.value + '' + submitNum
            } else {
                secondNumber.value = secondNumber.value  + '' + submitNum
            }
        }else{
            if(!firstNum.value) return
            calculator.value = submitNum
            firstNum.value = false
        }
        let newNumber = currentNumber + '' + submitNum
        if (currentNumber === 0) {
            newNumber = submitNum
        }
        setcurrentNumber(newNumber)
    }

    const handleDelete = () => {
        firstNumber.value = ''
        secondNumber.value = ''
        firstNum.value = true
        setcurrentNumber(0)
    }

    const handleDeleteOneNumber = () => {

        if (currentNumber === 0) {
            return
        }

        let newNumber = currentNumber.slice(0, -1)
        if (currentNumber === '') {
            newNumber = 0
        }
        setcurrentNumber(newNumber)
    }


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="td1" onClick={clickNumber}>%</td>
                        <td className="td1" onClick={clickNumber}>CE</td>
                        <td className="td1" onClick={handleDelete}>C</td>
                        <td className="td1" onClick={handleDeleteOneNumber}><Icon name='window close'></Icon></td>
                    </tr>
                    <tr>
                        <td className="td1" onClick={clickNumber}>1/x</td>
                        <td className="td1" onClick={clickNumber}><Icon name='superscript'></Icon></td>
                        <td className="td1" onClick={clickNumber}>123</td>
                        <td className="td1" onClick={clickNumber}>/</td>
                    </tr>
                    <tr>
                        <td className="td1" onClick={clickNumber}>7</td>
                        <td className="td1" onClick={clickNumber}>8</td>
                        <td className="td1" onClick={clickNumber}>9</td>
                        <td className="td1" onClick={clickNumber}>x</td>
                    </tr>
                    <tr>
                        <td className="td1" onClick={clickNumber}>4</td>
                        <td className="td1" onClick={clickNumber}>5</td>
                        <td className="td1" onClick={clickNumber}>6</td>
                        <td className="td1" onClick={clickNumber}>-</td>
                    </tr>
                    <tr>
                        <td className="td1" onClick={clickNumber}>1</td>
                        <td className="td1" onClick={clickNumber}>2</td>
                        <td className="td1" onClick={clickNumber}>3</td>
                        <td className="td1" onClick={clickNumber}>+</td>
                    </tr>
                    <tr>
                        <td className="td1" onClick={clickNumber}>+/-</td>
                        <td className="td1" onClick={clickNumber}>0</td>
                        <td className="td1" onClick={clickNumber}>.</td>
                        <td className="td1" onClick={clickNumber}>=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Number
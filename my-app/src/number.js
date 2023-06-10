/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Icon } from "semantic-ui-react"

function Number({ topDisplay, setTopDisplay,setTopResult ,currentNumber, setcurrentNumber, firstNumber, secondNumber, handleResult, reCall }) {
    const [firstNumberum] = useState({ value: true })
    const [calculator] = useState({ value: '' })

    useEffect(()=>{
        if(calculator.value != '')
        clickNumber(calculator.value)
    },[reCall])

    const clickNumber = (e) => {
        let submitNum = e?.target?.innerText || e
            
        if (submitNum === '=') {
            handleResult(calculator.value)
            calculator.value = submitNum;
            secondNumber.value = ''
            firstNumberum.value = true;
            return;
        }
        if (!['+', '-', 'x', '/'].includes(submitNum)) {
            if (firstNumberum.value) {
                firstNumber.value = firstNumber.value + '' + submitNum
            } else {
                secondNumber.value = secondNumber.value + '' + submitNum
            }

            setTopResult(x => {
                let newNumber = x + '' + submitNum
                if (x === 0) {
                    newNumber = submitNum
                }
                return newNumber
            } )
        } else {
            setTopResult(0)
            if (!firstNumberum.value){
                handleResult(calculator.value,true)
                calculator.value = submitNum;
                secondNumber.value = ''
                firstNumberum.value = true;
                return;
            }
            calculator.value = submitNum
            firstNumberum.value = false

           
        }
        let newNumber = currentNumber + '' + submitNum
        if (currentNumber === 0) {
            newNumber = submitNum
        }
        setTopDisplay(newNumber)
        setcurrentNumber(newNumber)
    }

    const handleDelete = () => {
        firstNumber.value = ''
        secondNumber.value = ''
        firstNumberum.value = true
        setcurrentNumber(0)
        setTopDisplay()
        setTopResult(0)
    }

    const handleDeleteOneNumber = () => {

        if (topDisplay === 0) {
            return
        }

        let newNumber = topDisplay.slice(0, -1)
        if (topDisplay === '') {
            newNumber = 0
        }
        setTopDisplay(newNumber)
        setTopResult(newNumber)
    }
    const arrButton = [
        [
            { text: '%' },
            { text: 'CE' },
            { text: 'C', onClick: handleDelete },
            { text: <Icon name='window close'></Icon>, onClick: handleDeleteOneNumber },
        ],
        [
            { text: '1/x' },
            { text: <Icon name='superscript'></Icon>, },
            { text: '123', },
            { text: '/' },
        ],
        [
            { text: '7' },
            { text: '8' },
            { text: '9' },
            { text: 'x' },
        ],
        [
            { text: '4' },
            { text: '5' },
            { text: '6' },
            { text: '-' },
        ],
        [
            { text: '1' },
            { text: '2' },
            { text: '3' },
            { text: '+' },
        ],
        [
            { text: '+/-' },
            { text: '0' },
            { text: '.' },
            { text: '=' },
        ]
    ]

    return (
        <div>
            <table>
                <tbody>
                    {arrButton.map(tr =>
                        <tr>
                            {tr.map(td =>
                                <td className="td1" onClick={td.onClick ? td.onClick : clickNumber}>
                                    {td.text}
                                </td>)}
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Number
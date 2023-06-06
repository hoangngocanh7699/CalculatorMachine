import { useState } from "react"

function ShowResult ({currentNumber}) {

    return (
        <div className="screen">
            <div className="math">
                {currentNumber}
            </div>
            <div className="result">
                {currentNumber}
            </div>
        </div>
    )
}

export default ShowResult
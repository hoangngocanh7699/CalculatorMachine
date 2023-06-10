
function ShowResult ({topResult,topDisplay}) {

    return (
        <div className="screen">
            <div className="math">
                {topDisplay}
            </div>
            <div className="result">
                {topResult}
            </div>
        </div>
    )
}

export default ShowResult
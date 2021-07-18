const Statistics = (props) => {

    return (
        <div>
            <h1>statistics</h1>

            <p>
                good {props.good}
            </p>
            <p>
                neutral {props.neutral}
            </p>
            <p>
                bad {props.bad}
            </p>
            <p>
                all {props.allFeedback}
            </p>
            <p>
                average {props.averageFeedback}
            </p>
            <p>
                positive {props.positiveFeedback}
            </p>
        </div>
    )
}

export default Statistics;
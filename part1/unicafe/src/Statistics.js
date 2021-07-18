import Statistic from "./Statistic";

const Statistics = (props) => {

    return (
        <div>
            <h1>statistics</h1>
            {props.allFeedback > 0 ?
                <table>
                    <tbody>
                        <Statistic text="good" value={props.good} />
                        <Statistic text="neutral" value={props.neutral} />
                        <Statistic text="bad" value={props.bad} />
                        <Statistic text="all" value={props.allFeedback} />
                        <Statistic text="average" value={props.averageFeedback} />
                        <Statistic text="positive" value={props.positiveFeedback} />
                    </tbody>
                </table>
                :
                <p>No feedback given.</p>
            }
        </div>
    )
}

export default Statistics;
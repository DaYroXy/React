import {useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackStats() {

    const {feedBack} = useContext(FeedBackContext)

    // Calculate Ratings Average
    let average = feedBack.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedBack.length

    average = average.toFixed(1).replace(/[.,]0+$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedBackStats
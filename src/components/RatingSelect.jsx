import { useState, useContext, useEffect } from "react"
import FeedBackContext from "../context/FeedBackContext"

function RatingSelect({ select }) {

    const [selected, setSelected] = useState(0)

    const { feedBackEdit } = useContext(FeedBackContext)

    useEffect(() => {
        if(feedBackEdit.edit === true) {
            setSelected(feedBackEdit.item.rating)
        }
    }, [feedBackEdit])

    const handleRatingChange = (event) => {
        setSelected(+event.target.value)
        select(+event.target.value)
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                    type='radio'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onChange={handleRatingChange}
                    checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect
import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedBackContext from "../context/FeedBackContext"

function FeedBackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [msg, setmsg] = useState('')

    const { submitFeedBack, feedBackEdit, updateFeedBack } = useContext(FeedBackContext)


    useEffect(() => {
        if(feedBackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)
        }
    }, [feedBackEdit])


    const handleTextChange = ({target: {value}}) => {
        
        if(value === '') {
            setbtnDisabled(true)
            setmsg('')
        } else if (value !== '' && value.trim().length < 5) {
            setbtnDisabled(true)
            setmsg('Please enter at least 5 characters')
        } else {
            setbtnDisabled(false)
            setmsg(null)
        }
        
        setText(value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!rating || rating <= 0) {
            setmsg('Please select a rating')
            return
        }

        if (text.trim().length >= 5) {
            const newFeedBack = {
                text,
                rating
            }

            if(feedBackEdit.edit === true) {
                updateFeedBack(feedBackEdit.item.id, newFeedBack)
            } else {
                submitFeedBack(newFeedBack)
            }

            setmsg('')
            setText('')
            setbtnDisabled(true)
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your services?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input 
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                
                {msg && <div className='message'>{msg}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import {useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackItem({ item }) {

    const {deleteFeedBack, editFeedBack} = useContext(FeedBackContext)

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedBack(item)} className="edit">
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem
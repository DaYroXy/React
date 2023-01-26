import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from "./FeedBackItem"
import FeedBackContext from '../context/FeedBackContext';

function FeedbackList() {

    const {feedBack} = useContext(FeedBackContext)

    if(!feedBack || feedBack.length === 0) {
        return (
            <div>
                <h3>No feedbacks yet</h3>
            </div>
        )
    }

    return ( 
        <div className="feedback-list">
            <AnimatePresence>
                {feedBack.map((item, index) => (
                    <motion.div key={item.id} 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                        <FeedBackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return ( 
    //     <div className="feedback-list">
    //         {feedBack.map((item, index) => (
    //             <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}  />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList

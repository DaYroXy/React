import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from "./FeedBackItem"
import FeedBackContext from '../context/FeedBackContext';
import Spinner from "./shared/Spinner"

function FeedbackList() {

    const { feedBack, isLoading } = useContext(FeedBackContext)

    if(!isLoading && (!feedBack || feedBack.length === 0)) {
        return (<h3>No feedbacks yet</h3>)
    }


    return isLoading ? <Spinner /> : ( 
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

import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [feedBack, setFeedBack] = useState([{
            id: 1,
            text: 'This is a test feedback',
            rating: 10
        }]
    );

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })
    
    // Add feedback
    const submitFeedBack = (newfeedBack) => {
        newfeedBack.id = uuidv4();
        setFeedBack([newfeedBack, ...feedBack])
    }

    // Delete feedback
    const deleteFeedBack = (id) => {
        setFeedBack(feedBack.filter((item) => {
            return item.id !== id
        }))
    }

    // Set edit feedback item
    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    // Update feedback
    const updateFeedBack = (id, updItem) => {

        setFeedBack(feedBack.map((item) => (
            item.id === id ? { ...item, ...updItem } : item
        )))
        
    }

    return <FeedBackContext.Provider value={{
        feedBack,
        submitFeedBack,
        deleteFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;
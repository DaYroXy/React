import { createContext, useState, useEffect } from "react";
const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [feedBack, setFeedBack] = useState([]);
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    const API_URL = "http://localhost:5200/feedBack"

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`${API_URL}?_sort=id&_order=desc`);
        const data = await response.json();

        setFeedBack(data)
        setIsLoading(false)
    }
    
    // Add feedback
    const submitFeedBack = async (newfeedBack) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newfeedBack)
        })

        const data = await response.json()
        setFeedBack([data, ...feedBack])
    }

    // Delete feedback
    const deleteFeedBack = async (id) => {
        
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })

        setFeedBack(feedBack.filter((item) => { return item.id !== id }))
    }

    // Set edit feedback item
    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    // Update feedback
    const updateFeedBack = async (id, updItem) => {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedBack(feedBack.map((item) => (
            item.id === id ? { ...item, ...data } : item
        )))
        
    }

    return <FeedBackContext.Provider value={{
        feedBack,
        submitFeedBack,
        deleteFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
        isLoading
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;
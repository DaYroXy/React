import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedbackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedBackProvider } from './context/FeedBackContext';

function App() {

    return (
        <FeedBackProvider>
            <Router>
                <Header headerTitle='FeedBack UI' />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedBackList />
                            </>
                        }>
                        </Route>
                            
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/post/*' element={<Post />} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedBackProvider>
    )
}

export default App;

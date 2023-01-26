import { useNavigate , Routes, Route} from 'react-router-dom'

function Post() {

  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    navigate("/about")
  }

  return (
      <div>
          <h1>Post </h1>
          <Routes>
            <Route path="/show" element={<h1>Hello World</h1>} />

          </Routes>
      </div>
  )
}

export default Post

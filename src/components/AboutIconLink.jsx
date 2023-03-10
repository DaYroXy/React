import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link' style={{marginBottom:".5rem"}}>
      <Link to="/about">
        <FaQuestion size={25} />
      </Link>
    </div>
  )
}

export default AboutIconLink

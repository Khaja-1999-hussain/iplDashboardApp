// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  return (
    <Link to="/asfdcgv">
      <div className="not-found-container">
        <h1 className="not-found-heading">Page Not Found!!</h1>
      </div>
    </Link>
  )
}

export default NotFound

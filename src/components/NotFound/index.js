import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="not-found-bg-container">
    <Navbar />
    <div className="not-found-img-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
          className="not-found"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
      </div>
    </div>
  </div>
)

export default NotFound

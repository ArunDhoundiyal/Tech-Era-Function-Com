import Navbar from '../Navbar'
import './index.css'

const FailureView = () => (
  <div className="failure-bg-container">
    <Navbar />
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="failure-img"
    />
    <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
    <p className="failure-paragraph">
      We cannot seem to find the page you are looking for.
    </p>
    <button className="failure-button" type="button">
      Retry
    </button>
  </div>
)

export default FailureView

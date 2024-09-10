import './index.css'

const FailureView = ({onClickRetry}) => (
  <div className="failure-bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="failure-img"
    />
    <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
    <p className="failure-paragraph">
      We cannot seem to find the page you are looking for.
    </p>
    <button className="failure-button" type="button" onClick={onClickRetry}>
      Retry
    </button>
  </div>
)

export default FailureView

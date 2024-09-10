import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import Course from '../Course'
import './index.css'
import FailureView from '../FailureView'

const Home = () => {
  const [data, setData] = useState({courses: []})
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  console.log(data)
  const fetchCourseApi = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://apis.ccbp.in/te/courses`)
      setData({courses: response.data.courses})
      setLoading(false)
      setSuccess(true)
    } catch (error) {
      console.log(`Error while fetching course data: ${error.message}`)
      setLoading(false)
      setSuccess(false)
    }
  }

  useEffect(() => {
    fetchCourseApi()
  }, [])

  const formatSnakeCaseToCamelCase = courseData =>
    courseData.map(formatData => ({
      id: formatData.id,
      name: formatData.name,
      logoUrl: formatData.logo_url,
    }))

  const checkArray = Array.isArray(data.courses)
    ? formatSnakeCaseToCamelCase(data.courses)
    : []

  const displayAllCourseData = () => {
    if (loading) {
      return (
        <div className="products-loader-container loader">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )
    }
    if (success) {
      return (
        <div className="display-course-list-container">
          <h1>Courses</h1>
          <ul>
            {checkArray.map(eachCourse => (
              <Course key={eachCourse.id} eachCourse={eachCourse} />
            ))}
          </ul>
        </div>
      )
    }
    return <FailureView onClickRetry={fetchCourseApi} />
  }

  return (
    <div className={loading ? `bg-loader-home-container` : `bg-container`}>
      <Navbar />
      {displayAllCourseData()}
    </div>
  )
}

export default Home

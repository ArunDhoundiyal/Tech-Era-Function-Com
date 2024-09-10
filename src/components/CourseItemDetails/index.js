import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import FailureView from '../FailureView'
import './index.css'

const CourseItemDetails = () => {
  const [courseData, setCourseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          `https://apis.ccbp.in/te/courses/${id}`,
        )
        const data = response.data.course_details

        if (data) {
          const course = data
          setCourseData({
            id: course.id,
            name: course.name,
            description: course.description,
            imageUrl: course.image_url,
          })
          setSuccess(true)
        } else {
          setSuccess(false)
        }
      } catch (error) {
        console.error(error)
        setSuccess(false)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseData()
  }, [id])

  const displayCourseDetail = () => {
    const fetchCourseData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://apis.ccbp.in/te/courses/${id}`,
        )
        const data = response.data.course_details

        if (data) {
          const course = data
          setCourseData({
            id: course.id,
            name: course.name,
            description: course.description,
            imageUrl: course.image_url,
          })
          setSuccess(true)
        } else {
          setSuccess(false)
        }
      } catch (error) {
        console.error(error)
        setSuccess(false)
      } finally {
        setLoading(false)
      }
    }

    if (loading) {
      return (
        <div className="products-loader-container loader">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )
    }
    if (success && courseData) {
      const {description, imageUrl, name} = courseData
      return (
        <div className="course-detail-card-container">
          <div className="course-card-container">
            <img src={imageUrl} alt={name} className="name-img-logo" />
            <div className="card-container">
              <h1 className="course-heading-name">{name}</h1>
              <p className="course-content-information">{description}</p>
            </div>
          </div>
        </div>
      )
    }
    return <FailureView onClickRetry={fetchCourseData} />
  }

  return (
    <div
      className={
        loading
          ? 'bg-loader-CourseDetailRoute-container'
          : 'course-detail-bg-container'
      }
    >
      <Navbar />
      {displayCourseDetail()}
    </div>
  )
}

export default CourseItemDetails

import {useState} from 'react'
import axios from 'axios'
import './index.css'

const Course = ({eachCourse}) => {
  const [courseData, setCourseData] = useState()
  const {id, name, logoUrl} = eachCourse
  const onClickCourseIcon = async () => {
    try {
      const response = await axios.get(`https://apis.ccbp.in/te/courses/${id}`)
      setCourseData(response.data.course_details)
    } catch (error) {
      console.log(`Error while fetching data ${error}`)
    }
  }
  console.log(courseData)
  return (
    <li onClick={onClickCourseIcon}>
      <div>
        <img src={logoUrl} alt={name} />
      </div>

      <p>{name}</p>
    </li>
  )
}

export default Course

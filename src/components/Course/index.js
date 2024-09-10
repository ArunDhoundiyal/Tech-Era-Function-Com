import {useNavigate} from 'react-router-dom'
import './index.css'

const Course = ({eachCourse}) => {
  const {id, name, logoUrl} = eachCourse
  const navigate = useNavigate()
  const onClickCourseIcon = async () => {
    navigate(`/course/${id}`)
  }
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

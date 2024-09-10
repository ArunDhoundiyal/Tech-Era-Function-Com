import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course/:id" element={<CourseItemDetails />} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" />} />
  </Routes>
)

export default App

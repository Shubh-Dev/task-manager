import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/login'
import TaskList from './pages/taskList'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

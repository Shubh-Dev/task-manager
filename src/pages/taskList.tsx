import Header from '../components/Header'
import Hero from '../components/Hero'

const taskList = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <div>
          <img
            src="/assets/Add Task.svg"
            alt="Add Task"
            className="float-right"
          />
        </div>
        <div className="mt-12">
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default taskList

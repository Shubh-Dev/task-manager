// Components/TaskContainet
import TaskItem from "./TaskItem"

interface Task {
  id: string
  title: string
  status: string
}

interface TaskContainerProps {
  title: string
  count: number
  tasks: Task[]
  headColor: string
}
const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  count,
  tasks,
  headColor,
}) => {
  return (
    <div>
      <div className={`${headColor} flex justify-between px-2 items-center` }>
        <div>
          {title} {count}
        </div>
        <div>
          <img src="/assets/chevron-up.svg" alt="up" />
        </div>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.title} status={task.status} />
        ))}
      </div>
    </div>
  )
}

export default TaskContainer

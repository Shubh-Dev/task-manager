import Header from '../components/Header'
import Hero from '../components/Hero'
import TaskContainer from '../components/TaskContainer'
import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../utils/api'

interface Task {
  id: string;
  title: string;
  status: "completed" | "pending";
}


const taskList = () => {
  const { data: tasks, isLoading, error } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,

  });

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error.message}</p>;


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
        <div className="mt-4 ">
         <TaskContainer title='Test' tasks={tasks ?? []} headColor='bg-[#FAC3FF]' count={3} />
        </div>
      </div>
    </div>
  )
}

export default taskList

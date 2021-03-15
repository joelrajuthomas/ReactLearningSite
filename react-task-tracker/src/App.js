import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment', 
        day: 'Feb 5th at 10:00 AM',
        reminder: true,
    },
    {
        id: 2, 
        text: 'Business Meeting', 
        day: 'Feb 6th at 3:00 PM',
        reminder: true,
    },
    {
        id: 3, 
        text: 'Family Reunion', 
        day: 'Feb 7th at 7:00 PM',
        reminder: false,
    }
])
//Add Task
const addTask = () => {
  
}


// Delete Task
const deleteTask = (id) => {
    // console.log('Delete', id);
    //filter all the tasks to not show the task with the id that is clicked by x
    setTasks(tasks.filter((task) => task.id !== id))
  }

//Toggle Remind
const toggleReminder = (id) => {
    setTasks(//if task id = same id as clicked, change the task.reminder to opposite boolean
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    console.log(id)
}

  return (
    <div className='container'>
      <Header /> 
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete= {deleteTask}
      onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;

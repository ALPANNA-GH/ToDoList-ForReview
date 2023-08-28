import './style.css'
import { displayTasks } from './scripts/display-tasks'
import * as events from './scripts/events'

displayTasks()
events.addTaskEvent()
events.clearCompletedTasksEvent()

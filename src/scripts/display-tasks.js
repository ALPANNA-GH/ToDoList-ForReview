import { Tasks } from './Tasks'
import * as events from './events.js'

export function displayTasks () {
  const taskListContainer = document.querySelector('#taskList')
  taskListContainer.innerHTML = ''
  const tasks = new Tasks()
  tasks.taskList.forEach((task) => {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card')
    taskCard.id = 't' + task.index
    const doneCheck = document.createElement('input')
    doneCheck.type = 'checkbox'
    doneCheck.classList.add('check')
    doneCheck.checked = task.completed
    const descP = document.createElement('input')
    descP.type = 'text'
    descP.classList.add('desc')
    descP.value = task.description
    const indexP = document.createElement('p')
    indexP.classList.add('index')
    indexP.textContent = task.index
    taskCard.append(doneCheck, descP, indexP)
    taskListContainer.appendChild(taskCard)
  })
  events.editTaskCompletedEvent()
  events.editTaskName()
}

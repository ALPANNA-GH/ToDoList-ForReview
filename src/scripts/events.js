import { Tasks } from './Tasks'
const toDoTask = new Tasks()

//  event listeners and handlers

export function addTaskEvent () {
  toDoTask.taskName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toDoTask.taskName.value = toDoTask.taskName.value.replace(/[^a-z0-9 _.-]/gi, '')
      toDoTask.taskName.value = toDoTask.taskName.value.trim()
      if (toDoTask.taskName.value.trim() !== '') {
        toDoTask.addTask(toDoTask.taskName.value.trim())
        toDoTask.taskName.value = ''
      }
    }
  })
}

export function editTaskCompletedEvent () {
  const checkBoxes = document.querySelectorAll('.check')
  checkBoxes.forEach((el) => {
    const itemIndex = el.parentElement.id.replace('t', '')
    el.addEventListener('change', () => {
      toDoTask.editComplete(itemIndex, el.checked)
    })
  })
}

export function clearCompletedTasksEvent () {
  const clearCompletedTasks = document.querySelector('#clearCompleted')
  clearCompletedTasks.addEventListener('click', () => {
    toDoTask.removeTask()
  })
}

export function editTaskName () {
  const taskNameInputs = document.querySelectorAll('.desc')
  taskNameInputs.forEach((elm) => {
    const itemIndex = elm.parentElement.id.replace('t', '')
    elm.addEventListener('focus', () => {
      elm.style.outlineStyle = 'dotted'
      elm.style.color = '#000'
      elm.style.backgroundColor = '#d6ffff'
    })

    elm.addEventListener('blur', () => {
      elm.style.outlineStyle = 'none'
      elm.style.color = '#4d4d4d'
      elm.style.backgroundColor = 'Transparent'
    })

    elm.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        toDoTask.editName(itemIndex, elm.value)
      }
    })
  })
}

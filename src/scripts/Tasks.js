import { displayTasks } from './display-tasks'

export class Tasks {
  constructor () {
    this.taskList = []
    // task object figure { index: 3, description: 'task3', completed: true }
    this.getLocalStorage()
    this.taskName = document.querySelector('#taskName')
  }

  addTask (taskName) {
    const indexVal = this.taskList.length ?? 0
    const newTask = {
      index: indexVal,
      description: taskName,
      completed: false
    }
    this.taskList.push(newTask)
    this.setLocalStorage()
    displayTasks()
  }

  removeTask (task) {
    for (let t = 0; t < this.taskList.length; t++) {
      if (this.taskList[t].completed === true) {
        this.taskList.splice(t, 1)
        this.reOrderTask()
      }
    }
  }

  editName (id, editedName) {
    this.taskList[id].description = editedName
    this.setLocalStorage()
  }

  editComplete (id, val) {
    this.taskList[id].completed = val
    this.setLocalStorage()
  }

  reOrderTask (task) {
    for (let t = 0; t < this.taskList.length; t++) {
      this.taskList[t].index = t
    }
    this.setLocalStorage()
    displayTasks()
  }

  getLocalStorage () {
    try {
      this.taskList = JSON.parse(localStorage.getItem('taskList')) ?? []
    } catch {
      this.taskList = []
    }
  }

  setLocalStorage () {
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }
}

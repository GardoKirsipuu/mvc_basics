class Model {
	constructor(){
		// data
		this.tasks = [
			{id:1, text: 'Be good', complete: false},
			{id:2, text: 'Be nice', complete: false}
		]
	}
}

class View {
	constructor(){
		// basic view
		// root element
		this.app = this.getElement('#root')
		// title
		this.title = this.setElement('h1')
		this.title.textContent = 'Tasks'
		// tasks list
		this.taskList = this.setElement('ul')
		// append title and task list to app
		this.app.append(this.title, this.taskList)
	}

	// display tasks
	displayTasks(tasks){
		tasks.forEach(task => {
			//create li
			const li = this.setElement('li')
			li.id = task.id
			// task item complete toggle check
			const checkbox = this.setElement('input')
			checkbox.type = 'checkbox'
			checkbox.checked = task.complete
			// text span
			const span = this.setElement('span')
			// if task item is complete - strike trough
			if(task.complete === true){
				const strike = this.setElement('s')
				strike.textContent = task.text
				span.append(strike)
			} else {
				span.textContent = task.text
			}
			// append checkboc and span to li
			li.append(checkbox, span)
			// append created li to task list
			this.taskList.append(li)
		})
	}

	// getters
	getElement(selector){
		const element = document.querySelector(selector)
		return element
	}

	// setters
	setElement(tag, classname){
		const element = document.createElement(tag)
		if(classname !== undefined){
			element.classList.add(classname)
		}
		return element
	}
}

class Controller {
	constructor(model, view){
		this.model = model
		this.view = view

		this.displayTasks(this.model.tasks)
	}

	displayTasks = tasks => {
		this.view.displayTasks(tasks)
	}
}

const app = new Controller(new Model(), new View())
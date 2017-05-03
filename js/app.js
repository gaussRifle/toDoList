/*
	Массив объектов tasks (Пока имитирую localStorage)
	Объект состоит из:
		1. Текст задачи
		2. Флаг сделано/не сделано
*/
let tasks = [
	{
		textTask: 'Встать',
		isDone: 'done'
	},
	{
		textTask: 'Покурить',
		isDone: 'done'
	},
	{
		textTask: 'Умыться'
	},
	{
		textTask: 'Сделать звонок',	
	},
	{
		textTask: 'Похмелиться',
		isDone: 'done'
	},
	{
		textTask: 'Почистить зубы',
		isDone: 'done'
	},
	{
		textTask: 'Позавтракать',
		isDone: 'done'
	},
];

class toDoList{
	constructor(options){
		this.el = options.el;
		this.render(tasks);
	}
	
	render(tasks){
		let html = '<div class="toDoList">';
		
		 tasks.forEach((task) => {
		  html += `
			<div class="row toDoList__item">
				<div class="col-md-1 toDoList__item--check">
					<span class="glyphicon glyphicon-ok"></span>
				</div>
				<div class="col-md-10 toDoList__item--text ${task.isDone}">${task.textTask}</div>
				<div class="col-md-1 toDoList__item--reset">
					<span class="glyphicon glyphicon-remove"></span>
				</div>
			</div>
			<hr>
		  `;
		});
		
		html += '</div>';
		this.el.innerHTML = html;
	}
}

class toDoListPage{ 
	constructor(options){
		this.el = options.el;

		this.toDoList = new toDoList({
		  el: this.el.querySelector('.toDoList')
		});
	}
}

let page = new toDoListPage({
	el: document.body
});


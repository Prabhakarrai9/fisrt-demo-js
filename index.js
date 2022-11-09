let todos = [];
let counter = 0;
const todosContainer = document.getElementById("todo_container");
 
document.getElementById("add_todo_action").addEventListener('click',function(){
    const title= document.getElementById("todo_text").value;
    if (title === "")return;
    counter ++;

    const todo ={
        id: counter ,
        title: title, 
        completed: false
    }
    todos.push(todo)
    
    

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');  

     const textDiv = document.createElement('div')
     const serialNumber = document.createElement('h5');
    serialNumber.innerText = 'Todo #'+ (counter )
    textDiv.appendChild(serialNumber)
    const todoTitle = document.createElement('h3')
    serialNumber.classList.add('serialNumber')
    todoTitle.classList.add('serialNumber')
    todoTitle.innerText = title;
    textDiv.appendChild(todoTitle)

    const actionDiv = document.createElement('div')
    actionDiv.classList.add('actionDiv')
    const completeButton = document.createElement('button')
    completeButton.innerText='Mark as completed'
    actionDiv.appendChild(completeButton)

    const deleteButton = document.createElement('button')
    deleteButton.innerText='delete'
    deleteButton.style.backgroundColor = 'red'
    deleteButton.style.color = 'white'
    deleteButton.style.border= '0'
    deleteButton.style.borderRadius = '2px'
    deleteButton.style.padding = '3px 5px'
    actionDiv.appendChild(deleteButton )

    deleteButton.addEventListener('click', function(e){
        const title = todoTitle.innerText;
        todos = todos.filter(todo => todo.filter !== title)

    })
     completeButton.addEventListener('click', function(e){
        completeButton.innerText = 'Mark as complete';
        completeButton.disabled = true; 
        completeButton.style.backgroundColor = 'green'
        completeButton.style.color = 'white'
     })



    todoDiv.appendChild(textDiv)
    todoDiv.appendChild(actionDiv)

    todosContainer.appendChild(todoDiv)
    document.getElementById("todo_text").value= ""

 })


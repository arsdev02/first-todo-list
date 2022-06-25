const form = document.querySelector('#form')
let todos = []


const creatTask = () =>{
    let message = document.querySelector('#message')
    let text = document.querySelector('#text')
    if(message.value.trim()){
        let task = {
            id: todos.length === 0? 1
            :todos[todos.length-1].id+1,
            message: message.value,
            status: false,
            date: new Date(),
            text: text.value,
        }
        todos.push(task)
    }else{
        alert('you entered nothing')
    }
    
    renderTodos()
    message.value = ''
    text.value = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    creatTask()
})

const renderTodos = () => {
    const output = document.querySelector('.output')
    output.innerHTML = ''

    todos.forEach(el =>{
        const block = document.createElement('div')
        block.className ='block'
        let newDate = ` todo was created at ${el.date.getDate()} -
        ${el.date.getMonth()+1} -
        ${el.date.getFullYear()}
        ${el.date.getHours()}:${
        el.date.getMinutes()<10?'0'+el.date.getMinutes():el.date.getMinutes()}:${
        el.date.getSeconds()<10?'0'+el.date.getSeconds():el.date.getSeconds()}`

        block.style.background = el.status?'lightgreen':'rgba(0, 113, 240, .7)'

        const btnBlock = document.createElement('div')
        btnBlock.className = 'btnBlock'

            let mess = document.createElement('h3')
            let currentDate = document.createElement('p')
            currentDate.textContent = newDate
            mess.textContent = `name: ${el.message}`
            let complete = document.createElement('p')
            complete.textContent = 'todo is complete'

            let description = document.createElement('p')
            description.textContent = `description: ${el.text}`
            let textBlock = document.createElement('div')
            textBlock.className = 'textBlock'
// events
            let deleteBtn = document.createElement('button')
            // deleteBtn.textContent = 'DELET'
            deleteBtn.className = 'deletBtn'
            let doneBtn = document.createElement('button')
            // doneBtn.textContent = 'DONE'
            doneBtn.className = 'doneBtn'
            let editBtn = document.createElement('button')
            // editBtn.textContent = 'EDIT'
            editBtn.className = 'editBtn'

            editBtn.addEventListener('click', ()=>{
                if(el.status===false){
                    editTodo(el.id)
                }else{
                    alert('you cant edit todo')
                }
            })
            
            deleteBtn.addEventListener('click', ()=>{
                if(el.status===true){
                    deleteTodo(el.id)
                }else{
                    alert('todo is not complete')
                }
            })
                

            doneBtn.addEventListener('click', ()=>{
                // doneTodo(el.id)
                changeStatus(el.id)
            })
            
            // if(el.status === true){
            //     block.classList.add('changeBg')    
            // }
// appends 
        btnBlock.append(deleteBtn, editBtn, doneBtn)
            if(el.status){
                doneBtn.style.display = 'none'
                btnBlock.append(complete)
            }
        textBlock.append(mess, description, currentDate)    
        block.append(textBlock, btnBlock)
        output.append(block)
    })
}

const deleteTodo = (id) =>{
    todos = todos.filter(el=>el.id != id)
    renderTodos()
}

// const doneTodo = (id) => {
//     todos[todos.findIndex(el=>el.id===id)].status=true
//     renderTodos()
// }

const changeStatus = (id) =>{
    todos.forEach(el => {
        if(id===el.id){
            el.status = true
        }
    })
    renderTodos()
}

const editTodo = (id) =>{
    todos.forEach(el => {
        if(id===el.id){
            let newMess = prompt('edit name')
            let newText = prompt('edit description')
            if(newMess.trim() && newText.trim()){
                el.message = newMess
                el.text  = newText
            }else if (newMess.trim()){
                el.message = newMess
            }
            else if (newText.trim()){
                el.text  = newText
            }
            else{
                alert(`you haven't made any changes`)
            }
        }
    })
    renderTodos()
}


// console.log(todos)

// console.log(new Date())
// console.log(new Date().getDate(), )
// console.log(new Date().getMonth()+1)
// console.log(new Date().getHours())
// console.log(new Date().getFullYear())
// console.log(new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes())


// console.log(`${vremy.getDate()} - ${vremy.getMonth()} - ${vremy.getFullYear()} ${vremy.getHours()} : ${vremy.getMinutes()} : ${vremy.getMinutes()}`)



// let date = new Date()
// let currentDate = ${date.getHours()}:${date.getMinutes().toString().length<2?'0'+date.getMinutes():date.getMinutes()}
// console.log(currentDate)
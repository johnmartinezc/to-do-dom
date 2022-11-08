let todo = document.querySelector('#todoList')


let addButton = document.querySelector('#add')
let removeCompletedTasksButton = document.querySelector('#remove-completed-tasks')
let removeAllButton = document.querySelector('#remove-all')
let todoListItems = document.querySelector('#todoListItems ')
let newList = document.querySelector('#newlist')

todo.addEventListener('submit',function(event){
event.preventDefault()
let newItem = document.createElement('li')
newItem.innerText = todoListItems.value
console.log(newItem)
newItem.appendChild(newItem)
todoListItems.value = ''
})


addButton.addEventListener('click',function(event){
    event.preventDefault()
    console.log("here" + "," +todoListItems.value)
    
 
})

removeCompletedTasksButton.addEventListener('click',function(event){
    event.preventDefault()
    console.log("re")
}
)
removeAllButton.addEventListener('click',function(event){
    event.preventDefault()
    console.log('all')
})

// function add(list, arr){
//     for (let i = 0; i < arr.length; i++) {
//     let newItem =document.querySelector('li')
//         newItem.innerText = arr[i]
//         console.log(newItem)
//         list.appendChild(newItem)
        
//     }
     
// return newList
// }
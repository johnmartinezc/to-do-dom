let todoform = document.querySelector('#todoForm')
let addButton = document.querySelector('#adder')
let removeCompletedTasksButton = document.querySelector('#remove-completed-tasks')
let removeAllButton = document.querySelector('#remove-all')
let todoInput = document.querySelector('#todoInput ')
let newList = document.querySelector('#newlist ')
let newListli = document.querySelectorAll('#newlist li')




todoform.addEventListener('submit',function(event){
event.preventDefault()
let newItem = document.createElement('li')
newItem.innerText = todoInput.value
console.log(newItem)

newList.appendChild(newItem)

newItem.addEventListener('click',function(){
    if(newItem.style.textDecoration === ''){
        newItem.style.textDecoration = 'line-through'
    }else if(newItem.style.textDecoration == 'line-through'){
        newItem.style.textDecoration = ''
  
      }
      })
      
todoInput.value = ''
 newListli = document.querySelectorAll('#newlist li')
})


removeAllButton.addEventListener('click',function(event){
    event.preventDefault()
    // console.log('remove click')
    console.log(newListli)
    for (let i = 0; i < newListli.length; i++) {
        newListli[i].remove()
    }
}
)



removeCompletedTasksButton.addEventListener('click',function(event){
    event.preventDefault()
    // console.log("re")
    console.log(newListli)
    for (let i = 0; i < newListli.length; i++) {
        if(newListli[i].style.textDecoration === 'line-through'){
        newListli[i].remove()
    }
}
}
)
 
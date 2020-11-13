let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

console.log(arrayOfTodos[0].userId)

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  //   Then capture the ol item into a variable (getElementById)
  const setToDo = document.getElementById("todo-list")
  console.log(arrayOfTodos)

  for (let index = 0; index < arrayOfTodos.length; index++) {
    console.log(index)
    //   createElement to make a new li
    const listItem = document.createElement("li")
    //   createText inside the li using the title property.
    const text = document.createTextNode(arrayOfTodos[index].title);
      // console.log(arrayOfTodos[index].userId)

      // if(index % 2){
      //   listItem.style.color = "red"
      // }
    //   Now append the text to the new element.
    listItem.appendChild(text)
    //   Then append the element to the ol element.
    setToDo.appendChild(listItem)
    //   Put all of that inside your populateTodos function.

      // document.getElementById("todo-list").appendChild(document.createElement("li").appendChild(document.createTextNode(arrayOfTodos[index].userId)))

  }
}

const filterArrayOfToDos = (filterBy) => {
 console.log(filterBy)
  const userNumber = document.getElementById("numUser").value
  console.log(userNumber)
  if(filterBy === "userId"){

    arrayOfTodos = arrayOfTodos.filter(todo => todo.userId == userNumber)
  }
  if(filterBy === "completed"){
    arrayOfTodos = arrayOfTodos.filter(todo => !todo.completed)
}
  console.log(arrayOfTodos)

  
//remove all list Elements 
removeElements()
// // call populate ToDos
populateTodos()
}


const removeElements = () => {
  const allListElements = document.querySelectorAll("li")
  console.log(allListElements)

  for (let index = 0; index < allListElements.length; index++) {
    const element = allListElements[index];
    console.log(element)
    element.remove()
  }
}
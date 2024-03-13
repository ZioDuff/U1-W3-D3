const handleSubmit = (e) => {
  e.preventDefault()
  console.log("submit", e)
}
const myUlList = document.getElementById("finalList")
const function1 = function () {
  const myInput = document.getElementById("toDoList")
  const myData = {
    inserisciLista: myInput.value,
  }
  const li = document.createElement("li")
  li.innerText = myData
  li.addEventListener("click", function2)
  myUlList.appendChild(li)
  myInput.value = ""
  console.log(myUlList)
}
const form = document.getElementById("myForm")
form.addEventListener("submit", handleSubmit)

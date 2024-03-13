const input = document.getElementById("input-box")
const button = document.getElementById("addButton")
const finalList = document.getElementById("list-container")

button.onclick = function () {
  const inputText = input.value
  if (inputText !== "") {
    let elementLi = document.createElement("li")
    elementLi.innerText = inputText
    elementLi.addEventListener("click", function () {
      elementLi.classList.toggle("checked")
    })
    const listButton = document.createElement("button")
    listButton.innerText = "x"
    listButton.addEventListener("click", function () {
      finalList.removeChild(elementLi)
    })
    elementLi.appendChild(listButton)
    finalList.appendChild(elementLi)
    input.value = ""
  } else {
    alert("scrivi qualcosa dannazione!")
  }
}

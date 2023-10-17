// Write your code here!
const mainElement = document.getElementById("main");
mainElement.remove()   //main removed



const newHeader = document.createElement("h1")
newHeader.id="victory"//giving header an id of victory

newHeader.textContent = "YOUR-NAME is the champion"

const element = document.body
element.appendchild(newHeader)
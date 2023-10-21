import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push,onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
    const projectSettings={
        databaseURL:"https://uhhhh-90dac-default-rtdb.firebaseio.com/"
    }
    const app= initializeApp(projectSettings)// set up app 
console.log(app)
const database = getDatabase(app)// tao moi 1 database vao ben trong firebase 
const shopping = ref(database,"shoppingList")
console.log(shopping)

// lay ra the ul
const shoppingList= document.getElementById("shopping-list")
// lay ra the button 
const button= document.getElementById("add-button")
const inputField= document.getElementById("input-field")
button.addEventListener("click",function(){
    let inputValue= inputField.value;
    console.log(inputValue)
    push(shopping,inputValue)
})
onValue(shopping, function(snapshot){
    const itemArray= Object.entries(snapshot.val())
    console.log(itemArray)
    clearShoppingList()
    for(let i=0; i<itemArray.length;i++){
        let currentItem= itemArray[i]
        render(currentItem)
        clearInput()
    }
})
function render(item){
    let id = item[0];
    let value = item[1];
    let newItem = document.createElement("li")//<li></li>
    newItem.textContent=value
    newItem.addEventListener("click",function(){
        let location = ref(database, `shoppingList/${id}`)
        remove(location)
    })
    shoppingList.appendChild(newItem)
    
}
function clearShoppingList(){
    shoppingList.innerHTML=""
}
function clearInput(){
    inputField.value=""
}


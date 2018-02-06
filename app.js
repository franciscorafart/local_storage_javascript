let list =  document.querySelector('#list')

function addToList(name){
  let option = document.createElement("option")
  option.textContent = name
  list.appendChild(option)
}

let notes = JSON.parse(localStorage.getItem("notes")) ||
            {"shopping list":""}
for (let name in notes)
  if (notes.hasOwnProperty(name))
    addToList(name)

  function saveToStorage(){
    localStorage.setItem("notes", JSON.stringify(notes))
  }
  let current = document.querySelector("#currentnote")
  current.value = notes[list.value]

  list.addEventListener("change", function(){
    notes[list.value] = current.value
    saveToStorage()
  })
  current.addEventListener("change", ()=>{
    notes[list.value] = current.value
  })

  function addNote(){
    let name = prompt("Note name","")
    if (!name) return;
    if (!notes.hasOwnProperty(name)){
      notes[name] = ""
      addToList(name)
      saveToStorage()
    }
    list.value = name
    current.value = notes[name]
  }


const listContainer = document.getElementById("items");
const inputValue = document.getElementById("inputVal");

function addItems() {
  if (inputValue.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.className = "listItems";
    li.innerHTML = inputValue.value;

    let delBtn = document.createElement("button");
    delBtn.className = "deleteBtn";
    delBtn.innerHTML = "Delete";
    delBtn.onclick = deleteItem;
    
    li.appendChild(delBtn);

    let doneBtn = document.createElement("button");
    doneBtn.className = "doneBtn";
    doneBtn.innerHTML = "Done";
    doneBtn.onclick = markAsDone;
    li.appendChild(doneBtn);

    listContainer.appendChild(li);
}

inputValue.value = "";
saveData();
}

function deleteItem() {
  let node = this.parentElement;
  if (node) {
    node.parentNode.removeChild(node);
    saveData();
  }
}

function markAsDone() {
  let parent = this.parentElement;
  if (parent) {
    parent.style.backgroundColor = "green";
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    
  listContainer.innerHTML = localStorage.getItem("data");
//   console.log(data);
}

// showTask();
// window.addEventListener('load',()=>{
//     console.log("Manish")
//     showTask();
// })


// window.onload = myFunction;

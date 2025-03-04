const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list_container");
const button=document.querySelector(".btn");

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}


const addTask = () => {
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

const change = (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

listContainer.addEventListener("click",change);
button.addEventListener("click",addTask);
showTask();
//Close Button creation

let closeList = document.getElementsByTagName("li");
for(let i = 0 ; i < closeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    closeList[i].appendChild(span);
}




//Click on a close button and hide list
//Fail

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}



//Add checked symbol

let list = document.querySelector('ul');
list.addEventListener('click', function(tick){
    if(tick.target.tagName === 'LI'){
        tick.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    
  }
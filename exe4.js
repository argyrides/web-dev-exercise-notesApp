function createHeader(){
    let header = document.querySelector(".card-header");
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    header.innerHTML = dateTime; 
}

function addNotes(){
    let inputValue = document.querySelector(".note-input").value;
    CreateNoteElement(inputValue);

    document.getElementById('note-input').value = "";
}

function CreateNoteElement(inputValue){

    let contentClass = document.querySelector(".card-content");

    let contentElementsClass = document.createElement("div");
    contentElementsClass.className = "card-content-elements";
    contentElementsClass.setAttribute("id", "element-" + inputValue)
    contentClass.appendChild(contentElementsClass);
    let elementId = "element-"+inputValue;

    let elementInputClass = document.createElement("input");
    elementInputClass.className = "content-checkbox";
    elementInputClass.setAttribute('type','checkbox');
    elementInputClass.setAttribute('id', inputValue);
    elementInputClass.setAttribute('name', inputValue);
    elementInputClass.innerHTML = inputValue;
    elementInputClass.onclick = function(){
        let isChecked = elementInputClass.checked;
        setNoteBackground(isChecked, elementId);
    }
    contentElementsClass.appendChild(elementInputClass);
    
    let elementLabelClass = document.createElement("label");
    elementLabelClass.setAttribute('for', inputValue);
    elementLabelClass.className = "content-label";
    elementLabelClass.innerHTML = inputValue;
    contentElementsClass.appendChild(elementLabelClass);

    let elementButtonClass = document.createElement("button");
    elementButtonClass.className = "remove-note-button";
    elementButtonClass.innerHTML = "X";
    elementButtonClass.onclick = function(){
        removeNotes(elementId);
    }
    contentElementsClass.appendChild(elementButtonClass);   
}

function removeNotes(noteId){
    var getNote = document.getElementById(noteId);
    getNote.classList.add("hidden");
}

function setNoteBackground(isChecked,noteId){
    var getNote = document.getElementById(noteId);

    if (isChecked === true){
    getNote.style.backgroundColor = 'LightGreen';
    }
    else{
        getNote.style.backgroundColor = 'white';
    }
}

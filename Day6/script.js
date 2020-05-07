const newN=document.getElementById("new-note");
const saveN=document.getElementById("save-note");
const notes=document.getElementById("list-of-notes");
const deleteN=document.getElementById("delete-note");
const noteArea=document.getElementById("note-area");

const noteList=document.createElement('option');
function newNote(){
    const notename=prompt("enter note name");
    window.localStorage.setItem(notename, '');

    noteList;

    noteList.innerText=notename;
    notes.appendChild(noteList);

    notes.value=notename;
    noteArea.value=" ";
}

function saveNote(){
    window.localStorage.setItem(notes.value, noteArea.value);
}
function selectNote(){
   noteArea.value=window.localStorage.getItem(notes.value);
}

for(let i = 0 ; i < window.localStorage.length; i++){
    const newNote=document.createElement('option');
    newNote.innerText=window.localStorage.key(i);
    notes.appendChild(newNote);
}
selectNote();
/*
//check for unsaved note
function checkUnsaved(){
    if(noteLists.length===0){
        const noName=document.createElement("option");
        noName.innerText="No Name";
        noteLists.appendChild(noName);
    }
}

function saveNote(){
    savedNotes=window.localStorage.setItem(noteLists.value, noteArea.value);
}
function selectNote(){
    alert(window.localStorage.getItem('savedNotes'));
}

/*
function deleteNote(){
    window.localStorage.removeItem('savedNotes');
}
function createNote(){
    ////
    if(newNotes==""){

    }
}
*/
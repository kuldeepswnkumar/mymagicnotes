

let addBtn = document.getElementById('addBtn');
let notesElm = document.getElementById('notes');

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class=" cardItem card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class = "card-text">${element}</p>
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div> `;
    });

    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to the add notes.`
    }

}

showNotes();


addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt').value;
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt = "";
    
    showNotes();
});




// function to delete a note

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}







// search
let search = document.getElementById("searchTxt");

search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    let cardItem = document.getElementsByClassName('cardItem');
    Array.from(cardItem).forEach(function(elements) {
        let cardTxt = elements.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            elements.style.display = "block"; 
        }
        else {
            elements.style.display = "none";
        }
    });
})
    
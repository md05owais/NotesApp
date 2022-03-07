"use Strict";
const btnAdd = document.querySelector(".Add-Note");
const btnSearch = document.querySelector(".Seacrh-Nav");
const btnDelete = document.querySelector(".delete");
const btnEdit = document.querySelector(".edit");

const startLogoutTimer = function () {
  // document.querySelector(".Add-Notes-pop-up").classList.remove("hidden");
  let t = 10;
  console.log(t);
  let temp = document.querySelector(".Add-Notes-pop");
  let id = setInterval(myTimer, 100);
  function myTimer() {
    if (t === 0) {
      temp.classList.add("hidden");
      clearInterval(id);
    } else {
      temp.classList.remove("hidden");
    }
    console.log(t);
    t--;
  }
};
// new Div creation

//Add notes
const addMessage = function () {
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;
  startLogoutTimer();
  localStorage.setItem(title, note);

  // alert("added successfully");
  // document.querySelector(".Add-Notes-pop-up").classList.remove("hidden");
};
btnAdd.addEventListener("click", addMessage);
// delete timer

const startLogoutTimerDelete = function () {
  // document.querySelector(".Add-Notes-pop-up").classList.remove("hidden");
  let t = 10;
  // console.log(t);
  let id = setInterval(myTimer, 100);
  function myTimer() {
    document.querySelector(".delete-Notes").classList.remove("hidden");

    // console.log(t);
    if (t === 0) {
      document.querySelector(".delete-Notes").classList.add("hidden");
      clearInterval(id);
    }
    t--;
  }
};

//delete notes

const deleteNotes = function (index) {
  // console.log(index);
  // const titleDelete = document.querySelector(".box-title").textContent;
  // const titleValue = document.querySelector(".box-notes").textContent;
  // const messageDelete = document.querySelector("box-").textContent;
  // console.log(titleDelete, messageDelete);
  let deletedNores = localStorage.key(index);
  localStorage.removeItem(deletedNores);
  // localStorage.removeItem(titleDelete, titleValue);
  // alert("deleted successfully");
  startLogoutTimerDelete();
  if (localStorage.length > 0) displayNotes();
  else {
    document.querySelector(".paragraph").classList.remove("hidden");
    document.querySelector(".Add-Box").classList.add("hidden");
  }
  // console.log(titleDelete);
};

//Edit Notes

const editNotes = function (ind) {
  let titleEdit = localStorage.key(ind);
  let valueEdit = localStorage.getItem(titleEdit);
  document.getElementById("title").textContent = titleEdit;
  document.getElementById("note").textContent = valueEdit;
  localStorage.removeItem(titleEdit);
};

// display each box
const displayNotes = function () {
  if (localStorage.length > 0) {
    document.querySelector(".paragraph").classList.add("hidden");
    document.querySelector(".Add-Box").classList.remove("hidden");
    let i = 0;
    let html = "";
    while (i < localStorage.length) {
      const titleBox = String(localStorage.key(i));

      // console.log(typeof titleBox);
      const titleValue = localStorage.getItem(String(titleBox));

      html += `<div class="Box-item ${titleBox}">
     <h3 class="box-title">${titleBox}</h3>
     <p class="box-notes">${titleValue}</p>
     <button id="${i}" class="delete-style" onclick = deleteNotes(${i})>delete</button>
     <button id="${i}" onclick = editNotes(${i})><a href="#title-note">edit</a></button>
   </div>`;

      document.querySelector(".Add-Box").innerHTML = html;
      // document.getElementById("i").style.backgroundColor = "red";
      // document.querySelector("#box-title").textContent = titleBox;
      // document.querySelector("#box-notes").textContent = titleValue;
      // console.log(titleBox, titleValue);
      i++;
    }
  }
};
displayNotes();
if (localStorage.length === 0) {
  document.querySelector(".paragraph").classList.remove("hidden");
  document.querySelector(".Add-Box").classList.add("hidden");
}

// Search items

const SearchNote = function () {
  const NotesName = document.getElementById("search-nav").value;
  let i = 0;
  while (i < localStorage.length) {
    let title = localStorage.key(i);
    if (title === NotesName) {
    }
  }
};
btnSearch.addEventListener("input", () => {
  // if(InputEvent.key === "")
  // console.log("Input");
  if (btnSearch.value != " ") {
    let SeacrhValue = btnSearch.value.toLowerCase();
    // console.log(SeacrhValue);
    let visibleNotes = document.getElementsByClassName("Box-item");
    // console.log(visibleNotes);
    // let i = 0;
    Array.from(visibleNotes).forEach(function (element) {
      let cardTitle = element
        .getElementsByTagName("h3")[0]
        .innerText.toLowerCase();

      let cardTxt = element
        .getElementsByTagName("p")[0]
        .innerText.toLowerCase();
      if (!(cardTitle.includes(SeacrhValue) || cardTxt.includes(SeacrhValue))) {
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
      }
    });
  }
});

// console.log(localStorage.key(0));
// console.log(localStorage.getItem);

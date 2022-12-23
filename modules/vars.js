export let _localStorageNotes = JSON.parse(localStorage.getItem("notes")),
  dateInfo = document.querySelector("#date-1"),
  noteInfo = document.querySelector("#note-1"),
  btnAddNote = document.querySelector(".addNoteBtn"),
  catsBlock = document.querySelector(".important-content"),
  taskCheckbox = document.querySelector("#check-1"),
  searchInput = document.querySelector("#search-1"),
  taskName = document.querySelector(".task-name"),
  taskDate = document.querySelector(".task-date"),
  taskCond = document.querySelector(".task-condition"),
  importantContent = document.querySelector(".important-content"),
  inprocessContent = document.querySelector(".inprocess-content"),
  doneContent = document.querySelector(".done-content");

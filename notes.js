// Get references to elements
const noteTextarea = document.getElementById('note-textarea');
const saveNoteBtn = document.getElementById('save-note-btn');
const clearNoteBtn = document.getElementById('clear-note-btn');
const noteList = document.getElementById('note-list');

// Initialize notes array

let notes = [];

// Load saved notes from localStorage
if (localStorage.getItem('notes')) {
  notes = JSON.parse(localStorage.getItem('notes'));
  renderNoteList();
}

// Save note function
function saveNote() {
  const noteText = noteTextarea.value.trim();
  if (noteText) {
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNoteList();
    noteTextarea.value = '';
  }
}

// Clear notes function
function clearNotes() {
  notes = [];
  localStorage.removeItem('notes');
  noteList.innerHTML = '';
  noteTextarea.value = '';
}

// Render note list function
function renderNoteList() {
  noteList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.textContent = note;
    noteElement.className = 'note';
    noteList.appendChild(noteElement);
  });
}

// Add event listeners
saveNoteBtn.addEventListener('click', saveNote);
clearNoteBtn.addEventListener('click', clearNotes);
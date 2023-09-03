
const editor = document.getElementById('editor');


const savedText = localStorage.getItem('editorText');


if (savedText) {
  editor.value = savedText;
}

editor.addEventListener('input', () => {
  localStorage.setItem('editorText', editor.value);
});

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('tasklist');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You must write something!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = inputBox.value.trim();

    const span = document.createElement('span');
    span.innerHTML = '&times;';
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    const savedTasks = localStorage.getItem('data');
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

showTask();
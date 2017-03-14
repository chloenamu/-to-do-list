const itemElement = document.getElementById('addTodoItem')

function onAdd() {
  if (itemElement.value) {
    addItemOnList(itemElement.value);
    itemElement.value = '';
  }
}

function addItemOnList (itemValue) {
  listItem = document.createElement('li');
  listItem.textContent = itemValue;

  deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete item';
  deleteButton.className = 'inlineblock';

  divElement = document.createElement('div');
  divElement.className = 'block';

  orderedList = document.getElementById('todoList');
  orderedList.appendChild(divElement);

  divElement.appendChild(listItem);
  divElement.insertBefore(deleteButton, listItem.nextSibling);

  deleteButton.onclick = function () {
    this.parentElement.parentElement.removeChild(this.parentElement);
  }

  listItem.onclick = function () {
    if (this.className === 'done') {
      this.className = '';
      return;
    }

    this.className = 'done';
  }
}

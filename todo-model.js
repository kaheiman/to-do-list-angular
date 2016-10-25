function TodoItem(desc, isCompleted) {
  // Description of the todo item
  this.desc = desc || '';             // Default to ''

  // true => Item has been checked (or marked as "completed")
  this.isCompleted = !!(isCompleted); // Default to false
}

function TodoList() {
  this.editedDesc = '';     // The "todo description" in the input textfield
  this.items = [];          // List of todo items
}

// Taken toevoegen
function addTask() {
    // Node(object opslaan op variabele)
    let taskList = document.getElementById("taskList");

    // Waarden van het input node(objecten) opslaan op variabeles
    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;

    // Deze variabele maakt nieuwe li element(node)
    let li = document.createElement("li");

    // Values toevoegen in het li node
    li.innerHTML = `${taskName}: ${taskDescription} <button onclick="completeTask(this)">Voltooid</button>`;

    // li toevegen binnen het Unsorted-List
    taskList.appendChild(li);
};

// Taken voltooien
function completeTask(knop) {
    // Parentnode opslaan
    let item = knop.parentNode;

    // Klas(css) toevoegen aan parent node dus li(node)
    item.classList.add("gedaan");

    // Knop uitschakelen
    knop.disabled = true;
};

// Event handler
document.getElementById("addTaskButton").addEventListener("click", addTask);
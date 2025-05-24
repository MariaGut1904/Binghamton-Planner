let total = 0;

function addBudgetItem() {
  const item = document.getElementById("item").value;
  const cost = parseFloat(document.getElementById("cost").value);

  if (item && !isNaN(cost)) {
    const li = document.createElement("li");
    li.textContent = `${item}: $${cost}`;
    document.getElementById("budget-list").appendChild(li);

    total += cost;
    document.getElementById("total").textContent = total.toFixed(2);

    document.getElementById("item").value = "";
    document.getElementById("cost").value = "";
  }
}

function addEvent() {
  const date = document.getElementById("event-date").value;
  const name = document.getElementById("event-name").value;

  if (date && name) {
    const li = document.createElement("li");
    li.textContent = `${date}: ${name}`;
    document.getElementById("event-list").appendChild(li);

    document.getElementById("event-date").value = "";
    document.getElementById("event-name").value = "";
  }
}

function addFurniture() {
  const item = document.getElementById("furniture-item").value;
  if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("furniture-list").appendChild(li);

    document.getElementById("furniture-item").value = "";
  }
}

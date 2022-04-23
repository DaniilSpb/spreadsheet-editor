window.onload = function () {
  let test = JSON.parse(localStorage.getItem("arr"));
  if (test === null) {
    console.log("объект в локал сторадж не найден!");
  } else {
    fillTable(test);
  }
};
function fillTable(arr) {
  arr.forEach((element) => {
    insert_str();
  });
  const table = document.getElementsByClassName("input_main_table");
  let counter = 0;
  for (let i = 0; i < table.length; i++) {
    table[i].value = arr[counter]["name"];
    table[i + 1].value = arr[counter]["type"];
    table[i + 2].value = arr[counter]["age"];
    counter += 1;
    i += 2;
  }
}
function insert_str() {
  const table = document.getElementById("table");
  const tr = table.insertRow();
  tr.classList.add("table_str");
  let x = document.getElementsByClassName("table_str").length - 1;
  for (let j = 0; j < 3; j++) {
    const td = tr.insertCell();
    td.setAttribute("style", "padding:0px");
    let input = document.createElement("input");
    input.placeholder = "Введите значение";
    input.classList.add("input_main_table");
    if (x % 2 == 0) {
      input.setAttribute("style", "background:#f3f3f3");
    }
    td.appendChild(input);
  }
  const td = tr.insertCell();
  td.setAttribute("style", "padding:0px");
  const button = document.createElement("button");
  button.classList.add("button-table");
  button.innerHTML = "удалить";
  button.setAttribute("onclick", "remove_str(this)");
  td.appendChild(button);
}

function remove_str(r) {
  let delStr = r.parentNode.parentNode.rowIndex;
  document.getElementById("del_str").deleteRow(delStr);
}

function saveValue() {
  arr = [];
  var table = document.getElementById("table");
  for (var r = 0, n = table.rows.length; r < n; r++) {
    let obj = {};
    obj.name = table.rows[r].cells[0].firstChild.value;
    obj.type = table.rows[r].cells[1].firstChild.value;
    obj.age = table.rows[r].cells[2].firstChild.value;
    arr.push(obj);
  }

  localStorage.setItem("arr", JSON.stringify(arr));
}

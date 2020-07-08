const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
const allCheck = document.querySelector(".all-check");
const delButton = document.querySelector(".delete");

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
            <label for="item${i}">${plate.text}</lbael>
        </li>`;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
}

function handleAllCheck(e) {
  e.preventDefault();
  if (e.target.value === "all-Checked") {
    items.forEach((item) => (item.done = true));
    populateList(items, itemsList);
  } else {
    items.forEach((item) => (item.done = false));
    populateList(items, itemsList);
  }
  localStorage.setItem("items", JSON.stringify(items));
}

function handleIcon(e) {
  // 먼저  가상 items 배열의   item.done을 트루로 만들어주고   populate 함수 재실행을 해준다.
  const index = e.target.dataset.index;
  items = items.filter((item, i) => {
    if (i === index && e.target.checked) {
      item.done = true;
      return false;
    }
  });
  // populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function handleDelBtn(e) {
  // handleIcon으로   가상 items배열의 checked가 셋팅이 되면  삭제를 해준다.  checked가 되있는 요소는
  e.preventDefault();
  items = items.filter((item, i) => {
    if (!item.done) return true;
  });
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

itemsList.addEventListener("click", toggleDone);
addItems.addEventListener("submit", addItem);
allCheck.addEventListener("click", handleAllCheck);
delButton.addEventListener("click", handleDelBtn);

populateList(items, itemsList);

const checkbox = itemsList.querySelectorAll("input");
checkbox.forEach((i) => {
  i.addEventListener("click", handleIcon);
});

// all or check all or uncheck all

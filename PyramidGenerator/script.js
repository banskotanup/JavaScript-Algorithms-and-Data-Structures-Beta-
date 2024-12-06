const character = "#";
const count = 8;
const rows = [];
let inverted;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

const container = document.querySelector(".container");
const h1 = document.createElement("h1");
h1.textContent = "Select which type of pyramid do you want?";
container.appendChild(h1);

const btnInv = document.createElement("button");
btnInv.textContent = "Inverted";
btnInv.setAttribute("style", "Margin: 10px; background-color: skyblue;");
container.appendChild(btnInv);

const btnNon = document.createElement("button");
btnNon.textContent = "Not Inverted";
container.appendChild(btnNon);

btnInv.addEventListener("click", () => {
  for (let i = 1; i <= count; i++) {
    rows.unshift(padRow(i, count));
  }
  let result = "";
    for (const row of rows) {
        const p = document.createElement("p");
        container.appendChild(p);
        p.textContent = result;
      result = result + row + "\n";
      
  }
  const label = document.createElement("div");
  label.textContent = result;
  container.appendChild(label);
});

let input = +prompt(
  "Which type pyramid do you want? Press 1 for inverted & 0 for non-inverted"
);
if (input === 1) {
  inverted = true;
} else if (input === 0) {
  inverted = false;
} else {
  alert("Invalid choices!");
}

if (input) {
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

  let result = "";
  for (const row of rows) {
    result = result + row + "\n";
  }

  console.log(result);
} else {
  console.log("No any input found.");
}

// DOM manipulate by me!!!!
function getInputValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputString = inputElement.value;
  const inputValue = parseFloat(inputString);
  inputElement.value = "";
  return inputValue;
}

function setElementInnerText(elementId, area) {
  const targetElement = document.getElementById(elementId);
  targetElement.innerText = area;
}

// calculateTriangleArea
function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a valid number");
    return;
  }
  const area = 0.5 * base * height;
  setElementInnerText("triangle-area", area);
  addToCalculationEntry("Triangle", area);
}
// calculateRectangleArea
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-height");
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a valid number");
    return;
  }
  const area = width * length;
  setElementInnerText("rectangle-area", area);
  addToCalculationEntry("Rectangle", area);
}

// calculateParallelogramArea
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a valid number");
    return;
  }
  const area = base * height;
  setElementInnerText("parallelogram-area", area);
  addToCalculationEntry("Parallelogram", area);
}

// calculateEllipseArea
function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("Please insert a valid number");
    return;
  }
  const area = 3.14 * majorRadius * minorRadius;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaTwoDecimal);

  addToCalculationEntry("Ellipse", areaTwoDecimal);
}

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");
  let count = calculationEntry.childElementCount;
  p.classList.add('my-4');
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

  calculationEntry.appendChild(p);
}

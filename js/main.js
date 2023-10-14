// Obtén todos los elementos por sus clases
var substractButtons = document.querySelectorAll(".button-substract");
var addButtons = document.querySelectorAll(".button-add");
var materialElements = document.querySelectorAll(".content-material.changeStatus");
var stockDiscountElements = document.querySelectorAll(".content-stock.content-stock-discount-box.changeStatus");
var totalStockElements = document.querySelectorAll(".content-stock.content-total-stock.changeStatus");

// Establece el valor inicial de content-stock-discount-box al valor de content-total-stock
stockDiscountElements.forEach(function (element, index) {
    element.textContent = totalStockElements[index].textContent;
});

// Agrega manejadores de eventos a los botones de resta y suma para cada conjunto
substractButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        // Resta 1 al contador correspondiente
        var countMaterial = parseFloat(materialElements[index].textContent) || 0;
        if (countMaterial > 0) {
            countMaterial--;
        }

        // Suma 1 al stock total y muestra en el stock descontado
        var initialStock = parseFloat(stockDiscountElements[index].textContent) || 0;
        if (initialStock > 0) {
            initialStock++;
        }
        
        // Actualiza los elementos con los nuevos valores
        materialElements[index].textContent = countMaterial;
        stockDiscountElements[index].textContent = initialStock;

        // Actualiza el color
        updateColor(stockDiscountElements[index]);
    });
});

addButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        // Suma 1 al contador correspondiente
        var countMaterial = parseFloat(materialElements[index].textContent) || 0;
        countMaterial++;
        
        // Resta 1 al stock total y muestra en el stock descontado
        var initialStock = parseFloat(stockDiscountElements[index].textContent) || 0;
        initialStock--;
        
        // Actualiza los elementos con los nuevos valores
        materialElements[index].textContent = countMaterial;
        stockDiscountElements[index].textContent = initialStock;

        // Actualiza el color
        updateColor(stockDiscountElements[index]);
    });
});

// Función para cambiar el color del número según su valor y estado anterior de color
function updateColor(element) {
    var value = parseFloat(element.textContent) || 0;
    var previousColor = element.getAttribute('data-color') || 'color-green';

    element.classList.remove('color-red', 'color-orange', 'color-green');

    switch (true) {
        case (value <= 5):
            element.classList.add('color-red');
            break;
        case (value <= 10):
            element.classList.add('color-orange');
            break;
        case (value >= 11):
            element.classList.add('color-green');
            break;
    }

    // Guarda el nuevo estado de color en un atributo de datos personalizado
    element.setAttribute('data-color', element.classList[1] || 'color-green');

    // Remueve la clase anterior si el color cambió
    if (previousColor !== element.getAttribute('data-color')) {
        element.classList.remove(previousColor);
    }
}

// Obtén los elementos con IDs "stock-disp-01", "stock-disp-02", "stock-disp-03"
const stockElements = [
    document.getElementById('stock-disp-01'),
    document.getElementById('stock-disp-02'),
    document.getElementById('stock-disp-03')
];

// Inicializa una variable para almacenar la suma
let totalInventory = 0;

// Suma los valores de los elementos
stockElements.forEach(element => {
    totalInventory += parseInt(element.textContent);
});

// Actualiza el contenido del div con el id "total-inventory" con la suma calculada
const totalInventoryDiv = document.getElementById('total-inventory');
totalInventoryDiv.textContent = `Stock Total: ${totalInventory}`;

// Obtén el elemento div por su ID
var div = document.getElementById("stock-total");

// Función para cambiar el color del número según su valor
function updateColor(element) {
    var value = parseFloat(element.textContent) || 0;
    element.classList.remove('color-red', 'color-orange', 'color-green');

    switch (true) {
        case (value <= 5):
            element.classList.add('color-red');
            break;
        case (value <= 10):
            element.classList.add('color-orange');
            break;
        case(value >= 11):
            element.classList.add('color-green');
            break;
    }
}

// Obtén los elementos con IDs "count-01", "count-02", "count-03"
const countElements = [
    document.getElementById('count-01'),
    document.getElementById('count-02'),
    document.getElementById('count-03')
];

// Inicializa una variable para almacenar la suma
let totalDiscount = 0;

// Suma los valores de los elementos
countElements.forEach(element => {
    totalDiscount += parseInt(element.textContent) || 0;
});

// Actualiza el contenido del div con el id "total-discount" con la suma calculada
const totalDiscountDiv = document.getElementById('total-discount');
totalDiscountDiv.textContent = `Total Discount: ${totalDiscount}`;

// Calcula el stock total sumando los valores de todos los elementos
var totalStock = 0;
totalStockElements.forEach(function (element) {
    totalStock += parseInt(element.textContent) || 0;
});

// Actualiza el contenido del elemento "stock-total" con el valor calculado
var stockTotalElement = document.getElementById("stock-total");
stockTotalElement.textContent = totalStock;


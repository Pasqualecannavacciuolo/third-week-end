var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Implementing the interface in the case of Car --> we can extends this for --> [Electric & Thermic]
var Car = /** @class */ (function () {
    // Constructor
    function Car(cv, range, weight, color, brand, model) {
        this.cv = cv;
        this.range = range;
        this.weight = weight;
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    // Getter methods
    Car.prototype.getCv = function () {
        return this.cv;
    };
    Car.prototype.getRange = function () {
        return this.range;
    };
    Car.prototype.getWeight = function () {
        return this.weight;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.getmodel = function () {
        return this.model;
    };
    return Car;
}());
// Creating a calss for an Electric Car that takes the methods and parameters from the abstract class Car
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(cv, range, weight, color, brand, model) {
        return _super.call(this, cv, range, weight, color, brand, model) || this;
    }
    return ElectricCar;
}(Car));
var ModelX = new ElectricCar(1020, 507, 2468, "bianco", "Tesla", "Model X");
var ModelY = new ElectricCar(480, 350, 2003, "rosso", "Tesla", "Model Y");
var ModelS = new ElectricCar(1020, 1200, 2069, "nero", "Tesla", "Model S");
var arrayOfCars = [ModelX, ModelY, ModelS];
// This method get from an array the most heavy car
var mostHeavy = function (e) {
    var heaviest = e[0];
    for (var i = 0; i < e.length; i++) {
        if (e[i].getWeight() > heaviest.getWeight()) {
            heaviest = e[i];
        }
    }
    return heaviest;
};
// This method prints the heaviest car Model name & Weight
var printHeaviest = function () {
    var father = document.getElementById('message-wrapper');
    var output = mostHeavy(arrayOfCars);
    var outputString = ("La macchina più pesante è " + output.getmodel() + " con " + output.getWeight() + " kg").toString();
    var h2Tag = document.createElement('H2');
    h2Tag.innerHTML = outputString;
    father.appendChild(h2Tag);
    // Hiding the button after prints the output
    document.getElementById('btnHeav').style.display = "none";
};
var mediaCv = function (e) {
    var somma = 0;
    var media;
    for (var i = 0; i < e.length; i++) {
        somma = somma + e[i].getCv();
    }
    media = somma / e.length;
    return media;
};
var printMediaCv = function () {
    var father = document.getElementById('message-wrapper');
    var output = mediaCv(arrayOfCars);
    var outputString = "La media di cavalli delle macchine Tesla è: " + output + " cv";
    var h2Tag = document.createElement('H2');
    h2Tag.innerHTML = outputString;
    father.appendChild(h2Tag);
    // Hiding the button after prints the output
    document.getElementById('btnMed').style.display = "none";
};
// This method prints all the cars created in the HTML
var printCarTable = function () {
    // Locking the father container
    var father = document.getElementById('car-list');
    var container = document.createElement("DIV");
    container.classList.add('container');
    var columnBrand = document.createElement("DIV");
    columnBrand.classList.add('column-elm');
    columnBrand.innerHTML = "Brand";
    container.append(columnBrand);
    var columnModel = document.createElement("DIV");
    columnModel.classList.add('column-elm');
    columnModel.innerHTML = "Model";
    container.append(columnModel);
    var columnColor = document.createElement("DIV");
    columnColor.classList.add('column-elm');
    columnColor.innerHTML = "Color";
    container.append(columnColor);
    var columnCv = document.createElement("DIV");
    columnCv.classList.add('column-elm');
    columnCv.innerHTML = "Cv";
    container.append(columnCv);
    var columnRange = document.createElement("DIV");
    columnRange.classList.add('column-elm');
    columnRange.innerHTML = "Range";
    container.append(columnRange);
    father.append(container);
    // Hiding the button after prints the output
    document.getElementById('btnList').style.display = "none";
    for (var i = 0; i < arrayOfCars.length; i++) {
        // This DIV contains the data of 1 car at the time
        var container_1 = document.createElement("DIV");
        container_1.classList.add('container');
        var brand = document.createElement("DIV");
        brand.classList.add('list-elm');
        brand.innerHTML = arrayOfCars[i].getBrand();
        container_1.appendChild(brand);
        var model = document.createElement("DIV");
        model.classList.add('list-elm');
        model.innerHTML = arrayOfCars[i].getmodel();
        container_1.appendChild(model);
        var color = document.createElement("DIV");
        color.classList.add('list-elm');
        color.innerHTML = arrayOfCars[i].getColor();
        container_1.appendChild(color);
        var cv = document.createElement("DIV");
        cv.classList.add('list-elm');
        cv.innerHTML = arrayOfCars[i].getCv().toString();
        container_1.appendChild(cv);
        var range = document.createElement("DIV");
        range.classList.add('list-elm');
        range.innerHTML = arrayOfCars[i].getRange().toString();
        container_1.appendChild(range);
        // Adding to the father the container filled with the data of 1 car
        father.appendChild(container_1);
    }
};

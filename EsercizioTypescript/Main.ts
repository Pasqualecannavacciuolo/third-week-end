// We can use this interface with [Trucks - Thermic Cars - Electric Cars - Planes - etc...]
interface Vehicle {
    cv: number;
    range: number;
    weight: number;
    color: string;
    brand: string;
    model: string;
}

// Implementing the interface in the case of Car --> we can extends this for --> [Electric & Thermic]
abstract class Car implements Vehicle{

    cv: number;
    range: number;
    weight: number;
    color: string;
    brand: string;
    model: string;
    
    // Constructor
    constructor(cv: number, range: number, weight: number, color: string, brand: string, model: string) {
        this.cv = cv;
        this.range = range;
        this.weight = weight;
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    // Getter methods
    getCv(): number {
        return this.cv;
    }
    getRange(): number {
        return this.range;
    }
    getWeight(): number {
        return this.weight;
    }
    getColor(): string {
        return this.color;
    }
    getBrand(): string {
        return this.brand;
    }
    getmodel(): string {
        return this.model;
    }
}

// Creating a calss for an Electric Car that takes the methods and parameters from the abstract class Car
class ElectricCar extends Car {
    
    constructor(cv: number, range: number, weight: number, color: string, brand: string, model: string) {
        super(cv, range, weight, color, brand, model);
    }
}


let ModelX = new ElectricCar(1020, 507, 2468, "bianco", "Tesla", "Model X");
let ModelY = new ElectricCar(480, 350, 2003, "rosso", "Tesla", "Model Y");
let ModelS = new ElectricCar(1020, 1200, 2069, "nero", "Tesla", "Model S");

let arrayOfCars = [ModelX, ModelY, ModelS];

// This method get from an array the most heavy car
const mostHeavy = (e: Array<Car>) => {
    let heaviest = e[0];
    for (let i = 0; i < e.length; i++) {
        if (e[i].getWeight() > heaviest.getWeight()) {
            heaviest = e[i];
        }
    }
    return heaviest;
}

// This method prints the heaviest car Model name & Weight
const printHeaviest = () => {
    let father = document.getElementById('message-wrapper');
    
    let output = mostHeavy(arrayOfCars)
    let outputString = ("La macchina più pesante è " + output.getmodel() + " con " + output.getWeight() + " kg").toString();

    let h2Tag = document.createElement('H2');
    h2Tag.innerHTML = outputString;

    father.appendChild(h2Tag);

    // Hiding the button after prints the output
    document.getElementById('btnHeav').style.display = "none";
}

const mediaCv = (e: Array<Car>) => {
    let somma = 0;
    let media;
    for(let i=0; i<e.length; i++) {
        somma = somma + e[i].getCv();
    }
    media = somma / e.length;
    return media;
}

const printMediaCv = () => {
    let father = document.getElementById('message-wrapper');
    
    let output = mediaCv(arrayOfCars);
    let outputString = "La media di cavalli delle macchine Tesla è: " + output + " cv";
    
    let h2Tag = document.createElement('H2');
    h2Tag.innerHTML = outputString;

    father.appendChild(h2Tag);

    // Hiding the button after prints the output
    document.getElementById('btnMed').style.display = "none";    
}

// This method prints all the cars created in the HTML
const printCarTable = () => {

    // Locking the father container
    let father = document.getElementById('car-list');

    let container = document.createElement("DIV");
    container.classList.add('container');

    let columnBrand = document.createElement("DIV");
    columnBrand.classList.add('column-elm');
    columnBrand.innerHTML = "Brand"
    container.append(columnBrand);

    let columnModel = document.createElement("DIV");
    columnModel.classList.add('column-elm');
    columnModel.innerHTML = "Model"
    container.append(columnModel);

    let columnColor = document.createElement("DIV");
    columnColor.classList.add('column-elm');
    columnColor.innerHTML = "Color"
    container.append(columnColor);

    let columnCv = document.createElement("DIV");
    columnCv.classList.add('column-elm');
    columnCv.innerHTML = "Cv"
    container.append(columnCv);

    let columnRange = document.createElement("DIV");
    columnRange.classList.add('column-elm');
    columnRange.innerHTML = "Range"
    container.append(columnRange);

    father.append(container);

    // Hiding the button after prints the output
    document.getElementById('btnList').style.display = "none";
    
    for(let i=0; i<arrayOfCars.length; i++) {
        // This DIV contains the data of 1 car at the time
        let container = document.createElement("DIV");
        container.classList.add('container');

        let brand = document.createElement("DIV");
        brand.classList.add('list-elm');
        brand.innerHTML =  arrayOfCars[i].getBrand();
        container.appendChild(brand);

        let model = document.createElement("DIV");
        model.classList.add('list-elm');
        model.innerHTML =  arrayOfCars[i].getmodel();
        container.appendChild(model);

        let color = document.createElement("DIV");
        color.classList.add('list-elm');
        color.innerHTML =  arrayOfCars[i].getColor();
        container.appendChild(color);

        let cv = document.createElement("DIV");
        cv.classList.add('list-elm');
        cv.innerHTML =  arrayOfCars[i].getCv().toString();
        container.appendChild(cv);


        let range = document.createElement("DIV");
        range.classList.add('list-elm');
        range.innerHTML =  arrayOfCars[i].getRange().toString();
        container.appendChild(range);

        // Adding to the father the container filled with the data of 1 car
        father.appendChild(container);
    }
}
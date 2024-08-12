"use strict";
const inputFields = document.querySelectorAll("input"); 

const calculationDiv = document.querySelector("#calculation");
const text = document.querySelector(".text");
text.classList.remove("hidden");


inputFields.forEach((field, index) => {
    field.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const nextField = inputFields[index + 1]; 
        if (nextField) {
          nextField.focus();
        }
      }
    });
  });

 
  function display() {
  
      const height = parseFloat(productHeight.value);
      const width = parseFloat(productWidth.value);
      const shelves = parseInt(numberShelves.value);
      console.log(height, width, shelves);

    
      // Таблица для отображения результатов
      const table = document.createElement("table");
      const row1 = table.insertRow();
      const cell1 = row1.insertCell();
      const cell2 = row1.insertCell();
    
      cell1.innerHTML = "<b>Наименование</b>";
      cell2.innerHTML = "<b>Значение</b>";

      const row2 = table.insertRow();
      const cell3 = row2.insertCell();
      const cell4 = row2.insertCell();
    
      cell3.textContent = "Высота изделия";
      cell4.textContent = `${height} мм`;
    
      const row3 = table.insertRow();
      const cell5 = row3.insertCell();
      const cell6 = row3.insertCell();

      cell5.textContent = "Ширина изделия";
      cell6.textContent = `${width} мм`;
    
      const row4 = table.insertRow();
      const cell7 = row4.insertCell();
      const cell8 = row4.insertCell();
      cell7.textContent = "Количество полок";
      cell8.textContent = `${shelves} шт`;


      calculationDiv.innerHTML = "";
      calculationDiv.append(table);

      button.classList.add("hidden");
    }
    
  

const productHeight = document.querySelector("#productHeight");

let enteredHeight;

productHeight.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
     enteredHeight = productHeight.value;
     
    }
})


const productWidth = document.querySelector("#productWidth");
let enteredWidth;

productWidth.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        enteredWidth = productWidth.value;
    }
})


const numberShelves = document.querySelector("#numberShelves");
let enteredShelves;
const containerShelfImg = document.querySelector(".containerShelfImg");



numberShelves.addEventListener("keyup", function(event) {


    if (event.key === "Enter") {

        enteredShelves = numberShelves.value;
      
        createFields();

        containerShelfImg.innerHTML = "";
        calculationDiv.innerHTML = "";
       

        if (enteredShelves == 1) {
          createScheme("img/shelfs1.png", containerShelfImg)

        } else if (enteredShelves == 2) {
          createScheme("img/shelfs2.png", containerShelfImg)
        } else if (enteredShelves == 3) {
          createScheme("img/shelfs3.png", containerShelfImg)
        } else if (enteredShelves == 4) {
          createScheme("img/shelfs4.png", containerShelfImg)
        } else if (enteredShelves == 5) {
          createScheme("img/shelfs5.png", containerShelfImg)
        } else if (enteredShelves == 6) {
          createScheme("img/shelfs6.png", containerShelfImg)
        } else if (enteredShelves == 7) {
          createScheme("img/shelfs7.png", containerShelfImg)
        } else if (enteredShelves == 8) {
          createScheme("img/shelfs8.png", containerShelfImg)
        } else if (enteredShelves == 9) {
          createScheme("img/shelfs9.png", containerShelfImg)
        }
    }
  
})


const shelfsHeights = document.querySelector("#shelfsHeights"); // поля для высот полок
const shelfsThickness = document.querySelector("#shelfsThickness"); // поля для толщин материала полок

// создать заголовок
function createHeader(name, container) {
  
  const header = document.createElement("h3");
  header.textContent = name;
  container.prepend(header);
}

// создать схему шкафа
function createScheme(link, container) {
const schemeShelfImg = document.createElement("img");
schemeShelfImg.src = link;

schemeShelfImg.alt = "Схема шкафа";
container.append(schemeShelfImg);
}


function createFields() {

  text.classList.add("hidden");

  shelfsHeights.innerHTML = "";

  for (let i = 0; i < enteredShelves; i++) {

   const containerShelf = document.createElement("div");
   containerShelf.classList.add("containerShelf");
   containerShelf.setAttribute("id", `containerShelf${i+1}`);

 
   shelfsHeights.append(containerShelf);
   createHeader(`Полка ${i + 1}`, containerShelf);
   

    const labelH =  document.createElement("label");
    labelH.htmlFor =  `shelf-height${i + 1}`;
    labelH.textContent = "Высота полки, мм";
       
    const input = document.createElement("input");
    input.classList.add("shelf-height");
    input.type = "number";
  
    input.placeholder = "400";
    input.id = `shelf-height${i + 1}`;



    const labelT =  document.createElement("label");
    labelT.htmlFor =  `thicknessMaterial${i+1}`;
    labelT.textContent = "Материал полки";


  const select =  document.createElement("select");
  select.id = `thicknessMaterial${i+1}`;
 
  const option10 = document.createElement("option");
  option10.value = "10"; 
  option10.textContent = "Толщина 10мм";
  select.append(option10);

  const option16 = document.createElement("option");
  option16.value = "16"; 
  option16.textContent = "Толщина 16мм";
  select.append(option16);

  const option18 = document.createElement("option");
  option18.value = "18"; 
  option18.selected = true;
  option18.textContent = "Толщина 18мм";
  select.append(option18);

  const option36 = document.createElement("option");
  option36.value = "36"; 
  option36.textContent = "Толщина 36мм";
  select.append(option36);
  

   containerShelf.append(labelH);
   containerShelf.append(input);

   containerShelf.append(labelT);

   containerShelf.append(select);

} 

button.classList.remove("hidden");
}

const shelves = [];



function createShelfObjects() {

  shelves.length = 0;

  for (let i = 0; i < enteredShelves; i++) {
      const height = +document.querySelector(`#shelf-height${i+1}`).value;
      const thickness = +document.querySelector(`#thicknessMaterial${i+1}`).value;

      const module = height + thickness;
      const axis = module - thickness/2;

      const shelf = {
          name: `Полка ${i+1}`,
          height: parseFloat(height),
          thickness: parseFloat(thickness),
          module: parseFloat(module),
          axis: axis
      };

      shelves.push(shelf);
      
  }
  deleteTable(tableAxes);
  deleteTable(tableTestCheck);

display();
calculateAxis();
}  


button.addEventListener("click", createShelfObjects);


const axis = []; // Массив для хранения осей
const tableAxes = document.createElement("table");
const tableTestCheck = document.createElement("table");


function calculateAxis() {


  let totalModuleSum = 0;
  for (let i = 0; i < enteredShelves; i++) {
        
    totalModuleSum += shelves[i].module;

    if (i === 0) {
      axis[i] = shelves[i].module - shelves[i].thickness / 2;
    } else {
      axis[i] = axis[i - 1] + shelves[i - 1].thickness / 2 + shelves[i].module - shelves[i].thickness / 2;
    }
    console.log(`Ось${i + 1} - ${axis[i]}мм`);
    console.log(totalModuleSum);
    

    const row = tableAxes.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.innerHTML = `<b>Ось${i + 1}</b>, толщина полки ${shelves[i].thickness} мм`;
      cell2.textContent = `${axis[i]} мм`;   
  }
const distanceToBottomShelf = enteredHeight - totalModuleSum;

const row2 = tableTestCheck.insertRow();
const cell3 = row2.insertCell();
cell3.innerHTML = `<b>Если высота отсека под нижней полкой равна ${distanceToBottomShelf} мм - расчет верный!</b>`;


  calculationDiv.append(tableAxes);
  calculationDiv.append(tableTestCheck);
}



function deleteTable(table) {
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}
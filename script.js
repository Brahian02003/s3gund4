alert("Cuidado!! Esta pagina puede ser de tu agarado, comenzamos?");

let nombre = prompt("¿Cual es tu nombre?", "Ingresa tu nombre");

alert(`Tu nombre es: ${nombre} .`);

let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años


let isBoss = confirm("¿Eres el jefe?");

alert( isBoss );// true si se pulsa OK

// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};


const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

 //BOTON ORDENAR//  
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();

// CLAVE - VALOR
const alumno12 = {
    nombre: "Juan",
    apellido: "Fernandez",
    edad: "20",  
    password: "123juan",
}

const alumno22 = {
    nombre: "Gabo",
    apellido: "Ferreira",
    edad: "30",  
    password: "123gabo",
}

const alumno32 = {
    nombre: "Brahian",
    apellido: "Silva",
    edad: "25",  
    password: "123Brahian",
}

const alumno42 = {
    nombre: "Pepe",
    apellido: "Rana",
    edad: "50",  
    password: "123Pepe",
}

console.log(alumno12)
console.log(alumno22)
console.log(alumno32)
console.log(alumno42)

const nombres = ["Juan", "Gabo", "Brahian", "Pepe"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

nombres.push("Juanito")

console.log(nombres)


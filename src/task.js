// Lista de tareas
let task = JSON.parse(localStorage.getItem('tasks')) || [];

// Funcion para agregar tareas
export const addTask = (task) => {
    const newTask = {
        Id: Date.now(),
        Text: task,
        completed: false,  
    };
    task.push (newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Funcion para poder traer la lista de tareas 
export const getTasks = () => tasks;
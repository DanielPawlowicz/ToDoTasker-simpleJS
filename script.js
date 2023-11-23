// console.log("haha0");

/*

1. Layout and single task stiling (html + css)
2. Creating a new task
3. Managing task (deleting, changing order, changing text)
4. Creating sub-tasks


- You can add a time stamps to tasks, but they are not sorted by time
- You can change the size of font using arrows on your keyboard


Types of tasks:
- Big task
- Sub-task
- Minor Task
- Habit
- Event


An array contains objects that are the tasks


NOW
- displaying array of tasks
- displaying single task as it has been created
- 

*/

const Task = {

    titleOfTask: null,

    showTask : function (title) {
        console.log(title)
    }
};

let tasksArray = [];


const display_task = () => {
    const taskCanvas = document.getElementById("main_table");
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = '<input type="checkbox" class="checkbox_task"/><input type="textarea" class="task_title" placeholder="What task you have to do?">';
    taskCanvas.appendChild(task);
};

const add_new_task = () => {
    // const newTaskInput = document.querySelector("#task input[type='checkbox']");
    
    // create new object
    // give this object properties (title, description)

    const textOfTask = prompt("Name the task");
    const task1 = Object.create(Task);
    tasksArray.push(task1);
    task1.value = textOfTask;
    task1.showTask(textOfTask);
    console.log(tasksArray);
    //console.log(task1.value);
    // Creating new task as an object 
    display_task();
};

// const change_task_title = () => {
//     document.querySelector('.task_title').onblur(function(e){
//     console.log(e.value);
// });
// };




// const taskDone = () => {
    
// };


// https://www.youtube.com/watch?v=KFkG0VA7mnE      Appending new element 9:21














// REMEMBER TO Pull from git :)
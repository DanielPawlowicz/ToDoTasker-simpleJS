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
- Minor Task
- Sub-task
- Habit
- Event
- Appointment

When hovering the task there will occur a button with + next to div that will allow you to add a subtask, and then there will be an arrow pointed down or up that will allow user to hide or show ubtasks


An array contains objects that are the tasks


maybe the indexes that chatgpt suggested will be helpful to manage the task objects and 


NOW
- displaying array of tasks
- displaying single task as it has been created
- 

*/

const Task = {

    titleOfTask: null,
    ifDone: false,

    showTask : function (title) {
        console.log(title)
    }
};

let tasksArray = [];


const display_task = () => {
    const taskCanvas = document.getElementById("main_table");
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = '<input type="checkbox" class="checkbox_task" onchange="applyTextDecoration(this)"/><input type="textarea" class="task_title" placeholder="What task you have to do?" onblur="saveTextareaValue(this)" onkeydown="loseFocus(event, this)"/>';
    taskCanvas.appendChild(task);
};

let lastEditedTextarea = {
    value: null
};

// Onblur saves the value of textarea only if changed
function saveTextareaValue(textarea) {

    const textareaValue = textarea.value;
    
    if (lastEditedTextarea.value != textareaValue) {

        lastEditedTextarea.value = textareaValue;

        console.log(lastEditedTextarea.value);

    } else return;
};

// This function allowes user to use enter to lose focus from textarea (like "accept the changes")
function loseFocus (event, textarea) {
    if(event.key === 'Enter'){
        saveTextareaValue(textarea);
        textarea.blur();
    }
};


// Need to make an array of an objects that will store the values of them (if checked, and the text of title)


const add_new_task = () => {
                            // const newTaskInput = document.querySelector("#task input[type='checkbox']");
                            // const textOfTask = prompt("Name the task");
    // create new object
    const task1 = Object.create(Task);
    // appending a task object to an array of objects
    tasksArray.push(task1); 
                            // task1.value = textOfTask;
                            // task1.showTask(textOfTask);
                            // console.log(tasksArray);
                            //console.log(task1.value);
                            // Creating new task as an object 
    // 
    display_task();
};

function applyTextDecoration(checkbox) {
    // Access the parent div
    const parentDiv = checkbox.closest('.task');
    
    // Access the textarea within the same div
    const textarea = parentDiv.querySelector('.task_title');
    // console.log(textarea);
    // Apply or remove the 'text-through' class based on the checkbox state
    if (checkbox.checked) {
        textarea.classList.add('text-through');
        checkbox.classList.add('chchecked');
    } else {
        textarea.classList.remove('text-through');
        textarea.classList.remove('chchecked');
    }
}


// const change_task_title = () => {
//     document.querySelector('.task_title').onblur(function(e){
//     console.log(e.value);
// });
// };




// const taskDone = () => {
    
// };


// https://www.youtube.com/watch?v=KFkG0VA7mnE      Appending new element 9:21
// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/     Arrays














// REMEMBER TO Pull from git :)













// CHAT GPT with indexes

            // <!DOCTYPE html>
            // <html lang="en">
            // <head>
            //     <meta charset="UTF-8">
            //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
            //     <title>Textarea Value Example</title>
            // </head>
            // <body>

            //     <textarea class="myTextarea" onblur="saveTextareaValue(event, 0)"></textarea>
            //     <textarea class="myTextarea" onblur="saveTextareaValue(event, 1)"></textarea>
            //     <!-- Add more textareas with the same class -->

            //     <script src="yourscript.js"></script>
            // </body>
            // </html>



            // JS FILE

            // let textareaValues = [];

            // function saveTextareaValue(event, index) {
            //     // Get the value of the textarea
            //     const textarea = event.target;
            //     const textareaValue = textarea.value;

            //     // Save the value in the array using the index
            //     textareaValues[index] = textareaValue;

            //     // You can do something with the value, for example, log it to the console
            //     console.log('Textarea values:', textareaValues);
            // }


// CHAT GPT - styling textarea when checkbox is checked
        // <div class="textarea-container">
        //     <textarea class="myTextarea" onblur="saveTextareaValue(this)"></textarea>
        //     <input type="checkbox" class="myCheckbox" onchange="applyTextDecoration(this)">
        // </div>
    
    // JS

        // function saveTextareaValue(textarea) {
        //     // Get the value of the textarea
        //     const textareaValue = textarea.value;
        
        //     // Access the parent div
        //     const parentDiv = textarea.closest('.textarea-container');
        
        //     // You can do something with the values, for example, log them to the console
        //     console.log('Textarea value:', textareaValue);
        //     console.log('Parent div:', parentDiv);
        // }
        
        // function applyTextDecoration(checkbox) {
        //     // Access the parent div
        //     const parentDiv = checkbox.closest('.textarea-container');
        
        //     // Access the textarea within the same div
        //     const textarea = parentDiv.querySelector('.myTextarea');
        
        //     // Apply or remove the 'text-through' class based on the checkbox state
        //     if (checkbox.checked) {
        //         textarea.classList.add('text-through');
        //     } else {
        //         textarea.classList.remove('text-through');
        //     }
        // }





// Ask for whole app for chatgpt
// Could you create a simple js app that when user pushes button it creates (visually in html) a new "task" that contains checkbox and textarea? The value of textarea user types when object is created, and then the value is stored. Task have sub-tasks. When user check the checkbox 
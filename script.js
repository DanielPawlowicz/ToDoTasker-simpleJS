// console.log("haha0");

/*

1. Layout and single task stiling (html + css)
2. Creating a new task
3. Creating sub-tasks
4. Managing task (deleting, changing order, changing text)


*/

const Task = {

    showTask : function () {
        console.log("pojawilo się zadanko")
    }
};

const add_new_task = () => {
    const textOfTask = prompt("Name the task");
    const task1 = Object.create(Task);
    Task.value = textOfTask;
    task1.showTask();
    //console.log(task1.value);
    // Creating new task as an object 
}
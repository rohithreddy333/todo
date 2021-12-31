let idCount = 0;

function addTask(id){
    const taskTextBox = document.getElementById("taskEnter");
    const taskData = document.getElementById("taskData");
    console.log(`task = ${taskTextBox}`);
    if(taskTextBox.value.length > 0){
        const displayTask = document.createElement('div')
        //const taskString = document.createElement('span');
        displayTask.innerText = taskTextBox.value;
        taskTextBox.value = "";
        displayTask.setAttribute('class','taskDiv')
        displayTask.setAttribute('id',`taskDiv-${idCount}`)
        idCount++;
        displayTask.setAttribute('onclick','del(this.id)')
        //taskString.setAttribute('class','taskText');
        //displayTask.appendChild(taskString);
        taskData.appendChild(displayTask);
    }else{
        alert("enter Somthing to add a task")
    }
}

function del(id){
    const el = document.getElementById(id);
    const audio = new Audio();
    audio.src = "delete.mp3";
    audio.play();
    el.remove();
}
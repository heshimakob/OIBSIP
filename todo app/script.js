let taskListArray=[];
let isLocalDataPresent= localStorage.getItem("todoTaskList");
if(isLocalDataPresent !== null){
    taskListArray=JSON.parse(isLocalDataPresent);
    renderTaskList();

}
function saveTask(){
    debugger;
    let taskName= document.getElementById("txtItem").value;
    let todoObject={
        taskId:taskListArray.length +1,
        taskName:taskName
    };
    taskListArray.push(todoObject);
    localStorage.setItem("todoTaskList",JSON.stringify(taskListArray));
    renderTaskList();
}
function removeAll(){
    taskListArray.splice(0);
    renderTaskList();
}
function renderTaskList(){
    debugger;
    document.getElementById("myTaskList").innerHTML="";
    for(let index = 0; index< taskListArray.length; index++){
        let dynamicli= document.createElement("li");
        dynamicli.classList.add("task");
        let myLabel=document.createElement("label");
        let myPara = document.createElement("p");
        myPara.textContent =taskListArray[index].taskName;
        myLabel.appendChild(myPara);
        dynamicli.appendChild(myLabel);


        let myDiv =document.createElement("div");
        myDiv.classList.add("settings");
        let editIcon= document.createElement("i")
        editIcon.classList.add("fa ");
        editIcon.classList.add("fa fa-pencile-square");
        editIcon.addEventListener("click", editTask);
        editIcon.taskId = taskListArray[index].taskId;

        let deleteIcon= document.createElement("i");
        deleteIcon.classList.add("fa");
        deleteIcon.classList.add("fa fa-trash");
        deleteIcon.addEventListener("click", deleteTask);
        deleteIcon.taskId = taskListArray[index].taskId;

        myDiv.appendChild(editIcon);
        myDiv.appendChild(deleteIcon);
        dynamicli.appendChild(myDiv);

        document.getElementById("myTaskList").appendChild(dynamicli);

    }
}
function deleteTask(event){
    debugger;
    let index= taskListArray.findIndex(m=>m.taskId == event.target.taskId);
    taskListArray.splice(index,1);
    localStorage.setItem("todoTaskList",JSON.stringify(taskListArray));
    renderTaskList();

}
function editTask(event){
    debugger;
    let obj= taskListArray.find(m=>m.taskId == event.target.taskId);
    document.getElementById("txtItem").value= obj.taskName;

}

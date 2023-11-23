let taskListArray=[];
function saveTask(){
    debugger;
    let taskName= document.getElementById("txtItem").value;
    let todoObject={
        taskId:taskListArray.length +1,
        taskName:taskName
    };
    taskListArray.push(todoObject);
    renderTaskList()

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

        document.getElementById("myTaskList").appendChild(dynamicli);

    }

  
}
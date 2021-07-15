//My OBJ
var myObj= {
    //Select TextArea
    textSelect: function(){
        document.getElementById('description').select();
    },

//Hide form Method
    hide: function() {
    document.getElementById("form").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
    document.getElementById('name').value="";
    document.getElementById('description').value="";
    document.getElementById('myDateBegin').value="";
    document.getElementById('myDateEnd').value="";

},
//Show Form Method
    show:function(){

    document.getElementById("form").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById("editBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "inline-block";
    },
   
    showEdit:function(){
        
    }
    

};

//Removing task method
function  removeTask(x){
    
    var myTasks = returnToDo();
    for (var i = 0; i < myTasks.length; i++){
        if (x == parseInt(myTasks[i].id)) {
            var item=i
            
        }
    }
    myTasks.splice(item, 1);
    localStorage.setItem('myData', JSON.stringify(myTasks));
    showMyTasks();
    console.log('task'+ x + 'deleted');

}

//Editing task method
function  editTask(x){
    
    var myTasks = returnToDo();
    for (var i = 0; i < myTasks.length; i++){
        if (x == parseInt(myTasks[i].id)) {
            var item=i
            
        }
    }
    document.getElementById("form").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";
    document.getElementById('name').value=myTasks[item].name;
    document.getElementById('myDateBegin').value=myTasks[item].dateBg;
    document.getElementById('myDateEnd').value=myTasks[item].dateEnd;
    document.getElementById('description').value= myTasks[item].describe;
    document.getElementById('valueID').value= myTasks[item].id;
    }


//Checks if there is data in JSON
function returnToDo(){
    var myTasks = [];
    var myTasksTemp = localStorage.getItem('myData');
    if(myTasksTemp != null){
        myTasks = JSON.parse(myTasksTemp);
    }
    return myTasks;
}

//Tasks Constructor
function Task(){
    var myTasks = returnToDo();
    var topValue=0
    for (var k = 0; k < myTasks.length; k++){
            
            if(topValue <myTasks[k].id){
                topValue = myTasks[k].id
            }
            
    }
    
    this.id = topValue+1;
    this.name = document.getElementById('name').value;
    this.dateBg = document.getElementById('myDateBegin').value;
    this.dateEnd = document.getElementById('myDateEnd').value;
    this.describe = document.getElementById('description').value;
}

//Random Number generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

//InnerHTML tasks inserter
function newTask(x,y,z,k,j){
    document.getElementById('myTasks').innerHTML +=
        '<div class="col l3 m4 s12 animated zoomIn taskForm postit"> <h4>'+x+'</h1>'+
        '<p class="describeArea">'+y+'</p>' +
        '<p><b>Start:</b> ' +z +' </p>'+
        '<p><b>End:</b> ' +k+ '</p>'+
        '<hr class="lineInside">'+
        '<div hidden id=valueID>'+j+'</div>'+
        '<p><div class="delBtn red " id=red'+j+'" onclick="removeTask('+j+')"" ><i class="fas fa-trash-alt icon"></i></div>'+
        '<div class="editBtn yellow id=yellow'+j+'" onclick="editTask('+j+')"" ><i class="far fa-edit"></i>Edit</div></p>'+
        
    '</div>'
}

//Gets all the objects from the array.
function showMyTasks(){
    var myTasks = returnToDo();
    
    document.getElementById('myTasks').innerHTML = '';   
    for(var i=0;i<myTasks.length;i++){
        newTask(
            myTasks[i].name,
            myTasks[i].describe,
            myTasks[i].dateBg,
            myTasks[i].dateEnd,
            myTasks[i].id
            
        );
    }
    
}

//Push Information to Array/DB

function submitInfo(){
    var myTasks = returnToDo();
    myTasks.push(new Task);
    console.log(myTasks);
    localStorage.setItem('myData',JSON.stringify(myTasks));
    showMyTasks();
    myObj.hide();
}


function submitEdit(){
    var myTasks = returnToDo();
    console.log(myTasks);
    for (var i = 0; i < myTasks.length; i++){
        if (document.getElementById('valueID').value == myTasks[i].id) {
            var index=i
            
        }
    }
    
    myTasks[index].name = document.getElementById('name').value;
    myTasks[index].dateBg = document.getElementById('myDateBegin').value;
    myTasks[index].dateEnd = document.getElementById('myDateEnd').value;
    myTasks[index].describe = document.getElementById('description').value;
    localStorage.setItem('myData',JSON.stringify(myTasks));
    showMyTasks();
    myObj.hide();
}
showMyTasks();
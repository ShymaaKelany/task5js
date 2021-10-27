

 var tasks=[];
 function add(){
   var task=document.getElementById("task").value;
   tasks.push(task);
   document.getElementById("task").value ="";
   view();
 }


 function view(){
   var text = '';
   var count= tasks.length;
   for(var i=0; i<count; i++){
   text +="<li ondblclick='destory("+ i +")'>"+ tasks[i] +"</li> <span style='color:teal'onclick='update("+ i +")' >update</span>";
   }
  document.getElementById("result").innerHTML =text;
 }

 function destory(index){
  tasks.splice(index,1);
  view();
 }

 function update(index){
   document.getElementById("task").value = tasks[index];
   document.getElementById("add").style.display= "none";
   document.getElementById("update").style.display= "inline-block";
   document.getElementById("index").value = index;
 }

 function edit(){
  var task=document.getElementById("task").value; 
  var index=document.getElementById("index").value;
  tasks[index] = task;
  document.getElementById("task").value = "";
  document.getElementById("update").style.display = "none";
  document.getElementById("add").style.display = "inline-block";
  view();
 }
document.addEventListener('DOMContentLoaded', function(){
  const taskbtn = document.getElementById('addbutton');
  taskbtn.addEventListener('click',(e)=> {

  let input = document.getElementById('newtask').value;
  //capture value in form

  const newItem = document.createElement('li');
  //create html element for to do list

  let testNode = 

  newItem.append(input);
  //add to do item to list

  const taskList = document.getElementById('list');
  //reference to UL

  let parentDiv = document.getElementById('toDoList');
  //reference to parent node

    
  parentDiv.insertBefore(newItem, taskList);
  //insert item into list

  document.getElementById('newtask').value = " ";
  //clear form input after adding to list


  e.preventDefault();
  })
  
});
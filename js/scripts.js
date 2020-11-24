document.addEventListener('DOMContentLoaded', function(){
  const taskbtn = document.getElementById('addbutton');
  taskbtn.addEventListener('click',(e)=> {
  let input = document.getElementById('newtask').value;
  //capture content for list

  const newItem = document.createElement('li');
  //create li for task list

  taskbtn.addEventListener('keydown', addToDo);

  newItem.append(input);
  //add text to newly created li node

  const taskList = document.getElementById('list');
  //reference to UL

  let parentDiv = document.getElementById('not-sure');
  //reference to parent node

  parentDiv.insertBefore(newItem, taskList);
  //insert into li

  document.getElementById('newtask').value = " ";
  //clear form input after adding to list

  e.preventDefault();
  })
  
});
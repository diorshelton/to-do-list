document.addEventListener('DOMContentLoaded', function(){
  const taskbtn = document.getElementById('addbutton');
  taskbtn.addEventListener('click',(e)=> {

  let formInput = document.getElementById('newtask').value;
  //capture form value

  let createdListElement = document.createElement('li');
  //create html element for to do list

  createdListElement.append(formInput);
  //add to do item to list

  const taskList = document.getElementById('list');
  //reference to UL

  const parentDiv = document.getElementById('to-do-list');
  //reference to parent node
    
  parentDiv.insertBefore(createdListElement, taskList);
  //insert item into list

  document.getElementById('newtask').value = " ";
  //clear form input after adding to list


  e.preventDefault();
  })
  
});
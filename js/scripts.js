document.addEventListener('DOMContentLoaded', function(){
  const taskbtn = document.getElementById('plus-btn').addEventListener
  ('click',(e)=> {
  let task = prompt('What do you need to add?');
  let taskOne = ' Take out the trash ';
  //capture content for list 
  const newItem = document.createElement('li');
  //create li for list
  newItem.append(task);
  //add text to newly created li node
  const taskList = document.getElementById('list');
  //reference to UL
  let parentDiv =document.getElementById('not-sure');
  //reference to parent node
  parentDiv.insertBefore(newItem, taskList);


  e.preventDefault();
  })
});
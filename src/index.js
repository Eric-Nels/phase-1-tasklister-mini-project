document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)
  }) 

});

function handleToDo(toDo) {
  let p = document.createElement('p')
  p.textContent = toDo
  document.querySelector('#list').appendChild(p)
}

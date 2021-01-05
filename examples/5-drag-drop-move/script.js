function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  e.target.append(dragged);
}

function prep() {
  const dropzones = document.querySelectorAll('.dropzone');
  for (const dropzone of dropzones) {
    dropzone.addEventListener('dragover', dragOverHandler);
    dropzone.addEventListener('drop', dropHandler);
  }

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.textContent = `Drag me! #${i}`;
    div.draggable = true;
    div.id = 'div' + i;
    div.addEventListener('dragstart', dragStartHandler);
    dropzones[0].append(div);
  }
}

window.addEventListener('load', prep);

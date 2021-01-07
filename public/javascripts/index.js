const voteOption = document.querySelector('.option');
const addButton = document.querySelector('.add-button');
const voteList = document.querySelector('.vote-options');

const handleAddButton = () => {
  let list = [];
  list.push(voteOption.value);

  list.forEach(option => {
    const div = document.createElement('div');
    div.setAttribute('class', 'option-wrapper');
    const input = document.createElement('input');
    input.setAttribute('name', 'option-title');
    input.setAttribute('value', option);
    input.setAttribute('readonly', true);
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Delete');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'option-delete-button');

    button.appendChild(buttonText);
    div.appendChild(input);
    div.appendChild(button);
    voteList.appendChild(div);
  });

  list = [];
  const voteElements = document.getElementsByClassName('option-wrapper');
  [...voteElements].forEach(element => {
    element.addEventListener('click', handleDeleteButton);
  });
  voteOption.value = '';
};

const handleDeleteButton = event => {
  event.currentTarget.remove();
};

addButton.addEventListener('click', handleAddButton);

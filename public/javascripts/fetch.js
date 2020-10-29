const votingButton = document.querySelector('.voting-button');
const deleteButton = document.querySelector('.delete-button');
const votingId = document.querySelector('.voting-option').dataset.votingid;
const optionList = document.querySelectorAll('.voting-option');

const handleUpdateRequest = async () => {
  let optionId;
  for (let i = 0; i < optionList.length; i++) {
    if (optionList[i].checked) {
      optionId = optionList[i].value;
      break;
    }
  }

  const votingData = {
    votingId,
    optionId,
  };

  const option = {
    method: 'PUT',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(votingData),
  };

  try {
    const response = await fetch(`http://localhost:3000/votings/${votingId}`, option);
    if (response.result = 'ok') {
      window.location.href = 'http://localhost:3000/';
    }
  } catch (error) {
    // 에러 어떻게 보여줄지 고민
    console.log(error);
  }
};

const handleDeleteRequest = async () => {
  try {
    const response = await fetch(`http://localhost:3000/votings/${votingId}`, {
      method: 'DELETE',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.result = 'ok') {
      window.location.href = 'http://localhost:3000/';
    }
  } catch (error) {
    // 에러 어떻게 보여줄지 고민
    console.log(error);
  }
};

votingButton.addEventListener('click', handleUpdateRequest);
deleteButton.addEventListener('click', handleDeleteRequest);
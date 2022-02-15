const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);


// Grabbing the form inputs and submit button
submitBtn = document.querySelector('.submit');
title = document.querySelector('.title');
photographer = document.querySelector('.photographer');
imageDate = document.querySelector('.image-date');
description = document.querySelector('.description');

const uploadImage = (image) =>
  fetch('/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(image),
  });

const handleNewImage = () => {
  const newImage = {
    title: title.value,
    photographer: photographer.value,
    image_date: imageDate.value,
    description: description.value,
  };
  
  uploadImage(newImage)
};

// Event listener for submit
submitBtn.addEventListener('click', handleNewImage);

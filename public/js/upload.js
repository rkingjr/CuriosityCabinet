// Grabbing the form inputs and submit button
form = document.querySelector('#form')
title = document.querySelector('#title');
photographer = document.querySelector('#photographer');
imageDate = document.querySelector('#imageDate');
description = document.querySelector('#description');
console.log('can i see this?')
const uploadImage = (image) => {
  console.log(image)
  fetch('/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(image),
  });
}
const createObj = () => {
 console.log("inside of obj create")
const newImage = {
  title: title.value,
  photographer: photographer.value,
  image_date: imageDate.value,
  description: description.value,
};
console.log("newImage:", newImage)
uploadImage(newImage);
};

// Event listener for submit
form.addEventListener('click', event => {
  console.log(event);
 createObj();
});

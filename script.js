const btn = document.querySelector('button');
const myDiv = document.getElementById('display')

//Create an async function
async function getCats () {
    myDiv.textContent = null;
    const images = document.createElement('img');
    myDiv.appendChild(images);
    
    const endpoint = 'https://api.giphy.com/v1/gifs/translate?api_key=pdZy18rAmnVu4ArJQKbssDTDoSO7AT6K&s=cat';
   //Start refractoring from using promises to using await
    const response = await fetch(endpoint, {mode: 'cors'});
    const cats = await response.json();
    
    images.src = cats.data.images.original.url;

    
}

btn.addEventListener('click', getCats);
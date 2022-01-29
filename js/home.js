const btn = document.querySelector('.submit');

fetch('http://jsonplaceholder.typicode.com/')
.then((response) => {
    return response.json();
  })

  

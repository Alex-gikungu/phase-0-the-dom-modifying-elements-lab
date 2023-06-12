document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main#main');
    if (main) {
      main.remove();
    }
  
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your desired name
  
    document.body.appendChild(newHeader);
  });

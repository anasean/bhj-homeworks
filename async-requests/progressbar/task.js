function sendFile() {
    const form = document.getElementById('form');
    const progressBar = document.getElementById('progress');
  
    
    const formData = new FormData(form);
  
    
    fetch('https://students.netoservices.ru/nestjs-backend/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке файла');
        }
        return response;
      })
      .then((response) => {
        progressBar.value = 100; 
      })
      .catch((error) => {
        
        console.error(error);
        progressBar.value = 0; 
      });
  }
  
  
  const sendButton = document.getElementById('send');
  sendButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    sendFile(); 
  });
  

  
function loadCurrencyRates() {
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
      .then(response => response.json())
      .then(data => {
        displayCurrencyRates(data);
    })
      .catch(error => {
        console.error('Ашипка', error);
    });
}

function displayCurrencyRates(data) {
    const itemsContainer = document.getElementById('items');
    const valuteData = data.response.Valute;
  
    for (const currencyCode in valuteData) {
      const currency = valuteData[currencyCode];
      const item = document.createElement('div');
      item.classList.add('item');
  
      const codeElement = document.createElement('div');
      codeElement.classList.add('item__code');
      codeElement.textContent = currency.CharCode;
      
      const valueElement = document.createElement('div');
      valueElement.classList.add('item__value');
      valueElement.textContent = currency.Value;
      
      item.appendChild(codeElement);
      item.appendChild(valueElement);
      
      itemsContainer.appendChild(item);
    }
  
    
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
  }

  window.addEventListener('load', () => {
    loadCurrencyRates();
  });
    

function fetchAndDisplayRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        displayRandomMeal(data);
      })
      .catch(error => console.error('Error:', error));
  }
  
  function displayRandomMeal(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
  
    if (data.meals) {
      const meal = data.meals[0];
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const img = document.createElement('img');
      img.src = meal.strMealThumb;
      img.classList.add('card-img-top');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const mealTitle = document.createElement('h5');
      mealTitle.classList.add('card-title');
      mealTitle.innerText = meal.strMeal;
  
      const mealCategory = document.createElement('p');
      mealCategory.classList.add('card-text');
      mealCategory.innerText = `Category: ${meal.strCategory}`;
  
      const mealInstructions = document.createElement('p');
      mealInstructions.classList.add('card-text');
      mealInstructions.innerText = `Instructions: ${meal.strInstructions}`;
  
      cardBody.appendChild(mealTitle);
      cardBody.appendChild(mealCategory);
      cardBody.appendChild(mealInstructions);
  
      card.appendChild(img);
      card.appendChild(cardBody);
  
      resultDiv.appendChild(card);
    } else {
      resultDiv.innerText = 'No results found.';
    }
  }
  
  function lookupRandomMeal() {
    fetchAndDisplayRandomMeal();
  }
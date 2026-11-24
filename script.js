function searchMeal() {
    var searchText = document.getElementById("searchBox").value;
    var web = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchText;

    fetch(web)
        .then(response => response.json())
        .then(data => moreSteps(data));
}

function moreSteps(data) {
    console.log(data);
    var oldContent = document.getElementById("randomMealContainer");
    oldContent.textContent = "";

    // if nothing is found
    if (data.meals == null) {
        oldContent.textContent = "No meals found! Try another name.";
        return;
    }

    for (var a = 1; a <= data.meals.length && a <= 5; a++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("randomStyle");
        newDiv.innerHTML = `<div>
            Meal Title: <b>${data.meals[a - 1].strMeal}</b><br>
            <img src="${data.meals[a - 1].strMealThumb}">
        </div>`;
        oldContent.appendChild(newDiv);
    }
}
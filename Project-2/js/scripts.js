const recipesArray = [
    "Peppermint Espresso Martini",
    "Crustless Cranberry Pie",
    "Honey Mustard Glazed Ham",
    "Pumpkin Cream Cold Brew",
    "Key Lime Cream Pie",
    "Fish Tacos",
];

function populateRecipes() {
    const recipeList = document.getElementById("recipes");
    // Clears content
    recipeList.innerHTML = "";
    
    //links for recipes ()
    const recipeLinks = {
        "Peppermint Espresso Martini": "recipes/Cocktail.html",
        "Crustless Cranberry Pie": "recipes/CranPie.html",
        "Honey Mustard Glazed Ham": "recipes/Ham.html",
        "Pumpkin Cream Cold Brew": "recipes/PumpkinColdB.html",
        "Key Lime Cream Pie": "recipes/KeyLime.html",
        "Fish Tacos": "recipes/FishTacos.html"
    };

    // Loop through the "recipesArray"
    for (let i = 0; i < recipesArray.length; i++) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = recipesArray[i];
        link.href = recipeLinks[recipesArray[i]];
        listItem.appendChild(link);
        recipeList.appendChild(listItem);
    }
}

populateRecipes();


function FilSearch() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    // gets list
    const recipeList = document.getElementById("recipes");
    const recipes = recipeList.getElementsByTagName("li");
    let hasVisibleRecipes = false;

    // Loops through the recipes
    for (let i = 0; i < recipes.length; i++) {
        const recipeName = recipes[i].textContent || recipes[i].innerText;
        if (recipeName.toLowerCase().includes(searchInput)) {
            recipes[i].style.display = "";
            hasVisibleRecipes = true;
        } else {
            recipes[i].style.display = "none";
        }
    }

    recipeList.style.display = searchInput && hasVisibleRecipes ? "block" : "none";
}

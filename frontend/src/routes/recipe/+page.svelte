<script>
import axios from "axios";
import { jwt_token } from "../../store"; 
const api_root = "http://localhost:8080/api"; 
import { onMount } from "svelte";



let recipes = [];
let recipe = {
  name: null,
  ingredients: null,
  calories: null,
  
};

// Fetch all recipes on mount
onMount(() => {
  getRecipes();
});

// Get all recipes
function getRecipes() {
  var config = {
    method: "get",
    url: api_root + "/recipe",
    headers: { Authorization: "Bearer " + $jwt_token }
  };

  axios(config)
    .then(function (response) {
      recipes = response.data;
    })
    .catch(function (error) {
      alert("Could not fetch recipe");
      console.log(error);
    });
}

function createRecipe() {
// Zutaten-String in ein Array umwandeln
const formattedIngredients = recipe.ingredients
  ? recipe.ingredients.split(",").map(item => item.trim())
  : [];

const newRecipe = {
  name: recipe.name || "",
  ingredients: formattedIngredients,
  calories: parseInt(recipe.calories, 10) || 0,
};

// Verwende axios.post direkt
axios.post(api_root + "/recipe", newRecipe, {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    alert("Recipe created successfully");
    recipe = { name: "", ingredients: "", calories: "" }; // Formular zurücksetzen
    getRecipes(); // Rezepte neu laden
  })
  .catch(function (error) {
    alert("Could not create recipe");
    console.error("Error:", error);
  });
}

</script>

<h1 class="mt-3">Create Recipe</h1>
<form class="mb-5">
<div class="row mb-3">
  <div class="col">
    <label class="form-label" for="name">Name</label>
    <input
      bind:value={recipe.name}
      class="form-control"
      id="name"
      type="text"
    />
  </div>
  <div class="col">
    <label class="form-label" for="ingredients">Ingredients (comma-separated)</label>
    <input
      bind:value={recipe.ingredients}
      class="form-control"
      id="ingredients"
      type="text"
    />
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <label class="form-label" for="calories">Calories</label>
    <input
      bind:value={recipe.calories}
      class="form-control"
      id="calories"
      type="number"
    />
  </div>  
</div>

<button type="button" class="btn btn-primary" on:click={createRecipe}>
  Submit
</button>
</form>

<h1>All Recipes</h1>
<table class="table">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Ingredients</th>
    <th scope="col">Calories</th>
    
  </tr>
</thead>
<tbody>
  {#each recipes as recipe}
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.ingredients ? recipe.ingredients.join(", ") : ""}</td>
      <td>{recipe.calories}</td>
      
    </tr>
  {/each}
</tbody>
</table>
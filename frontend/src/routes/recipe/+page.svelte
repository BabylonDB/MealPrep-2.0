<script>
 
  import axios from "axios";

  const api_root = "http://localhost:8080/recipe"; 
  import { onMount } from "svelte";

  

  let recipes = [];
  let recipe = {
    name: null,
    ingredients: null,
    calories: null,
    tags: null,
    instructions: null,
  };

  // Fetch all recipes on mount
  onMount(() => {
    getRecipes();
  });

  // Get all recipes
  function getRecipes() {
    var config = {
      method: "get",
      url: api_root + "/api/recipes",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        recipes = response.data;
      })
      .catch(function (error) {
        alert("Could not fetch recipes");
        console.log(error);
      });
  }

  // Create a new recipe
  function createRecipe() {
    var config = {
      method: "post",
      url: api_root + "/api/recipes",
      headers: {
        "Content-Type": "application/json",
      },
      data: recipe,
    };

    axios(config)
      .then(function (response) {
        alert("Recipe created");
        getRecipes();
      })
      .catch(function (error) {
        alert("Could not create recipe");
        console.log(error);
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
    <div class="col">
      <label class="form-label" for="tags">Tags (comma-separated)</label>
      <input
        bind:value={recipe.tags}
        class="form-control"
        id="tags"
        type="text"
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="instructions">Instructions</label>
      <textarea
        bind:value={recipe.instructions}
        class="form-control"
        id="instructions"
      ></textarea>
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
      <th scope="col">Tags</th>
      <th scope="col">Instructions</th>
    </tr>
  </thead>
  <tbody>
    {#each recipes as recipe}
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.ingredients ? recipe.ingredients.join(", ") : ""}</td>
        <td>{recipe.calories}</td>
        <td>{recipe.tags}</td>
        <td>{recipe.instructions}</td>
      </tr>
    {/each}
  </tbody>
</table>


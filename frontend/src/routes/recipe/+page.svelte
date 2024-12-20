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

  let editRecipeId = null; // ID des zu bearbeitenden Rezepts

  // Fetch all recipes on mount
  onMount(() => {
    getRecipes();
  });

  // Get all recipes
  function getRecipes() {
    var config = {
      method: "get",
      url: api_root + "/recipe",
      headers: { Authorization: "Bearer " + $jwt_token },
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

  function createRecipe() {
    const formattedIngredients = recipe.ingredients
      ? recipe.ingredients.split(",").map(item => item.trim())
      : [];

    const newRecipe = {
      name: recipe.name || "",
      ingredients: formattedIngredients,
      calories: parseInt(recipe.calories, 10) || 0,
    };

    axios.post(api_root + "/recipe", newRecipe, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + $jwt_token,
      },
    })
      .then(function () {
        alert("Recipe created successfully");
        recipe = { name: "", ingredients: "", calories: "" };
        getRecipes();
      })
      .catch(function (error) {
        alert("Could not create recipe");
        console.error("Error:", error);
      });
  }

  function deleteRecipe(id) {
    axios.delete(`${api_root}/recipe/${id}`, {
      headers: {
        Authorization: "Bearer " + $jwt_token,
      },
    })
      .then(() => {
        alert("Recipe deleted successfully");
        getRecipes();
      })
      .catch(error => {
        alert("Could not delete recipe");
        console.error("Error:", error);
      });
  }

  function editRecipe(recipeToEdit) {
    editRecipeId = recipeToEdit.id;
    recipe = {
      name: recipeToEdit.name,
      ingredients: recipeToEdit.ingredients.join(", "),
      calories: recipeToEdit.calories,
    };
  }

  function updateRecipe() {
    const formattedIngredients = recipe.ingredients
      ? recipe.ingredients.split(",").map(item => item.trim())
      : [];

    const updatedRecipe = {
      name: recipe.name || "",
      ingredients: formattedIngredients,
      calories: parseInt(recipe.calories, 10) || 0,
    };

    axios.put(`${api_root}/recipe/${editRecipeId}`, updatedRecipe, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + $jwt_token,
      },
    })
      .then(() => {
        alert("Recipe updated successfully");
        recipe = { name: "", ingredients: "", calories: "" };
        editRecipeId = null;
        getRecipes();
      })
      .catch(error => {
        alert("Could not update recipe");
        console.error("Error:", error);
      });
  }
</script>

<h1 class="mt-3">{editRecipeId ? "Edit Recipe" : "Create Recipe"}</h1>
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

  <button type="button" class="btn btn-primary" on:click={editRecipeId ? updateRecipe : createRecipe}>
    {editRecipeId ? "Update" : "Submit"}
  </button>
</form>

<h1>All Recipes</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Ingredients</th>
      <th scope="col">Calories</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each recipes as recipe}
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.ingredients ? recipe.ingredients.join(", ") : ""}</td>
        <td>{recipe.calories}</td>
        <td>
          <button class="btn btn-secondary btn-sm" on:click={() => editRecipe(recipe)}>Edit</button>
          <button class="btn btn-danger btn-sm" on:click={() => deleteRecipe(recipe.id)}>Delete</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

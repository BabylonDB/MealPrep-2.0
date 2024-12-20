<script>
  import axios from "axios";
  import { jwt_token } from "../../store"; 
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const api_root = `${$page.url.origin}/api`;

  let recipes = [];
  let recipe = {
    name: null,
    ingredients: null,
    calories: null,
  };

  let mealPlans = [];
  let selectedMealPlanId = null;
  let selectedRecipeForMealPlan = null;

  let editRecipeId = null; // ID des zu bearbeitenden Rezepts

  // Fetch all recipes on mount
  onMount(() => {
    getRecipes();
    fetchMealPlans(); // Fetch MealPlans on page load
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

  function fetchMealPlans() {
    axios.get(`${api_root}/mealplan`, {
      headers: { Authorization: "Bearer " + $jwt_token },
    })
      .then((response) => {
        mealPlans = response.data;
      })
      .catch((error) => {
        console.error("Could not fetch meal plans:", error);
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

  function openMealPlanSelector(recipeId) {
    selectedRecipeForMealPlan = recipes.find((r) => r.id === recipeId);
    selectedMealPlanId = null;
  }

  function assignRecipeToMealPlan() {
    if (!selectedMealPlanId || !selectedRecipeForMealPlan) {
      alert("Please select a Meal Plan.");
      return;
    }

    axios.put(
  `${api_root}/mealplan/${selectedMealPlanId}/recipes`,
  { recipeId: selectedRecipeForMealPlan.id }, // recipeId als String
  {
    headers: {
      Authorization: "Bearer " + $jwt_token,
    },
  }
)
  .then(() => {
    alert("Recipe added to Meal Plan successfully.");
    selectedRecipeForMealPlan = null;
    selectedMealPlanId = null;
  })
  .catch((error) => {
    console.error("Error assigning recipe to Meal Plan:", error);
    alert("Could not add the recipe to the Meal Plan.");
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
          <button class="btn btn-success btn-sm" on:click={() => openMealPlanSelector(recipe.id)}>Add to Meal Plan</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

{#if selectedRecipeForMealPlan}
  <div class="modal show" tabindex="-1" style="display: block;" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add "{selectedRecipeForMealPlan.name}" to a Meal Plan</h5>
          <button type="button" class="btn-close" on:click={() => selectedRecipeForMealPlan = null}></button>
        </div>
        <div class="modal-body">
          <label for="mealplan-select">Select a Meal Plan:</label>
          <select bind:value={selectedMealPlanId} id="mealplan-select" class="form-select">
            <option value="" disabled>Select Meal Plan</option>
            {#each mealPlans as mealPlan}
              <option value={mealPlan.id}>{mealPlan.name}</option>
            {/each}
          </select>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            on:click={assignRecipeToMealPlan}
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            on:click={() => selectedRecipeForMealPlan = null}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

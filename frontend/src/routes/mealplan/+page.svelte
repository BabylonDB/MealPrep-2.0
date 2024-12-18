<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { jwt_token } from "../../store"; 

  const api_root = "http://localhost:8080/api";

  let mealPlans = [];
  let selectedMealPlan = null; // Für die Auswahl eines spezifischen MealPlans
  let recipesForSelectedMealPlan = []; // Rezeptdetails für den ausgewählten MealPlan
  let isLoading = false;
  let errorMessage = "";
   

  // MealPlans beim Laden der Seite abrufen
  onMount(() => {
    fetchMealPlans();
  });

  // MealPlans abrufen
  async function fetchMealPlans() {
    isLoading = true;
    errorMessage = "";
    try {
    const response = await axios.get(`${api_root}/mealplan`, {
      headers: { Authorization: "Bearer " + $jwt_token }
    });
      mealPlans = response.data;
    } catch (error) {
      errorMessage = "Could not fetch meal plans. Please try again.";
      console.error(error);
    } finally {
      isLoading = false;
    }
  }

  // Rezepte für einen ausgewählten MealPlan abrufen
  async function fetchRecipesForMealPlan(mealPlanId) {
    isLoading = true;
    errorMessage = "";
    recipesForSelectedMealPlan = [];
    try {
    const response = await axios.get(`${api_root}/mealplan/${mealPlanId}/recipes`, {
      headers: { Authorization: "Bearer " + $jwt_token }
    });
      recipesForSelectedMealPlan = response.data;
      selectedMealPlan = mealPlans.find((plan) => plan.id === mealPlanId);
    } catch (error) {
      errorMessage = "Could not fetch recipes for the selected meal plan.";
      console.error(error);
    } finally {
      isLoading = false;
    }
  }
</script>

<h1 class="mt-3">Meal Plans</h1>

{#if isLoading}
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
{:else if errorMessage}
  <div class="alert alert-danger">{errorMessage}</div>
{:else}
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Meal Plan Name</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each mealPlans as mealPlan}
        <tr>
          <td>{mealPlan.name}</td>
          <td>{mealPlan.description}</td>
          <td>
            <button
              class="btn btn-primary btn-sm"
              on:click={() => fetchRecipesForMealPlan(mealPlan.id)}
            >
              View Recipes
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

{#if selectedMealPlan}
  <h2 class="mt-4">Recipes for "{selectedMealPlan.name}"</h2>
  <p>{selectedMealPlan.description}</p>

  {#if recipesForSelectedMealPlan.length > 0}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Recipe Name</th>
          <th scope="col">Ingredients</th>
          <th scope="col">Calories</th>
        </tr>
      </thead>
      <tbody>
        {#each recipesForSelectedMealPlan as recipe}
          <tr>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients.join(", ")}</td>
            <td>{recipe.calories}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No recipes found for this meal plan.</p>
  {/if}
{/if}
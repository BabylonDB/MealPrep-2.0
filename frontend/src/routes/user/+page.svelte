<script>
  import axios from "axios";
  import { onMount } from "svelte";

  const api_root_recipes = "http://localhost:8080/api/recipes";
  const api_root_shoppinglist = "http://localhost:8080/api/shoppinglist";

  let preferences = "";
  let recipe = null;
  let shoppingList = [];

  // Fetch a random recipe based on user preferences
  async function getRandomRecipe() {
    try {
      const response = await axios.get(`${api_root_recipes}/random`, {
        params: { preferences },
      });
      recipe = response.data;
      generateShoppingList();
    } catch (error) {
      alert("Could not fetch recipe");
      console.log(error);
    }
  }

  // Generate a shopping list for the selected recipe
  async function generateShoppingList() {
    try {
      const response = await axios.post(api_root_shoppinglist, { recipeId: recipe.id });
      shoppingList = response.data;
      alert("Shopping list successfully created");
    } catch (error) {
      alert("Could not generate shopping list");
      console.log(error);
    }
  }
</script>

<h1>Recipe Finder</h1>
<p>Enter your preferences to find a recipe and generate a shopping list.</p>

<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="preferences">Preferences</label>
      <input
        bind:value={preferences}
        class="form-control"
        id="preferences"
        type="text"
        placeholder="e.g., vegan, low carb"
      />
    </div>
  </div>
  <button type="button" class="btn btn-primary" on:click={getRandomRecipe}>
    Find Recipe
  </button>
</form>

{#if recipe}
  <h2>Selected Recipe</h2>
  <p><strong>Name:</strong> {recipe.name}</p>
  <p><strong>Ingredients:</strong> {recipe.ingredients ? recipe.ingredients.join(", ") : ""}</p>
  <p><strong>Instructions:</strong> {recipe.instructions}</p>
{/if}

{#if shoppingList.length > 0}
  <h2>Shopping List</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
      </tr>
    </thead>
    <tbody>
      {#each shoppingList as item}
        <tr>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

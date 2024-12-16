<script>
    import axios from "axios";
    import { onMount } from "svelte";
  
    const api_root = "http://localhost:8080";
  
    let mealPlans = [];
    let mealPlan = {
      userId: null,
      recipeId: null,
      date: null
    };
  
    // Fetch all meal plans on mount
    onMount(() => {
      getMealPlans();
    });
  
    // Get all meal plans
    function getMealPlans() {
      var config = {
        method: "get",
        url: api_root + "/api/mealplans",
        headers: {},
      };
  
      axios(config)
        .then(function (response) {
          mealPlans = response.data;
        })
        .catch(function (error) {
          alert("Could not fetch meal plans");
          console.log(error);
        });
    }
  
    // Create a new meal plan
    function createMealPlan() {
      var config = {
        method: "post",
        url: api_root + "/api/mealplans",
        headers: {
          "Content-Type": "application/json",
        },
        data: mealPlan,
      };
  
      axios(config)
        .then(function (response) {
          alert("Meal plan created");
          getMealPlans();
        })
        .catch(function (error) {
          alert("Could not create meal plan");
          console.log(error);
        });
    }
  </script>
  
  <h1 class="mt-3">Create Meal Plan</h1>
  <form class="mb-5">
    <div class="row mb-3">
      <div class="col">
        <label class="form-label" for="userId">User ID</label>
        <input
          bind:value={mealPlan.userId}
          class="form-control"
          id="userId"
          type="text"
        />
      </div>
      <div class="col">
        <label class="form-label" for="recipeId">Recipe ID</label>
        <input
          bind:value={mealPlan.recipeId}
          class="form-control"
          id="recipeId"
          type="text"
        />
      </div>
      <div class="col">
        <label class="form-label" for="date">Date</label>
        <input
          bind:value={mealPlan.date}
          class="form-control"
          id="date"
          type="date"
        />
      </div>
    </div>
    <button type="button" class="btn btn-primary" on:click={createMealPlan}>
      Submit
    </button>
  </form>
  
  <h1>All Meal Plans</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">User ID</th>
        <th scope="col">Recipe ID</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
      {#each mealPlans as mealPlan}
        <tr>
          <td>{mealPlan.userId}</td>
          <td>{mealPlan.recipeId}</td>
          <td>{mealPlan.date}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
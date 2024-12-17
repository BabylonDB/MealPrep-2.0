<script>
    import axios from "axios";
    import { onMount } from "svelte";
  
    const api_root = "http://localhost:8080/mealplan";
  
    let mealPlans = [];
    let mealPlan = {
      userId: null,
      recipeId: null,
      date: null
    };
    let selectedMealPlanId = null; // For edit functionality
  
    // Fetch all meal plans on mount
    onMount(() => {
      getMealPlans();
    });
  
    // Get all meal plans
    function getMealPlans() {
      var config = {
        method: "get",
        url: api_root + "/api/mealplan",
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
  
    // Create or update a meal plan
    function saveMealPlan() {
      const method = selectedMealPlanId ? "put" : "post";
      const url = selectedMealPlanId ? `${api_root}/api/mealplan/${selectedMealPlanId}` : api_root + "/api/mealplan";

      var config = {
        method: method,
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: mealPlan,
      };
  
      axios(config)
        .then(function (response) {
          alert(selectedMealPlanId ? "Meal plan updated" : "Meal plan created");
          resetForm();
          getMealPlans();
        })
        .catch(function (error) {
          alert("Could not save meal plan");
          console.log(error);
        });
    }

    // Edit a meal plan
    function editMealPlan(id) {
      const existingMealPlan = mealPlans.find(mp => mp.id === id);
      if (existingMealPlan) {
        mealPlan = { ...existingMealPlan };
        selectedMealPlanId = id;
      }
    }

    // Delete a meal plan
    function deleteMealPlan(id) {
      var config = {
        method: "delete",
        url: `${api_root}/api/mealplan/${id}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          alert("Meal plan deleted");
          getMealPlans();
        })
        .catch(function (error) {
          alert("Could not delete meal plan");
          console.log(error);
        });
    }

    // Reset the form
    function resetForm() {
      mealPlan = {
        userId: null,
        recipeId: null,
        date: null
      };
      selectedMealPlanId = null;
    }
  </script>
  
  <h1 class="mt-3">Create or Edit Meal Plan</h1>
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
    <button type="button" class="btn btn-primary" on:click={saveMealPlan}>
      {selectedMealPlanId ? "Update" : "Submit"}
    </button>
    {#if selectedMealPlanId}
      <button type="button" class="btn btn-secondary" on:click={resetForm}>
        Cancel
      </button>
    {/if}
  </form>
  
  <h1>All Meal Plans</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">User ID</th>
        <th scope="col">Recipe ID</th>
        <th scope="col">Date</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each mealPlans as mealPlan}
        <tr>
          <td>{mealPlan.userId}</td>
          <td>{mealPlan.recipeId}</td>
          <td>{mealPlan.date}</td>
          <td>
            <button class="btn btn-warning btn-sm" on:click={() => editMealPlan(mealPlan.id)}>
              Edit
            </button>
            <button class="btn btn-danger btn-sm" on:click={() => deleteMealPlan(mealPlan.id)}>
              Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

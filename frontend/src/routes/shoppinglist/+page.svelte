<script>
    import axios from "axios";
    import { onMount } from "svelte";

    const api_root = "http://localhost:8080/api";

    let mealPlans = [];
    let selectedMealPlanId = null;
    let shoppingList = [];
    let isLoading = false;
    let errorMessage = "";

    // Alle Meal Plans abrufen
    async function getMealPlans() {
        isLoading = true;
        errorMessage = "";
        try {
            const response = await axios.get(`${api_root}/mealplan`);
            mealPlans = response.data;
            console.log('Fetched meal plans:', mealPlans);
        } catch (error) {
            errorMessage = "Could not fetch meal plans.";
            console.error(error);
        } finally {
            isLoading = false;
        }
    }

    // Shopping-Liste für einen MealPlan abrufen
    async function getShoppingList(mealPlanId) {
        if (!mealPlanId) {
            errorMessage = "Please select a valid Meal Plan.";
            return;
        }
        isLoading = true;
        shoppingList = [];
        errorMessage = "";

        try {
            const response = await axios.get(`${api_root}/shoppinglist/generate/${mealPlanId}`);
            shoppingList = response.data || [];
        } catch (error) {
            errorMessage = error.response?.data?.message || "Could not fetch the shopping list.";
            console.error(error);
        } finally {
            isLoading = false;
        }
    }

    // Seite beim Laden Meal Plans abrufen
    onMount(() => {
        getMealPlans();
    });
</script>

<h1>Shopping List Generator</h1>

{#if isLoading}
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
{:else}
    {#if errorMessage}
        <div class="alert alert-danger">{errorMessage}</div>
    {/if}

    <div class="mb-4">
        <label for="mealPlanSelector" class="form-label">Select a Meal Plan</label>
        <select
            id="mealPlanSelector"
            class="form-select"
            bind:value={selectedMealPlanId}
            on:change={() => {
                if (selectedMealPlanId) {
                    getShoppingList(selectedMealPlanId);
                }
            }}
        >
        <option value="" disabled selected={selectedMealPlanId === null}>Choose a Meal Plan</option>

            {#each mealPlans as mealPlan}
                <option value={mealPlan._id}>{mealPlan.name}</option>
            {/each}
        </select>
    </div>

    {#if shoppingList.length > 0}
        <h2>Shopping List</h2>
        <ul class="list-group">
            {#each shoppingList as ingredient}
                <li class="list-group-item">{ingredient}</li>
            {/each}
        </ul>
    {:else}
        <p>No ingredients found for the selected Meal Plan.</p>
    {/if}
{/if}
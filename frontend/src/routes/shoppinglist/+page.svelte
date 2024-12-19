<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { jwt_token } from "../../store"; 

    const api_root = "http://localhost:8080/api";

    let recipes = [];
    let selectedRecipeId = null;
    let ingredients = [];
    let isLoading = false;
    let errorMessage = "";
    let mealPlans = [];
    let selectedMealPlanId = null;
    let shoppingList = [];
    let recipesForSelectedMealPlan = [];
    let mapDiv; // Referenz für die Map

    // Fetch all recipes
    async function getRecipes() {
        isLoading = true;
        errorMessage = "";
        try {
            const response = await axios.get(`${api_root}/recipe`, {
                headers: { Authorization: "Bearer " + $jwt_token },
            });
            recipes = response.data;
            console.log('Fetched recipes:', recipes);
        } catch (error) {
            errorMessage = "Could not fetch recipes.";
            console.error(error);
        } finally {
            isLoading = false;
        }
    }

    // Fetch all meal plans
    async function getMealPlans() {
        isLoading = true;
        errorMessage = "";
        try {
            const response = await axios.get(`${api_root}/mealplan`, {
                headers: { Authorization: "Bearer " + $jwt_token },
            });
            mealPlans = response.data;
            console.log('Fetched meal plans:', mealPlans);
            console.log('Selected Meal Plan ID:', selectedMealPlanId);
        } catch (error) {
            errorMessage = "Could not fetch meal plans.";
            console.error(error);
        } finally {
            isLoading = false;
        }
    }

    // Fetch recipes for a selected meal plan
    async function fetchRecipesForMealPlan(mealPlanId) {
        console.log('hELLOR');
        isLoading = true;
        errorMessage = "";
        recipesForSelectedMealPlan = [];
        try {
            const response = await axios.get(`${api_root}/mealplan/${mealPlanId}/recipes`, {
                headers: { Authorization: "Bearer " + $jwt_token },
            });
            recipesForSelectedMealPlan = response.data;
            console.log('Fetched recipes for selected meal plan:', recipesForSelectedMealPlan);
            ingredients = recipesForSelectedMealPlan.flatMap(recipe => recipe.ingredients);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    errorMessage = "Unauthorized. Please check your login.";
                } else if (error.response.status === 403) {
                    errorMessage = "Forbidden. You do not have access.";
                } else {
                    errorMessage = "Error fetching recipes: " + error.response.data;
                }
            } else {
                errorMessage = "Network error or server not reachable.";
            }
            console.error("Error fetching recipes for meal plan:", error);
        } finally {
            isLoading = false;
        }
    }

    // Initialize Google Maps
    function initializeMap() {
    if (mapDiv) {
        new google.maps.Map(mapDiv, {
            center: { lat: 47.4988, lng: 8.7241 }, // Koordinaten für Winterthur, Schweiz
            zoom: 15, // Zoom-Level
        });
    } else {
        console.error("Map container not found");
    }
}

    // Load Google Maps API and initialize the map
    onMount(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAZmEp7aVY1dFCvVMtH-i1Z2-1pgB-fX5o`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
    });

    // Fetch recipes and meal plans on component mount
    onMount(() => {
        getRecipes();
        getMealPlans();
    });
</script>

<h1>Shopping List Manager</h1>

{#if isLoading}
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
{:else}
    {#if errorMessage}
        <div class="alert alert-danger">{errorMessage}</div>
        {/if}
    {/if}

    <div class="mb-4">
        <label for="mealPlanSelector" class="form-label">Select a Meal Plan</label>
        <select
            id="mealPlanSelector"
            class="form-select"
            bind:value={selectedMealPlanId}
            on:change={() => {
                console.log('Dropdown changed, selectedMealPlanId:', selectedMealPlanId);
                if (selectedMealPlanId) {
                    fetchRecipesForMealPlan(selectedMealPlanId);
                }
            }}
        >
            <option value="" disabled selected={selectedMealPlanId === null}>Choose a Meal Plan</option>
            {#each mealPlans as mealPlan}
                <option value={mealPlan.id}>{mealPlan.name}</option>
            {/each}
        </select>
    </div>

    {#if ingredients.length > 0}
        <h2>Ingredients</h2>
        <ul class="list-group">
            {#each ingredients as ingredient}
                <li class="list-group-item">{ingredient}</li>
            {/each}
        </ul>
    {:else}
        <p>No ingredients found for the selected Meal Plan.</p>
    {/if}

    <!-- Google Maps Integration -->
    <h2>Google Maps</h2>
    <div id="map" bind:this={mapDiv}></div>

<style>
    #map {
        width: 100%;
        height: 400px;
        margin-top: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>

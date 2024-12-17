<script>
  import axios from "axios";
  import { onMount } from "svelte";

  const api_root = "http://localhost:8080/api/shoppinglist";

  let shoppingLists = [];

  // Fetch all shopping lists on mount
  onMount(() => {
    getShoppingLists();
  });

  // Fetch all shopping lists from the backend
  async function getShoppingLists() {
    try {
      const response = await axios.get(api_root);
      shoppingLists = response.data;
    } catch (error) {
      alert("Could not fetch shopping lists");
      console.log(error);
    }
  }
</script>

<h1>Shopping Lists</h1>

{#if shoppingLists.length > 0}
  <div class="accordion" id="shoppingListAccordion">
    {#each shoppingLists as shoppingList, index}
      <div class="accordion-item">
        <h2 class="accordion-header" id={`heading${index}`}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="true"
            aria-controls={`collapse${index}`}
          >
            Shopping List #{shoppingList.id}
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          class="accordion-collapse collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#shoppingListAccordion"
        >
          <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {#each shoppingList.items as item}
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p>No shopping lists available.</p>
{/if}

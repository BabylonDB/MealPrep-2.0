<script>
    import { user } from "../../store";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

  const api_root = `${$page.url.origin}/api`;
  
    let accountDetails;
  
    // Hole die Benutzerinformationen aus dem Store
    onMount(() => {
      accountDetails = $user;
    });

    $: accountDetails = $user;
  </script>
  
  {#if accountDetails}
    <h1>Account Details</h1>
    <p><strong>Name:</strong> {accountDetails.name}</p>
    <p><strong>Email:</strong> {accountDetails.email}</p>
    {#if $user.user_roles && $user.user_roles.length > 0} 
  <p><b>Roles:</b> {$user.user_roles}</p> 
  {/if}
    <!-- Weitere Details hier hinzufügen -->
     
  {:else}
    <p>Loading account details...</p>
  {/if}
  
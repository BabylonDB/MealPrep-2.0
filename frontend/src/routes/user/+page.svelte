<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { jwt_token } from "../../store"; 

  const api_root = "http://localhost:8080/api/user";

  let users = []; // Liste aller Benutzer
  let user = {
    name: "",
    email: "",
    password: "",
    preferences: ""
  }; // Benutzerobjekt für Formulareingaben
  let selectedUserId = null; // Für die Edit-Funktionalität
  let errorMessage = ""; // Fehlermeldungen
  let isLoading = false; // Ladezustand

  // Alle Benutzer abrufen
  async function getAllUsers() {
    isLoading = true;
    errorMessage = "";
    try {
      const response = await axios.get(api_root, {
        headers: { Authorization: "Bearer " + $jwt_token },
      });
      users = response.data;
    } catch (error) {
      errorMessage = "Could not fetch users.";
      console.error("Error fetching users:", error);
    } finally {
      isLoading = false;
    }
  }

  // Benutzer hinzufügen oder aktualisieren
  async function saveUser() {
    if (!user.name || !user.email) {
      errorMessage = "Name and Email are required.";
      return;
    }

    try {
      if (selectedUserId) {
        // Benutzer aktualisieren
        await axios.put(`${api_root}/${selectedUserId}`, user, {
          headers: { Authorization: "Bearer " + $jwt_token },
        });
        alert("User updated successfully.");
      } else {
        // Benutzer hinzufügen
        await axios.post(api_root, user, {
          headers: { Authorization: "Bearer " + $jwt_token },
        });
        alert("User added successfully.");
      }
      resetForm();
      getAllUsers();
    } catch (error) {
      errorMessage = "Could not save user.";
      console.error("Error saving user:", error);
    }
  }

  // Benutzer löschen
  async function deleteUser(id) {
    try {
      await axios.delete(`${api_root}/${id}`, {
        headers: { Authorization: "Bearer " + $jwt_token },
      });
      alert("User deleted successfully.");
      getAllUsers();
    } catch (error) {
      errorMessage = "Could not delete user.";
      console.error("Error deleting user:", error);
    }
  }

  // Benutzer zum Bearbeiten laden
  function editUser(id) {
    const selectedUser = users.find((u) => u.id === id);
    if (selectedUser) {
      user = { ...selectedUser };
      selectedUserId = id;
    }
  }

  // Formular zurücksetzen
  function resetForm() {
    user = { name: "", email: "", password: "", preferences: "" };
    selectedUserId = null;
    errorMessage = "";
  }

  // Daten beim Laden der Seite abrufen
  onMount(() => {
    getAllUsers();
  });
</script>

<h1 class="mt-3">User Management</h1>

<!-- Fehlermeldung anzeigen -->
{#if errorMessage}
  <div class="alert alert-danger">{errorMessage}</div>
{/if}

<!-- Benutzerformular -->
<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label for="name" class="form-label">Name</label>
      <input
        bind:value={user.name}
        type="text"
        id="name"
        class="form-control"
        placeholder="Enter user name"
      />
    </div>
    <div class="col">
      <label for="email" class="form-label">Email</label>
      <input
        bind:value={user.email}
        type="email"
        id="email"
        class="form-control"
        placeholder="Enter user email"
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <label for="password" class="form-label">Password</label>
      <input
        bind:value={user.password}
        type="password"
        id="password"
        class="form-control"
        placeholder="Enter user password"
      />
    </div>
    <div class="col">
      <label for="preferences" class="form-label">Preferences</label>
      <input
        bind:value={user.preferences}
        type="text"
        id="preferences"
        class="form-control"
        placeholder="e.g., Vegetarian, Fitness"
      />
    </div>
  </div>
  <button type="button" class="btn btn-primary" on:click={saveUser}>
    {selectedUserId ? "Update User" : "Add User"}
  </button>
  {#if selectedUserId}
    <button type="button" class="btn btn-secondary ms-2" on:click={resetForm}>
      Cancel
    </button>
  {/if}
</form>

<hr />

<!-- Ladezustand -->
{#if isLoading}
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
{/if}

<!-- Liste aller Benutzer -->
<h2>All Users</h2>
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Preferences</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.preferences || "N/A"}</td>
        <td>
          <button class="btn btn-warning btn-sm" on:click={() => editUser(user.id)}>
            Edit
          </button>
          <button class="btn btn-danger btn-sm ms-2" on:click={() => deleteUser(user.id)}>
            Delete
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

{#if users.length === 0 && !isLoading}
  <p>No users available.</p>
{/if}

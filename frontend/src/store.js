import { writable, derived } from "svelte/store";

// user 
<<<<<<< HEAD
export const user = writable({});
=======
export const user = writable({ name: "" });
>>>>>>> cfda75d30de0c18ee6a223bf3e7ed708c2d43544
let sessionUser = sessionStorage.getItem("user");
if (sessionUser) {
    user.set(JSON.parse(sessionUser));
} else {
    // create the key "user" in the session storage if it doesn't exist yet
<<<<<<< HEAD
    sessionStorage.setItem("user", {});
=======
    sessionStorage.setItem("user", JSON.stringify({}));
>>>>>>> cfda75d30de0c18ee6a223bf3e7ed708c2d43544
}
// update the user in the sessionStorage on changes
user.subscribe(user => sessionStorage.setItem("user", JSON.stringify(user)));


// isAuthenticated: we assume that users are authenticated if the property "user.name" exists
export const isAuthenticated = derived(
    user,
    $user => $user && $user.name
);

// jwt_token and myFreelancerId
export const jwt_token = writable("");
export const myFreelancerId = writable(null);
let sessionToken = sessionStorage.getItem("jwt_token");
if (sessionToken) {
    jwt_token.set(sessionToken);
} else {
    // create the key "jwt_token" in the session storage if it doesn't exist yet
    sessionStorage.setItem("jwt_token", "");
}

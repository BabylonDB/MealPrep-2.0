/*ckage ch.zhaw.mealprep.model.test;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class MealPrepApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void contextLoads() {
        // Ensure application context loads correctly
    }

    @Test
    void testGetRecipes() throws Exception {
        // Test GET /recipes endpoint
        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThanOrEqualTo(0))));
    }

    @Test
    void testCreateRecipe() throws Exception {
        // Test POST /recipe endpoint
        String newRecipe = "{\"name\":\"Test Recipe\", \"ingredients\":\"ingredient1, ingredient2\", \"calories\":500}";

        mockMvc.perform(post("/api/recipe")
                        .contentType("application/json")
                        .content(newRecipe))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Test Recipe")));
    }

    @Test
    void testInvalidRecipeCreation() throws Exception {
        // Test POST /recipe with invalid data
        String invalidRecipe = "{\"name\":\"\", \"ingredients\":\"\", \"calories\":-10}";

        mockMvc.perform(post("/api/recipe")
                        .contentType("application/json")
                        .content(invalidRecipe))
                .andExpect(status().isBadRequest());
    }
}
 */
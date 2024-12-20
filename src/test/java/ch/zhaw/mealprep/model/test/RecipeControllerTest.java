/*package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.model.Recipe;
import ch.zhaw.mealprep.repository.RecipeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class RecipeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private RecipeRepository recipeRepository;

    @Test
    void testGetAllRecipes() throws Exception {
        Recipe recipe1 = new Recipe();
        recipe1.setId("1");
        Recipe recipe2 = new Recipe();
        recipe2.setId("2");

        when(recipeRepository.findAll()).thenReturn(Arrays.asList(recipe1, recipe2));

        mockMvc.perform(get("/api/recipe"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));

        verify(recipeRepository, times(1)).findAll();
    }

    @Test
    void testGetRecipeById_Success() throws Exception {
        Recipe recipe = new Recipe();
        recipe.setId("123");
        when(recipeRepository.findById("123")).thenReturn(Optional.of(recipe));

        mockMvc.perform(get("/api/recipe/123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("123"));

        verify(recipeRepository, times(1)).findById("123");
    }

    @Test
    void testCreateRecipe() throws Exception {
        Recipe recipe = new Recipe();
        recipe.setName("Test Recipe");
        when(recipeRepository.save(any(Recipe.class))).thenReturn(recipe);

        mockMvc.perform(post("/api/recipe")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(recipe)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Test Recipe"));

        verify(recipeRepository, times(1)).save(any(Recipe.class));
    }

    @Test
    void testDeleteRecipe_Success() throws Exception {
        when(recipeRepository.existsById("123")).thenReturn(true);

        mockMvc.perform(delete("/api/recipe/123"))
                .andExpect(status().isNoContent());

        verify(recipeRepository, times(1)).existsById("123");
        verify(recipeRepository, times(1)).deleteById("123");
    }
}
*/
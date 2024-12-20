package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.dto.RecipeDTO;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class RecipeDTOTest {

    @Test
    void testNoArgsConstructor() {
        // Act
        RecipeDTO recipeDTO = new RecipeDTO();

        // Assert
        assertNotNull(recipeDTO);
        assertNull(recipeDTO.getId());
        assertNull(recipeDTO.getName());
        assertNull(recipeDTO.getIngredients());
        assertNull(recipeDTO.getCalories());
        assertNull(recipeDTO.getTags());
    }

    @Test
    void testAllArgsConstructor() {
        // Arrange
        Long id = 1L;
        String name = "Test Recipe";
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Basil");
        Integer calories = 200;
        String tags = "Vegetarian";

        // Act
        RecipeDTO recipeDTO = new RecipeDTO(id, name, ingredients, calories, tags);

        // Assert
        assertEquals(id, recipeDTO.getId());
        assertEquals(name, recipeDTO.getName());
        assertEquals(ingredients, recipeDTO.getIngredients());
        assertEquals(calories, recipeDTO.getCalories());
        assertEquals(tags, recipeDTO.getTags());
    }

    @Test
    void testSettersAndGetters() {
        // Arrange
        RecipeDTO recipeDTO = new RecipeDTO();
        Long id = 1L;
        String name = "Test Recipe";
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Basil");
        Integer calories = 200;
        String tags = "Vegetarian";

        // Act
        recipeDTO.setId(id);
        recipeDTO.setName(name);
        recipeDTO.setIngredients(ingredients);
        recipeDTO.setCalories(calories);
        recipeDTO.setTags(tags);

        // Assert
        assertEquals(id, recipeDTO.getId());
        assertEquals(name, recipeDTO.getName());
        assertEquals(ingredients, recipeDTO.getIngredients());
        assertEquals(calories, recipeDTO.getCalories());
        assertEquals(tags, recipeDTO.getTags());
    }

    @Test
    void testEqualsAndHashCode() {
        // Arrange
        RecipeDTO recipeDTO1 = new RecipeDTO(1L, "Test Recipe", Arrays.asList("Tomato", "Cheese", "Basil"), 200, "Vegetarian");
        RecipeDTO recipeDTO2 = new RecipeDTO(1L, "Test Recipe", Arrays.asList("Tomato", "Cheese", "Basil"), 200, "Vegetarian");

        // Assert
        assertEquals(recipeDTO1, recipeDTO2);
        assertEquals(recipeDTO1.hashCode(), recipeDTO2.hashCode());
    }

    @Test
    void testToString() {
        // Arrange
        Long id = 1L;
        String name = "Test Recipe";
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Basil");
        Integer calories = 200;
        String tags = "Vegetarian";
        RecipeDTO recipeDTO = new RecipeDTO(id, name, ingredients, calories, tags);

        // Act
        String toString = recipeDTO.toString();

        // Assert
        assertTrue(toString.contains("id=1"));
        assertTrue(toString.contains("name=Test Recipe"));
        assertTrue(toString.contains("ingredients=[Tomato, Cheese, Basil]"));
        assertTrue(toString.contains("calories=200"));
        assertTrue(toString.contains("tags=Vegetarian"));
    }
}

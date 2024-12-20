package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.dto.ShoppingListDTO;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ShoppingListDTOTest {

    @Test
    void testNoArgsConstructor() {
        // Act
        ShoppingListDTO shoppingListDTO = new ShoppingListDTO();

        // Assert
        assertNotNull(shoppingListDTO);
        assertNull(shoppingListDTO.getId());
        assertNull(shoppingListDTO.getUserId());
        assertNull(shoppingListDTO.getIngredients());
        assertFalse(shoppingListDTO.isCompleted());
    }

    @Test
    void testAllArgsConstructor() {
        // Arrange
        Long id = 1L;
        Long userId = 2L;
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Bread");
        boolean isCompleted = true;

        // Act
        ShoppingListDTO shoppingListDTO = new ShoppingListDTO(id, userId, ingredients, isCompleted);

        // Assert
        assertEquals(id, shoppingListDTO.getId());
        assertEquals(userId, shoppingListDTO.getUserId());
        assertEquals(ingredients, shoppingListDTO.getIngredients());
        assertTrue(shoppingListDTO.isCompleted());
    }

    @Test
    void testSettersAndGetters() {
        // Arrange
        ShoppingListDTO shoppingListDTO = new ShoppingListDTO();
        Long id = 1L;
        Long userId = 2L;
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Bread");
        boolean isCompleted = true;

        // Act
        shoppingListDTO.setId(id);
        shoppingListDTO.setUserId(userId);
        shoppingListDTO.setIngredients(ingredients);
        shoppingListDTO.setCompleted(isCompleted);

        // Assert
        assertEquals(id, shoppingListDTO.getId());
        assertEquals(userId, shoppingListDTO.getUserId());
        assertEquals(ingredients, shoppingListDTO.getIngredients());
        assertTrue(shoppingListDTO.isCompleted());
    }

    @Test
    void testEqualsAndHashCode() {
        // Arrange
        ShoppingListDTO shoppingListDTO1 = new ShoppingListDTO(1L, 2L, Arrays.asList("Tomato", "Cheese", "Bread"), true);
        ShoppingListDTO shoppingListDTO2 = new ShoppingListDTO(1L, 2L, Arrays.asList("Tomato", "Cheese", "Bread"), true);

        // Assert
        assertEquals(shoppingListDTO1, shoppingListDTO2);
        assertEquals(shoppingListDTO1.hashCode(), shoppingListDTO2.hashCode());
    }

    @Test
    void testToString() {
        // Arrange
        Long id = 1L;
        Long userId = 2L;
        List<String> ingredients = Arrays.asList("Tomato", "Cheese", "Bread");
        boolean isCompleted = true;
        ShoppingListDTO shoppingListDTO = new ShoppingListDTO(id, userId, ingredients, isCompleted);

        // Act
        String toString = shoppingListDTO.toString();

        // Assert
        assertTrue(toString.contains("id=1"));
        assertTrue(toString.contains("userId=2"));
        assertTrue(toString.contains("ingredients=[Tomato, Cheese, Bread]"));
        assertTrue(toString.contains("isCompleted=true"));
    }
}

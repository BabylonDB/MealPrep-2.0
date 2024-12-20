package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.dto.MealPlanDTO;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class MealPlanDTOTest {

    @Test
    void testNoArgsConstructor() {
        // Act
        MealPlanDTO mealPlanDTO = new MealPlanDTO();

        // Assert
        assertNotNull(mealPlanDTO);
        assertNull(mealPlanDTO.getId());
        assertNull(mealPlanDTO.getUserId());
        assertNull(mealPlanDTO.getRecipeId());
        assertNull(mealPlanDTO.getDate());
    }

    @Test
    void testAllArgsConstructor() {
        // Arrange
        Long id = 1L;
        Long userId = 2L;
        Long recipeId = 3L;
        LocalDate date = LocalDate.now();

        // Act
        MealPlanDTO mealPlanDTO = new MealPlanDTO(id, userId, recipeId, date);

        // Assert
        assertEquals(id, mealPlanDTO.getId());
        assertEquals(userId, mealPlanDTO.getUserId());
        assertEquals(recipeId, mealPlanDTO.getRecipeId());
        assertEquals(date, mealPlanDTO.getDate());
    }

    @Test
    void testSettersAndGetters() {
        // Arrange
        MealPlanDTO mealPlanDTO = new MealPlanDTO();
        Long id = 1L;
        Long userId = 2L;
        Long recipeId = 3L;
        LocalDate date = LocalDate.now();

        // Act
        mealPlanDTO.setId(id);
        mealPlanDTO.setUserId(userId);
        mealPlanDTO.setRecipeId(recipeId);
        mealPlanDTO.setDate(date);

        // Assert
        assertEquals(id, mealPlanDTO.getId());
        assertEquals(userId, mealPlanDTO.getUserId());
        assertEquals(recipeId, mealPlanDTO.getRecipeId());
        assertEquals(date, mealPlanDTO.getDate());
    }

    @Test
    void testEqualsAndHashCode() {
        // Arrange
        MealPlanDTO mealPlanDTO1 = new MealPlanDTO(1L, 2L, 3L, LocalDate.now());
        MealPlanDTO mealPlanDTO2 = new MealPlanDTO(1L, 2L, 3L, LocalDate.now());

        // Assert
        assertEquals(mealPlanDTO1, mealPlanDTO2);
        assertEquals(mealPlanDTO1.hashCode(), mealPlanDTO2.hashCode());
    }

    @Test
    void testToString() {
        // Arrange
        Long id = 1L;
        Long userId = 2L;
        Long recipeId = 3L;
        LocalDate date = LocalDate.now();
        MealPlanDTO mealPlanDTO = new MealPlanDTO(id, userId, recipeId, date);

        // Act
        String toString = mealPlanDTO.toString();

        // Assert
        assertTrue(toString.contains("id=1"));
        assertTrue(toString.contains("userId=2"));
        assertTrue(toString.contains("recipeId=3"));
        assertTrue(toString.contains("date=" + date.toString()));
    }
}

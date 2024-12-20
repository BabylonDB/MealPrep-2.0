package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.model.Recipe;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.repository.RecipeRepository;
import ch.zhaw.mealprep.service.MealPlanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MealPlanServiceTest {

    @Mock
    private MealPlanRepository mealPlanRepository;

    @Mock
    private RecipeRepository recipeRepository;

    @InjectMocks
    private MealPlanService mealPlanService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetRecipesForMealPlan_Success() {
        // Arrange
        String mealPlanId = "123";
        MealPlan mockMealPlan = new MealPlan();
        mockMealPlan.setId(mealPlanId);
        mockMealPlan.setRecipes(Arrays.asList("1", "2"));

        Recipe recipe1 = new Recipe();
        recipe1.setId("1");
        Recipe recipe2 = new Recipe();
        recipe2.setId("2");

        when(mealPlanRepository.findById(mealPlanId)).thenReturn(Optional.of(mockMealPlan));
        when(recipeRepository.findByIdIn(Arrays.asList("1", "2"))).thenReturn(Arrays.asList(recipe1, recipe2));

        // Act
        List<Recipe> recipes = mealPlanService.getRecipesForMealPlan(mealPlanId);

        // Assert
        assertEquals(2, recipes.size());
        assertTrue(recipes.contains(recipe1));
        assertTrue(recipes.contains(recipe2));
        verify(mealPlanRepository, times(1)).findById(mealPlanId);
        verify(recipeRepository, times(1)).findByIdIn(Arrays.asList("1", "2"));
    }

    @Test
    void testGetRecipesForMealPlan_MealPlanNotFound() {
        // Arrange
        String mealPlanId = "123";
        when(mealPlanRepository.findById(mealPlanId)).thenReturn(Optional.empty());

        // Act & Assert
        Exception exception = assertThrows(RuntimeException.class, () -> {
            mealPlanService.getRecipesForMealPlan(mealPlanId);
        });
        assertEquals("Meal Plan not found with ID: 123", exception.getMessage());
        verify(mealPlanRepository, times(1)).findById(mealPlanId);
        verifyNoInteractions(recipeRepository);
    }

    @Test
    void testGenerateMealPlanForPreferences_Success() {
        // Arrange
        String preferences = "vegan";
        Recipe recipe1 = new Recipe();
        recipe1.setId("1");
        Recipe recipe2 = new Recipe();
        recipe2.setId("2");

        when(recipeRepository.findRecipesByPreferences(preferences)).thenReturn(Arrays.asList(recipe1, recipe2));
        when(mealPlanRepository.save(any(MealPlan.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        MealPlan mealPlan = mealPlanService.generateMealPlanForPreferences(preferences);

        // Assert
        assertNotNull(mealPlan);
        assertEquals("Meal Plan for Preferences: vegan", mealPlan.getName());
        assertEquals(2, mealPlan.getRecipes().size());
        verify(recipeRepository, times(1)).findRecipesByPreferences(preferences);
        verify(mealPlanRepository, times(1)).save(any(MealPlan.class));
    }

    @Test
    void testGenerateMealPlanForPreferences_NoRecipesFound() {
        // Arrange
        String preferences = "vegan";
        when(recipeRepository.findRecipesByPreferences(preferences)).thenReturn(Arrays.asList());

        // Act & Assert
        Exception exception = assertThrows(RuntimeException.class, () -> {
            mealPlanService.generateMealPlanForPreferences(preferences);
        });
        assertEquals("No recipes found for preferences: vegan", exception.getMessage());
        verify(recipeRepository, times(1)).findRecipesByPreferences(preferences);
        verifyNoInteractions(mealPlanRepository);
    }
}

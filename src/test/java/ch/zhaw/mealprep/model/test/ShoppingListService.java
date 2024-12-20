package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.model.ShoppingList;
import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.repository.RecipeRepository;
import ch.zhaw.mealprep.repository.ShoppingListRepository;
import ch.zhaw.mealprep.service.ShoppingListService;
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

class ShoppingListServiceTest {

    @Mock
    private ShoppingListRepository shoppingListRepository;

    @Mock
    private RecipeRepository recipeRepository;

    @Mock
    private MealPlanRepository mealPlanRepository;

    @InjectMocks
    private ShoppingListService shoppingListService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllShoppingLists() {
        // Arrange
        ShoppingList list1 = new ShoppingList();
        list1.setId("1");
        ShoppingList list2 = new ShoppingList();
        list2.setId("2");

        when(shoppingListRepository.findAll()).thenReturn(Arrays.asList(list1, list2));

        // Act
        List<ShoppingList> shoppingLists = shoppingListService.getAllShoppingLists();

        // Assert
        assertEquals(2, shoppingLists.size());
        assertTrue(shoppingLists.contains(list1));
        assertTrue(shoppingLists.contains(list2));
        verify(shoppingListRepository, times(1)).findAll();
    }

    @Test
    void testGetShoppingListById_Success() {
        // Arrange
        String shoppingListId = "123";
        ShoppingList mockShoppingList = new ShoppingList();
        mockShoppingList.setId(shoppingListId);

        when(shoppingListRepository.findById(shoppingListId)).thenReturn(Optional.of(mockShoppingList));

        // Act
        ShoppingList shoppingList = shoppingListService.getShoppingListById(shoppingListId);

        // Assert
        assertNotNull(shoppingList);
        assertEquals(shoppingListId, shoppingList.getId());
        verify(shoppingListRepository, times(1)).findById(shoppingListId);
    }

    @Test
    void testGetShoppingListById_NotFound() {
        // Arrange
        String shoppingListId = "123";
        when(shoppingListRepository.findById(shoppingListId)).thenReturn(Optional.empty());

        // Act
        ShoppingList shoppingList = shoppingListService.getShoppingListById(shoppingListId);

        // Assert
        assertNull(shoppingList);
        verify(shoppingListRepository, times(1)).findById(shoppingListId);
    }

    @Test
    void testCreateShoppingList() {
        // Arrange
        ShoppingList shoppingList = new ShoppingList();
        shoppingList.setName("Groceries");

        when(shoppingListRepository.save(shoppingList)).thenReturn(shoppingList);

        // Act
        ShoppingList createdList = shoppingListService.createShoppingList(shoppingList);

        // Assert
        assertNotNull(createdList);
        assertEquals("Groceries", createdList.getName());
        verify(shoppingListRepository, times(1)).save(shoppingList);
    }

    @Test
    void testUpdateShoppingList_Success() {
        // Arrange
        String shoppingListId = "123";
        ShoppingList existingList = new ShoppingList();
        existingList.setId(shoppingListId);
        existingList.setName("Old List");

        ShoppingList updatedDetails = new ShoppingList();
        updatedDetails.setName("Updated List");

        when(shoppingListRepository.findById(shoppingListId)).thenReturn(Optional.of(existingList));
        when(shoppingListRepository.save(any(ShoppingList.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        ShoppingList updatedList = shoppingListService.updateShoppingList(shoppingListId, updatedDetails);

        // Assert
        assertNotNull(updatedList);
        assertEquals("Updated List", updatedList.getName());
        verify(shoppingListRepository, times(1)).findById(shoppingListId);
        verify(shoppingListRepository, times(1)).save(any(ShoppingList.class));
    }

    @Test
    void testUpdateShoppingList_NotFound() {
        // Arrange
        String shoppingListId = "123";
        ShoppingList updatedDetails = new ShoppingList();
        updatedDetails.setName("Updated List");

        when(shoppingListRepository.findById(shoppingListId)).thenReturn(Optional.empty());

        // Act
        ShoppingList updatedList = shoppingListService.updateShoppingList(shoppingListId, updatedDetails);

        // Assert
        assertNull(updatedList);
        verify(shoppingListRepository, times(1)).findById(shoppingListId);
        verify(shoppingListRepository, times(0)).save(any(ShoppingList.class));
    }

    @Test
    void testDeleteShoppingList_Success() {
        // Arrange
        String shoppingListId = "123";
        when(shoppingListRepository.existsById(shoppingListId)).thenReturn(true);

        // Act
        boolean result = shoppingListService.deleteShoppingList(shoppingListId);

        // Assert
        assertTrue(result);
        verify(shoppingListRepository, times(1)).existsById(shoppingListId);
        verify(shoppingListRepository, times(1)).deleteById(shoppingListId);
    }

    @Test
    void testDeleteShoppingList_NotFound() {
        // Arrange
        String shoppingListId = "123";
        when(shoppingListRepository.existsById(shoppingListId)).thenReturn(false);

        // Act
        boolean result = shoppingListService.deleteShoppingList(shoppingListId);

        // Assert
        assertFalse(result);
        verify(shoppingListRepository, times(1)).existsById(shoppingListId);
        verify(shoppingListRepository, times(0)).deleteById(shoppingListId);
    }

    @Test
    void testGenerateShoppingList_Success() {
        // Arrange
        String mealPlanId = "123";
        MealPlan mealPlan = new MealPlan();
        mealPlan.setId(mealPlanId);
        mealPlan.setRecipes(Arrays.asList("1", "2"));

        when(mealPlanRepository.findById(mealPlanId)).thenReturn(Optional.of(mealPlan));
        when(recipeRepository.aggregateShoppingList(mealPlan.getRecipes())).thenReturn(Arrays.asList("Tomatoes", "Bread"));

        // Act
        List<String> shoppingList = shoppingListService.generateShoppingList(mealPlanId);

        // Assert
        assertNotNull(shoppingList);
        assertEquals(2, shoppingList.size());
        assertTrue(shoppingList.contains("Tomatoes"));
        assertTrue(shoppingList.contains("Bread"));
        verify(mealPlanRepository, times(1)).findById(mealPlanId);
        verify(recipeRepository, times(1)).aggregateShoppingList(mealPlan.getRecipes());
    }

    @Test
    void testGenerateShoppingList_MealPlanNotFound() {
        // Arrange
        String mealPlanId = "123";
        when(mealPlanRepository.findById(mealPlanId)).thenReturn(Optional.empty());

        // Act & Assert
        Exception exception = assertThrows(RuntimeException.class, () -> {
            shoppingListService.generateShoppingList(mealPlanId);
        });
        assertEquals("Meal Plan not found with ID: 123", exception.getMessage());
        verify(mealPlanRepository, times(1)).findById(mealPlanId);
        verifyNoInteractions(recipeRepository);
    }
}

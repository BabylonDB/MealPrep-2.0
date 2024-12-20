package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.dto.UserDTO;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserDTOTest {

    @Test
    void testNoArgsConstructor() {
        // Act
        UserDTO userDTO = new UserDTO();

        // Assert
        assertNotNull(userDTO);
        assertNull(userDTO.getId());
        assertNull(userDTO.getEmail());
        assertNull(userDTO.getName());
        assertNull(userDTO.getDietaryPreferences());
        assertNull(userDTO.getPortionSize());
    }

    @Test
    void testAllArgsConstructor() {
        // Arrange
        Long id = 1L;
        String email = "test@example.com";
        String name = "Test User";
        String dietaryPreferences = "Vegetarian";
        Integer portionSize = 2;

        // Act
        UserDTO userDTO = new UserDTO(id, email, name, dietaryPreferences, portionSize);

        // Assert
        assertEquals(id, userDTO.getId());
        assertEquals(email, userDTO.getEmail());
        assertEquals(name, userDTO.getName());
        assertEquals(dietaryPreferences, userDTO.getDietaryPreferences());
        assertEquals(portionSize, userDTO.getPortionSize());
    }

    @Test
    void testSettersAndGetters() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        Long id = 1L;
        String email = "test@example.com";
        String name = "Test User";
        String dietaryPreferences = "Vegetarian";
        Integer portionSize = 2;

        // Act
        userDTO.setId(id);
        userDTO.setEmail(email);
        userDTO.setName(name);
        userDTO.setDietaryPreferences(dietaryPreferences);
        userDTO.setPortionSize(portionSize);

        // Assert
        assertEquals(id, userDTO.getId());
        assertEquals(email, userDTO.getEmail());
        assertEquals(name, userDTO.getName());
        assertEquals(dietaryPreferences, userDTO.getDietaryPreferences());
        assertEquals(portionSize, userDTO.getPortionSize());
    }

    @Test
    void testEqualsAndHashCode() {
        // Arrange
        UserDTO userDTO1 = new UserDTO(1L, "test@example.com", "Test User", "Vegetarian", 2);
        UserDTO userDTO2 = new UserDTO(1L, "test@example.com", "Test User", "Vegetarian", 2);

        // Assert
        assertEquals(userDTO1, userDTO2);
        assertEquals(userDTO1.hashCode(), userDTO2.hashCode());
    }

    @Test
    void testToString() {
        // Arrange
        Long id = 1L;
        String email = "test@example.com";
        String name = "Test User";
        String dietaryPreferences = "Vegetarian";
        Integer portionSize = 2;
        UserDTO userDTO = new UserDTO(id, email, name, dietaryPreferences, portionSize);

        // Act
        String toString = userDTO.toString();

        // Assert
        assertTrue(toString.contains("id=1"));
        assertTrue(toString.contains("email=test@example.com"));
        assertTrue(toString.contains("name=Test User"));
        assertTrue(toString.contains("dietaryPreferences=Vegetarian"));
        assertTrue(toString.contains("portionSize=2"));
    }
}

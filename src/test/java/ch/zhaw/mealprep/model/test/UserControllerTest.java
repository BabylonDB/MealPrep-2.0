/*package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.model.User;
import ch.zhaw.mealprep.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Disabled;
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
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Test
    void testGetAllUsers() throws Exception {
        User user1 = new User();
        user1.setId("1");
        User user2 = new User();
        user2.setId("2");

        when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

        mockMvc.perform(get("/api/user"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));

        verify(userRepository, times(1)).findAll();
    }

    @Test
    void testGetUserById_Success() throws Exception {
        User user = new User();
        user.setId("123");
        when(userRepository.findById("123")).thenReturn(Optional.of(user));

        mockMvc.perform(get("/api/user/123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("123"));

        verify(userRepository, times(1)).findById("123");
    }

    @Test
    void testGetUserById_NotFound() throws Exception {
        when(userRepository.findById("123")).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/user/123"))
                .andExpect(status().isNotFound());

        verify(userRepository, times(1)).findById("123");
    }

    @Test
    void testCreateUser() throws Exception {
        User user = new User();
        user.setName("Test User");
        when(userRepository.save(any(User.class))).thenReturn(user);

        mockMvc.perform(post("/api/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Test User"));

        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testUpdateUser_Success() throws Exception {
        User existingUser = new User();
        existingUser.setId("123");
        existingUser.setName("Old Name");

        User updatedDetails = new User();
        updatedDetails.setName("New Name");

        when(userRepository.findById("123")).thenReturn(Optional.of(existingUser));
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        mockMvc.perform(put("/api/user/123")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedDetails)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("New Name"));

        verify(userRepository, times(1)).findById("123");
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testUpdateUser_NotFound() throws Exception {
        User updatedDetails = new User();
        updatedDetails.setName("New Name");

        when(userRepository.findById("123")).thenReturn(Optional.empty());

        mockMvc.perform(put("/api/user/123")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedDetails)))
                .andExpect(status().isNotFound());

        verify(userRepository, times(1)).findById("123");
        verify(userRepository, times(0)).save(any(User.class));
    }

    @Test
    void testDeleteUser_Success() throws Exception {
        when(userRepository.existsById("123")).thenReturn(true);

        mockMvc.perform(delete("/api/user/123"))
                .andExpect(status().isNoContent());

        verify(userRepository, times(1)).existsById("123");
        verify(userRepository, times(1)).deleteById("123");
    }

    @Test
    void testDeleteUser_NotFound() throws Exception {
        when(userRepository.existsById("123")).thenReturn(false);

        mockMvc.perform(delete("/api/user/123"))
                .andExpect(status().isNotFound());

        verify(userRepository, times(1)).existsById("123");
        verify(userRepository, times(0)).deleteById("123");
    }
}
/* */
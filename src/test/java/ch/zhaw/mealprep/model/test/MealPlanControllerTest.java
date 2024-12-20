/*package ch.zhaw.mealprep.model.test;

import ch.zhaw.mealprep.model.MealPlan;
import ch.zhaw.mealprep.repository.MealPlanRepository;
import ch.zhaw.mealprep.service.MealPlanService;
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
class MealPlanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @Autowired
    private MealPlanService mealPlanService;

    @Test
    void testGetAllMealPlans() throws Exception {
        MealPlan mealPlan1 = new MealPlan();
        mealPlan1.setId("1");
        MealPlan mealPlan2 = new MealPlan();
        mealPlan2.setId("2");

        when(mealPlanRepository.findAll()).thenReturn(Arrays.asList(mealPlan1, mealPlan2));

        mockMvc.perform(get("/api/mealplan"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));

        verify(mealPlanRepository, times(1)).findAll();
    }

    @Test
    void testGetMealPlanById_Success() throws Exception {
        MealPlan mealPlan = new MealPlan();
        mealPlan.setId("123");
        when(mealPlanRepository.findById("123")).thenReturn(Optional.of(mealPlan));

        mockMvc.perform(get("/api/mealplan/123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("123"));

        verify(mealPlanRepository, times(1)).findById("123");
    }

    @Test
    void testCreateMealPlan() throws Exception {
        MealPlan mealPlan = new MealPlan();
        mealPlan.setName("Test Meal Plan");
        when(mealPlanRepository.save(any(MealPlan.class))).thenReturn(mealPlan);

        mockMvc.perform(post("/api/mealplan")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(mealPlan)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Test Meal Plan"));

        verify(mealPlanRepository, times(1)).save(any(MealPlan.class));
    }

    @Test
    void testDeleteMealPlan_Success() throws Exception {
        when(mealPlanRepository.existsById("123")).thenReturn(true);

        mockMvc.perform(delete("/api/mealplan/123"))
                .andExpect(status().isNoContent());

        verify(mealPlanRepository, times(1)).existsById("123");
        verify(mealPlanRepository, times(1)).deleteById("123");
    }
}
/* */
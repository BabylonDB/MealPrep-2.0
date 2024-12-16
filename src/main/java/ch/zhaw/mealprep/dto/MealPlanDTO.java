
        package ch.zhaw.mealprep.dto;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        import java.time.LocalDate;

        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class MealPlanDTO {
            private Long id;
            private Long userId;  // Verweis auf den User
            private Long recipeId; // Verweis auf das Rezept
            private LocalDate date;
        }
    
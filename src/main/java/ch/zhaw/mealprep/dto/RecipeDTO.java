
        package ch.zhaw.mealprep.dto;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        import java.util.List;

        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class RecipeDTO {
            private Long id;
            private String name;
            private List<String> ingredients;
            private Integer calories;
            private String tags;
        }
    
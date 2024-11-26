
        package ch.zhaw.mealprep.dto;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        import java.util.List;

        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class ShoppingListDTO {
            private Long id;
            private Long userId;
            private List<String> ingredients;
            private boolean isCompleted;
        }
    
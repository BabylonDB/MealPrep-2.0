package ch.zhaw.mealprep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ch.zhaw.mealprep.model.ShoppingList;
import ch.zhaw.mealprep.service.ShoppingListService;
import java.util.List;

@RestController
@RequestMapping("/api/shoppinglist")
public class ShoppingListController {

    @Autowired
    private ShoppingListService shoppingListService;

    // Alle Shopping-Listen abrufen
    @GetMapping
    public List<ShoppingList> getAllShoppingLists() {
        return shoppingListService.getAllShoppingLists();
    }

    // Shopping-Liste nach ID abrufen
    @GetMapping("/{id}")
    public ResponseEntity<ShoppingList> getShoppingListById(@PathVariable String id) {
        ShoppingList shoppingList = shoppingListService.getShoppingListById(id);
        if (shoppingList != null) {
            return ResponseEntity.ok(shoppingList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Neue Shopping-Liste erstellen
    @PostMapping
    public ResponseEntity<ShoppingList> createShoppingList(@RequestBody ShoppingList shoppingList) {
        ShoppingList createdShoppingList = shoppingListService.createShoppingList(shoppingList);
        return new ResponseEntity<>(createdShoppingList, HttpStatus.CREATED);
    }

    // Bestehende Shopping-Liste aktualisieren
    @PutMapping("/{id}")
    public ResponseEntity<ShoppingList> updateShoppingList(@PathVariable String id, @RequestBody ShoppingList shoppingListDetails) {
        ShoppingList updatedShoppingList = shoppingListService.updateShoppingList(id, shoppingListDetails);
        if (updatedShoppingList != null) {
            return ResponseEntity.ok(updatedShoppingList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Shopping-Liste löschen
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShoppingList(@PathVariable String id) {
        boolean deleted = shoppingListService.deleteShoppingList(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Generierte Shopping-Liste für einen MealPlan abrufen
    @GetMapping("/generate/{mealPlanId}")
    public ResponseEntity<List<String>> generateShoppingList(@PathVariable String mealPlanId) {
        try {
            List<String> shoppingList = shoppingListService.generateShoppingList(mealPlanId);
            return ResponseEntity.ok(shoppingList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}

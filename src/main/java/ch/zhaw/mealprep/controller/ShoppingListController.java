package ch.zhaw.mealprep.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ch.zhaw.mealprep.model.*;
import ch.zhaw.mealprep.repository.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shoppinglist")
public class ShoppingListController {

    @Autowired
    private ShoppingListRepository shoppingListRepository;

    @GetMapping
    public List<ShoppingList> getAllShoppingLists() {
        return shoppingListRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShoppingList> getShoppingListById(@PathVariable String id) {
        Optional<ShoppingList> shoppingList = shoppingListRepository.findById(id);
        return shoppingList.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ShoppingList> createShoppingList(@RequestBody ShoppingList shoppingList) {
        ShoppingList savedShoppingList = shoppingListRepository.save(shoppingList);
        return new ResponseEntity<>(savedShoppingList, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShoppingList> updateShoppingList(@PathVariable String id, @RequestBody ShoppingList shoppingListDetails) {
        return shoppingListRepository.findById(id).map(shoppingList -> {
            shoppingList.setName(shoppingListDetails.getName());
            shoppingList.setItems(shoppingListDetails.getItems());
            shoppingList.setStatus(shoppingListDetails.getStatus());
            ShoppingList updatedShoppingList = shoppingListRepository.save(shoppingList);
            return new ResponseEntity<>(updatedShoppingList, HttpStatus.OK);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShoppingList(@PathVariable String id) {
        if (shoppingListRepository.existsById(id)) {
            shoppingListRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

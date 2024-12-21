# Beschreibung der Modul- und Integrationstests

## **DTO-Tests**
Die Tests für die Data Transfer Objects (DTOs) prüfen die korrekte Funktionalität der Datenmodelle. Die folgenden Tests sind implementiert:

### **1. MealPlanDTOTest**
 **Zweck:** Sicherstellen, dass das `MealPlanDTO` korrekt initialisiert und verwendet werden kann.
 **Geprüfte Aspekte:**
   Konstruktoren
   Getter und Setter
   Validierung von Daten (falls implementiert)

### **2. RecipeDTOTest**
 **Zweck:** Validierung der Datenintegrität für Rezepte.
 **Geprüfte Aspekte:**
   Struktur und Felder (Name, Zutaten, Kalorien, etc.)
   Korrekte Verarbeitung von Listen wie Zutaten

### **3. ShoppingListDTOTest**
 **Zweck:** Test der Datenstruktur für Einkaufslisten.
 **Geprüfte Aspekte:**
   Hinzufügen, Entfernen und Abrufen von Elementen in der Einkaufsliste
   Datenvalidierung

### **4. UserDTOTest**
 **Zweck:** Sicherstellen, dass Benutzerdaten korrekt gehandhabt werden.
 **Geprüfte Aspekte:**
   Validierung von Pflichtfeldern (z. B. Name, E-Mail)
   Verarbeitung optionaler Felder (z. B. Präferenzen)



## **Service-Tests**
Die Service-Tests prüfen die Geschäftslogik und die Integration der DTOs mit anderen Komponenten.

### **1. MealPlanServiceTest**
**Zweck:** Sicherstellen, dass Meal Plans korrekt erstellt, gelesen, aktualisiert und gelöscht (CRUD) werden können.
**Geprüfte Funktionen:**
   Erstellung eines neuen Meal Plans mit validen Daten
   Hinzufügen und Entfernen von Rezepten zu Meal Plans
   Abrufen eines Meal Plans nach ID
  Validierung von Eingabedaten

### **2. ShoppingListServiceTest**
 **Zweck:** Überprüfung der Einkaufslisten-Logik.
**Geprüfte Funktionen:**
   Generierung einer Einkaufsliste basierend auf einem Meal Plan
  Hinzufügen von Elementen zur Einkaufsliste
  Entfernen von Elementen aus der Einkaufsliste
  Validierung der Konsistenz von Einkaufslisten

### **3. UserServiceTest**
**Zweck:** Sicherstellen, dass Benutzeroperationen korrekt funktionieren.
**Geprüfte Funktionen:**
   Erstellung und Verwaltung von Benutzerdaten
   Passwort-Validierung und Hashing
   Abrufen von Benutzerdaten nach verschiedenen Kriterien (z. B. ID, E-Mail)



## **Integrationstests**
Integrationstests überprüfen die Zusammenarbeit verschiedener Module, insbesondere von Services und Controllern.

### **1. MealprepApplicationTests**
**Zweck:** Sicherstellen, dass die gesamte Anwendung korrekt startet und grundlegende Interaktionen zwischen Modulen möglich sind.
 **Geprüfte Szenarien:**
   Laden der Spring-Kontextkonfiguration
   Basis-Endpunkte auf Erreichbarkeit prüfen

### **2. MongoTestController**
 **Zweck:** Validierung der Datenbank-Integration mit MongoDB.
 **Geprüfte Funktionen:**
   Speicherung und Abruf von Dokumenten
  Validierung von Query-Ergebnissen




# Implementation

## 1. Benutzerverwaltung
### GUI-Elemente:
- **Formular** für die Eingabe von Benutzerinformationen:
  - Name
  - E-Mail
  - Passwort
  - Präferenzen
- **Tabelle** mit allen Benutzern:
  - Spalten: Name, E-Mail, Präferenzen
  - Aktionen: Bearbeiten, Löschen

### Interaktionen:
- Benutzer können über das Formular neue Profile erstellen oder bestehende aktualisieren.
- Die Tabelle listet alle Benutzer auf, die per API abgerufen werden.
- Bearbeiten und Löschen erfolgt über die Schaltflächen in der Tabelle.


## 2. Rezepte-Management
### GUI-Elemente:
- **Formular** zur Erstellung und Bearbeitung von Rezepten:
  - Name
  - Zutaten (komma-getrennt)
  - Kalorien
- **Tabelle** mit einer Liste aller Rezepte:
  - Spalten: Name, Zutaten, Kalorien
  - Aktionen: Bearbeiten, Löschen, Hinzufügen zu einem Meal Plan

### Interaktionen:
- Nutzer können Rezepte erstellen, die in der Tabelle erscheinen.
- Rezepte können zu einem Meal Plan hinzugefügt werden, indem ein Rezept ausgewählt und ein Meal Plan zugeordnet wird.

![Alt-Text](\figures\Frontend_\Recipe.png)

## 3. Meal Plans und Einkaufslisten
### GUI-Elemente:
- **Dropdown-Menü** zur Auswahl eines Meal Plans.
- **Tabelle** mit Rezepten, die einem Meal Plan zugeordnet sind.
- **Liste** der Zutaten, die aus den Rezepten generiert wird.

### Interaktionen:
- Meal Plans können durch Auswahl im Dropdown-Menü angezeigt werden.
- Zutatenlisten werden basierend auf den ausgewählten Meal Plans generiert.

![Alt-Text](\figures\Frontend_\Shoppinglist.png)
![Alt-Text](\figures\Frontend_\Mealplans.png)

## 4. Google Maps-Integration
### GUI-Elemente:
- **Karte**, die Supermärkte in der Nähe anzeigt.

### Interaktionen:
- Die Karte wird automatisch zentriert und mit Google Maps geladen.

![Alt-Text](\figures\Frontend_\Googlemaps.png)

# Aufgaben und Funktionen eingebundener Drittsysteme

## 2. Google Maps API
- **Funktion:** Anzeige von Supermärkten oder Standorten.
- **Einsatzbereiche:**
  - Darstellung einer Karte mit einem spezifischen Zoom- und Mittelpunkt.
  - Bereitstellung von geografischen Informationen für Benutzer.

---



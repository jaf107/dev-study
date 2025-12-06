

## **Task 1 — Build a Multi-Field Registration Form**

Create a registration form using the design system's form components and layout primitives.

### **Requirements:**

* Include Full Name, Email, Password, and Confirm Password fields
* Include helper text for Full Name and Email
* Show an error message when the email is entered incorrectly
* Include a show/hide toggle for the password field
* Add a primary action button labeled **Create Account**

### **Additional Notes:**

* Design should be clean and readable across devices
* Layout should feel natural and use consistent spacing and sizing

---

## **Task 2 — Build a Responsive Card Grid**

Create a responsive layout displaying a set of informational cards using design system components.

### **Requirements:**

* Create a grid of 8 cards
* Each card must include:

  * A title
  * A short paragraph of text
  * A badge indicating status (e.g. Published, Draft)
  * Status Badege - Atleast 2 should be Published, 2 should be Draft, 3 should be In Progress and 1 should be Cancelled
  * A thumbnail image - please take any image from the internet and save it into the `/public` folder
  * A **View Details** button

### **Responsive Behavior:**

* Use different column counts based on screen width (e.g. 4 → 2 → 1)
* Ensure content is legible and aligned at all breakpoints

---

## **Task 3 — Build a Modal Dialog with Actions**

Create a modal dialog using modal and form components from the design system.

### **Requirements:**

* Include a trigger button labeled **Open Modal**
* Inside the modal, include:

  * Title: **Profile Update**
  * Two inputs (e.g., First Name, Phone Number)
  * A tooltip for the Phone Number input
  * Contextual text to help users understand the purpose
  * Save Changes and Cancel buttons

### **Interaction Expectations:**

* The modal should behave as expected using the system’s API and patterns
* Inputs and buttons should be functional and usable in typical workflows

---

## **Task 4 — Build a Sortable and Reorderable Data Table**

Create a table using the design system’s table components.

### **Requirements:**

* Include 5 columns: Name, Role, Department, Location, Last Active
* Populate the table with 8–10 rows of data. Data is in the `/data` folder.
* Make two columns sortable (e.g. Name and Last Active)
* Enable row reordering through drag-and-drop and another interaction method (e.g. buttons)

### **Additional Notes:**

* Follow the design system’s documented approach to tables
* Sorting and reordering behavior should be intuitive and maintainable

---

## **Task 5 — Build a Tasks Navigation Panel**

Create a navigation interface that allows users to switch between the four UIs built in Tasks 1–4.

### Requirements:

* Present navigation links to: Multi-Field Form, Card Grid, Modal Dialog, and Data Table
* Visually indicate the currently active task (e.g. “Multi-Field Form”)
* On large screens, display the links as a horizontal or vertical list
* On small screens, adapt the layout using a dropdown, toggleable panel, or drawer menu
* Do not duplicate navigation patterns (e.g. avoid using both dropdown and link list at once)

### Additional Notes:

* Follow layout and component patterns from the chosen design system
* Use a single, coherent navigation pattern that remains intuitive across viewports

---

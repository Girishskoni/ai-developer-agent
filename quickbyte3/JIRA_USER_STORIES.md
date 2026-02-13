# Epic: Authentication

## US-101 – Customer Login
Type: Story
Priority: High
Story Points: 3
Labels: auth, customer

### Description
As a registered customer,
I want to log in to my account,
So that I can access personalized features and place orders.

### Acceptance Criteria
1. The system shall present a login form with fields for email/username and password.
2. Upon entering valid credentials and clicking "Login", the customer shall be successfully authenticated and redirected to their dashboard.
3. Upon entering invalid credentials, the system shall display an error message indicating "Invalid email or password".
4. The system shall provide a "Forgot Password" link for password recovery.

## US-102 – Admin Login
Type: Story
Priority: High
Story Points: 3
Labels: auth, admin

### Description
As an administrator,
I want to log in to the admin panel,
So that I can manage users, vendors, and system settings.

### Acceptance Criteria
1. The system shall present a login form with fields for admin username and password.
2. Upon entering valid admin credentials and clicking "Login", the admin shall be successfully authenticated and redirected to the admin dashboard.
3. Upon entering invalid admin credentials, the system shall display an error message indicating "Invalid admin credentials".

# Epic: Food Ordering

## US-201 – Browse Menu
Type: Story
Priority: High
Story Points: 5
Labels: food, customer

### Description
As a customer,
I want to browse the menu of available restaurants and their items,
So that I can decide what to order.

### Acceptance Criteria
1. The system shall display a list of available restaurants.
2. Clicking on a restaurant shall display its menu, categorized by sections (e.g., Appetizers, Main Courses, Desserts).
3. Each menu item shall display its name, description, price, and an image (if available).
4. The system shall allow filtering menu items by category.

## US-202 – Add Item to Cart
Type: Story
Priority: High
Story Points: 3
Labels: food, customer, cart

### Description
As a customer,
I want to add food items to my shopping cart,
So that I can prepare my order.

### Acceptance Criteria
1. For each menu item, there shall be an "Add to Cart" button.
2. Clicking "Add to Cart" shall add one unit of the item to the customer's cart.
3. The cart shall display the number of items and the subtotal.
4. The customer shall be able to specify the quantity of an item before adding it to the cart.

## US-203 – View Cart
Type: Story
Priority: High
Story Points: 3
Labels: food, customer, cart

### Description
As a customer,
I want to view the contents of my shopping cart,
So that I can review my selected items and make changes.

### Acceptance Criteria
1. The system shall display a dedicated "Cart" page or section.
2. The cart shall list all added items with their name, quantity, individual price, and subtotal for each item.
3. The cart shall display the total cost of all items.
4. The customer shall be able to remove items from the cart.
5. The customer shall be able to adjust the quantity of items in the cart.

## US-204 – Search for Food Items
Type: Story
Priority: Medium
Story Points: 5
Labels: food, customer, search

### Description
As a customer,
I want to search for specific food items or restaurants,
So that I can quickly find what I'm looking for.

### Acceptance Criteria
1. A search bar shall be prominently displayed on the menu browsing pages.
2. Searching for a food item name shall return matching items from all restaurants.
3. Searching for a restaurant name shall return that specific restaurant and its menu.
4. Search results shall be displayed in a clear and organized manner.

## US-205 – Vendor Manages Menu
Type: Story
Priority: High
Story Points: 8
Labels: food, vendor, menu

### Description
As a vendor,
I want to manage my restaurant's menu,
So that I can add, edit, and remove food items.

### Acceptance Criteria
1. The vendor shall have a dedicated "Manage Menu" section in their portal.
2. The vendor shall be able to add new food items with details like name, description, price, category, and image.
3. The vendor shall be able to edit existing food items.
4. The vendor shall be able to mark food items as "out of stock" or "available".
5. The vendor shall be able to delete food items from the menu.

# Epic: Payment

## US-301 – Select Payment Method
Type: Story
Priority: High
Story Points: 3
Labels: payment, customer

### Description
As a customer,
I want to select my preferred payment method,
So that I can complete my order.

### Acceptance Criteria
1. During the checkout process, the system shall present a list of available payment methods (e.g., Credit Card, Debit Card, Digital Wallet).
2. The customer shall be able to select one payment method.
3. If "Credit Card" or "Debit Card" is selected, fields for card number, expiry date, CVV, and cardholder name shall be displayed.
4. If a "Digital Wallet" is selected, the system shall prompt for authentication with the respective wallet.

## US-302 – Process Credit/Debit Card Payment
Type: Story
Priority: High
Story Points: 8
Labels: payment, customer, credit_card

### Description
As a customer,
I want to securely process my payment using a credit or debit card,
So that I can pay for my food order.

### Acceptance Criteria
1. Upon selecting "Credit Card" or "Debit Card" and entering valid card details, the system shall initiate a secure payment transaction.
2. The system shall validate the card details (e.g., card number format, expiry date).
3. Upon successful payment authorization, the order shall be confirmed.
4. If the payment fails, the system shall display an appropriate error message and allow the customer to retry or select another payment method.
5. Sensitive card details shall be handled securely and not stored directly in the system.

## US-303 – View Order History
Type: Story
Priority: Medium
Story Points: 5
Labels: order, customer

### Description
As a customer,
I want to view my past order history,
So that I can track my previous purchases and reorder items.

### Acceptance Criteria
1. The system shall provide an "Order History" section accessible from the customer's dashboard.
2. The order history shall list all past orders with their order ID, date, total amount, and status (e.g., Delivered, Cancelled).
3. Clicking on an order in the history shall display the detailed order information, including items ordered and payment method.
4. The customer shall have an option to "Reorder" from a past order.

## US-304 – Admin View All Orders
Type: Story
Priority: High
Story Points: 8
Labels: order, admin

### Description
As an administrator,
I want to view all orders placed through the system,
So that I can monitor overall sales and identify any issues.

### Acceptance Criteria
1. The admin panel shall have a "All Orders" section.
2. This section shall display a paginated list of all orders, including order ID, customer name, restaurant name, order date, total amount, and current status.
3. The admin shall be able to filter orders by status, date range, and restaurant.
4. The admin shall be able to view the detailed information of any order.

## US-305 – Vendor View Assigned Orders
Type: Story
Priority: High
Story Points: 5
Labels: order, vendor

### Description
As a vendor,
I want to view orders assigned to my restaurant,
So that I can prepare and fulfill them.

### Acceptance Criteria
1. The vendor portal shall have a "My Orders" section.
2. This section shall display a list of new and in-progress orders assigned to the vendor's restaurant.
3. Each order shall display the order ID, customer name, order items, and status.
4. The vendor shall be able to update the status of an order (e.g., "Preparing", "Ready for Pickup/Delivery").
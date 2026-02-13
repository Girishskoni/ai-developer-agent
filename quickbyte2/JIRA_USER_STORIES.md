# Epic: User Management

## US-101 – Customer Registration
Type: Story
Priority: High
Story Points: 5
Labels: auth, registration, customer

### Description
As a new customer,
I want to register for an account,
So that I can browse and order food from the platform.

### Acceptance Criteria
1. The system shall provide a registration form with fields for name, email, password, and phone number.
2. The system shall validate that the email address is in a valid format.
3. The system shall enforce password complexity requirements (e.g., minimum length, mix of characters).
4. The system shall prevent registration with an email address that already exists.
5. Upon successful registration, the customer shall be automatically logged in.

## US-102 – Customer Login
Type: Story
Priority: High
Story Points: 3
Labels: auth, login, customer

### Description
As a registered customer,
I want to log in to my account,
So that I can access my profile, cart, and order history.

### Acceptance Criteria
1. The system shall provide a login form with fields for email and password.
2. The system shall authenticate the customer based on their provided credentials.
3. Upon successful login, the customer shall be redirected to their dashboard or the homepage.
4. The system shall display an error message for invalid credentials.
5. The system shall provide a "Forgot Password" link.

## US-103 – Password Reset
Type: Story
Priority: Medium
Story Points: 8
Labels: auth, password, customer

### Description
As a customer who has forgotten their password,
I want to reset my password,
So that I can regain access to my account.

### Acceptance Criteria
1. The system shall allow a customer to initiate a password reset by providing their registered email address.
2. The system shall send a password reset link to the customer's registered email address.
3. The password reset link shall be time-limited and unique.
4. The customer shall be able to set a new password using the provided link.
5. The system shall confirm that the password has been successfully reset.

## US-104 – Vendor Registration
Type: Story
Priority: High
Story Points: 8
Labels: auth, registration, vendor

### Description
As a new food vendor,
I want to register my business on the platform,
So that I can list my menu and receive orders.

### Acceptance Criteria
1. The system shall provide a vendor registration form with fields for business name, contact person, email, password, phone number, and business address.
2. The system shall validate that the email address is in a valid format.
3. The system shall enforce password complexity requirements.
4. The system shall prevent registration with an email address that already exists.
5. Upon successful registration, the vendor shall be able to access their vendor dashboard.

## US-105 – Vendor Login
Type: Story
Priority: High
Story Points: 3
Labels: auth, login, vendor

### Description
As a registered vendor,
I want to log in to my account,
So that I can manage my menu, view orders, and track sales.

### Acceptance Criteria
1. The system shall provide a login form for vendors with fields for email and password.
2. The system shall authenticate the vendor based on their provided credentials.
3. Upon successful login, the vendor shall be redirected to their vendor dashboard.
4. The system shall display an error message for invalid credentials.

# Epic: Food Ordering

## US-201 – Browse Restaurants
Type: Story
Priority: High
Story Points: 5
Labels: browsing, customer, restaurant

### Description
As a customer,
I want to browse a list of available restaurants,
So that I can choose where to order food from.

### Acceptance Criteria
1. The system shall display a list of restaurants, including their name, cuisine type, and average rating.
2. The system shall allow customers to filter restaurants by cuisine type.
3. The system shall allow customers to search for restaurants by name.
4. Each restaurant listing shall be clickable to view its menu.

## US-202 – View Restaurant Menu
Type: Story
Priority: High
Story Points: 5
Labels: browsing, customer, menu

### Description
As a customer,
I want to view the menu of a selected restaurant,
So that I can see the available food items and their prices.

### Acceptance Criteria
1. The system shall display the restaurant's name and description.
2. The system shall display menu items categorized by sections (e.g., Appetizers, Main Courses, Desserts).
3. Each menu item shall display its name, description, and price.
4. The system shall allow customers to add items to their cart directly from the menu.

## US-203 – Add Item to Cart
Type: Story
Priority: High
Story Points: 3
Labels: cart, customer, ordering

### Description
As a customer,
I want to add food items to my shopping cart,
So that I can prepare my order.

### Acceptance Criteria
1. The system shall allow customers to specify the quantity of an item to add to the cart.
2. The system shall display a confirmation that the item has been added to the cart.
3. The cart shall update to reflect the added item and its quantity.
4. The system shall allow adding multiple items from the same or different restaurants (if applicable).

## US-204 – View Cart
Type: Story
Priority: High
Story Points: 3
Labels: cart, customer, ordering

### Description
As a customer,
I want to view the contents of my shopping cart,
So that I can review my selected items and their total cost.

### Acceptance Criteria
1. The system shall display all items currently in the cart, including their name, quantity, and individual price.
2. The system shall display the subtotal of all items in the cart.
3. The system shall allow customers to adjust the quantity of items in the cart.
4. The system shall allow customers to remove items from the cart.

## US-205 – Update Cart Quantity
Type: Story
Priority: Medium
Story Points: 3
Labels: cart, customer, ordering

### Description
As a customer,
I want to update the quantity of items in my cart,
So that I can adjust my order before checkout.

### Acceptance Criteria
1. The system shall provide controls (e.g., plus/minus buttons) to increase or decrease the quantity of an item in the cart.
2. The cart's subtotal shall be updated dynamically as item quantities are changed.
3. The system shall allow setting the quantity to zero, which should remove the item from the cart.

## US-206 – Remove Item from Cart
Type: Story
Priority: Medium
Story Points: 1
Labels: cart, customer, ordering

### Description
As a customer,
I want to remove an item from my cart,
So that I can exclude it from my order.

### Acceptance Criteria
1. The system shall provide a clear option to remove an item from the cart.
2. Upon removal, the item shall no longer appear in the cart.
3. The cart's subtotal shall be updated accordingly.

## US-207 – Place Order
Type: Story
Priority: High
Story Points: 8
Labels: order, customer, checkout

### Description
As a customer,
I want to place an order from my cart,
So that I can confirm my food selection and proceed to payment.

### Acceptance Criteria
1. The system shall allow customers to proceed to checkout from the cart view.
2. The system shall display a summary of the order, including items, quantities, and total cost.
3. The system shall prompt the customer to select or enter a delivery address.
4. The system shall prompt the customer to select a payment method.
5. Upon confirmation, the order shall be created and marked as "Pending".

## US-208 – View Order History
Type: Story
Priority: Medium
Story Points: 5
Labels: order, customer, history

### Description
As a customer,
I want to view my past orders,
So that I can track my order status and reorder previous meals.

### Acceptance Criteria
1. The system shall display a list of all past orders for the logged-in customer.
2. Each order in the history shall display the order date, restaurant name, total amount, and status.
3. Clicking on an order shall display the detailed items included in that order.
4. The system shall provide an option to reorder a previous order.

## US-209 – View Pending Orders (Vendor)
Type: Story
Priority: High
Story Points: 5
Labels: order, vendor, management

### Description
As a vendor,
I want to view a list of pending orders for my restaurant,
So that I can start preparing them.

### Acceptance Criteria
1. The system shall display a list of all new orders assigned to the logged-in vendor.
2. Each pending order shall display the customer's name, delivery address, and order items.
3. The system shall indicate the order's timestamp.
4. The system shall allow the vendor to accept or reject an order.

## US-210 – Accept Order (Vendor)
Type: Story
Priority: High
Story Points: 3
Labels: order, vendor, management

### Description
As a vendor,
I want to accept a pending order,
So that the customer is notified and I can begin preparation.

### Acceptance Criteria
1. The system shall allow a vendor to mark a pending order as "Accepted".
2. Upon acceptance, the order status shall be updated to "Preparing".
3. The customer shall receive a notification that their order has been accepted.

## US-211 – Reject Order (Vendor)
Type: Story
Priority: Medium
Story Points: 3
Labels: order, vendor, management

### Description
As a vendor,
I want to reject a pending order,
So that the customer is notified and I can avoid fulfilling it.

### Acceptance Criteria
1. The system shall allow a vendor to mark a pending order as "Rejected".
2. The vendor shall be able to provide a reason for rejection.
3. Upon rejection, the order status shall be updated to "Rejected".
4. The customer shall receive a notification that their order has been rejected, including the reason.
5. The system shall automatically refund the customer if payment has already been processed.

## US-212 – Update Order Status (Vendor)
Type: Story
Priority: Medium
Story Points: 5
Labels: order, vendor, management

### Description
As a vendor,
I want to update the status of an order as it progresses,
So that the customer is informed about the order's journey.

### Acceptance Criteria
1. The system shall allow a vendor to update the order status from "Preparing" to "Ready for Pickup/Delivery".
2. The system shall allow a vendor to update the order status from "Ready for Pickup/Delivery" to "Completed".
3. The customer shall receive notifications for each status update.

# Epic: Payment Processing

## US-301 – Select Payment Method
Type: Story
Priority: High
Story Points: 3
Labels: payment, customer, checkout

### Description
As a customer,
I want to select my preferred payment method during checkout,
So that I can pay for my order.

### Acceptance Criteria
1. The system shall present a list of available payment methods (e.g., Credit Card, Debit Card, Digital Wallet).
2. The system shall allow the customer to choose one payment method.
3. The system shall dynamically display the relevant fields based on the selected payment method.

## US-302 – Enter Payment Details (Credit/Debit Card)
Type: Story
Priority: High
Story Points: 5
Labels: payment, customer, checkout, credit card

### Description
As a customer,
I want to securely enter my credit or debit card details,
So that I can pay for my order.

### Acceptance Criteria
1. The system shall provide fields for card number, expiry date, CVV, and cardholder name.
2. The system shall validate the format of the card number and expiry date.
3. The system shall securely transmit card details to the payment gateway.
4. The system shall not store sensitive card details on its own servers.

## US-303 – Process Payment
Type: Story
Priority: High
Story Points: 8
Labels: payment, customer, checkout

### Description
As a customer,
I want my payment to be processed securely and efficiently,
So that my order can be confirmed.

### Acceptance Criteria
1. The system shall initiate a payment transaction with the selected payment gateway upon order confirmation.
2. The system shall display a loading indicator while the payment is being processed.
3. The system shall display a success message upon successful payment.
4. The system shall display an error message and allow the customer to retry or choose another payment method if the payment fails.
5. Upon successful payment, the order status shall be updated to "Paid".

## US-304 – View Payment History
Type: Story
Priority: Low
Story Points: 3
Labels: payment, customer, history

### Description
As a customer,
I want to view my payment history,
So that I can track my transactions.

### Acceptance Criteria
1. The system shall display a list of all successful payment transactions for the logged-in customer.
2. Each payment record shall include the date, amount, and payment method used.
3. Clicking on a payment record shall display more details about the transaction.
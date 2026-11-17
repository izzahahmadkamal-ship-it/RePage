# RePage: Student Secondhand Textbook Marketplace

A professional, standardized, and user-friendly peer-to-peer (P2P) web application prototype developed as an individual project for **IMS566 (Advanced Web Design Development and Content Management)** at Universiti Teknologi Mara (UiTM) Machang.

---

## Project Overview

**RePage** is designed to solve the common challenge faced by university students: expensive semester textbooks and the hassle of finding reliable student buyers and sellers. Mimicking commercial P2P platforms like Shopee, RePage provides a secure, structured, and responsive interface where UiTM Machang students can browse, list, inquire, and track secondhand textbook transactions seamlessly.

---

## Key Features Included

### 1. Authentication Portal (`index.html`)

- Simulated login and registration interface with hardcoded credential validation.
- Dynamic user greeting personalization across internal pages.

### 2. Unified Navigation & Responsive Layout

- Consistent text-only navigation bar and centered footer across all modules.
- Fully optimized for mobile and desktop viewports using Bootstrap 5 grid systems and flexbox utilities.

### 3. Analytics Dashboard (`dashboard.html`)

- Real-time summary cards tracking active listings, completed purchases, and estimated student savings.
- **Data Visualization:** Integrated **Chart.js** bar chart illustrating average secondhand textbook prices across UiTM Machang faculties.

### 4. Peer-to-Peer Marketplace (`marketplace.html`)

- Grid layout showcasing student textbook listings equipped with multi-criteria filtering (Course code, Available/Reserved status, and instant keyword search).
- Interactive modal for submitting secure textbook inquiries.

### 5. Shopee-Style Messaging Hub (`messages.html`)

- Two-column responsive chat interface simulating buyer-seller communication regarding campus meetups.
- Real-time thread selection, message appending, and auto-scrolling container logic.

### 6. Vendor Management & Order Tracking (`my-listings.html` & `orders.html`)

- **My Listings:** CRUD simulation allowing students to publish, edit, and delete their textbook offerings.
- **Orders:** Transaction tracking table to monitor meetup reservations, payment methods (COD / Online Transfer), and completion statuses.

---

## Frameworks & Technologies Used

- **Front-end Framework:** Bootstrap 5.3.2 (CDN)
- **Icons & Styling:** FontAwesome 6.4.0 & Custom CSS
- **Data Visualization:** Chart.js
- **State Management & Persistence:** HTML5 Web Storage (`localStorage`) for cross-page synchronization (Marketplace $\leftrightarrow$ Messages $\leftrightarrow$ Orders).
- **Development Environment:** Google Chrome

---

## Instructions to Test the Login & Prototype

### 1. Access the Application

Open `index.html` in **Google Chrome** or click the shared link.

### 2. Login Simulation

Enter any student credentials (e.g., email: `2024123456@student.uitm.edu.my`, password: `123456`) and click **Login**.

### 3. Explore Modules

- **Dashboard:** View student savings metrics and the faculty pricing chart.
- **Marketplace:** Browse textbooks and click **"Request Book"** on any item to open the secure inquiry modal. Notice how the button status automatically updates to **"Reserved"**.
- **Messages:** Check the left sidebar to see your inquiry automatically converted into an active chat thread with the seller. Type and send a reply message.
- **My Orders:** Track your reserved textbook, view meetup locations, and test marking orders as completed or cancelled.
- **My Listings:** Test adding a new book listing or editing existing entries.

### 4. Secure Logout

Click **Logout** in the navigation bar. This safely clears dynamic transaction and chat states (`localStorage`) while preserving the base hardcoded system items.

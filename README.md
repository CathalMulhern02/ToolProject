
# **Project Overview** **Van Tool Organizer - User Guide**

## **Van Tool Organizer**
The Van Tool Organizer is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It serves as a tool management system for organizing tools stored in a van, allowing users to add, view, edit, and delete tools.

---

## **The Idea**
The idea behind this project stems from the need to keep track of tools in a mobile workspace, such as a van used by a tradesperson or technician. It solves the problem of tool mismanagement by providing a digital inventory system.

Key features:
1. Add new tools to the van inventory.
2. View all tools, with search functionality to locate specific tools.
3. Edit existing tool details, such as name, state, and price.
4. Delete tools that are no longer needed.

---

## **How I Made It**

### **Tools and Technologies**
- **MongoDB**: Used for database management, hosted on MongoDB Atlas.
- **Express.js**: Created RESTful API endpoints for handling CRUD operations.
- **React.js**: Built the client-side UI with reusable components.
- **Node.js**: Managed the back-end server and API integration.
- **Axios**: Used for client-server communication (API calls).
- **Bootstrap**: Styled components for a responsive and clean UI.

### **Steps Taken**
1. **Planning**:
   - Sketched out the core functionalities:
     - Adding tools.
     - Viewing tools with search functionality.
     - Editing and deleting tools.
   - Designed the database schema to represent a tool with fields for name, state, price, and image.

2. **Back-End Development**:
   
     - `GET /api/tools` - Retrieve all tools.
     - `POST /api/tools` - Add a new tool.
     - `PUT /api/tool/:id` - Update a tool by ID.
     - `DELETE /api/tool/:id` - Delete a tool by ID.

3. **Front-End Development**:
   - Initialized the client-side project with **Create React App**.
   - Built React components:
     - `Home` for the welcome page with navigation links.
     - `CreateTool` for adding new tools.
     - `ReadTool` for viewing and searching tools.
     - `EditTool` for updating tool details.
     - `ToolItem` and `Tools` for rendering individual tools and their layout.
   - Styled the UI with **Bootstrap** for responsiveness and a modern look.

4. **Testing and Debugging**:

   - Tested the front-end functionality, including form validation and search.

5. **Deployment**:
   - Hosted the database on **MongoDB Atlas**.
   - Verified all functionality locally using `npm start` and `nodemon`.

---

## **Code and Concepts Leveraged from Class**
This project heavily builds on concepts and code demonstrated in class:
1. **MERN Stack Integration**:
   - Applied lessons on setting up a MongoDB database and interacting with it using Mongoose.
2. **CRUD Operations**:
   - Used techniques learned in class to build RESTful API routes.
3. **React Components and State Management**:
   - Built reusable components with props and state.
 
4. **Bootstrap**:
   - Styled components using Bootstrap's grid system and utilities.
5. **Axios for API Calls**:
   - Implemented GET, POST, PUT, and DELETE requests for seamless client-server interaction.


## **Development Process**
1. **Initial Setup**:
   - Created the back-end server and connected it to MongoDB Atlas.
   - Tested API endpoints using Postman.
2. **Front-End Design**:
   - Created a navigation bar and basic page layouts for each feature.
   - Used React components to modularize the codebase.
3. **Styling**:
   - Used Bootstrap for forms, buttons, and a responsive grid system.
   - Added gradients and spacing for a modern, clean UI.
4. **Testing**:
   - Verified CRUD functionality through manual testing.
   - Ensured edge cases like invalid input were handled gracefully.







# **Van Tool Organizer - User Guide**





## **Overview**
The Van Tool Organizer is an application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage tools stored in a van. Users can add new tools, view a list of existing tools, search for specific tools, edit tool details, and delete tools.

---

## **How to Use the App**

### **1. Home Page**
- **What You’ll See**:
  - A welcome message: *"Welcome to Van Tool Organizer"*
  - An image of a van with two buttons:
    - **Add Tool (To Van)**
    - **View Tools (In Van)**

- **What to Do**:
  - To add a new tool, click **Add Tool (To Van)**.
  - To view or manage existing tools, click **View Tools (In Van)**.

---

### **2. Add Tool (To Van)**
- **How to Get Here**:
  - From the home page, click the **Add Tool (To Van)** button.
  - Alternatively, navigate to `/createtool`.

- **What You’ll See**:
  - A form with the following fields:
    1. **Tool Name**: Enter the name of the tool.
    2. **Tool State**: Select the state of the tool from the dropdown (`In Use`, `Broken`, `In Van`).
    3. **Tool Price**: Enter the price of the tool (numbers only).
    4. **Tool Image URL**: Enter a URL for the tool’s image.

- **What to Do**:
  1. Fill out all the fields in the form.
  2. Click the **Add Tool** button.
  3. The tool will be added, and you’ll be redirected to the **View Tools** page to see the updated list.

---

### **3. View Tools (In Van)**
- **How to Get Here**:
  - From the home page, click the **View Tools (In Van)** button.
  - Alternatively, navigate to `/readtool`.

- **What You’ll See**:
  - A search bar at the top to filter tools by name, state, or price.
  - A grid layout displaying all tools, with each tool showing:
    1. The tool’s name.
    2. An image of the tool.
    3. The tool’s price.
    4. The tool’s state (`In Use`, `Broken`, or `In Van`).
    5. Two buttons: **Update** and **Delete**.

- **What to Do**:
  - **Search**:
    - Use the search bar to filter tools by typing a keyword (e.g., part of the name, state, or price).
  - **Delete a Tool**:
    1. Click the **Delete** button on the tool you want to remove.
    2. Confirm the action in the pop-up dialog (if implemented).
    3. The tool will be deleted, and the list will refresh automatically.
  - **Edit a Tool**:
    1. Click the **Update** button on the tool you want to edit.
    2. You’ll be redirected to the **Edit Tool** page.

---

### **4. Edit Tool**
- **How to Get Here**:
  - From the **View Tools** page, click the **Update** button on any tool.

- **What You’ll See**:
  - A form pre-filled with the tool’s current details:
    1. **Tool Name**
    2. **Tool State**
    3. **Tool Price**
    4. **Tool Image URL**

- **What to Do**:
  1. Modify the fields as needed.
  2. Click the **Update Tool** button to save changes.
  3. You’ll be redirected back to the **View Tools** page with the updated tool displayed.

---






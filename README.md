# React Router DOM Lab 📬

## Intro

This project is a simple React application that simulates a post office system called "Reactville."

Users can:
- View a list of mailboxes
- Click on a mailbox to see its details
- Create new mailboxes through a form

This lab focuses on learning how to build multi-page experiences in React using `react-router-dom`, without reloading the page.

### Concepts covered
- React Router (client-side routing)
- Navigation with `Link`
- Dynamic routes using URL parameters
- State management with `useState`
- Component-based architecture

---

## Step 1 🐣 Project Setup

- Created the React app with Vite
- Named the project `react-router-dom-lab`
- Chose `React` + `JavaScript`
- Installed project dependencies with `npm i`
- Installed `react-router-dom`

### Why it matters
- This creates the base app we will build on
- `react-router-dom` gives us navigation between pages without full reloads

### Engineering principle used
- Project setup → preparing the app environment
- Dependency management → installing libraries the app needs

---

## Step 2 🐢 Component Structure

- Created folders: `components/` and `pages/`
- Added core files for navigation and pages
- Added placeholder content in each file

### Why it matters
- Organizes the app into clear, reusable pieces
- Makes the code easier to scale and maintain

### Engineering principle used
- Component-based architecture → breaking UI into small reusable parts

### Small styling setup
- Added base styles in `index.css`
- Styled navigation, forms, and mailbox cards

### Why it matters
- Gives the app readable structure early
- Makes testing easier as pages start to render

---

## Step 3 🐬 Routing Setup

- Added React Router to `App.jsx`
- Wrapped app with `BrowserRouter`
- Created routes for:
  - Home (`/`)
  - Mailbox List (`/mailboxes`)
  - New Mailbox (`/new-mailbox`)
  - Mailbox Details (`/mailboxes/:mailboxId`)

### Why it matters
- Enables navigation between pages without reloading
- Allows dynamic URLs for individual mailbox pages

### Engineering principle used
- Client-side routing → controlling navigation inside React

---

## Step 4 🦊 Navigation with Links

- Created `NavBar` component
- Added navigation links using `Link`
- Connected NavBar to `App.jsx`

### Why it matters
- Allows users to move between pages
- Creates a real app navigation experience

### Engineering principle used
- Client-side navigation → using `Link` instead of page reloads

---

### Why it matters
- React can only import packages that exist in the current project
- Restarting the server helps Vite recognize new installs

### Engineering principle used
- Dependency management → making sure required libraries are installed correctly

---

## Step 5 🐼 Mailbox List Page Structure

- Replaced the placeholder Mailbox List page
- Added a page heading
- Rendered temporary mailbox boxes using `.map()`
- Applied the `.mail-box` CSS class to each mailbox

### Why it matters
- Builds the visual structure for the mailbox list
- Prepares the page for real mailbox data in the next step

### Engineering principle used
- Rendering lists → showing repeated UI from array data
- Separation of concerns → building UI structure before real state

---
## Step 6 🦁 State + Data Management

- Added `useState` to store mailboxes
- Created `addBox` function to add new mailboxes
- Generated unique `_id` for each mailbox
- Passed data and functions to components via props

### Why it matters
- Allows the app to store and update real data
- Makes the app dynamic instead of static

### Engineering principle used
- State management → storing and updating data in React
- Props → passing data between components

---
## Step 7 🐸 Mailbox Details (Dynamic Routing)

- Used `useParams` to read mailbox ID from URL
- Found the correct mailbox using `.find()`
- Displayed mailbox details (owner + size)
- Added fallback for "Mailbox Not Found"

### Why it matters
- Enables dynamic pages based on URL
- Allows each mailbox to have its own detail view

### Engineering principle used
- Dynamic routing → using URL parameters
- Data lookup → finding specific data from state

---

## Step 8 🦄 New Mailbox Form

- Created controlled form with `useState`
- Handled input changes with `handleChange`
- Submitted form using `handleSubmit`
- Connected form to `addBox` function
- Reset form after submission

### Why it matters
- Allows users to create new data
- Makes the app interactive and dynamic

### Engineering principle used
- Controlled components → React controls form inputs
- Event handling → responding to user actions

---

## Step 9 🐝 Clickable Mailbox List

- Updated `MailboxList.jsx` to use real `mailboxes` data from props
- Wrapped each mailbox in a `Link`
- Connected each mailbox box to its own details route

### Why it matters
- Lets users open a mailbox details page
- Replaces fake placeholder mailbox data with real app state

### Engineering principle used
- Dynamic routing → each mailbox gets its own URL
- Props → passing mailbox data from `App` into `MailboxList`

---

## Step 10 🐢 Redirect after form submit

- Added `useNavigate` to NewMailbox page
- Redirected user to `/mailboxes` after form submission

### Why it matters
- Matches expected user flow
- Improves user experience

### Engineering principle used
- Programmatic navigation → navigating using code

---


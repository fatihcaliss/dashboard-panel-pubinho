# Dashboard Panel

## Overview

This project is a basic dashboard panel with tables and charts using React, Material UI, Apex Charts, and Redux Toolkit with RTK Query.

## Project Structure

```plaintext
dashboard-panel/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── charts
│   |   |   ├── Chart1.tsx
│   │   |   └── Chart2.tsx
│   │   ├── tables
│   |   |   ├── Table1.tsx
│   │   |   └── Table2.tsx
│   │   ├── Layout.tsx
│   │   ├── NavBar.tsx
│   │   └── Sidebar.tsx
│   ├── pages/
│   │   ├── Charts.tsx
│   │   └── Tables.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── db.json
├── package.json
├── tsconfig.json
└── README.md
```

## Project Structure Explained

- public/: Contains the static assets like index.html.
- src/: Contains the source code for the application.
- components/: Contains the reusable components like Layout, NavBar, and Sidebar.
- pages/: Contains the main page components like Charts and Tables.
- App.tsx: The main application component that sets up the router.
- index.tsx: The entry point of the React application.
- db.json: The mock data file used by JSON Server.
- package.json: Contains the project metadata and dependencies.
- tsconfig.json: TypeScript configuration file.
- README.md: The project documentation file.

## Setup

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fatihcaliss/dashboard-panel-pubinho.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dashboard-panel
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Installation

1. Clone the repository:
   ```bash
   npm run json-server
   ```
2. Navigate to the project directory:
   ```bash
   npm start
   ```
3. Run tests.
   ```bash
   npm test
   ```

### Tables

- Displays various datasets with functionalities for sorting, filtering, and pagination.
- Data is fetched from the JSON server.
- Implemented using Material UI components.

Note: The Table1.tsx and Table2.tsx components use different methods for filtering. The Table1.tsx component uses json-server for datasets and custom queries, while the Table2.tsx component utilizes MaterialUI's built-in filtering feature. I created them differently to showcase the MaterialUI built-in feature in Table2.tsx and the MaterialUI x-data-grid filterMode="server" feature in Table1.tsx.

### Charts

- Displays dynamic and interactive charts representing key data insights.
- Utilizes ApexCharts for rendering charts.
- Data is fetched from the JSON server.

### Bonus Features

- Implemented responsive design for better accessibility on various screen sizes.
- Added filterDebounceMs to Table1.tsx component to optimize requests.
- Created collapsable Sidebar.
- Used a fixed position for both the NavBar and Sidebar for a consistent layout.

<br/>

Feel free to reach out if you have any questions or need further assistance with the project setup!

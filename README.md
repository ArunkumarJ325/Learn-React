🍉 Fruit List App
A simple React application to manage a dynamic fruit list with add, remove, sort, search, and undo functionality.

Table of Contents
Features

Demo

Getting Started

Usage

State Management

Components & Functions

Undo Functionality

Future Improvements

Features
Add fruits – Avoids duplicates (case-insensitive).

Remove fruits – Easily delete items.

Sort list – Toggle between ascending & descending alphabetical order.

Search – Filter fruits by a search term.

Clear search – Reset search input & results.

Undo – Revert the fruit list to the previous state.

Demo
pgsql
Copy
Edit
Enter a new Name: 🍓 strawberry
Click "Add" → Adds to list
Click "Sort" → Toggles sort direction
Enter in search field → Filters list
Click "Search" → Applies filter
Click "Clear" → Resets filter
Click "Remove" → Deletes item
Click "Undo" → Restores previous list
Getting Started
Clone the repo and install dependencies:

bash
Copy
Edit
git clone <your-repo-url>
cd fruit-list-app
npm install
Run the app locally:

bash
Copy
Edit
npm start
Usage
Add: Type a fruit in the input box and click Add.

Sort: Click Sort to switch between “A to Z” and “Z to A”.

Search:

Enter text in the search input.

Click Search to apply filter.

Click Clear to reset search.

Remove: Click Remove under any fruit.

Undo: Click Undo to revert last action.

State Management
All state is managed in App.js using React Hooks:

State Variable	Type	Description
fruits	string[]	Current list of fruits
newFruit	string	Controlled input for adding new fruit
sortfn	boolean	true = Z→A, false = A→Z sorting order
searchterm	string	Input box value for search term
searchfruit	string	Actual applied search filter
fruithistory	string[][]	Stack of previous fruits states for undo
# Movie - TV Show Project

## About

This project is a web application built with React.js that allows users to browse, search, and interact with a collection of movies and TV shows. The application includes features such as loading spinners, search functionality, pagination, ratings display, and more. It leverages various JavaScript functionalities, React hooks, and libraries to provide a dynamic and user-friendly experience.<br/>
I initially started working with the Rapid API, but encountered limitations due to the restricted number of requests. Consequently, I opted to create a fake API using the JSON Server library, along with a `db.json` file.

## Features

- **Movies and TV Shows Pages**: Separate pages for browsing movies and TV shows.
- **Individual Detail Pages**: Dedicated pages for detailed information on each movie and TV show.
- **Loading Component**: Displays a loading spinner using `react-spinner` while data is being fetched.
- **Search Functionality**: Allows users to search through movies and TV shows.
- **Pagination**: Enables navigation through movies and TV shows by pages.
- **Ratings Component**: Dynamically displays the rating of each movie and TV show in a circular progress bar.
- **Card and Card List Components**: Display movies and TV shows in a card format.
- **Card Slider**: Displays a slider of movie and TV show cards.
- **Actions Component**: Provides options to copy URL, share link, watch the YouTube trailer, and view on Netflix.

## Technologies and Libraries

- **React.js**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router DOM**: Declarative routing for React applications.
- **JSON Server**: Fake REST API for testing and prototyping.
- **Slick Carousel**: Carousel/slider component.
- **React Spinners**: Collection of loading spinners.
- **React Toastify**: Library for notifications.
- **React Icons**: Collection of popular icons.
- **React CountUp**: React component wrapper around CountUp.js.

## JavaScript Functionalities

- **Array Methods**: `map`, `slice`.
- **Math Methods**: `Math.ceil`, `Math.floor`, `Math.PI`, `Math.min`, `Math.max`.
- **String Methods**: `toString`.
- **Timeouts**: `setTimeout`, `clearTimeout`.
- **Window Methods**: `window.open`, `window.location`.
- **Navigator Methods**: `navigator.clipboard.writeText`, `navigator.share`.

## React Hooks

- **useEffect**: Side-effect management in functional components.
- **useState**: State management in functional components.


## Installation
   1. Clone the repository: `git clone --single-branch --branch master "https://github.com/Suksii/movie-show.git"`
   2. Find the location: `cd movie-show`
   3. Install dependencies: `npm install`
   4. Run json-server: `json-server --watch db.json --port 3001`
   5. Run the application: `npm run dev`
   

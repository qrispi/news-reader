# News Reader

## Abstract:
[//]: <>
News Reader is a site that helps users find popular news articles from sources and websites all across the net! Users are presented with a landing page of 20 thumbnails of the most popular recent articles from the United States. If a user clicks a thumbnail, they are able to view the full article content, author, date published and a link to view the article from the main website it was posted on. Users are also able to search for popular articles by keyword(s) with error handling for no relevant results and a way to return to the main landing page after searching. 

## Installation Instructions:
[//]: <>
1. Fork and clone [this repo](https://github.com/qrispi/news-reader).
1. Copy the SSH key from the green "Code" button.
1. In your terminal, use the command `git clone git@github.com:[https://github.com/qrispi/news-reader]`.
1. Run `npm install`.
1. Do NOT run `npm audit fix --force` when prompted.
1. Open the repo in your text editor to make any changes or inspect code.
1. Run `npm start` in your terminal.
1. Copy and paste the generated `localServer` address that your terminal provides into your browser address bar.

## Preview of App:
[//]: <>

### Landing Page
![ezgif com-optimize (3)](https://github.com/qrispi/news-reader/assets/24902544/82d2609e-d90c-4248-9b8b-98db8eec6650)

### Search Functionality
![ezgif com-optimize (1)](https://github.com/qrispi/news-reader/assets/24902544/cdc517fe-ad09-455e-82b8-0a074ae25619)

## Context:
[//]: <> 
- This project was assigned as a solo take-home challenge. The goal was to create the MVP and any reasonable extras within a time frame of about 8 hours. Not including an hour of planning time, this project took about 8 hours to complete.

## Contributors:
[//]: <>
- [Christopher Baum](https://github.com/qrispi)

## Challenge Goals:
[//]: <>
1. A strong understanding of React JS and Front-End best practices
1. Your ability to prioritize for MVP
1. An understanding of basic usability practices and standards
1. A clear hierarchy of information
1. Clean, well thought out code

## Technologies Used:
[//]: <>
- Fetch API
- Webpack
- React Framework
- Router v5
- LightHouse
- Wave Evaluation
- GitHub Issues & Project Board
- JavaScript
- CSS
- HTML

## Wins + Challenges:
[//]: <>
- Wins:
  - Implementing some error handling for broken image URLs was a fun challenge that turned into a win. Some of the links for images provided are non-existent or broken. Fixing the broken image URLs was fairly easy with react's built in onError handler but wasn't as apparent is that an img src of null will not cause onError to fire and must be dealt with prior to rendering.
  - Setting up mock data in the form of a new promise object was a novel and useful way of developing the application without exceeding the API request daily limit.
- Challenges:
  - A lot of the articles did not have valid IDs nor did the API have a way to request specific individual articles making it very difficult to properly reload the page from within the article view. This was solved by passing the main article fetching function from App to Article as a prop and letting useEffect re-fetch all the articles on component mount.

## Enhancement Wishlist:
[//]: <>
- Add icons, logos and more color to the site for a more cohesive theme
- Expand search functionality to let user choose how to filter results and more expanded keyword options (such as search "this" but not "that")
- Expand on responsiveness to be cleaner and smoother

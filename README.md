# News portal

## How to run? (local)

Clone using SSH 

`git clone git@github.com:Ibro02/news-portal-discovery.git` or `git clone` (link of repository)

Change directory to the cloned 'news-portal' folder

`cd ./news-portal-discovery`

Install dependencies:

`npm install`

`yarn`

Duplicate the '.env.example' file and rename it to 'env.local'

Fill the 'VITE_API_KEY' variable inside the newly created file with your API KEY (get one on https://newsapi.org/)

`VITE_API_KEY="YOUR-API-KEY"`

Finally run the local server

`npm run dev`

`yarn dev`

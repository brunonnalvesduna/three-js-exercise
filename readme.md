# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).

To run this locally, followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:5173
npm run dev

# Open the local server at localhost:5173
[Open server](http://localhost:5173/)
```
To run this in docker, followed commands:

``` bash
# Create image
docker build -t <image-name> .

# Run the image on docker
docker run -dp 5173:5173 <image-name>

# Open the server at localhost:5173
[Open server](http://localhost:5173/)
```

# Tier 1 Week 5 - Part 3

This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

## Topics Covered

- objects
- HTML & CSS

## Part 3 - Building a Music Collection

Update the `3-music-collection.js` file to do the following:

> While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

### Required Features

- Create a variable `collection` that starts as an empty array.

- xAdd a function named `addToCollection`. This function should:
  - xTake in the album's `title`, `artist`, `yearPublished` as input parameters
  - xCreate a new object having the above properties
  - xAdd the new object to the end of the `collection` array
  - xReturn the newly created object

- xTest the `addToCollection` function:
  - xAdd 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - xConsole.log each album as added using the returned value.
  - xAfter all are added, console.log the `collection` array.

- xAdd a function named `showCollection`. This function should:
  - xTake in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - xConsole.log the number of items in the array.
  - xLoop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

- xTest the `showCollection` function.

- xAdd a function named `findByArtist`. This function should:
  - xTake in `artist` (a string) parameter
  - xCreate an array to hold any results, empty to start
  - xLoop through the `collection` and add any objects with a matching artist to the array.
  - xReturn the array with the matching results. If no results are found, return an empty array.

- xTest the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file!


### Stretch goals

- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!



## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

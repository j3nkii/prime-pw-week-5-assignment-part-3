console.log('***** Music Collection *****');
//Create collection, and function to add to it
let collection = [];
function addToCollection(albumTitle, albumArtist, albumYear, albumTracks) {
    let album = {
        title: albumTitle,
        artist: albumArtist,
        //using to srting to make sure input is always a string and can be accsessed as such
        year: albumYear.toString(),
        tracks: albumTracks,
    }
    collection.push(album);
    return album;
}



//test func
console.log('-----Adding-----');
console.log(addToCollection('First Born', 'Eyedea & Abilities', '2001',[{track: 'One', duration: '2:35'}, {track: 'Music Music', duration: '4:40'}, {track: 'Birth of a Fish', duration: '2:09'},]));
console.log(addToCollection('Traveller', 'Chris Stapleton', '2015',[{track: 'Traveler', duration: '3:24'}, {track: 'Fire Away', duration: '4:04'}, {track: 'Tennessee Whiskey', duration: '4:53}'},]));
console.log(addToCollection('Most Known Uknown', 'Three 6 Mafia', '2005',[]));
console.log(addToCollection('Black Sands', 'Bonobo', '2010',[]));
console.log(addToCollection('Imaginary Appalacia', 'Colter Wall', '2015',[]));
console.log(addToCollection('Redneck Shit', 'Wheeler Walker Jr.', '2016',[]));
            //test
            console.log('Your current collection is:', collection);



//showCollection function
console.log('--------show collection---------');
function showCollection(array) {
    console.log(`You have ${collection.length} albums in Collection`);
    for(let albums of array) {
        let results = '';
        albums = Object.values(albums)
        results += `${albums[0]} by ${albums[1]}, published in ${albums[2]}: `;
        for(let i in Object.values(albums[3])){
            //parseInt since the i in the for in loop returns as a string 
            //also using template literals to use a new line for each track
            results += `
${parseInt(i) + 1}: ${Object.values(albums[3][i])[0]}: ${Object.values(albums[3][i])[1]}`
        }
          console.log(results);
    }
}
            //test showCollection
            showCollection(collection);



console.log('-----Find by artist-----');
//create a find artist function
function findByArtist(artist) {
    let matchArtist = [];
    for(let album in collection) {
        //adding toLowercase to decrease search sensitivity
       if(collection[album].artist.toLowerCase() === artist.toLowerCase()){
           matchArtist.push(collection[album]);
       }
    }
    return matchArtist;
}
            //TESTCASES
            console.log(`Search fo Bonobo:`, findByArtist('Bonobo'));
            console.log(`Search for Skrillex.... :`, findByArtist('Skrillex'));
            //testing to be sure it will add more than one album
            addToCollection('Days to Come', 'Bonobo', '2006',[]);
            console.log(`Search for Bonobo:`, findByArtist('Bonobo'));



console.log('------------STRETCH---------------');
function search(find) {
    let searchResults = [];
    for(let album of collection) {
        for(let item of Object.values(album)) {
            if(typeof item !== 'object' && item.toLowerCase().includes(find.toLowerCase())){
                searchResults.push(album);
                //used so there wont be duplicated albums in search
                break;
            } else if(typeof item === 'object') {
                for(let track of item){
                    //turning from obj to array to string to lowercase to decrease case sensitivy 
                    if(Object.values(track).join().toLowerCase().includes(find.toLowerCase())){
                        searchResults.push(album);
                        break;
                    }
                }
            }
            
        }
    }
    return searchResults;
}
            //test
            console.log(search('traveller'));
            console.log(search('Fire Away'))
            console.log(search('One'));
            console.log(search('skrillex'));
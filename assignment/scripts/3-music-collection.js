console.log('***** Music Collection *****');
//Create collection, and function to add to it
let collection = [];
function addToCollection(title, artist, yearPublished, tracks) {
    let album = {
        title: title,
        artist: artist,
        //using to srting to make sure input is always a string and can be accsessed as such
        year: yearPublished.toString(),
        tracks: tracks,
    }
    collection.push(album);
    return album;
}



//test func
console.log('-----Adding-----');
console.log(addToCollection('First Born', 'Eyedea & Abilities', '2001',[{track: 'One', duration: '2:35'}, {track: 'Music Music', duration: '4:40'}, {track: 'Birth of a Fish', duration: '2:09'},]));
console.log(addToCollection('Traveller', 'Chris Stapleton', '2015',[{track: 'Traveler', duration: '3:24'}, {track: 'Fire Away', duration: '4:04'}, {track: 'Tennessee Whiskey', duration: '4:53}'},]));
//console.log(addToCollection('most known uknown', 'three 6 mafia', '2005',[]));
//console.log(addToCollection('black sands', 'bonobo', '2010',[]));
//console.log(addToCollection('imaginary appalacia', 'colter wall', '2015',[]));
//console.log(addToCollection('redneck shit', 'wheeler walker jr.', '2016',[]));
            //test
            console.log('Your current collection is:', collection);



//showCollection function
console.log('--------show collection---------');
function showCollection(array) {
    console.log(`You have ${collection.length} albums in Collection`);
    for(album of array) {
        let values = Object.values(album);
        console.log(`${values[0]}, by ${values[1]}, published in ${values[2]}`);
    }
}
            //test showCollection
            showCollection(collection);



console.log('-----Find by artist-----');
//create a find artist function
function findByArtist(artist) {
    let matchArtist = [];
    for(album in collection) {
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
            //addToCollection('Days to Come', 'Bonobo', '2006',[]);
            console.log(`Search for Bonobo:`, findByArtist('Bonobo'));



console.log('------------STRETCH---------------');
function search(find) {
    let searchResults = [];
    for(album of collection) {
        for(item of Object.values(album)) {
            if(typeof item !== 'object' && item.includes(find)){
                searchResults.push(album);
                break;
            } else if(typeof item === 'object') {
                for(track of item){
                    if(Object.values(track).includes(find)){
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
            console.log(search('Fire Away'))
            console.log(search('One'));
            //console.log(search('skrillex'));
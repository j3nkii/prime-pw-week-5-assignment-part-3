console.log('***** Music Collection *****');
//Create collection, and function to add to it
let collection = [];
function addToCollection(albumTitle, albumArtist, albumYear, albumTracks) {
    let album = {
        title: albumTitle,
        artist: albumArtist,
        //using tosrting to make sure input is always a string and can be accsessed as such
        year: albumYear.toString(),
        tracks: albumTracks,
    }
    collection.push(album);
    return album;
}



//test func && adding a bunch of albums containing SOME tracks
console.log('-----Adding-----');
console.log(addToCollection('First Born', 'Eyedea & Abilities', '2001',[{track: 'One', duration: '2:35'}, {track: 'Music Music', duration: '4:40'}, {track: 'Birth of a Fish', duration: '2:09'},]));
console.log(addToCollection('Traveller', 'Chris Stapleton', '2015',[{track: 'Traveler', duration: '3:24'}, {track: 'Fire Away', duration: '4:04'}, {track: 'Tennessee Whiskey', duration: '4:53'},]));
console.log(addToCollection('Most Known Uknown', 'Three 6 Mafia', '2005',[{track: 'Poppin My Collar', duration: '2:56'}, {track: 'Half on a sack', duration: '3:26'}, ]));
console.log(addToCollection('Black Sands', 'Bonobo', '2010',[{track: 'Prelude', duration: '1:18'}, {track: 'Kiara', duration: '3:50'}, {track: 'Kong', duration: '3:58'}]));
console.log(addToCollection('Imaginary Appalacia', 'Colter Wall', '2015',[{track: 'Sleeping on the Blacktop', duration: '3:13'}, {track: 'Caroline', duration: '2:54'}, {track: 'The Devil Wears a Suit and Tie', duration: '3:56'}]));
console.log(addToCollection('Redneck Shit', 'Wheeler Walker Jr.', '2016',[{track: 'Redneck Shit', duration: '2:24'}, {track: 'Fuck You Bitch', duration: '3:22'}, {track: 'Eatin\' Pussy/Kicckin\' Ass', duration: '3:11'}]));
            //test
            console.log('Your current collection is:', collection);



//showCollection function
console.log('--------show collection---------');
function showCollection(array) {
    console.log(`You have ${collection.length} albums in Collection`);
    for(let albums of array) {      //iteratin through collection to access different album objects and adding values to the result string
        let results = '';       //using for return string
        results += `${albums.title} by ${albums.artist}, published in ${albums.year}:`; 
        for(let i in albums.tracks){
            //parseInt since the i in the for in loop returns as a string 
            //also using template literals to use a new line for each track
            results += `
${parseInt(i) + 1}: ${Object.values(albums.tracks[i])[0]}: ${Object.values(albums.tracks[i])[1]}` //iterating through tracks using arrays since some albums have more tracks than others
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
            addToCollection('Days to Come', 'Bonobo', '2006',[{track: 'Intro', duration: '0:54'}, {track: 'Between the Lines', duration: '4:37'},]);
            console.log(`Search for Bonobo:`, findByArtist('Bonobo'));



console.log('------------STRETCH/SEARCH---------------');
function search(find) {
    let searchResults = [];
    for(let album of collection) {
        for(let item of Object.values(album)) {
            //making sure item is not object in order to lowercase, then using .includes to make searches less sensitive
            if(typeof item !== 'object' && item.toLowerCase().includes(find.toLowerCase())){
                searchResults.push(album);
                //used so there wont be duplicate albums in search
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
            console.log('testing case sensitivity: traVEller:');
                console.log(search('traVEller'));
            console.log('testing search for tracks: FIRE:');
                console.log(search('FIRE'))
            console.log('testing multiple albums: bonobo:');
                console.log(search('bonobo'));
            console.log('testing non existing albums: skrillex:');
                console.log(search('skrillex'));
'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    listings = require('./listings.json'),
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://mkodumuru97:shirikin1121@ds123534.mlab.com:23534/assignment3');

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
 var entry;
 for(entry = 0; entry<listings.entries.length;entry++){
   //console.log(listings.entries[entry].name);
 var newListing = new Listing({
  code: listings.entries[entry].code,
  name: listings.entries[entry].name,
  /*coordinates:{
    latitude: listings.entries[entry].latitude,
    longitude: listings.entries[entry].longitude
  },*/
  coordinates: listings.entries[entry].coordinates,
  address: listings.entries[entry].address
});

newListing.save(function(err) {if(err) throw err; console.log('listing is saved')});
}

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */

/* Fill out these functions using Mongoose queries*/
/*
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    listings = require('./listings.json'),
    config = require('./config');
    mongoose.connect('mongodb://mkodumuru97:shirikin1121@ds123534.mlab.com:23534/assignment3');
    */
var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.findOne({'name' : 'Library West'}, 'code name coordinates address', function(err,listing){
     if(err) return handleError(err); console.log('%s', listing);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
*/
   Listing.findOne({'code': 'CABL'}, 'code name coordinates address', function(err,listing){
     if(err) return handleError(err);
     console.log('listing is found and removed %s', listing);
     listing.remove();
   })

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   var correctAddress = 'Phelps Lab, Gainesville, FL 32603, United States'
   Listing.findOne({'name': 'Phelps Laboratory'}, 'code name coordinates address', function(err,listing){
     if(err) return handleError(err);
     listing.address = correctAddress;
     listing.save();
     console.log('Updated the document %s', listing);

   })

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find(function(err, listing){
     console.log(listing);
   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

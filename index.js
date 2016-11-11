/*
* Imports
*/
const snoowrap = require('snoowrap');
const _ = require('lodash');
const mongo = require('mongodb');
const api = require('./client');


/*
* Constants
*/
const _VER_ = '0.1.0';
const subreddit = '/r/noveltranslations';
const regex = /\[\[[\w\s`~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\{\}\\\|\;\:\'\"\,\<\.\>\/\?]+\]\]/g;
const config = {
  userAgent : '/u/lordfirst LordFirstApp@' + _VER_ + ' SEVENTH MOUNTAIN AND SEA created by /u/rutledka',
  clientId : api.id,
  clientSecret : api.secretKey,
  username: api.username,
  password: api.password
}

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

// Our snoocore instantiation
const reddit = new snoowrap({
  userAgent: config.userAgent, // unique string identifying the app
  clientId: config.clientId, // OAuth client key (provided at reddit app)
  clientSecret: config.clientSecret, // OAuth secret (provided at reddit app)
  username: config.username, // Reddit username used to make the reddit app
  password: config.password // Reddit password for the username
  // The OAuth scopes that we need to make the calls that we
  // want. The reddit documentation will specify which scope
  // is needed for evey call
});

// reddit.getSubreddit(subreddit).getNew().then((result) => {
//   console.log(result);
// }, (error) => {
//   console.log(error);
// });

// reddit.getSubmission('59knh9').fetch().then((submission) => {
//   console.log(submission);
// })

// Our initial calls will go here

// getComments('/r/testingground4bots').then((comments) => {
//   console.log(comments);
//   comments.map((comment) => {
//     reddit.getComment(comment.id).reply('This is a scripted reply to this post.');
//   });
// });

/*
* Classes
*/


/*
* Functions
*/

function getComments(permalink) {
  var matches;
  const getNewComments = reddit.getSubreddit(permalink).getNewComments({ limit : 5 });

  matches = getNewComments.then((comments) => {
    let filteredComments = comments.filter((comment) => {
      return comment.body.search(regex) != -1; // -1 : regex not found
    });
    return filteredComments;
  }).catch((error) => {
    console.error(error);
    return error;
  });
  return matches;
  // return a promise that resolve to an array of objects?? I don't know if this is the right to to handle this
}

function lookupPhrase() {

}

function generateMessage(status, novel = {}) {
  switch(status) {
    case 0 : // phrase not found

      break;

    case 1 : // phrase found
      break;

    default :

  }
}

function submitReply() {

}

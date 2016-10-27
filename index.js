/*
* Imports
*/
const snoowrap = require('snoowrap');
const _ = require('lodash');
const api = require('./client');


/*
* Constants
*/
const _VER_ = '0.1.0';
const subreddit = '/r/noveltranslations';
const config = {
  userAgent : '/u/lordfirst LordFirstApp@' + _VER_ + ' SEVENTH MOUNTAIN AND SEA',
  clientId : api.id,
  clientSecret : api.secretKey,
  username: api.username,
  password: api.password
}

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

reddit.getSubmission('59knh9').fetch().then((submission) => {
  console.log(submission.comments);
})


/*
* Classes
*/

/*
* Functions
*/

function getComments(permalink) {
  console.log(permalink);
}

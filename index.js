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

// Our snoocore instantiation
const reddit = new snoowrap({
  userAgent: '/u/lordfirst LordFirstApp@' + _VER_ + 'SEVENTH MOUNTAIN AND SEA', // unique string identifying the app
  clientId: api.id, // OAuth client key (provided at reddit app)
  clientSecret: api.secretKey, // OAuth secret (provided at reddit app)
  username: api.username, // Reddit username used to make the reddit app
  password: api.password, // Reddit password for the username
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

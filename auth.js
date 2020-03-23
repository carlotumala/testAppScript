const fs = require('fs');
const {google} = require('googleapis');

var exports = module.exports = {};
const CREDENTIALS_PATH = "./.clasprc.json";
const CLIENT_CREDS_PATH="./creds.json";

// Load and return client secrets from a local file
// @param scopes [Array] A list of auth scopes (optional)
// @return {google.auth.OAuth2} An authorized OAuth2 client
exports.authenticate = () => {
  return new Promise((resolve, reject) => {
    // Load client secrets from a local file.
    fs.readFile(CLIENT_CREDS_PATH, 'utf8', (err, credentials) => {
      if (err) reject(err);
      // Authorize a client with credentials, then call the Google Drive API.
      authorize(JSON.parse(credentials), resolve)
    });
  })
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  google.options({auth: oAuth2Client});

  oAuth2Client.on('tokens', (tokens) => {
      oAuth2Client.setCredentials(tokens);
  });
  
  fs.readFile(CREDENTIALS_PATH, (err, token) => {
    oAuth2Client.setCredentials(JSON.parse(token).token);
    callback(oAuth2Client);
  });
  
}
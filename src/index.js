function tipToComment (opts) {
  var request;
  if(opts.inBrowser) {
    request = require('browser-request');
  }
  else {
    request = require('request');
  }

  function comment(options, callback) {
    var commentBody;
    opts.commonWallet.signMessage(options.comment, function (err, signedComment) {
      if (err) {
        callback("error signing the comment", null);
      }
      else {
        commentBody = {
          address: opts.commonWallet.address,
          signature: signedComment,
          comment: options.comment,
          network: opts.commonWallet.network,
          sha1: options.sha1
        };

        request({
          url: "http://tiptocomment.herokuapp.com/comment", 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(commentBody)
        }, function(err, response, body){
           if (err) {
             callback(err, null);
           }
           else {
             callback(false, body);
           }
        });
      }
    });
  }

  function getComments (options, callback) {
    var headers = {
      address: opts.commonWallet.address,
      network: opts.commonWallet.network
    };
    var baseURL = "http://tiptocomment.herokuapp.com";
    opts.commonWallet.signMessage(options.query, function (err, signature) {
      if (err) {
        callback("error signing the query", null);
      }
      else {
        headers.signature = signature;
        request({
          url: baseURL + "/getComments/" + options.method + "/" + options.query,
          headers: headers
        }, function (error, response, body) {
          if (response.statusCode === 500) {
            callback("error retieving comments", null);
          }
          else {
            callback(false, body);
          }
        });
      }
    });
  }

  return {
    comment: comment,
    getComments: getComments
  }
}


module.exports = tipToComment;
var test = require('tape');
var testCommonWallet = require('test-common-wallet');

var commonBlockchain = require('blockcypher-unofficial')({
  network: "testnet"
});

var commonWallet = testCommonWallet({
  wif: "cPKJaNZcbvByRpJ6GLA1jLo8U4bs3rU8AvovLUbWnDqPd1XZTgCC",
  network: "testnet",
  commonBlockchain: commonBlockchain
});

var tipToCommentClient = require('../')({
  commonWallet: commonWallet
});

test('should be able to succesfully comment on a specific post', function(t) {
  var comment = "testing 123 dateTested: " + new Date().getTime();
  tipToCommentClient.comment({
    comment: comment,
    sha1: "e4a3d2d12585d49ded571850e9e709bbdbe319c5"
  }, function (err, response) {
    t.ok(!err, "no error on commenting");
    t.equal(response.body, comment, "comment we get back is the same as the one we sent.");
    t.end();
  });
});

test('should be able to succesfully get comments from a specific address', function(t) {
  var address = "mjf6CRReqGSyvbgryjE3fbGjptRRfAL7cg";
  tipToCommentClient.getComments({
    method: "address",
    query: "mjf6CRReqGSyvbgryjE3fbGjptRRfAL7cg"
  }, function (err, response) {
    t.ok(!err, "no error on getting comments");
    t.ok(response.length > 0, "able to retrieve comments for the address");
    t.equal(response[0].commenter, address, "comments we retrieved were for the correct account");
    t.end();
  });
});

test('should be able to succesfully get comments from a specific sha1', function(t) {
  var sha1 = "e4a3d2d12585d49ded571850e9e709bbdbe319c5";
  tipToCommentClient.getComments({
    method: "sha1",
    query: "e4a3d2d12585d49ded571850e9e709bbdbe319c5"
  }, function (err, response) {
    t.ok(!err, "no error on getting comments");
    t.ok(response.length > 0, "able to retrieve comments for the sha1");
    t.equal(response[0].sha1, sha1, "comments we retrieved were for the correct sha1");
    t.end();
  });
});

test('should be able to succesfully get the number of comments on a specific sha1', function(t) {
  var sha1 = "e4a3d2d12585d49ded571850e9e709bbdbe319c5";
  tipToCommentClient.getNumComments({
    sha1: "e4a3d2d12585d49ded571850e9e709bbdbe319c5"
  }, function (err, response) {
    t.ok(!err, "no error on getting comments");
    t.ok(response > 0, "the module returns a positive integer for number of comments");
    t.end();
  });
});


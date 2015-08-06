## Tip To Comment Client
A client to interface with the openpublish tip to comment service


# Initialization

```javascript
var tipToCommentClient = require('../')({
  commonWallet: commonWallet
});
```

or 

```javascript
var tipToCommentClient = require('../')({
  commonWallet: commonWallet,
  inBrowser: true
});
```

# Usage

NOTE: the commonWallet address has to have tipped the post to be able to succesfully comment on the post

```javascript
tipToCommentClient.comment({
  comment: "your comment goes here",
  sha1: "the post you want to comment on"
}, callback (error, comment) {
   /* callback */
}
```

```javascript
tipToCommentClient.getComments({
  method: "address",
  query: "the address you would like to to see the comments of"
}, callback (error, comments) {
   /* callback */
}
```

NOTE: the commonWallet address has to have tipped the post to be able to succesfully see all of the comments on the post

```javascript
tipToCommentClient.getComments({
  method: "sha1",
  query: "the sha1 you would like to to see the comments of"
}, callback (error, comments) {
   /* callback */
}
```


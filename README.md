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

#Usage

```javascript
tipToCommentClient.comment({
  comment: "your comment goes here",
  sha1: "the post you want to comment on"
}, callback (error, comment) {
  / * callback */
}
```

```javascript
tipToCommentClient.getComments({
  method: "address",
  query: "the address you would like to to see the comments of"
}, callback (error, comments) {
  / * callback */
}
```

```javascript
tipToCommentClient.getComments({
  method: "sha1",
  query: "the sha1 you would like to to see the comments of"
}, callback (error, comments) {
  / * callback */
}
```


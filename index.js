function tipToComment(opts) {
  if (!(this instanceof tipToComment)) return new tipToComment(opts);

  if(!opts.commonWallet){
    console.log("missing common wallet instance");
    return null;
  }
  else {
    return (require('./src/index.js')(opts));
  }
}

module.exports = tipToComment;
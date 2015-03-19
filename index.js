var jsdc = require('jsdc');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  return jsdc.parse(source);
};
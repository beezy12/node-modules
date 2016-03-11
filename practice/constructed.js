function Building(){}

Building.prototype.burn = function() {
  console.log('buuuuuurn');
}

module.exports = new Building();

function Animal(){}

  Animal.prototype.sound = function() {
    console.log("moo");
};

module.exports = Animal;

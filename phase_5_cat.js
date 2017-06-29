function Cat(name,owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement= function(){
  let result = this.owner + " loves " + this.name;
  return result;
};



cat1 = new Cat("Trump","Putin");
cat2 = new Cat("Warriors","Myers");

cat1.cuteStatement();
cat2.cuteStatement();

cat1.meow = function(){
  console.log("meow1");
};

Cat.prototype.meow = function(){
  console.log("meow2");
};

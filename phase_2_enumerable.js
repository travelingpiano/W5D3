Array.prototype.myEach = function(callback){
  for(let i=0; i<this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback){
  let result = [];
  this.myEach((el) => {
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function(callback,initialValue){
  let i =0;
  if(!initialValue){
    initialValue = this[0];
    i = 1;
  }
  let result = initialValue;
  this.slice(i).myEach((el)=>{
    initialValue = callback(initialValue,el);
  });
  return initialValue;
};

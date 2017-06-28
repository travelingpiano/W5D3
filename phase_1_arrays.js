Array.prototype.uniq = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if(!result.includes(this[i])) {
      result.push(this[i])
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for(let i =0; i<this.length;i++){
    for(let j = i+1; j<this.length;j++){
      if(this[i]+this[j]===0){
        result.push([i,j])
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = new Array(this.length);
  let sub_array = [];
  for(let i = 0; i < this.length; i++) {
    for(let j =0; j < this.length; j++) {
      sub_array.push(this[j][i]);
    }
    result[i] = sub_array;
    sub_array = [];
  }

  return result;
};

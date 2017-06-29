Array.prototype.bubbleSort = function() {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

String.prototype.substrings = function(){
  let result = [];
  let string_array = Array.from(this);
  for(let i=0;i<string_array.length;i++){
    for(let j=i+1;j<string_array.length+1;j++ ){
      result.push(string_array.slice(i,j).join(''));
    }
  }
  return result;
};

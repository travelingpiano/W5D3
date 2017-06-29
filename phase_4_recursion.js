function range(start, end){
  if (start === end){
    let answer = new Array;
    answer.push(start);
    return answer;
  }
  let result = [];

  result = range(start, end - 1);
  result.push(end);
  return result;
};

function sumRec(arr){
  if(arr.length===1){
    return arr[0];
  }
  return sumRec(arr.slice(1)) + arr[0];
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return exponent(base, exp - 1) * base;
};

function fibonacci(n){
  if(n <= 2){
    let arr = [0,1];
    return arr.slice(0,n);
  }
  let result = fibonacci(n-1);
  result.push(result[result.length-1]+result[result.length-2])
  return result;
};

function bsearch(arr, target){
  if (arr.length === 0){
    return NaN;
  }

  if (arr.length === 1){
    if (arr[0] === target){
      return 0;
    } else{
      return NaN;
    }
  }

  let mid_el = Math.floor(arr.length/2);

  if (arr[mid_el] === target) {
    return mid_el;
  } else if (arr[mid_el] > target) {
    return bsearch(arr.slice(0, mid_el), target);
  } else {
    let ans = bsearch(arr.slice(mid_el, arr.length), target);
    return mid_el + ans;
  }
};

function mergesort(arr){
  if(arr.length===1){
    return arr;
  }
  let mid_el = Math.floor(arr.length/2);

  let arr1 = mergesort(arr.slice(0,mid_el));
  let arr2 = mergesort(arr.slice(mid_el,arr.length));
  return merge(arr1,arr2);
};

function merge(arr1,arr2){
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  let result = [];
  while(arr1.length > 0 || arr2.length >0){
    if (arr1.length === 0){
      result = result.concat(arr2);
      arr2 = [];
    }else if(arr2.length===0){
      result = result.concat(arr1);
      arr1 = [];
    }else{
      if(arr1[0] < arr2[0]){
        result.push(arr1[0]);
        arr1 = arr1.slice(1);
      }else{
        result.push(arr2[0]);
        arr2 = arr2.slice(1);
      }
    }
  }
  return result;
};

function subsets(arr){
  if (arr.length === 0) {
    return [[]];
  }
  let result = subsets(arr.slice(1));

  subsets(arr.slice(1)).forEach((el) => {
    el.push(arr[0]);
    result.push(el);
  })

  return result;
};

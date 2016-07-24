
function sumAll(arr) {
  var result=0;
  arr.sort(function(a,b){return a-b;});
  for(var i=0;i<=arr[1]-arr[0];i++)
    {
      result+=arr[0]+i;
      console.log(result);
    }
  return result;
}

sumAll([1, 4]);

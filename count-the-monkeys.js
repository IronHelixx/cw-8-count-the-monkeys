function monkeyCount(n) {
  let arMonkeys = [];
  for( i = 1; i <= n; i++ ){
      arMonkeys.push(i);
  }
  return( arMonkeys );
}

/* **
// Alternative Solutions:

function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  
  return arr;
}

** */

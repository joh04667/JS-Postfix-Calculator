function calc( expr ) {
  if(expr === "" || typeof(expr) !== "string") {return 0};
  var ar = expr.split( /\s+/ ), st = [], token;
  while( token = ar.shift() ) { 
    if ( token == +token ) { // numeric
      st.push( token );
    } else {
      var n2 = st.pop(), n1 = st.pop();
      st.push( eval( n1 + token + ' ' + n2 ) );
    }
  }
  return Number(st.pop());
}

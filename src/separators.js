
function thousands_separators(num) {
  num+='';
  var y=num.indexOf('.'); 
  m=Math.floor(num);
  st=m+'';
  st=st.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
  if(y==-1)
    return st;
  else
    return (st+num.substring(y));
} 
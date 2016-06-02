
function thousands_separators(num) {
  num+='';
  var y=num.indexOf('.'); 
  m=Math.floor(num);
  st=m+'';
  st=st.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
  return (st+num.substring(y));
} 
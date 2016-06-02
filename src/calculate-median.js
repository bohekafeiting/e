function calculate_median(arr) {
   var ave=0;
   for(i=0;i<arr.length;i++)
     {
	    if(arr[i]%2==0)
		  ave+=arr[i];
	 }
   return (ave/2);	 
}

module.exports = calculate_median;

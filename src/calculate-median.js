function calculate_median(arr) {
   var ave=0,num=0;
   for(i=0;i<arr.length;i++)
     {
	    if((i+1)%2==0)
	      {
	      	ave+=arr[i];
	      	num+=1;
	      }
	 }
   return (parseFloat(ave/num));	 
}

module.exports = calculate_median;

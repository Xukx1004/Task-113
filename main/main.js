function main(kilometer,waitingTime) {
   let sum = 0;
   let fee1 = 0;
   let fee2 = 0;
   if(kilometer <= 2 && kilometer >0){
        fee1 = 6;
   }else if(kilometer >2 && kilometer<= 8){
       fee1 = 6 + (kilometer -2)*0.8;
   }else{
       fee1 = 10.8+(kilometer - 8)*(0.8*1.5);
   }
   fee2 = waitingTime*0.25;
   sum = Math.round(fee1+fee2);
   console.log(sum);
  
};
main(5.6,0);
module.exports = main;
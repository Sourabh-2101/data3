Problem 2 : Check whether a string is prime number or not.

for(let i=1; i<=10; i++){
  console.log(i);

  let num= i;
  let count=0;
  for(let j=1; j<=num; j--){
    if(num%j==0){
      count++;
    }
  }
  if (count==2){
    console.log("Prime number")
  }
  else{
    console.log("Not a prime number")
  }
    
}


let prime = 13;
let count = 0;

for(let i=2;i<=prime;i++){
    if(prime % i === 0){
      count++;
    }
}
if(count >= 2){
    console.log(`${prime} is prime`);
}
else{
    console.log(`${prime} is not prime`);
}



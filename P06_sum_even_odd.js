Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

E.g num = 2914
O/p Even Place (9+4)
Odd Place 2+1


function sum_Even_Odd_digit(a) {
    var b="";
    b=b+a;
    var even;
    var odd;
    even=0;
    odd=0;
    for (let i = 0; i < b.length; i++) {
        if(i%2==0){
           even=even+parseInt(b.charAt(i)); 
        }
        else{
            odd=odd+parseInt(b.charAt(i));
        }
    }
    console.log("Even digit sum: "+even);
    console.log("Odd digit sum: "+odd);
}
sum_Even_Odd_digit(2451);

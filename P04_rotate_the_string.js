4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

input  = brainmentors

output = sbrainmentor

var s="brainmentors";
for(var i=0;i<s.length;i++){
    const array=s.split("");
    var t=array.pop();
    array.unshift(t);
    s=array.join("");
    console.log(s);
}

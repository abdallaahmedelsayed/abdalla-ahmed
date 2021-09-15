let n1= prompt("Enter the first number");
let n2= prompt("Enter the second number");
let n3= prompt("Enter the third number");
if(n1>n2 && n1>n3) 
{
    console.log("The largest number is"+ n1);
}

else if(n2>n1 && n2>n3) 
{
    console.log("The largest number is"+ n2);
}
else if(n3>n1 && n3>n2)
{
    console.log("The largest number is"+ n3);
}
else 
{
    console.log("Not found");
}
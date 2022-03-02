function do_it()
{
let x, txt="Number ", r="red", g="green";
x = prompt("Enter No : ");

if(x % 2 == 0)
{
    document.getElementsById("res").textcontent=txt + x + "is Even";
    document.getElementsById("res").style.color=g;
}
else
{
    document.getElementsById("res").textcontent=txt + x + "is Odd";
    document.getElementsById("res").style.color=r;
}

}


`                                                                                                               `

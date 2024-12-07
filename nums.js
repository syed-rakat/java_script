function num(n){
    if(n==1)
    {
        console.log(1);
        return;
    }
    console.log(n);
    num(n-1);
}
num(30);
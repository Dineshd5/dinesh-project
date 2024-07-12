var english=75,tamil=90,Hindi=88;

var group1 =english + tamil;
var group2 =english + Hindi;

if( group1 > group2 ){
    console.log(group1 + "marks");
}

if( group2 > group1 ){
    console.log(group2 + "marks");
}
else{
    console.log("none");
}
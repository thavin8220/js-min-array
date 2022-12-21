let len=[300,30,20,150,60];
let min=len[0];
function myValue(){
for(j=0;j<len.length;j++){
    if(len[j]<min){
        min=len[j];
    }
}
document.write("minimum value=" +min)
}
myValue(len);

let fs=require('fs');
var contents=fs.readFileSync('demo.txt','utf8');
let replacedContents=contents.replace(',',' ');
let arr=new Array(replacedContents.length);
for (let i = 0; i < arr.length; i++) {
    arr[i]=replacedContents[i];
}
console.log(arr);


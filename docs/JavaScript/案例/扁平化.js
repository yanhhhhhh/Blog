let arr = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(arr);
let arr1 = arr.flat(Infinity)
console.log(arr1);


let string =  str.replace(/(\[|\])/g,'')
string = '[' + string + ']';
arr2 = JSON.parse(string);
console.log(arr2);

// 递归
let arr3=[]
let fn = (array)=>{
  array.forEach(i=>{
    if(Array.isArray(i)){
      fn (i)
    }else{
      arr3.push(i)
    }
  })
}
fn(arr)
console.log(arr3)

// reduce



let  fn2=(array)=>{
  return  array.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)?fn2(cur):cur)
    
  },[])
}
let arr4 = fn2(arr)
console.log(fn2(arr4))

// concat连接数组
var arr6 = [1,[2,4]]
console.log([].concat(...arr6))

var arr5 = [1, [2, [3, [4, 5]]], 6]
while(arr5.some((i)=>{return Array.isArray(i)})){
  arr5 = [].concat(...arr5)
}
console.log('arr5',arr5);

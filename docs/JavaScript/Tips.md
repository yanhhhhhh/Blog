
# 开发技巧

::: tip
主要记录日常开发小技巧
:::

## 判断输入框是否为空

- ES5：
  
```js
if(input!==null||input!==undefined||input!=='')
```

- ES6：

> ?? 运算符称为非空运算符,如果第一个参数不是假值（JS中的假值包括未定义 undefined、空对象null、数值0、空数字NaN、布尔false、空字符串）将返回第一个参数，否则返回第二个参数  

```js
if(input??''!=='')
```

## 精准搜索使用find，效率更高
  
## 数据扁平化

`数据源`

```js
let arr = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(arr);
```

- flat()

```js
let arr1 = arr.flat(Infinity)
console.log(arr1);
```

- replace

```js
let string =  str.replace(/(\[|\])/g,'')
string = '[' + string + ']';
arr2 = JSON.parse(string);
console.log(arr2);
```

- 递归

```js
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
```

- reduce&concat

```js
let  fn2=(array)=>{
  return  array.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)?fn2(cur):cur)
    
  },[])
}
let arr4 = fn2(arr)
console.log(fn2(arr4))
```

- 扩展运算符
`注意：可以使用简写形式arr5.some(Array.isArray) 或者 arr5.some((i)=>Array.isArray(i))，箭头函数不写{}默认=>之后的表达式结果为返回值`

```js
var arr5 = [1, [2, [3, [4, 5]]], 6]
while(arr5.some((i)=>{return Array.isArray(i)})){
  arr5 = [].concat(...arr5)
}
console.log('arr5',arr5);
```

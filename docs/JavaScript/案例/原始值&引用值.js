let name = 'mike';
name.age=18;
console.log(name.age)//undefined
console.log(name+', hello');//mark, hello
console.log(typeof name)//string


//使用new关键字，创建Object类型的实例，行为类似原始值
var str = new String('mark');
str.age = 18
console.log(str.age);//18
console.log(str+', hello');//mark, hello
console.log(typeof str);//object


const obj = {
  name:'jae'
}
obj.name ='hhh'
console.log(obj);//{ name: 'hhh' }
obj ={
  name:'hhhh'
} //TypeError: Assignment to constant variable.
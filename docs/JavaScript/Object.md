# Object

<img :src="$withBase('/images/JavaScript/Object.svg')" alt="Object">

## 创建

- new 操作符和 Object 构造器

  ```js{1}
    let person = new Object();
      person.name = "Nicholas";
      person.age = 29;
  ```

- 对象字面量

```js
   let person = {
     name: "Nicholas",
     age: 29
   };
```

## 属性类型(Object.defineProperty())

::: tip
注：使用内部属性来描述属性的特征
:::

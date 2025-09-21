Привет, мир!
```
console.log('Привет, JavaScript!');
```

---
## Типы данных

```
let name = "Анна";
const PI = 3.14159;
let age = 21;
let ok = true;
console.log(typeof name, typeof PI,typeof age, typeof ok);
```

---

## Переменные и типы
```
let username = 'Анна';
const PI = 3.14159;
var legacy = 'старый var';

console.log(typeof username, typeof PI, typeof legacy); // string number string

// Попробуем переназначить:
username = 'Мария';
console.log('username ->', username);

// Попытка изменить const:
try {
  PI = 3.14;
} catch (e) {
  console.error('Ошибка при изменении const:', e.message);
}

// null vs undefined
let a = null;
let b;
console.log('a:', a, 'typeof a:', typeof a); // null object (особенность JS)
console.log('b:', b, 'typeof b:', typeof b); // undefined undefined
```

JavaScript чувствителен к регистру — `myVariable` отличается от переменной `myvariable`. Если у вас возникают проблемы в вашем коде, проверьте регистр!

---
## Объекты и массивы

https://www.w3schools.com/jsref/jsref_obj_array.asp

```
const student = { name: 'Олег', age: 21, grades: [4,5,3] };
console.log(student['name'], student.age);

const nums = [1,2,3,4];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('doubled', doubled, 'evens', evens, 'sum', sum);

// Поверхностное копирование
const a = [1,2];
const b = a;
b.push(3);
console.log('a', a, 'b', b); // оба изменились

// Копирование (поверхностное)
const copy = [...a];
console.log('copy', copy);
copy.push(4);
console.log('a', a,'copy', copy);

```

---
## Операторы и приведение типов 
```
console.log('5' + 1);   // '51' (конкатенация)
console.log('5' - 1);   // 4 (строка приведена к числу)

console.log(0 == false);  // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

// Приведение вручную:
console.log(Number('123') + 1); // 124
console.log(String(5) + 'px');  // '5px'

// Truthy / Falsy примеры
const values = ['', 0, null, undefined, NaN, '0', [], {}];
values.forEach(v => console.log(v, '=>', Boolean(v)));

```

---
## Управляющие конструкции

```
const arr = [10, 20, 30];
console.log('for...in (индексы):');
for (const i in arr) console.log(i); // '0', '1', '2'

console.log('for...of (значения):');
for (const v of arr) console.log(v); // 10, 20, 30

// break / continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log('i=', i);
}

// switch
const x = 2;
switch (x) {
  case 1: console.log('Один'); break;
  case 2: console.log('Два'); break;
  default: console.log('Другое');
}

```

---
## DOM

https://www.w3schools.com/jsref/dom_obj_document.asp

- DOM — это **структура HTML-страницы в виде объектов**.
    
- Каждый элемент (`<div>`, `<p>`, `<button>`) становится объектом, к которому можно обратиться через JavaScript.
    
- DOM позволяет **изменять текст, стили, добавлять/удалять элементы, реагировать на события**.
    
- Подумайте о DOM как о дереве:
    
    - `document` → корень (всё, что есть на странице)
        
    - `document.body` → тело страницы
        
    - `document.body.children` → дочерние элементы

```
console.log(document);        // весь DOM
console.log(document.body);   // тело страницы
console.log(document.head);   // голова страницы
console.log(document.body.children); // дочерние элементы body

```

Существуют разные методы поиска элементов:

1. `getElementById('id')` — по уникальному ID.
    
2. `getElementsByClassName('class')` — возвращает HTMLCollection.
    
3. `getElementsByTagName('tag')` — все элементы с указанным тегом.
    
4. `querySelector('селектор')` — первый элемент, как в CSS.
    
5. `querySelectorAll('селектор')` — все элементы, NodeList.

```
const p = document.getElementById("myP");
console.log(p.textContent); // Привет

const boxes = document.getElementsByClassName("box");
console.log(boxes.length); // количество div с классом box

const firstBox = document.querySelector(".box");
console.log(firstBox);

const allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);

```

Можно изменять текст, HTML и стили:

- `textContent` — только текст.
    
- `innerHTML` — текст + HTML.
    
- `style` — стили CSS.

```
const p = document.getElementById("myP");

// изменить текст
p.textContent = "Новый текст";

// вставить HTML
p.innerHTML = "<b>Жирный текст</b>";

// изменить стили
p.style.color = "red";
p.style.fontSize = "20px";

```

- JS позволяет создавать новые элементы и добавлять их на страницу.
    
- `createElement`, `appendChild`, `insertBefore`, `removeChild`.

```
// создаём новый элемент
const newDiv = document.createElement("div");
newDiv.textContent = "Я новый div!";
newDiv.style.background = "lightblue";
newDiv.style.padding = "5px";

// добавляем в body
document.body.appendChild(newDiv);

// удалить через JS
// newDiv.remove();

```

- Можно реагировать на действия пользователя: клик, ввод, наведение и др.
    
- Используем `addEventListener` — современный способ.

```
// HTML: <button id="btn">Нажми меня</button>

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Кнопка нажата!");
});

// Можно изменить текст кнопки при клике
btn.addEventListener("click", () => {
  btn.textContent = "Спасибо!";
});

```




https://stepik.org/course/82108/info
const student = { name: 'Олег', age: 21, grades: [4,5,3] };
console.log(student.name, student['age']);

const nums = [1,2,3,4];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('doubled', doubled, 'evens', evens, 'sum', sum);

// Поверхностное копирование
const a = [1,2];
const b = a;
a.push(3);
console.log('a', a, 'b', b); // оба изменились

// Копирование (поверхностное)
const copy = [...a];
console.log('copy', copy);


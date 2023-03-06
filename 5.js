function num(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("Введите первое число", '');
  let n = prompt("Введите второе число", '');
  
  if (n < 1) {
    alert("Степень ${n} не поддерживается, используйте натуральное число");
  } else {
    alert(num(x, n));
  }
const calculateBonus = (a, b) => { // передаются заданные параметры в функции
  let bonus; // объявляется параметр @bonus, в данный момент его значеение не определенно, поэтому равно undefined
  const sum = a + b; // заданные параметры суммируются
  debugger; // значение @sum приняло в данном случае 44
  sum > 50 ? (bonus = 50) : (bonus = sum); // тернарный оператор проверяет условие, если оно true - выполняется первое выражение, если false - второе
  debugger; // значение @bonus приняло в данном случае 44
  return bonus
};

module.exports = calculateBonus;



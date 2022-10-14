// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//     (age < 100) ? 'Здравствуйте' :
//     'Какой необычный возраст!' ;
// alert(message);
// 

//
// if (age < 3) {
//     message = 'Здравствуй, малыш!';
//   } else if (age < 18) {
//     message = 'Привет!';
//   } else if (age < 100) {
//     message = 'Здравствуйте!';
//   } else {
//     message = 'Какой необычный возраст!';
//   }

// let company = prompt('Какая компания создала JavaScript?' , '');
// (company == 'Netscape') ?
//     alert('Верно') : alert('Неправильно');

//ЗАДАЧКИ
//1.

// if ("0") {
//     alert( 'Привет' );
//   }


//2.

// let company = prompt('Курс какой организации вы проходите?', '');
// if (company == 'ITcobe') {
//     alert('Верно!')
// } else {
//     alert('Неверно, это ITcobe');
// }

//3.
// let number = prompt('Введите число..', '');
// if (number % 2 == 0)  {
//     alert('Even')
// } else if (number % 2 > 0) {
//     alert('Odd')
// } else {
//     alert('Zero')
// }


//4.
// let login = prompt('Представтесь' , '');

// let message = (login == 'Сотрудник') ? 'Привет' :
//     login == 'Директор' ? 'Здравствуйте' :
//     'Пользователь не найден' ;

// alert(message);

//---------------------------------------------------

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }



// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);


// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
  
//       // сделать что-нибудь со значениями...
//     }
//   }
  
//   alert('Готово!');


// let i = 3;

// while (i) {
//   alert( i-- );
// }


//export_number % 2

// for (let i = 2; i < 100; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }


// let n = 100;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }



let users = [
  {email: 'vasya@ivenov.ru',
   password: 'qwerty',
   },

  {email: 'vika@petrova.ru',
   password: '1234',
  },

  {email: 'dima@smirnov.ru',
   password: 'wasd',
  },

  {email: 'katya@fedorova.ru',
   password: '1234567890',
  },
];

document.getElementById('btn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const passwd = document.getElementById('paswd').value;

  let counter = 0;
  users.forEach(el => {
    if (el.email === email && el.password === passwd) {
      document.getElementById('email').value = '';
      document.getElementById('passwd').value = '';
      counter++;
    }
  });
  if (counter === 0) {
    alert('Неудачная авторизация');
  }
  else {
    alert('Успешная авторизация');
  }
});

document.getElementById('btn-register').addEventListener('click', () => {
  const email = document.getElementById('email-register').value;
  const passwd = document.getElementById('passwd-register').value;

  let newUser = {email: email, password: passwd};
  users.push(newUser);
  alert('Вы успешно зарегистрировали нового пользователя');
  document.getElementById('email-register').value = ' ';
  document.getElementById('passwd-register').value = ' ';
});


document.getElementById('register').addEventListener('click', () => {
  document.getElementById('registration').style.display = 'inline';
  document.getElementById('entrance').style.display = 'none';
});

document.getElementById('enter').addEventListener('click', () => {
  document.getElementById('entrance').style.display = 'inline';
  document.getElementById('registration').style.display = 'none';
});
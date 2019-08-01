  var App = {}; // 1

  document.addEventListener("DOMContentLoaded", App.addElement);  //создаем объекты в виде полей и кнопки по вызову Dcom
  var my_div = null;


  (function (module) {
    module.addElement = addElement; // 2
  
    var root;
  
    function addElement() {
    createInput(); // 4
    createButton(); // 6
    }

    function createInput() {
      var username = document.createElement("input");        //создаем текстовое поле для ввода имени пользователя
      username.id = "username";
      username.placeholder = "Введите имя";  
      username.className = "form-control";
      my_div = document.querySelector("#main");        //обозначаем точку отчета для создания форм по метке main
      my_div.parentNode.insertBefore(username, my_div);          //обозначаем место расположения формы
      
      var br = document.createElement("br");       //создаем переход на следующую строку
      br.id = "br";                                   
      username.parentNode.insertBefore(br, username.nextSibling); 
  
      var password = document.createElement("input");        //создаем еще одно текстовое поле для ввода пароля
      password.id = "password";
      password.className = "form-control";
      password.placeholder = "Введите пароль"; 
      br.parentNode.insertBefore(password, br.nextSibling);    //обозначаем место расположения формы
  
      var br = document.createElement("br");       //создаем переход на следующую строку
      br.id = "br";                                   
      password.parentNode.insertBefore(br, password.nextSibling); 
  
      var email = document.createElement("input");        //создаем еще одно текстовое поле для ввода почтыы
      email.id = "email";
      email.className = "form-control";
      email.placeholder = "Введите почту"                                     
      br.parentNode.insertBefore(email, br.nextSibling);    //обозначаем место расположения формы
     
      var br = document.createElement("br");       //создаем переход на следующую строку
      br.id = "br";                                   
      email.parentNode.insertBefore(br, email.nextSibling);
           // 5
    }

    function createButton() {
      var reg = document.createElement("input");   //создаем кнопку для совершения регистрации
      reg.type = "submit";                         //присваиваем ей тип "submit"
      reg.value = "Подтвердить";                     //Присваиваем текст для кнопки
      reg.className = "btn btn-primary";
      reg.setAttribute("onclick", "register()");       //создаем вызов функции "reg()" по нажатию кнопки
      my_div = document.querySelector("#main");        //обозначаем точку отчета для создания форм по метке main
      my_div.parentNode.insertBefore(reg, my_div);          //обозначаем место расположения формы
      
      var br = document.createElement("br");       //создаем переход на следующую строку
      br.id = "br";                                   
      reg.parentNode.insertBefore(br, reg.nextSibling);

      var log = document.createElement("input");   //создаем кнопку для совершения регистрации
      log.type = "button";                         //присваиваем ей тип "button"
      log.value = "Есть регистрация";                     //Присваиваем текст для кнопки
      log.className = "btn btn-info";
      log.setAttribute("onclick", "location.href='login.php' ");       //переходим на страничку логина
      br.parentNode.insertBefore(log, br.nextSibling);//обозначаем место для расположения кнопки
       // 7
    }

  })(App);
  
  
  App.addElement(); // 3


  function register() {
    const username = document.getElementById('username').value; // получить значение поля 'Имя пользователя' из формы
    const password = document.getElementById('password').value; // получить значение поля 'Пароль' из формы
    const email = document.getElementById('email').value; // получить значение поля 'Почта' из формы
  
    const formData = new FormData();              //Создаем объект FormData 
    formData.append('username', username);                    //получаем значение username
    formData.append('password', password);                    //получаем значение password
    formData.append('email', email);                    //получаем значение email

    fetch('./engine/register.php',                               //используем fetch()
       {
          body: formData,                         //указываем что отправляем в запросе
          method: "post"                          //указываем метод запроса 
        })
                      }

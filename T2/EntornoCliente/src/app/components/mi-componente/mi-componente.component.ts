import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
    <style>
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: arial;
  background-image: url('bg.png');
}

.form-login {
  width: 400px;
  height: 340px;
  background: gray;
  margin: auto;
  margin-top: 180px;
  box-shadow: 7px 13px 37px #000;
  padding: 20px 30px;
  border-top: 4px solid #017bab;
  color: white;
}

.form-login h5 {
  margin: 0;
  text-align: center;
  height: 40px;
  margin-bottom: 30px;
  border-bottom: 1px solid;
  font-size: 20px;
}

.controls {
  width: 100%;
  border: 1px solid #017bab;
  margin-bottom: 15px;
  padding: 11px 10px;
  background: white;
  font-size: 14px;
  font-weight: bold;
}

.buttons {
  width: 100%;
  height: 40px;
  background: #017bab;
  border: none;
  color: white;
  margin-bottom: 16px;
}

.form-login p{
  height: 40px;
  text-align: center;
  border-bottom: 1px solid;
}

.form-login a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.form-login a:hover {
  text-decoration: underline;
}
    </style>
    <section class="form-login">
      <h5>Login</h5>
      <input class="controls" type="text" name="Email" value="" placeholder="Email*">
      <input class="controls" type="password" name="contrasena" value="" placeholder="Password*">
      <input class="buttons" type="submit" name="" value="LOG IN">
      <p><a href="#">Create new Account?</a></p>
    </section>
    `

})
export class MiComponente{
        constructor(){
            console.log("Componente mi-componente ha sido cargado!!!")
        }
}
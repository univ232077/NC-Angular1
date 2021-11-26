import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nc-angular1';

  opencart() {
    this.title = "Компьютерные комплектующие";

    const a = 5;
    const b = 15;
    alert(`a = ${a}\nb = ${b}\na + b = ${a + b}`);
  }
}

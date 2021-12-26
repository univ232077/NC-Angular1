import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'nc-angular1';
  public cartOpened: boolean = false;

  openCart(): void {
    this.cartOpened = true;
  }

  closeCart(): void {
    this.cartOpened = false;
  }
}

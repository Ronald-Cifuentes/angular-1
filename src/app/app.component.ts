import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-1';
  check = 'text 1';
  value1 = 'Facebook';
  value2 = 'Google';
  value3 = 'Twitter';
  setCheck = (e: Event) => {
    const el = <HTMLInputElement>e.target;
    if (el.checked) {
      this.check = 'text 2';
    } else {
      this.check = 'text 1';
    }
  };
  setValue2 = (e: Event) => {
    this.value2 = (<HTMLInputElement>e.target).value;
  };
  setValue3 = (e: Event) => {
    this.value3 = (<HTMLInputElement>e.target).value;
  };
}

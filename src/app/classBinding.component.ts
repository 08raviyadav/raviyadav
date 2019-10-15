import { Component } from '@angular/core';


@Component({
  selector: 'clss',
  template: 
  `<button class="btn btn-primary"[class.active]="one">ONE</button>
  <button class="btn" [class.tow]="two">TWO</button>
  <button class="btn" [class.any]="three">THREE</button>
  <p class="btn" [class.clr]="'red size50'">HI</p>
  `
})
export class classComponent {
	one=true;
	two='ABC';
	three="BCD";
	clr="red";
}

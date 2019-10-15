import { Component } from '@angular/core';
import { RATE } from './rate.service';

@Component({
  selector: 'loan',
  template: `<h2>
  {{interest+loan}} </h2>`
})
export class loanComponent {
	interest=10;
	loan=200;
}

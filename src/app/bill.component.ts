import { Component } from '@angular/core';
import { RATE } from './rate.service';

@Component({
  selector: 'bill',
  template: `<h2>
  {{tax+cost}} </h2>`
})
export class billComponent {
	tax=50;
	cost=150;
	
}

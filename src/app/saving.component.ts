import { Component } from '@angular/core';
import { RATE } from './rate.service';

@Component({
  selector: 'saving',
  template: `<h2>
  {{saving}} </h2>`
})
export class savingComponent {
	saving=50;
	interest=10;
}

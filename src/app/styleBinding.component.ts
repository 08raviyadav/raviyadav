import { Component } from '@angular/core';


@Component({
  selector: 'styl',
  template: 
  `<button [style.backgroundColor]="active?'blue':'red'">One</button>
  `
 
})
export class styleComponent {
	active=true;
}

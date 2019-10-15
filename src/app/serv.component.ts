import { Component } from '@angular/core';
import { depnService } from './serv.service';

@Component({
  selector: 'inject',
  template: `<h2>
  {{courses}} </h2>`
})
export class servComponent {
	courses;
	constructor(obj:depnService)
	{
		this.courses=obj.getService();
	}

}

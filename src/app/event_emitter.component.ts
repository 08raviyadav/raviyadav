import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector : 'otpt',
	template : `
    <button class='btn' (click)="valueChanged()">Click me</button>
    {{Counter}}
	`
})
export class OtptComponent {
	@Output() obj = new EventEmitter();
	Counter = 0;
	valueChanged() {
		this.Counter = this.Counter + 1;
		this.obj.emit(this.Counter);
		console.log(this.Counter);
	}
}
import {Component} from '@angular/core';
@Component({
selector:'twoWay',
template:`Name:
<input [(ngModel)]="x">
<button (click)="function()1">ChangeName</button><br>
Contact:
<input [(ngModel)]="y">
<button ng-click="y">ChangeContact</button><br>
Expertise:
<input [(ngModel)]="z"(keyup.enter)="function1()">
<button ng-click="z">ChangeExpertise</button><br>
Experince:
<input [(ngModel)]="a"(keyup.enter)="function1()">
<button ng-click="a">ChangeExperince</button>

`
})
export class twowayComponent{
	x="Ravi";
	y="987654844";
	z="Angular";
	a="4yrs";
	function1()
	{
		console.log("Name" +this.x);
		console.log("Contact" +this.y);
		console.log("Expertise" +this.z);
		console.log("Experince" +this.a);
	}
}

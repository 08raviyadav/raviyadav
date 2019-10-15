import {Component} from '@angular/core';
@Component({
selector:'twoWay',
template:`
<input type="text" min="5" max="8">
<div *ngIf="size.length>5">Ok</div>
<div *ngIf="size.length<8">ok.</div>
<div *ngIf="age>=20 || age<=50> Elligible
`
})
export class ageComponent{
	x="aaaa";
	age=50;
}

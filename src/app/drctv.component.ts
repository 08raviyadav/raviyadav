import {Component} from '@angular/core';
@Component({
selector:'twoWay',
template:`
<div *ngIf="arr.length<0">Array has no elements.</div>
<div *ngIf="arr.length==0">Array is empty
</div>
Array has {{arr.length}} elements.
`
})
export class drctvComponent{
	arr=[10,2,1,3,4,3,6];
}

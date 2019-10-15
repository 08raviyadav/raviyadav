import {Component} from '@angular/core';
@Component({
selector:'ngClass',
template:`
<button [class.btn-primary]=true [class.btn]=true [class.active]="isActive">Click</button>
<button [ngClass]="
{
	'btn':true,
	'btn-primary':true,
	'active':isActive,
	'state':isNotActive
}
">Button</button>
`
})

export class ngClassComponent{
	isActive=true;
	isNotActive=true;
	
}


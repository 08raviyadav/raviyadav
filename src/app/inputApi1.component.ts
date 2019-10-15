import {Component, Input} from '@angular/core';
@Component({
selector:'registration',
template:`
Student Regd:{{registration}}
Name:{{name}}
`
})
export class register{
	@Input() registration: string;
	@Input('regd-name') name: string;
	
}
@Component({
selector:'regd',
template:`
<regdDetail registration="11717"
regd-name="Ravi"></regdDetail>
`
})
export class view{
	
}

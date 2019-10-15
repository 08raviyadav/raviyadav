import {Component, Input} from '@angular/core';
@Component({
selector:'bankAccount',
template:`
Bank Name:{{bankName}}
Account Id:{{id}}
`
})
export class bankAccount{
	@Input() bankName: string;
	@Input('account-id') id: string;
	
}
@Component({
selector:'app',
template:`
<bankAccount bankName="RBC"
account-id="4747"></bankAccount>
`
})
export class App{
	
}

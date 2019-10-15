import {Component} from '@angular/core';
@Component({
selector:'ngSwitchDefault',
template:`<div [ngSwitch]="section">
<div *ngSwitchDefault="'D1501'">Fourth Year</div>
<div *ngSwitchDefault="'D1401'">Fifth Year</div>
</div>`
})

export class ngSwitchDefaultComponent{
	section="D1501";
}


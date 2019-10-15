import {Component} from '@angular/core';
@Component({
selector:'ngSwitch',
template:`<div [ngSwitch]="section">
<div *ngSwitchCase="'D1501'">Fourth Year</div>
<div *ngSwitchCase="'D1401'">Fifth Year</div>
</div>`
})

export class ngSwitchComponent{
	section="D1501";
}


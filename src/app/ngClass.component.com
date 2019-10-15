import {Component} from '@angular/core';
@Component({
selector:'ngStyle',
template:`
<br><br><br>
<button [ngStyle]="
{
	'backgroundColor':bkclrl,
	'color':bkclr,
	'fontWeight':wght
}
">Button</button>
<button [style.backgroudColor]="bkclr"
[style.color]="bkclrl"[style.fontWeight]="wght">Click</button>
`
})

export class ngStyleComponent{
	bkclr="red";bkclrl="green";wght="bold";
}


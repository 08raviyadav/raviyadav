import {Component} from '@angular/core';
@Component({
selector:'Event1',
template:`

<input #num (keyup.enter)="onKeyUp(num.value)"/>
<br><br>
<button (click)="onIncr(num.value)">Increment</button>
<br><br>
<button (click)="onDecr(num.value)">Decrement</button>
<br><br>
<button (click)="onSq(num.value)">Square</button>
<br><br>
<button (click)="onHalf(num.value)">Half</button>
`

})
export class TextComponent{
onKeyUp(num){
console.log(num);
}
onIncr(num){
num++;
console.log("Print"+num);
}
onDecr(num){
num--;
console.log("Print"+num);
}
onSq(num){
num=num*num;
console.log("Print"+num);
}
onHalf(num){
num=num/2;
console.log("Print"+num);
}

}

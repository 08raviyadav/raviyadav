import { Component } from '@angular/core';
import { PropBinding } from './propBinding.service';

@Component({
  selector: 'prop',
  template: 
  `<table [border]="5">
  <tr>
  <td>A</td>
  <td>B</td>
  <td>C</td>
  </tr>
 <tr>
  <td>A</td>
  <td>B</td>
  <td>C</td>
  </tr>
  `
})
export class PropComponent {
}

import { Component } from '@angular/core';


@Component({
  selector: 'attr',
  template: 
  `<table [border]="5">
  <tr>
  <th>Sr.No</th>
  <th [attr.colspan]="spn">Name</th>
  <th>Sec</th>
  </tr>
 <tr>
  <td>1</td>
  <td>I am</td>
  <td>Ravi</td>
  <td>D1703</td>
  </tr>
  </table>
  `
})
export class attrComponent {
	spn=2;
}

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-hb-form',
  templateUrl: './hb-form.component.html',
  styleUrls: ['./hb-form.component.scss'],

})
export class HbFormComponent {

  @Input()
  picker: any

}

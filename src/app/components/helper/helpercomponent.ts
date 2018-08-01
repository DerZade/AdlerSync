import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss'],
  selector: 'app-helper'
})
export class HelperComponent {
  @Input() text :String = "";
  ngOnInit() {
  }
}

import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Modset } from '../modset';

@Component({
  selector: 'app-modset',
  templateUrl: './modset.component.html',
  styleUrls: ['./modset.component.scss']
})
export class ModsetComponent implements OnInit {

  @Input() model: Modset;

  constructor() {
  }

  ngOnInit() {
  }
}

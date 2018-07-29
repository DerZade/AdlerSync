import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Modset } from '../modset';

@Component({
  selector: 'app-modset',
  templateUrl: './modset.component.html',
  styleUrls: ['./modset.component.scss']
})
export class ModsetComponent implements OnInit {
  expanded: boolean = true;

  @Input() model: Modset;
  @Input() selected: boolean;

  @Output() onSelect = new EventEmitter<Modset>();
  constructor() {
  }

  public onSelectClicked(): void {
    this.onSelect.emit(this.model);
  }

  ngOnInit() {
  }
}

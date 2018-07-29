import { Component, OnInit, Input } from '@angular/core';
import { Mod } from '../mod';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent implements OnInit {
  @Input() model: Mod;
  constructor() {
  }

  ngOnInit() {
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-detail',
  templateUrl: './coche-detail.component.html',
  styleUrls: ['./coche-detail.component.scss']
})
export class CocheDetailComponent implements OnInit {

  @Input() coche: Coche;

  constructor() { }

  ngOnInit(): void {
  }

}

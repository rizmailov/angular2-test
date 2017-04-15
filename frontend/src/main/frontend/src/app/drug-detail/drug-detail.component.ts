import { Component, OnInit, Input } from '@angular/core';
import { Drug } from '../drug';

@Component({
  selector: 'drug-detail',
  templateUrl: './drug-detail.component.html',
  styleUrls: ['./drug-detail.component.css']
})
export class DrugDetailComponent implements OnInit {

  @Input()
  drug: Drug;

  constructor() { }

  ngOnInit() {
  }

}

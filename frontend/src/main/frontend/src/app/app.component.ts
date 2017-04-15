import { Component, OnInit } from '@angular/core';
import { Drug } from './drug';
import { DrugsService } from './drugs.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DrugsService]
})
export class AppComponent implements OnInit {
  title = 'Linker';
  selectedDrug: Drug;
  drugs: Drug[];

  constructor(private drugsService: DrugsService) {}

  onSelect(drug: Drug): void {
    this.selectedDrug = drug;
  }

  getDrugs(): void {
    this.drugsService.getDrugs().then(drugs => this.drugs = drugs);
  }

  ngOnInit(): void {
    this.getDrugs();
  }
}

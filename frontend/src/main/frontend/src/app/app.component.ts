import { Component } from '@angular/core';
import { Drug } from './drug';

const DRUGS: Drug[] = [
  { id: 11, name: 'Drug1' },
  { id: 12, name: 'Drug2' },
  { id: 13, name: 'Drug3' },
  { id: 14, name: 'Drug4' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Linker';
  selectedDrug: Drug;
  drugs = DRUGS;

  onSelect(drug: Drug): void {
    this.selectedDrug = drug;
  }
}

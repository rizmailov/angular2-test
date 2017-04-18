import {Component, OnInit} from '@angular/core';
import {SourcesService} from '../sources.service'
import {Source} from "../source";

@Component({
  selector: 'source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.css']
})
export class SourceSelectorComponent implements OnInit {

  sources: Source[];

  constructor(private sourcesService: SourcesService) {
  }

  ngOnInit() {
    this.sourcesService.getSources().then(sources => this.sources = sources);
  }

}

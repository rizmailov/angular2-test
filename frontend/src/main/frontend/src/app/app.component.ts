import {Component, OnInit} from "@angular/core";
import {Source} from "./source";
import {SourcesService} from "./sources.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sources: Source[];
  selectedSource: Source;

  constructor(private sourcesService: SourcesService) {}

  onSourceSelect(source: Source): void {
    this.selectedSource = source;
  }

  ngOnInit(): void {
    this.sourcesService.getSources().then(sources => this.sources = sources);
  }
}

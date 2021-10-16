import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.component.html',
  styleUrls: ['./representatives.component.css']
})
export class RepresentativesComponent implements OnInit {

  repMap = new Map<String, String[]>();
  firstRow: boolean = true;

  constructor(private modelConstants: ModelConstants) { }

  ngOnInit(): void {
      this.repMap = this.modelConstants.respresentativeMap;
  }

  updateFlag(){
    this.firstRow = false;
  }
}

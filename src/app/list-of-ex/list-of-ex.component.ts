import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-list-of-ex',
  templateUrl: './list-of-ex.component.html',
  styleUrls: ['./list-of-ex.component.css']
})
export class ListOfExComponent implements OnInit {
  // panelOpen = false;
  exStudentMap = new Map<String, String[]>();
  footNoteExList: String = "";
  footNoteMissingExList: String = "";
  constructor(private modeConstants: ModelConstants) { }

  ngOnInit() {
    this.exStudentMap = this.modeConstants.exStudentMap;
    this.footNoteExList = this.modeConstants.footNoteExList;
    this.footNoteMissingExList = this.modeConstants.footNoteMissingExList;
  }

}

import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'praktan-chatra-bharati';
  headerTitle: String = "";
  headerSubtitle: String = "";
  home: String = "";
  representatives: String = "";
  activities: String = "";
  listOfEx: String = "";
  about: String = "";

  constructor(private modelConstants: ModelConstants) {

  }
  ngOnInit() {
    this.headerTitle = this.modelConstants.homeHeader;
    this.headerSubtitle = this.modelConstants.schoolName;
    this.home = this.modelConstants.sectionHome;
    this.representatives = this.modelConstants.sectionRepresentatives;
    this.activities = this.modelConstants.sectionActivities;
    this.listOfEx = this.modelConstants.sectionListOfEx;
    this.about = this.modelConstants.sectionAbout;
  }
}

import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-list-of-activities',
  templateUrl: './list-of-activities.component.html',
  styleUrls: ['./list-of-activities.component.css']
})

export class ListOfActivitiesComponent implements OnInit {

  public activitiesDateWiseMap = new Map<String, String[]>();
  public eventWiseDetailsMap = new Map<String, any>();

  public titleIndex = 0;
  public contentIndex = 1;
  public imageUrlsIndex = 2;

  constructor(private modelConstant: ModelConstants) {
  }

  ngOnInit(): void {

    // fill activities chronology map here
    this.activitiesDateWiseMap.set(this.modelConstant.pastActivities,
      [this.modelConstant.pastDate_WED_2016, this.modelConstant.pastDate_ESS_2020,
      this.modelConstant.pastDate_WM_2021, this.modelConstant.pastDate_ESS_2021]);
    this.activitiesDateWiseMap.set(this.modelConstant.upcomingActivities,
      [this.modelConstant.futureDate_SJEC_2022]);

    // fill date wise details map here 
    this.eventWiseDetailsMap.set(this.modelConstant.pastDate_WED_2016,
      [this.modelConstant.pastDates_WED_2016_title,
      this.modelConstant.pastDates_WED_2016_Total_Content,
      this.modelConstant.pastDates_WED_2016_Image_Urls]);

    this.eventWiseDetailsMap.set(this.modelConstant.pastDate_ESS_2020,
      [this.modelConstant.pastDate_ESS_2020_title,
      this.modelConstant.pastDates_ESS_2020_Total_Content]);

    this.eventWiseDetailsMap.set(this.modelConstant.pastDate_WM_2021,
      [this.modelConstant.pastDate_WM_2021_title,
      this.modelConstant.pastDate_WM_2021_Total_Content,
      this.modelConstant.pastDate_WM_2021_Image_Urls]);

    this.eventWiseDetailsMap.set(this.modelConstant.pastDate_ESS_2021,
      [this.modelConstant.pastDate_ESS_2021_title,
      this.modelConstant.pastDate_ESS_2021_Total_Content,
      this.modelConstant.pastDate_ESS_2021_Image_Urls])

    this.eventWiseDetailsMap.set(this.modelConstant.futureDate_SJEC_2022,
      [this.modelConstant.futureDate_SJEC_2022_title])

  }

  showItem(date: String): boolean {
    let validItem: boolean;
    let showItem: boolean = false;
    try {
      validItem = (this.eventWiseDetailsMap.get(date) && this.eventWiseDetailsMap.get(date)[this.contentIndex]) ? true : false;
      if (validItem && this.eventWiseDetailsMap.get(date)[this.contentIndex].length > 0)
        showItem = true;
    }
    catch (TypeError) { }
    console.log(showItem)
    return showItem;
  }

  getTitle(date: String): String {
    let validItem: boolean;
    try {
      validItem = (this.eventWiseDetailsMap.get(date) && this.eventWiseDetailsMap.get(date)[this.titleIndex]) ? true : false;
      if (validItem)
        return this.eventWiseDetailsMap.get(date)[this.titleIndex];
    }
    catch (TypeError) { }
    return "";
  }

  getContents(date: String): String[] {
    let validItem: boolean;
    try {
      validItem = (this.eventWiseDetailsMap.get(date) && this.eventWiseDetailsMap.get(date)[this.contentIndex]) ? true : false;
      if (validItem)
        return this.eventWiseDetailsMap.get(date)[this.contentIndex];
    } catch (TypeError) { }
    return [""];
  }

  getImageUrls(date: String): String[] {
    let validItem: boolean;
    try {
      validItem = (this.eventWiseDetailsMap.get(date) && this.eventWiseDetailsMap.get(date)[this.imageUrlsIndex]) ? true : false;
      if (validItem)
        return this.eventWiseDetailsMap.get(date)[this.imageUrlsIndex];
    } catch (TypeError) { }
    return [""];
  }

  showCarousel(date: String): boolean {
    let validItem: boolean;
    try {
      validItem = (this.eventWiseDetailsMap.get(date) && this.eventWiseDetailsMap.get(date)[this.imageUrlsIndex]) ? true : false;
      if (validItem && this.eventWiseDetailsMap.get(date)[this.imageUrlsIndex].length > 0)
        return true;
    } catch (TypeError) { }
    return false;
  }

  checkExpansionAvailability(timeline: String): boolean {
    if (timeline === this.modelConstant.upcomingActivities)
      return true;
    return false;
  }

}

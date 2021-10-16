import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDescriptionHist: String = "";
  homeDescriptionPresent: String = "";
  homeDescriptionHopes: String = "";
  homeDescriptionWish: String = "";
  cardTitle: String = "";
  constructor(private modelConstant: ModelConstants) { }

  ngOnInit(): void {
    this.cardTitle = this.modelConstant.homeHeader + "" + this.modelConstant.homeTitle;
    this.homeDescriptionHist = this.modelConstant.homeDescriptionHist;
    this.homeDescriptionPresent = this.modelConstant.homeDescriptionPresent;
    this.homeDescriptionHopes = this.modelConstant.homeDescriptionHopes;
    this.homeDescriptionWish = this.modelConstant.homeDescriptionWish;
  }

}

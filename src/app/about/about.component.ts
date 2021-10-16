import { Component, OnInit } from '@angular/core';
import { ModelConstants } from 'src/ModelConstants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutAndContactConnectRep: String = "";
  aboutAndContactConnectViaEmail: String = "";
  aboutAndContactConnectViaNumberMap = new Map<String, String>();
  aboutAndContactAddress: String = "";
  aboutAndContactAddressPin: String = "";
  aboutAndContactAddressDistrict: String = "";
  aboutAndContactAddressState: String = "";
  aboutAndContactConnectThanks: String = "";
  schoolName: String="";
  emailDomain: String = "";

  constructor(private modelConstant: ModelConstants) { }

  ngOnInit() {
    this.aboutAndContactConnectRep = this.modelConstant.aboutAndContactConnectRep;
    this.aboutAndContactConnectViaEmail = this.modelConstant.aboutAndContactConnectViaEmail;
    this.aboutAndContactConnectViaNumberMap = this.modelConstant.aboutAndContactConnectViaNumberMap;
    this.aboutAndContactAddress = this.modelConstant.aboutAndContactAddress;
    this.aboutAndContactAddressPin = this.modelConstant.aboutAndContactAddressPin;
    this.aboutAndContactAddressDistrict = this.modelConstant.aboutAndContactAddressDistrict;
    this.aboutAndContactAddressState = this.modelConstant.aboutAndContactAddressState;
    this.aboutAndContactConnectThanks = this.modelConstant.aboutAndContactConnectThanks;
    this.schoolName = this.modelConstant.schoolName;
    this.emailDomain = this.modelConstant.emailDomain;
  }

}

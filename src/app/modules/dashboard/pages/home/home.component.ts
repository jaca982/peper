import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vsCI = false;
  vsPlayer = false;
  dropdownLabel = 'Choose Attribute';

  constructor() {}

  ngOnInit() {}

  selectVsOption(isComputer: boolean) {
    if (isComputer) {
      this.vsCI = true;
      this.vsPlayer = false;
    } else {
      this.vsCI = false;
      this.vsPlayer = true;
    }
  }

  attributeSelect(attribute) {
    console.log(attribute);
  }
}

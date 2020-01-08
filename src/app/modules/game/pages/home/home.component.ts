import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vsCI = false;
  vsPlayer = false;
  dropdownLabel = 'Choose Attribute';
  dropdownOptions = ['Length', 'Crew', 'Cargo capacity', 'Cost in credits', 'Passengers'];

  constructor(private router: Router) {}

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

  navigateToGametable() {
    this.router.navigate(['/game']);
  }

  attributeSelect(attribute) {
    console.log(attribute);
  }
}

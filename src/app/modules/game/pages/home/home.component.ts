import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsService } from '@app/core/services/game-settings.service';
import { GameConfigModel } from '@app/core/models/game-config';
import { DropdownOptionModel } from '@app/modules/shared/components/dropdown/models/dropdown-option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vsCI = false;
  vsPlayer = false;
  dropdownLabel = 'Choose Attribute';
  dropdownOptions: DropdownOptionModel[] = [
    { label: 'Length', value: 'length' },
    { label: 'Crew', value: 'crew' },
    { label: 'Cargo capacity', value: 'cargo' },
    { label: 'Cost in credits', value: 'cost' },
    { label: 'Passengers', value: 'passengers' }
  ];
  settings: GameConfigModel = {
    players: null,
    attribute: undefined
  };

  constructor(private router: Router, private settingsService: GameSettingsService) {}

  ngOnInit() {}

  selectVsOption(isComputer: boolean) {
    if (isComputer) {
      this.settings.players = 0;
      this.vsCI = true;
      this.vsPlayer = false;
    } else {
      this.settings.players = 1;
      this.vsCI = false;
      this.vsPlayer = true;
    }
  }

  navigateToGametable() {
    this.settingsService.setGameSettings(this.settings);
    this.router.navigate(['/game']);
  }

  attributeSelect(attribute) {
    this.settings.attribute = attribute;
  }
}

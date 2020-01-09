import { DropdownOptionModel } from '@app/modules/shared/components/dropdown/models/dropdown-option';

export interface GameConfigModel {
  players: 0 | 1;
  attribute: DropdownOptionModel;
}

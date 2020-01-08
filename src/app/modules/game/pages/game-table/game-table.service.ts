import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GameTableService {
  constructor(private apiService: ApiService) {}

  getCard() {
    return this.apiService.get('starships/9');
  }
}

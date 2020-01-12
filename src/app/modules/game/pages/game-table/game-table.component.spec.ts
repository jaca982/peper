import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTableComponent } from './game-table.component';
import { CardComponent } from '@app/modules/shared/components/card/card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('GameTableComponent', () => {
  let component: GameTableComponent;
  let fixture: ComponentFixture<GameTableComponent>;
  const mockAttribute = {
    label: 'Crew',
    value: 'crew'
  };

  const mockCards = [
    { name: 'testName', length: 12, crew: 10, cargo: 1, cost: 1, passengers: 1 },
    { name: 'testName', length: 12, crew: 15, cargo: 1, cost: 1, passengers: 1 }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameTableComponent, CardComponent],
      imports: [RouterTestingModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display players counter', () => {
    component.playerOneCounter = 0;
    component.playerOneCounter = 0;
    const counter: HTMLElement = fixture.debugElement.query(By.css('.count__one')).nativeElement;
    const counter1: HTMLElement = fixture.debugElement.query(By.css('.count__two')).nativeElement;
    fixture.detectChanges();
    expect(counter.textContent).toContain('0');
    expect(counter1.textContent).toContain('0');
  });

  it('should change round counter and clear cards masks when round starts', () => {
    component.roundCounter = 1;
    component.startRound();
    fixture.detectChanges();
    expect(component.card1Lose).toEqual(false);
    expect(component.card2Lose).toEqual(false);
    expect(component.roundCounter).toEqual(2);
  });

  it('should choose win card', () => {
    component.playerOneCounter = 0;
    component.playerTwoCounter = 0;
    component.battleAttribute = mockAttribute;
    component.cardsBattle(mockCards);
    fixture.detectChanges();
    expect(component.playerTwoCounter).toEqual(1);
    expect(component.card1Lose).toEqual(true);
  });
});

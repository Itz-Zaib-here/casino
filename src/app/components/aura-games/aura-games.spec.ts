import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuraGames } from './aura-games';

describe('AuraGames', () => {
  let component: AuraGames;
  let fixture: ComponentFixture<AuraGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuraGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuraGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

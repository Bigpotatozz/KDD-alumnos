import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentytwoComponent } from './twentytwo.component';

describe('TwentytwoComponent', () => {
  let component: TwentytwoComponent;
  let fixture: ComponentFixture<TwentytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwentytwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwentytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

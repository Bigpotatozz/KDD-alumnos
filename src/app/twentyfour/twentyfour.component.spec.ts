import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfourComponent } from './twentyfour.component';

describe('TwentyfourComponent', () => {
  let component: TwentyfourComponent;
  let fixture: ComponentFixture<TwentyfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwentyfourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwentyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

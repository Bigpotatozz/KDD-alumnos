import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentythreComponent } from './twentythre.component';

describe('TwentythreComponent', () => {
  let component: TwentythreComponent;
  let fixture: ComponentFixture<TwentythreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwentythreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwentythreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOptionsComponent } from './right-options.component';

describe('RightOptionsComponent', () => {
  let component: RightOptionsComponent;
  let fixture: ComponentFixture<RightOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOfServicesComponent } from './banner-of-services.component';

describe('BannerOfServicesComponent', () => {
  let component: BannerOfServicesComponent;
  let fixture: ComponentFixture<BannerOfServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerOfServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

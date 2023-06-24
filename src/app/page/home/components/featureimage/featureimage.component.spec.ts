import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureimageComponent } from './featureimage.component';

describe('FeatureimageComponent', () => {
  let component: FeatureimageComponent;
  let fixture: ComponentFixture<FeatureimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureimageComponent]
    });
    fixture = TestBed.createComponent(FeatureimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbFormComponent } from './hb-form.component';

describe('HbFormComponent', () => {
  let component: HbFormComponent;
  let fixture: ComponentFixture<HbFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HbFormComponent]
    });
    fixture = TestBed.createComponent(HbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

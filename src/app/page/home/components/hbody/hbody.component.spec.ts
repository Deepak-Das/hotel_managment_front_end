import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbodyComponent } from './hbody.component';

describe('HbodyComponent', () => {
  let component: HbodyComponent;
  let fixture: ComponentFixture<HbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HbodyComponent]
    });
    fixture = TestBed.createComponent(HbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

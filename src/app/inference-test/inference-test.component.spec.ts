import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceTestComponent } from './inference-test.component';

describe('InferenceTestComponent', () => {
  let component: InferenceTestComponent;
  let fixture: ComponentFixture<InferenceTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InferenceTestComponent]
    });
    fixture = TestBed.createComponent(InferenceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

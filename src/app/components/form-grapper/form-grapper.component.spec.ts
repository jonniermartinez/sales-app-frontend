import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrapperComponent } from './form-grapper.component';

describe('FormGrapperComponent', () => {
  let component: FormGrapperComponent;
  let fixture: ComponentFixture<FormGrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

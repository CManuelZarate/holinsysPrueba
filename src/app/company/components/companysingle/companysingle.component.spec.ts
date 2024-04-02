import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysingleComponent } from './companysingle.component';

describe('CompanysingleComponent', () => {
  let component: CompanysingleComponent;
  let fixture: ComponentFixture<CompanysingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanysingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

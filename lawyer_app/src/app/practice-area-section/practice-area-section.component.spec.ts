import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaSectionComponent } from './practice-area-section.component';

describe('PracticeAreaSectionComponent', () => {
  let component: PracticeAreaSectionComponent;
  let fixture: ComponentFixture<PracticeAreaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeAreaSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

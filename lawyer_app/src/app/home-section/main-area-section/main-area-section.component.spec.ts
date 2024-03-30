import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAreaSectionComponent } from './main-area-section.component';

describe('MainAreaSectionComponent', () => {
  let component: MainAreaSectionComponent;
  let fixture: ComponentFixture<MainAreaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAreaSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTestimonialsSectionComponent } from './client-testimonials-section.component';

describe('ClientTestimonialsSectionComponent', () => {
  let component: ClientTestimonialsSectionComponent;
  let fixture: ComponentFixture<ClientTestimonialsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTestimonialsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientTestimonialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

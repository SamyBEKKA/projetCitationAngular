import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCitationsComponent } from './creation-citations.component';

describe('CreationCitationsComponent', () => {
  let component: CreationCitationsComponent;
  let fixture: ComponentFixture<CreationCitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationCitationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

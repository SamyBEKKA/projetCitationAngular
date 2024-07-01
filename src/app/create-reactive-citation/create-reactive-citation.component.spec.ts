import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactiveCitationComponent } from './create-reactive-citation.component';

describe('CreateReactiveCitationComponent', () => {
  let component: CreateReactiveCitationComponent;
  let fixture: ComponentFixture<CreateReactiveCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReactiveCitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReactiveCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

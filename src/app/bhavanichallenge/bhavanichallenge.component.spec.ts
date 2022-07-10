import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhavanichallengeComponent } from './bhavanichallenge.component';

describe('BhavanichallengeComponent', () => {
  let component: BhavanichallengeComponent;
  let fixture: ComponentFixture<BhavanichallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhavanichallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhavanichallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

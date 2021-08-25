import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettermovementComponent } from './lettermovement.component';

describe('LettermovementComponent', () => {
  let component: LettermovementComponent;
  let fixture: ComponentFixture<LettermovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettermovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettermovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

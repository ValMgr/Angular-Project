import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTopComponent } from './track-top.component';

describe('TrackTopComponent', () => {
  let component: TrackTopComponent;
  let fixture: ComponentFixture<TrackTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

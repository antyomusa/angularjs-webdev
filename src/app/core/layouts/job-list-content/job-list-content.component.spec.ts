import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListContentComponent } from './job-list-content.component';

describe('JobListContentComponent', () => {
  let component: JobListContentComponent;
  let fixture: ComponentFixture<JobListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

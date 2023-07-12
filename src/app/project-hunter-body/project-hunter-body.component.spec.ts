import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHunterBodyComponent } from './project-hunter-body.component';

describe('ProjectHunterBodyComponent', () => {
  let component: ProjectHunterBodyComponent;
  let fixture: ComponentFixture<ProjectHunterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHunterBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHunterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

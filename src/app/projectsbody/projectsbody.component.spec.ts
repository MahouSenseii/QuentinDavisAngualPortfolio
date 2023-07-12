import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsbodyComponent } from './projectsbody.component';

describe('ProjectsbodyComponent', () => {
  let component: ProjectsbodyComponent;
  let fixture: ComponentFixture<ProjectsbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

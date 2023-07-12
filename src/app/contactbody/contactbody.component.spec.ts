import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbodyComponent } from './contactbody.component';

describe('ContactbodyComponent', () => {
  let component: ContactbodyComponent;
  let fixture: ComponentFixture<ContactbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

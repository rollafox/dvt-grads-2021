import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListEditorComponent } from './user-list-editor.component';

describe('UserListEditorComponent', () => {
  let component: UserListEditorComponent;
  let fixture: ComponentFixture<UserListEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

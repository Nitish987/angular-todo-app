import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavComponent } from './todo-nav.component';

describe('TodoNavComponent', () => {
  let component: TodoNavComponent;
  let fixture: ComponentFixture<TodoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoNavComponent]
    });
    fixture = TestBed.createComponent(TodoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

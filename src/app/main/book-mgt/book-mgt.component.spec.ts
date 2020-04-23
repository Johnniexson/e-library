import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMgtComponent } from './book-mgt.component';

describe('BookMgtComponent', () => {
  let component: BookMgtComponent;
  let fixture: ComponentFixture<BookMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

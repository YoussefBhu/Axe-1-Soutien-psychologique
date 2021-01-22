import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuggestionsComponent } from './add-suggestions.component';

describe('AddSuggestionsComponent', () => {
  let component: AddSuggestionsComponent;
  let fixture: ComponentFixture<AddSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

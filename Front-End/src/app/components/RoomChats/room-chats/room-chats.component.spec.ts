import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChatsComponent } from './room-chats.component';

describe('RoomChatsComponent', () => {
  let component: RoomChatsComponent;
  let fixture: ComponentFixture<RoomChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomChatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

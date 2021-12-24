import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewChannelComponent } from './modal-new-channel.component';

describe('ModalNewChannelComponent', () => {
  let component: ModalNewChannelComponent;
  let fixture: ComponentFixture<ModalNewChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

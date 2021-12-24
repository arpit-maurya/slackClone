import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardSlackComponent } from './dash-board-slack.component';

describe('DashBoardSlackComponent', () => {
  let component: DashBoardSlackComponent;
  let fixture: ComponentFixture<DashBoardSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardSlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

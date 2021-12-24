import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSlackComponent } from './side-bar-slack.component';

describe('SideBarSlackComponent', () => {
  let component: SideBarSlackComponent;
  let fixture: ComponentFixture<SideBarSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSlackComponent } from './header-slack.component';

describe('HeaderSlackComponent', () => {
  let component: HeaderSlackComponent;
  let fixture: ComponentFixture<HeaderSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

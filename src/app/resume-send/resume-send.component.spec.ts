import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSendComponent } from './resume-send.component';

describe('ResumeSendComponent', () => {
  let component: ResumeSendComponent;
  let fixture: ComponentFixture<ResumeSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeSendComponent]
    });
    fixture = TestBed.createComponent(ResumeSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

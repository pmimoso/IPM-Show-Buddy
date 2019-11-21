import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinerComponent } from './progress-spiner.component';

describe('ProgressSpinerComponent', () => {
  let component: ProgressSpinerComponent;
  let fixture: ComponentFixture<ProgressSpinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

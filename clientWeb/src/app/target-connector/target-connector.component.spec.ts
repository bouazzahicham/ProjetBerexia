import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetConnectorComponent } from './target-connector.component';

describe('TargetConnectorComponent', () => {
  let component: TargetConnectorComponent;
  let fixture: ComponentFixture<TargetConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

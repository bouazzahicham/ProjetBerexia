import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceConnectorComponent } from './source-connector.component';

describe('SourceConnectorComponent', () => {
  let component: SourceConnectorComponent;
  let fixture: ComponentFixture<SourceConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformaionComponent } from './transformaion.component';

describe('TransformaionComponent', () => {
  let component: TransformaionComponent;
  let fixture: ComponentFixture<TransformaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FourComponent } from './four.component';

describe('FourComponent', () => {
  let component: FourComponent;
  let fixture: ComponentFixture<FourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

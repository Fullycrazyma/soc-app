/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocioTableComponent } from './socio-table.component';

describe('SocioTableComponent', () => {
  let component: SocioTableComponent;
  let fixture: ComponentFixture<SocioTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

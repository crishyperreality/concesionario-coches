import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesTableComponent } from './coches-table.component';

describe('CochesTableComponent', () => {
  let component: CochesTableComponent;
  let fixture: ComponentFixture<CochesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

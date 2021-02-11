import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheEditComponent } from './coche-edit.component';

describe('CocheEditComponent', () => {
  let component: CocheEditComponent;
  let fixture: ComponentFixture<CocheEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

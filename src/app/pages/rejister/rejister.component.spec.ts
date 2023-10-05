import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejisterComponent } from './rejister.component';

describe('RejisterComponent', () => {
  let component: RejisterComponent;
  let fixture: ComponentFixture<RejisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

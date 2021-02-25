import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTopNavComponent } from './primary-top-nav.component';

describe('PrimaryTopNavComponent', () => {
  let component: PrimaryTopNavComponent;
  let fixture: ComponentFixture<PrimaryTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

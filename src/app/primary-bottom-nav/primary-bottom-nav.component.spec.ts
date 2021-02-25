import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryBottomNavComponent } from './primary-bottom-nav.component';

describe('PrimaryBottomNavComponent', () => {
  let component: PrimaryBottomNavComponent;
  let fixture: ComponentFixture<PrimaryBottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryBottomNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

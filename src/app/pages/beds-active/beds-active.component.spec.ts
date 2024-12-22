import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsActiveComponent } from './beds-active.component';

describe('BedsActiveComponent', () => {
  let component: BedsActiveComponent;
  let fixture: ComponentFixture<BedsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedsActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

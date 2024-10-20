import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comb1Component } from './comb1.component';

describe('Comb1Component', () => {
  let component: Comb1Component;
  let fixture: ComponentFixture<Comb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comb1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comb2Component } from './comb2.component';

describe('Comb2Component', () => {
  let component: Comb2Component;
  let fixture: ComponentFixture<Comb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comb2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeUiComponent } from './poe-ui.component';

describe('PoeUiComponent', () => {
  let component: PoeUiComponent;
  let fixture: ComponentFixture<PoeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoeUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

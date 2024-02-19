import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWebComponent } from './portfolio-web.component';

describe('PortfolioWebComponent', () => {
  let component: PortfolioWebComponent;
  let fixture: ComponentFixture<PortfolioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

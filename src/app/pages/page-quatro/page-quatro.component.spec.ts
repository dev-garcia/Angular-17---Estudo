import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuatroComponent } from './page-quatro.component';

describe('PageQuatroComponent', () => {
  let component: PageQuatroComponent;
  let fixture: ComponentFixture<PageQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageQuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

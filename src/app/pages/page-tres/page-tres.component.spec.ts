import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTresComponent } from './page-tres.component';

describe('PageTresComponent', () => {
  let component: PageTresComponent;
  let fixture: ComponentFixture<PageTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUmComponent } from './page-um.component';

describe('PageUmComponent', () => {
  let component: PageUmComponent;
  let fixture: ComponentFixture<PageUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

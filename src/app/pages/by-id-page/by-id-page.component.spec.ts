import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByIdPageComponent } from './by-id-page.component';

describe('ByIdPageComponent', () => {
  let component: ByIdPageComponent;
  let fixture: ComponentFixture<ByIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByIdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

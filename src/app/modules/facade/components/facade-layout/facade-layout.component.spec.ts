import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadeLayoutComponent } from './facade-layout.component';

describe('FacadeLayoutComponent', () => {
  let component: FacadeLayoutComponent;
  let fixture: ComponentFixture<FacadeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacadeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

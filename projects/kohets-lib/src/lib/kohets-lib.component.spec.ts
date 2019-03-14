import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KohetsLibComponent } from './kohets-lib.component';

describe('KohetsLibComponent', () => {
  let component: KohetsLibComponent;
  let fixture: ComponentFixture<KohetsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KohetsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KohetsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

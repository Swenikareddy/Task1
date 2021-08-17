import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoswallComponent } from './kudoswall.component';

describe('KudoswallComponent', () => {
  let component: KudoswallComponent;
  let fixture: ComponentFixture<KudoswallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KudoswallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KudoswallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

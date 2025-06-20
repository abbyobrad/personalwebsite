import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMvp } from './your-mvp';

describe('YourMvp', () => {
  let component: YourMvp;
  let fixture: ComponentFixture<YourMvp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourMvp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourMvp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

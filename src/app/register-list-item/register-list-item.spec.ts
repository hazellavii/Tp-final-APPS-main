import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterListItem } from './register-list-item';

describe('RegisterListItem', () => {
  let component: RegisterListItem;
  let fixture: ComponentFixture<RegisterListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreateComponent } from './animal-create.component';

describe('AnimalCreateDialogComponent', () => {
  let component: AnimalCreateComponent;
  let fixture: ComponentFixture<AnimalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

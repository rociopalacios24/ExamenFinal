import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumvComponent } from './curriculumv.component';

describe('CurriculumvComponent', () => {
  let component: CurriculumvComponent;
  let fixture: ComponentFixture<CurriculumvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

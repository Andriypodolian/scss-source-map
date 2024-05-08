import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSourceMapComponent } from './test-source-map.component';

describe('TestSourceMapComponent', () => {
  let component: TestSourceMapComponent;
  let fixture: ComponentFixture<TestSourceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestSourceMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestSourceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalformComponent } from './graphicalform.component';

describe('GraphicalformComponent', () => {
  let component: GraphicalformComponent;
  let fixture: ComponentFixture<GraphicalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

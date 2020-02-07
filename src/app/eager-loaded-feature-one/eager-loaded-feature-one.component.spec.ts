import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerLoadedFeatureOneComponent } from './eager-loaded-feature-one.component';

describe('EagerLoadedFeatureOneComponent', () => {
  let component: EagerLoadedFeatureOneComponent;
  let fixture: ComponentFixture<EagerLoadedFeatureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerLoadedFeatureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerLoadedFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

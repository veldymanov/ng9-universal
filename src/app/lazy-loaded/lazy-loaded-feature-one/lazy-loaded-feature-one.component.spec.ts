import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedFeatureOneComponent } from './lazy-loaded-feature-one.component';

describe('LazyLoadedFeatureOneComponent', () => {
  let component: LazyLoadedFeatureOneComponent;
  let fixture: ComponentFixture<LazyLoadedFeatureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedFeatureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

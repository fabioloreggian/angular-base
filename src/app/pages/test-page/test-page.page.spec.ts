import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageComponent } from './test-page.page';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';

describe('TestPageComponent', () => {
  let component: TestPageComponent;
  let fixture: ComponentFixture<TestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageComponent ],
      imports: [
        ComponentsModule,
        SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

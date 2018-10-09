import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { TestServiceService } from './shared/test-service/test-service.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PagesModule,
        ComponentsModule,
        RoutingModule,
        FormsModule,
        SharedModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

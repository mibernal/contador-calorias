import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComidaPage } from './registro-comida.page';

describe('RegistroComidaPage', () => {
  let component: RegistroComidaPage;
  let fixture: ComponentFixture<RegistroComidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaComidasPage } from './lista-comidas.page';

describe('ListaComidasPage', () => {
  let component: ListaComidasPage;
  let fixture: ComponentFixture<ListaComidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaComidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

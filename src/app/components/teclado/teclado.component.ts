import { Component, HostListener } from '@angular/core';
import { DadosCalculadoraService } from '../../services/dadosCalculadoraService/dados-calculadora.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css',
})
export class TecladoComponent {
  constructor(private dadosCalculadoraService: DadosCalculadoraService) {}

  public value: string = '';

  private validButtons: Array<string> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '/',
    '*',
  ];

  // Para pegar as teclas do teclado
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.validButtons.includes(event.key)) {
      this.setValue(event.key);
    } else if (event.key == 'c') {
      this.clear();
    } else if (event.key == 'Enter') {
      this.calculate();
    }
  }

  setValue(digit: string) {
    this.dadosCalculadoraService.setValue(digit);
    this.value = this.dadosCalculadoraService.getValue();
  }

  calculate() {
    this.dadosCalculadoraService.calculate();
    this.value = this.dadosCalculadoraService.getValue();
  }

  clear() {
    this.dadosCalculadoraService.clear();
    this.value = this.dadosCalculadoraService.getValue();
  }
}

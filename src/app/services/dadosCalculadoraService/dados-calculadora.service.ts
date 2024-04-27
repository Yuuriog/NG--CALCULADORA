import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosCalculadoraService {
  constructor() {}

  private value: string = '';

  private operators: Array<string> = ['+', '-', '*', '/'];

  getValue(): string {
    return this.value;
  }

  setValue(digit: string) {
    const lastChar = this.value.slice(-1);

    // Verifica se o digito é um operador (com exceção do operador de menos) e se a string está vazia. Se sim, ele impede do digito ser inserido
    if (
      (digit == '+' || digit == '*' || digit == '/') &&
      this.value.length == 0
    )
      return;

    if (this.operators.includes(lastChar) && this.operators.includes(digit)) {
      // Verifica se o último caractere é um operador e o novo dígito também é um operador
      // Se sim, substitui o último operador pelo novo dígito
      this.value = this.value.slice(0, -1) + digit;
    } else {
      if (lastChar == '0' && digit != '0' && this.value.length <= 1) {
        this.value = this.value.substring(1);
      }
      if (lastChar == '0' && digit == '0' && this.value.length <= 1) {
        return;
      }

      // Caso contrário, concatena o novo dígito ao valor atual
      this.value += digit;
    }
  }

  clear() {
    this.value = '';
  }

  calculate() {
    try {
      // Usa a função eval() para calcular o resultado da expressão
      this.value = eval(this.value).toString();
    } catch (error) {
      // Em caso de erro na expressão, exibe uma mensagem de erro
      alert('Algo deu errado');
      this.value = '';
    }
  }
}

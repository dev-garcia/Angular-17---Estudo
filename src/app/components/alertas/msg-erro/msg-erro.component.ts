import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-msg-erro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg-erro.component.html',
  styleUrl: './msg-erro.component.css',
})
export class MsgErroComponent {
  AlertaDeErro() {
    Swal.fire({
      title: 'Erro!',
      text: 'Erro ao executar',
      icon: 'error',
      confirmButtonText: 'Fechar',
    });
  }
}

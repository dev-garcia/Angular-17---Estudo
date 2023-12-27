import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-msg-sucesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg-sucesso.component.html',
  styleUrl: './msg-sucesso.component.css',
})
export class MsgSucessoComponent {
  AlertaDeSucesso() {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Alterado!',
      icon: 'success',
    });
  }
}

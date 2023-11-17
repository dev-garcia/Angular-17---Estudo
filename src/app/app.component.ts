import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste-angular-dezessete';

  showAlert() {
    Swal.fire({
      title: 'Erro!',
      text: 'Erro ao executar',
      icon: 'error',
      confirmButtonText: 'Fechar',
    });
  }

  AlertaDeSucesso() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
    });
  }
}

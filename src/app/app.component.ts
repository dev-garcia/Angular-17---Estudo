import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErroComponent } from './components/alertas/msg-erro/msg-erro.component';
import { MsgSucessoComponent } from './components/alertas/msg-sucesso/msg-sucesso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MsgErroComponent, MsgSucessoComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste-angular-dezessete';
}

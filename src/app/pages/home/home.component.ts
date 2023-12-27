import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErroComponent } from '../../components/alertas/msg-erro/msg-erro.component';
import { MsgSucessoComponent } from '../../components/alertas/msg-sucesso/msg-sucesso.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MsgErroComponent, MsgSucessoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

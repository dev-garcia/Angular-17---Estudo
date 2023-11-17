import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { initFlowbite } from 'flowbite';

import { MsgErroComponent } from './components/alertas/msg-erro/msg-erro.component';
import { MsgSucessoComponent } from './components/alertas/msg-sucesso/msg-sucesso.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MsgErroComponent, MsgSucessoComponent, RouterOutlet],
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste-angular-dezessete';

  ngOnInit():void {
    initFlowbite
  }
}

import { Routes } from '@angular/router';
import { PageUmComponent } from './pages/page-um/page-um.component';
import { PageDoisComponent } from './pages/page-dois/page-dois.component';
import { PageTresComponent } from './pages/page-tres/page-tres.component';
import { PageQuatroComponent } from './pages/page-quatro/page-quatro.component';

export const routes: Routes = [
  {
    path: 'page-um',
    component: PageUmComponent,
    title: 'Pagina 1',
  },
  { path: 'page-dois', component: PageDoisComponent, title: 'Pagina 2' },
  { path: 'page-tres', component: PageTresComponent, title: 'Pagina 3' },
  { path: 'page-quatro', component: PageQuatroComponent, title: 'Pagina 4' },
];

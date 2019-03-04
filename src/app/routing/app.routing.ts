import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DataComponent } from '../data/data.component';
import { DataResolver } from 'src/resolvers/data.resolver';


const routes: Routes =  [
  { path: '', component: HomeComponent },
  { path: 'mydata', component: DataComponent ,
    resolve: {
      loadedJsonData: DataResolver
    }
  }
];

export const routing = RouterModule.forRoot(routes);

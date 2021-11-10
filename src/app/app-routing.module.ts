import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    children:[
      {
        path:"",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":prodID",
        loadChildren: () => import('./productos/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
      }
    ]
  },
  {
    path: 'agregar-producto',
    loadChildren : () => import('./productos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actualizar-producto/:prodID',
    loadChildren : () => import('./productos/actualizar-producto/actualizar-producto.module').then( m => m.ActualizarProductoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

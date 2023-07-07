import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ClientesCreateComponent } from "./components/clientes-create/clientes-create.component";
import { ClientesUpdateComponent } from "./components/clientes-update/clientes-update.component";

const routes: Routes = [
    {
        path: '',
        component: ClientesComponent
    },
    {
        path: 'criar',
        component: ClientesCreateComponent
    },
    {
        path: 'editar/:id',
        component: ClientesUpdateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule {}
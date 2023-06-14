import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ClientesCreateComponent } from "./components/clientes-create/clientes-create.component";

const routes: Routes = [
    {
        path: '',
        component: ClientesComponent
    },
    {
        path: 'criar',
        component: ClientesCreateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule {}
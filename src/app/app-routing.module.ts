import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  {
    path: "getting-started",
    component: LandingComponent,
  },
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then((d) => d.MainModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "getting-started",
  },
  {
    path: "**",
    redirectTo: "getting-started",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

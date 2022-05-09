import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"contact",component: ContactComponent
  },
  {
    path:"portfolio",component: PortfolioComponent
  },
  {
    path:"testimonials",component: TestimonialsComponent
  },
  {
    path:"customers",component: CustomersComponent
  },
  {
    path:"contact",component: ContactComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

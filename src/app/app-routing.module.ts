import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { TipsComponent } from './carousel/tips/tips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FaqComponent } from './faq/faq.component';
import { BloodAvailablityService } from './service/blood-availablity.service';
import { FindbloodComponent } from './carousel/findblood/findblood.component';
import { ExperienceComponent } from './experience/experience.component';
import { SlotComponent } from './slot/slot.component';
import { AuthGuard } from './service/auth.guard';
import { RegisterComponent } from './site/login/register/register.component';
import { BloodrequirementComponent } from './carousel/bloodrequirement/bloodrequirement.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminUnitComponent } from './admin/admin-unit/admin-unit.component';
import { ContactComponent } from './contact/contact.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FaqNewComponent } from './revamp/faq-new/faq-new.component';
import { BloodDetailsComponent } from './revamp/blood-details/blood-details.component';
import { DonorDetailsComponent } from './revamp/donor-details/donor-details.component';
import { BloodBankDetailsComponent } from './revamp/blood-bank-details/blood-bank-details.component';
import { BloodDonationCampComponent } from './revamp/blood-donation-camp/blood-donation-camp.component';
import { DonationCampListComponent } from './revamp/donation-camp-list/donation-camp-list.component';
import { CreditsComponent } from './revamp/credits/credits.component';
import { BloodBankListComponent } from './revamp/blood-bank-list/blood-bank-list.component';
import { BloodListComponent } from './revamp/blood-list/blood-list.component';
import { DonorListComponent } from './revamp/donor-list/donor-list.component';
import { RegisterBloodBankComponent } from './revamp/register-blood-bank/register-blood-bank.component';
import { LoadingPageComponent } from './revamp/loading-page/loading-page.component';
import { ManageBloodComponent } from './revamp/manage-blood/manage-blood.component';
import { NotFoundComponent } from './revamp/not-found/not-found.component';
import { DonationCampDetailComponent } from './revamp/donation-camp-detail/donation-camp-detail.component';


const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'home' , component : CarouselComponent},
{path : 'faq', component : FaqNewComponent},
{path : 'blood-donation' , component : FindbloodComponent, /* canActivate: [AuthGuard] */ 
 children: [
  {path : 'blood-donation-camps', component:DonationCampListComponent},
  {path : 'blood-banks', component:BloodBankListComponent},
  {path : 'blood', component:BloodListComponent},
  {path : 'donor', component:DonorListComponent}
 ]
},
{path : 'feedback', component : ExperienceComponent, canActivate: [AuthGuard]} ,
{path : 'slot' , component :SlotComponent , canActivate: [AuthGuard]  },
{path : 'register' , component : RegisterComponent},
{path : 'register-bloodbank', component:RegisterBloodBankComponent},
{path : 'blood-requirement', component :BloodrequirementComponent,canActivate: [AuthGuard]},
{path : 'my-requests', component : MyRequestComponent, canActivate: [AuthGuard] },
{path : 'adminFaq' , component : AdminComponent,  canActivate: [AuthGuard] },
{path : 'admin-unit', component : AdminUnitComponent, canActivate: [AuthGuard] },
{path : 'manage-blood', component : ManageBloodComponent, canActivate: [AuthGuard] },
{path : 'contact', component :ContactComponent},
{path : 'donor-registration', component: DonorRegistrationComponent, canActivate: [AuthGuard] },
{path : 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
{path : 'blood-details/:id', component:BloodDetailsComponent, canActivate: [AuthGuard]},
{path : 'donor-details', component:DonorDetailsComponent, canActivate: [AuthGuard]},
{path : 'credits', component:CreditsComponent},
{path : 'loading-page', component:LoadingPageComponent,canActivate: [AuthGuard]},
{path : '' , component : CarouselComponent},
{path : 'donation-camp-detail/:id' , component : DonationCampDetailComponent},
{path: '404', component: NotFoundComponent},
 {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

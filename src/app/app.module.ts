import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './site/login/register/register.component';
import { ExperienceComponent } from './experience/experience.component';
import { FaqComponent } from './faq/faq.component';
import { FindbloodComponent } from './carousel/findblood/findblood.component';
import { BloodrequirementComponent } from './carousel/bloodrequirement/bloodrequirement.component';
import { MoreComponent } from './carousel/more/more.component';
import { ContactComponent } from './contact/contact.component';
import { NewPageComponent } from './new-page/new-page.component';
import { TipsComponent } from './carousel/tips/tips.component';
import { LoginTabComponent } from './site/login/login-tab/login-tab.component';
import { SlotComponent } from './slot/slot.component';
import { ShowBLoodAvailablityComponent } from './show-blood-availablity/show-blood-availablity.component';
import { HttpClientModule } from '@angular/common/http';
import { MyRequestComponent } from './my-request/my-request.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminUnitComponent } from './admin/admin-unit/admin-unit.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FaqInfoComponent } from './admin/faq-info/faq-info.component';
import { FaqNewComponent } from './revamp/faq-new/faq-new.component';
import { IndividualFindBloodComponent } from './revamp/individual-find-blood/individual-find-blood.component';
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
import { IndividualMyRequestComponent } from './revamp/individual-my-request/individual-my-request.component';
import { LoadingPageComponent } from './revamp/loading-page/loading-page.component';
import { ManageBloodComponent } from './revamp/manage-blood/manage-blood.component';
import { IndividualAdminFaqComponent } from './individual-admin-faq/individual-admin-faq.component';
import { NotFoundComponent } from './revamp/not-found/not-found.component';
import { DonationCampIndividualComponent } from './revamp/donation-camp-individual/donation-camp-individual.component';
import { DonationCampDetailComponent } from './revamp/donation-camp-detail/donation-camp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,
    ExperienceComponent,
    FaqComponent,
    FindbloodComponent,
    BloodrequirementComponent,
    MoreComponent,
    ContactComponent,
    NewPageComponent,
    TipsComponent,
    LoginTabComponent,
    SlotComponent,
    ShowBLoodAvailablityComponent,
    MyRequestComponent,
    AdminComponent,
    AdminUnitComponent,
    DonorRegistrationComponent,
    AdminDashboardComponent,
    FaqInfoComponent,
    FaqNewComponent,
    IndividualFindBloodComponent,
    BloodDetailsComponent,
    DonorDetailsComponent,
    BloodBankDetailsComponent,
    BloodDonationCampComponent,
    DonationCampListComponent,
    CreditsComponent,
    BloodBankListComponent,
    BloodListComponent,
    DonorListComponent,
    RegisterBloodBankComponent,
    IndividualMyRequestComponent,
    LoadingPageComponent,
    ManageBloodComponent,
    IndividualAdminFaqComponent,
    NotFoundComponent,
    DonationCampIndividualComponent,
    DonationCampDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

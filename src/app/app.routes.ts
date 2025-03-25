import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { BusinessLoansComponent } from './pages/business-loans/business-loans.component';
import { BusinessLoanItemComponent } from './pages/business-loan-item/business-loan-item.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "apply-now",
        component: ApplyComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "business-loans",
        component: BusinessLoansComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "business-loans/:id",
        component: BusinessLoanItemComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "faq",
        component: FaqComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "about-us",
        component: AboutUsComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "contact-us",
        component: ContactUsComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "terms-of-use",
        component: TermsOfUseComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicyComponent,
        data: {
            title: "Winchester Funding Solution - We help your small business get the funding you need fast.",
            description: "Winchester Funding Solution - We help your small business get the funding you need fast."
        }
    }
];

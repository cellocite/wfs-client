import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      title: "General FAQ",
      faq: [
        {
          q: "Who is Winchester Funding Solutions?",
          a: "We are a local business lending broker that connects small businesses with funding solutions tailored to their needs."
        },
        {
          q: "What types of business financing does Winchester Funding Solutions offer?",
          a: "We offer term loans, SBA loans, business lines of credit, equipment financing, invoice financing, working capital, merchant cash advances, and more."
        },
        {
          q: "How do I know which loan is right for my business?",
          a: "Our financial advisors assess your business needs, revenue, and goals to recommend the best financing option."
        },
        {
          q: "How do I apply for funding?",
          a: "You can apply online through our website by providing basic business and financial details. A funding specialist will then contact you."
        },
        {
          q: "Will applying affect my credit score?",
          a: "A soft credit pull is performed initially, which does not impact your score. A hard inquiry may be required during final approval."
        },
        {
          q: "Are there any upfront fees for applying?",
          a: "No, there are no application fees. Costs depend on the loan terms and lender policies."
        },
        {
          q: "How does Winchester Funding Solutions compare to traditional banks?",
          a: "We offer faster approvals, flexible terms, and a higher approval rate than traditional banks, which have stricter lending requirements."
        },
        {
          q: "Is my business information secure with Winchester Funding Solutions",
          a: "Yes, we use industry-standard encryption and security measures to protect your data."
        },
        {
          q: "Will multiple applications hurt my credit score?",
          a: "No, applying through Winchester Funding Solutions won’t negatively impact your credit unless a hard inquiry is performed."
        },
        {
          q: "What are the minimum qualifications for business funding?",
          a: "Qualifications vary by loan type, but common factors include time in business (4+ months), monthly revenue ($10,000+), and credit score (600+)."
        },
        {
          q: "How long does the approval process take?",
          a: "Depending on the product, approvals can be received within a few hours."
        },
        {
          q: "What documents do I need to apply for a loan?",
          a: "Typically, you’ll need bank statements, financial statements, tax returns, and business identification."
        },
        {
          q: "Can startups qualify for funding?",
          a: "Yes, startups may qualify for specific funding options like SBA loans, equipment financing, and business lines of credit."
        },
        {
          q: "Do you work with businesses in all industries?",
          a: "Yes, we work with businesses across various industries, including retail, healthcare, construction, manufacturing and more."
        },
        {
          q: "Does Winchester Funding Solutions require a credit check for loans?",
          a: "Some products require a soft credit pull, while others require a full credit check."
        },
        {
          q: "How can I improve my credit score to qualify for better loan options?",
          a: "Paying bills on time, reducing debt, and maintaining a good credit utilization ratio can improve your score."
        }
      ]
    },
    {
      title: "Term Loan FAQ",
      faq: [
        {
          q: "What is a term loan?",
          a: "A term loan provides a lump sum of capital that is repaid over a fixed period with regular payments."
        },
        {
          q: "What credit score is required for a term loan?",
          a: "Most lenders prefer a credit score of 600+, but options are available for lower scores."
        },
        {
          q: "What are the typical repayment terms for a term loan?",
          a: "Repayment terms typically range from 1 to 10 years, depending on the loan amount and lender."
        },
        {
          q: "Can I pay off my term loan early?",
          a: "Yes, but some lenders may charge prepayment penalties. Check your loan agreement for details."
        }
      ]
    },
    {
      title: "SBA Loan FAQ",
      faq: [
        {
          q: "What types of SBA loans does Winchester Funding Solutions offer?",
          a: "We offer SBA 7(a) loans, SBA 504 loans, and SBA Express loans."
        },
        {
          q: "How long does it take to get an SBA loan?",
          a: "The process takes 30–90 days, depending on the loan type and documentation requirements."
        },
        {
          q: "Can I use an SBA loan to start a business?",
          a: "Yes, but you may need strong personal credit and collateral. SBA loans are generally more accessible for existing businesses."
        },
        {
          q: "What are the eligibility requirements for an SBA loan?",
          a: "Typically, businesses must be operational for at least 2 years, have a credit score of 650+, and demonstrate financial stability."
        },
        {
          q: "What is the difference between an SBA 7(a) and an SBA 504 loan?",
          a: "SBA 7(a) loans are versatile for working capital and expansion, while SBA 504 loans are used for purchasing real estate or equipment."
        }
      ]
    },
    {
      title: "Business Line of Credit FAQ",
      faq: [
        {
          q: "How does a business line of credit work?",
          a: "A business line of credit allows you to borrow funds up to a set limit, repaying only what you use with interest."
        },
        {
          q: "What are the typical interest rates for a business line of credit?",
          a: "Rates vary based on creditworthiness but typically range from 7% to 25%."
        },
        {
          q: "What’s the difference between a line of credit and a term loan?",
          a: "A term loan provides a lump sum with fixed payments, while a line of credit is flexible and can be used as needed."
        },
        {
          q: "Can I withdraw funds multiple times from my credit line?",
          a: "Yes, you can withdraw funds as needed, as long as you don’t exceed your credit limit."
        }
      ]
    },
    {
      title: "Equipment Financing FAQ",
      faq: [
        {
          q: "What types of equipment can be financed?",
          a: "Almost any business equipment, including machinery, vehicles, and technology, can be financed."
        },
        {
          q: "Can I finance used equipment?",
          a: "Yes, many lenders allow financing for used equipment, provided it meets certain conditions."
        },
        {
          q: "Do I need to provide collateral for equipment financing?",
          a: "The equipment itself often serves as collateral, so additional assets may not be required."
        },
        {
          q: "What happens if the equipment breaks down during the loan term?",
          a: "You are still responsible for payments, but warranties or maintenance plans may be available."
        }
      ]
    },
    {
      title: "Invoice Financing FAQ",
      faq: [
        {
          q: "How does invoice financing work?",
          a: "You sell unpaid invoices to a lender at a discount to receive immediate cash."
        },
        {
          q: "How soon can I get funds through invoice financing?",
          a: "Funds are usually available within 24–48 hours of approval."
        },
        {
          q: "What percentage of an invoice can I get advanced?",
          a: "Typically, 80–90% of the invoice value is advanced upfront."
        },
        {
          q: "What happens if my customer doesn’t pay the invoice?",
          a: "You may be responsible for repayment, depending on whether the financing is recourse or non-recourse."
        }
      ]
    },
    {
      title: "Working Capital Loan FAQ",
      faq: [
        {
          q: "What can a working capital loan be used for?",
          a: "These loans cover everyday business expenses like payroll, rent, and inventory."
        },
        {
          q: "What are the repayment options for working capital loans?",
          a: "Repayments can be daily, weekly, or monthly, depending on the lender."
        },
        {
          q: "How quickly can I receive funds from a working capital loan?",
          a: "Funds can be available in as little as 24 hours."
        }
      ]
    }
  ]
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor() { }

  phone = "6812756868"
  phoneFormatted = "(681) 275-6868"
  email = "contact@winchesterfundingsolution.com"
  url = "winchesterfundingsolution.com"

  loan_types = [
    {
      title: "Term Loans & Working Capital",
      description_1: "Use for investments in your business, such as expansion projects or large purchases.",
      description_2: "Get the funds you need upfront with great rates, with the option to apply for more when needed.",
      item_1: "$10,000 - $5 Million",
      item_2: "6 Months - 10 Year Terms",
      item_3: "Funding in 1 - 3 Days",
      link: ""
    },
    {
      title: "Business Lines of Credit",
      description_1: "Use for managing cash flow to buy more inventory, or other unexpected expenses.",
      description_2: "Take advantage of a revolving line of credit, accessing cash when you need it.",
      item_1: "$10,000 - $5 Million",
      item_2: "6 Months - 10 Year Terms",
      item_3: "Funding in 1 - 3 Days",
      link: ""
    },
    {
      title: "SBA Loans",
      description_1: "Get expedited SBA funding at a prime rate to cover working capital and growth expenses.",
      description_2: "Utilize our streamlined SBA loan application process to get funding in 45 days!",
      item_1: "$10,000 - $5 Million",
      item_2: "10 - 25 Year Terms",
      item_3: "Funding in 30 - 45 Days",
      link: ""
    },
    {
      title: "Equipment Financing",
      description_1: "Used to purchase business-related equipment. Obtaining these assets can be through leasing or financing.",
      description_2: "Get the funds you need upfront with great rates, and free up working capital.",
      item_1: "$10,000 - $5 Million",
      item_2: "1 - 6 Year Terms",
      item_3: "Funding in 2 - 5 Days",
      link: ""
    }
  ]

  loan_type_xtra = {
    title: "AR & PO Financing",
    description_1: "Provides businesses with immediate cash flow.",
    description_2: "Leverage unpaid invoices or purchase orders, helping to bridge gaps, cover expenses, and fuel growth without waiting for customer payments.",
    item_1: "$100k+ aged up to 90 days; $500k+ aged up to 90 days for trucking, oil & gas, construction, staffing, and medical businesses",
    item_2: "As Long as Client Wants to Leverage",
    item_3: "Funding in 2 - 5 Days",
    link: ""
  }

  all_loan_types = [
    {
      card_title: "Small Business Loans",
      card_description: "Small business loans allow existing companies to borrow money from various lenders.",
      card_link: "small-business-loans",
      highlights: [
        "Same day funding",
        "Finance $10,000 to $5 million",
        "Terms from 6 months to 10 years"
      ],
      about_description: "A small business loan is any funding option specifically designed for a small business. Small business loans allow existing or newly established companies to borrow money from lenders. Loan types exist to help entrepreneurs meet different goals. The way each loan works depends on the type of loan.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "660+ FICO",
          description: "Bad credit? No problem! Most of our top financing options have a minimum of just 660 FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "SAME DAY FUNDING",
          description: "Our fintech speed can get you in and out of Underwriting in just a few hours - and same day funding!",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "4+ Months in Business",
          description: "You can qualify for our top financing options with as little as 4+ months in business."
        },
        {
          image: "chart-icon.png",
          title: "$10,000+ Monthly Gross Sales",
          description: "The minimum revenue to qualify for financing options are $10,000 per month, or $120,000 in annual gross sales."
        },
        {
          image: "meter-icon.png",
          title: "660 FICO Score",
          description: "We have financing options for all credit profiles. The minimum FICO score required to apply is 660."
        }
      ],
      faqs: [
        {
          q: "WHAT ARE THE BENEFITS OF SMALL BUSINESS FUNDING?",
          a: "Small business loans can help you reach many of your business goals. They can help you keep control of your profits and business, avoid problems with loans from family or friends, and protect you from putting your personal assets at risk."
        },
        {
          q: "ARE THERE ANY REQUIRED DOCUMENTS TO GET A SMALL BUSINESS LOAN?",
          a: "Yes, having your Tax ID or SSN, business license, and recent tax filings, balance sheets, and bank statements will expedite lender approval."
        },
        {
          q: "WHAT ARE AVERAGE SMALL BUSINESS LOAN RATES?",
          a: "Loan rates will be dependent upon the type of loan for which you are applying. There is also some variation depending on the amount you need and the specific terms."
        }
      ]
    },
    {
      card_title: "Working Capital / MCA",
      card_description: "Utilize your future sales to get great financing terms that are tailored for you.",
      card_link: "working-capital",
      highlights: [
        "Same day funding",
        "Finance $10,000 to $5 million",
        "Flexible financing terms"
      ],
      about_description: "A Merchant Cash Advance isn't technically a loan, but rather a cash advance that is paid back by withdrawing a percentage of your credit sales, typically on a daily basis. Since a merchant cash advance is based on a certain percentage of the daily balance, the more credit card sales a business does the faster they are able to repay the advance. On the other hand, during times of slow business, the payback would be reflective of the incoming cash flow.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "NO MINIMUM FICO",
          description: "Bad credit? No problem! Most of our top financing options have no minimum FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "SAME DAY FUNDING",
          description: "Our fintech speed can get you in and out of Underwriting in just a few hours - and same day funding!",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "4+ Months in Business",
          description: "You can qualify for our top financing options with as little as 4+ months in business."
        },
        {
          image: "chart-icon.png",
          title: "$10,000+ Monthly Gross Sales",
          description: "The minimum revenue to qualify for financing options are $10,000 per month, or $120,000 in annual gross sales."
        },
        {
          image: "meter-icon.png",
          title: "No Minimum FICO",
          description: "We have financing options for all credit profiles. There is no minimum FICO score required to apply."
        }
      ],
      faqs: [
        {
          q: "WHAT'S THE DIFFERENCE BETWEEN A MERCHANT CASH ADVANCE AND A LOAN?",
          a: "A merchant cash advance isn’t technically a loan with set terms. It is an advance on future sales and is paid back by taking an agreed upon percentage on a daily or weekly basis. The benefits of a merchant cash advance are you can pay back the loan as quickly or as slowly as your business sales allow."
        },
        {
          q: "HOW DOES A MERCHANT CASH ADVANCE WORK?",
          a: "A merchant cash advance lender will provide you a lump sum of money in exchange for a percentage of your future credit card sales. Instead of making a fixed payment over a period of time your loan is paid back usually daily or weekly by the lender collecting that set percentage of your credit card sales."
        },
        {
          q: "HOW EASY IS THE MCA APPROVAL PROCESS?",
          a: "Merchant cash advances (MCAs) are generally considered to be an easy type of business financing to qualify for, with approval rates as high as 90%. MCAs are often available to businesses that may not qualify for other types of loans, such as small business loans, equipment loans, or business lines of credit. MCAs are based on a business’s cash flow, not its credit history or business history."
        }
      ]
    },
    {
      card_title: "Business Line of Credit",
      card_description: "Flexible financing option that allows businesses to borrow funds as needed.",
      card_link: "business-line-of-credit",
      highlights: [
        "Same day funding",
        "Finance $10,000 to $5 million",
        "Terms from 6 months to 10 years"
      ],
      about_description: "A business line of credit is a flexible financing option that allows businesses to borrow funds as needed, similar to a credit card. Interest is ​paid only on the borrowed amount, and funds can be used for various purposes like managing cash flow or covering unexpected ​expenses. Once repaid, the credit becomes available again, making it a revolving form of credit that can be accessed repeatedly.",
      about_highlights: [
        {
          title: "PAY ONLY ON WHAT YOU BORROW",
          description: "Withdraw what you need, ​when you need it. You’ll only be ​charged interest on the funds ​you draw.",
          image: "ic1.png"
        },
        {
          title: "SIMPLE, INSTANT ​FUNDING",
          description: "Our Fintech Speed can get you ​in and out of Underwriting in ​just a few hours, and same day ​funding!",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "FLEXIBLE FUNDING",
          description: "We offer extended lines of ​credits going up to $5,000,000 ​for your flexibility.",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "6+ Months in Business",
          description: "You can qualify for our top financing options with as little as 6+ months in business."
        },
        {
          image: "chart-icon.png",
          title: "$10,000+ Monthly Gross Sales",
          description: "The minimum revenue to qualify for financing options are $10,000 per month, or $120,000 in annual gross sales."
        },
        {
          image: "meter-icon.png",
          title: "600 FICO Score",
          description: "We have financing options for all credit profiles. The minimum FICO score required to apply is 600."
        }
      ],
      faqs: [
        {
          q: "WHAT ARE THE BENEFITS OF A BUSINESS LINE OF CREDIT?",
          a: "A business line of credit can have many benefits, including flexibility - You can use a business line of credit for a variety of purposes, such as: purchasing inventory, covering payroll, investing in marketing, and jump starting growth initiatives; cash flow management - A business line of credit can help you manage cash flow and balance business cycles. You can use it to cover short-term financial needs, such as unexpected expenses or when customers are slow to pay; flexible repayment terms - You can often pay the minimum amount due during a slow month; interest is only paid on the amount used - You only pay interest on the portion of the credit you use, plus fees; and fast turnaround - Funds are available as soon as eligibility is approved."
        },
        {
          q: "WHY GET A BUSINESS LINE OF CREDIT?",
          a: "Sometimes you may want your business to access funds when it needs them most or when the demands for working capital increase without having to always apply for a loan when needs arise."
        },
        {
          q: "How Does a Business Line of Credit Work?",
          a: "A business line of credit allows you to easily access an already established amount of funds to use as the need arises. As you repay, funds continue to become available as long as you don’t exceed your credit limit. Interest is only charged on the amount of funds used at a particular time, and not on the full line of credit amount. All payments and interest are based on any active balance carried on the line of credit."
        },
        {
          q: "What is the Best Business Line of Credit?",
          a: "Alternative lenders tend to offer the best business lines of credit available on the market. When searching for the best business line of credit it’s important to find options that feature: fast process, access to a wide variety of lending options, a true revolving line – access to additional funds once you begin to pay back the line, ongoing access to the line to be used to assist with cash-flow in times of opportunity and emergency, and better rates and terms that meet your business needs. To learn more about what is considered to be the best business line of credit options available today, complete our 15-second application and speak with a business financing advisor to weigh your options."
        }
      ]
    },
    {
      card_title: "Equipment Financing",
      card_description: "Use for investments in your business, such as expansion projects or large purchases.",
      card_link: "equipment-financing",
      highlights: [
        "Fast funding",
        "Finance $10,000 to $5 million",
        "Terms from 12 months to 5 years"
      ],
      about_description: "Equipment financing is a way for businesses to obtain equipment through a loan or lease. It can be used to purchase almost any tangible asset for a business. Some examples of equipment that can be financed include: medical equipment, office furniture, production equipment, and technology.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "580+ FICO",
          description: "Bad credit? No problem! Most of our top financing options have a minimum of just 580 FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "FAST FUNDING",
          description: "Our fintech speed can get you in and out of Underwriting in just a few days.",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "No Minimum Time in Business",
          description: "You can qualify for our top financing options, regardless of the age of your business. Companies with under two years time in business are capped at $50,000."
        },
        {
          image: "chart-icon.png",
          title: "No Minimum Monthly Gross Sales",
          description: "You can qualify for equipment financing with no minimum in monthly gross sales."
        },
        {
          image: "meter-icon.png",
          title: "Credit Requirements Vary Based on Equipment",
          description: "We have financing options for all credit profiles. The minimum FICO score required to apply is 580. All equipment financing transactions are based on the following: time in business, FICO, equipment type, annual revenue, industry, geographical location, and other compensating factors."
        }
      ],
      faqs: [
        {
          q: "WHOW DOES EQUIPMENT FINANCING WORK?",
          a: "Equipment financing refers to a loan used to purchase business-related equipment. Instead of using your working capital to purchase the qualifying equipment, equipment financing allows you to finance the full equipment cost and repay the interest and principal over fixed terms. Once the payback period is complete, you will own the piece of equipment outright."
        },
        {
          q: "WHAT'S THE DIFFERENCE BETWEEN FINANCING AND LEASING?",
          a: "Financing and leasing are similar in some ways, but quite distinct in others. Though both options help you to break down the cost of equipment into manageable amounts, they differ in structure. When you use financing to acquire equipment, you maintain ownership during and after the plan. With leasing, your lender technically has ownership of the equipment and you’re paying for use of it. This does not necessarily mean the lender can take back the equipment at the end of the lease. Most often, the equipment is on a lease-to-own plan that would allow you to take ownership of the equipment after the lease. Both options have advantages and a knowledgeable financing consultant will be able to help you find the best fit for your company."
        },
        {
          q: "HOW HARD IS IT TO GET EQUIPMENT FINANCING AS A START-UP?",
          a: "If you find a lender with experience working with newer companies, the process doesn’t have to be difficult. You may have to rely on your personal credit history or accept a slightly higher interest rate, but at the end of the day, getting equipment financing for a new business is 100% possible."
        }
      ]
    },
    {
      card_title: "SBA Loans",
      card_description: "Get expedited SBA funding at a prime rate to cover working capital and growth expenses.",
      card_link: "sba-loans",
      highlights: [
        "Funds in as little as 45 days",
        "Finance $50,000 to $5 million",
        "Terms from 10 years to 25 years"
      ],
      about_description: "An SBA Loan is a government backed loan that can be used to start or expand a business. The loan has certain requirements for eligibility, such as size standards, proving the ability to repay the loan and solid business purpose. The SBA works with specific lenders to offer their programs which eliminate the risk from the lender since they are backed by the government.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "TERMS UP TO 25 YEARS",
          description: "We provide a wide variety of terms with 25 year terms available on certain products.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "QUICK SBA APPROVAL",
          description: "Our fintech speed can get you approved in as little as 48-72 hours.",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "2+ Years in Business",
          description: "YYou can qualify for our top financing options with as little as 2 years in business."
        },
        {
          image: "chart-icon.png",
          title: "$120,000 in Annual Gross Sales",
          description: "Minimum $120,000 in annual gross sales"
        },
        {
          image: "meter-icon.png",
          title: "675+ Credit Score Required",
          description: "We have financing options for all credit profiles. To qualify for funding from the SBA, a 675+ credit score is required."
        }
      ],
      faqs: [
        {
          q: "HOW CAN I APPLY FOR AN SBA LOAN?",
          a: "In order to apply for an SBA loan, you should follow these steps: check your eligibility, choose the right program for your business, research trusted SBA lenders, and prepare your documentation."
        },
        {
          q: "WHAT IS AN SBA 7(A) LOAN?",
          a: "An SBA 7(a) loan is the primary product from the SBA. It isn’t a loan directly from the SBA, rather, the SBA helps small business owners secure loans by guaranteeing a portion of the amount borrowed, capping interest rates, and limiting fees. Generally qualified business owners can use a 7(a) for any business purpose."
        },
        {
          q: "WHAT IS AN SBA 504 LOAN?",
          a: "SBA 504 loans are generally used for buying fixed assets like equipment or real estate, which ultimately acts as collateral for the loan itself. This program may require a down payment and are made available through Certified Development Companies (CDCs), not lenders."
        }
      ]
    },
    {
      card_title: "Accounts Receivable Financing",
      card_description: "Turn your accounts receivables into cash to better manage your cash flow gaps.",
      card_link: "accounts-receivable",
      highlights: [
        "Funding in 2 to 5 days",
        "Finance $10,000 to $5 million",
        "Terms from 6 months to 10 years"
      ],
      about_description: "Accounts receivable financing is when a company will sell or finance off their outstanding invoices for working capital. It can either be in the form of selling the asset to the lender or using the accounts receivable (invoices) as collateral for the loan.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "NO MINIMUM FICO",
          description: "Bad credit? No problem! Most of our top financing options have no minimum FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "EXPRESS FUNDING",
          description: "Our Fintech Speed can reduce your loan process to as little as 2 days!",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "Minimum Outstanding Accounts Receivable",
          description: "In order to qualify for AR financing, a minimum of $100,000 outstanding B2B Accounts Receivable aged up to 90 days outstanding is required."
        },
        {
          image: "chart-icon.png",
          title: "$500,000+ Annual Gross Sales",
          description: "The minimum revenue to qualify for AR Financing is $500,000+ in annual gross sales."
        },
        {
          image: "meter-icon.png",
          title: "No Minimum FICO",
          description: "We have financing options for all credit profiles. There is no minimum FICO score required to apply."
        }
      ],
      faqs: [
        {
          q: "WHAT DOES AR STAND FOR?",
          a: "AR financing stands for Account Receivable Financing. It is a type of financing where a company will receive a loan based on a portion of their account receivables. Accounts receivable are assets equal to outstanding invoices billed to customers but have not yet been paid."
        },
        {
          q: "HOW DOES AR FINANCING WORK?",
          a: "Accounts receivable financing uses your outstanding invoices as a form of collateral to help you obtain financing or an advance for your business. But unlike factoring, you do not sell your invoices to a third party. You will continue to remain responsible for collecting on your outstanding invoices while making payments towards your loan."
        },
        {
          q: "WHAT ARE AVERAGE AR LOAN RATES?",
          a: "Accounts receivable (AR) financing rates can vary depending on a number of factors, including the factoring company, the size of the invoice, the creditworthiness of the customer, and the payment terms."
        }
      ]
    },
    {
      card_title: "Franchise Financing",
      card_description: "Use for making investments in your business, such as inventory or new locations.",
      card_link: "franchise-financing",
      highlights: [
        "Express funding in 2 - 7 days",
        "Finance $10,000 to $5 million",
        "Terms from 6 months to 10 years"
      ],
      about_description: "Franchise financing is a way for franchisees to obtain funds to purchase and run a franchise business, including covering start-up costs and other expenses. This can include franchise fees, equipment, inventory, working capital, and down payments.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "NO MINIMUM FICO",
          description: "Bad credit? No problem! Most of our top financing options have no minimum FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "EXPRESS FUNDING",
          description: "Our fintech speed can reduce your loan process to as little as 2 days!",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "First Location Start Up, to Multi-Unit Operators",
          description: "Whether you are starting your first location or have grown to several, our franchise financing options are plentiful."
        },
        {
          image: "chart-icon.png",
          title: "Start Up Franchises Welcomed",
          description: "Pre-revenue and established companies welcomed."
        },
        {
          image: "meter-icon.png",
          title: "No Minimum FICO",
          description: "We have financing options for all credit profiles. There is no minimum FICO score required to apply."
        }
      ],
      faqs: [
        {
          q: "HOW CAN YOU FINANCE A FRANCHISE BUSINESS?",
          a: "When you’re looking to finance a franchise business, you may want to reach out to your franchisor to see if they have any available options to help with your financing needs. Regardless, you may still want to shop around because you may be able to find more cost effective options on your own. Alternative lenders generally have financing options for franchises that may assist with your franchisor mandated updates, at a lower cost."
        },
        {
          q: "WHAT FINANCING SOURCES ARE AVAILABLE TO A FRANCHISEE?",
          a: "When it comes to sources for financing a franchise there are many options available. Options include: franchisor financing, traditional bank loans, SBA loans, family and friends, and alternative lenders."
        },
        {
          q: "WHAT ARE THE REQUIREMENTS FOR FRANCHISE FINANCING?",
          a: "In order to qualify for franchise financing you’ll have to have a solid credit score, business financials and a minimum of two years in business. For those looking to financing an additional franchise, business owners may be able to leverage their existing franchise to meet those requirements for their expansion."
        }
      ]
    },
    {
      card_title: "Purchase Order Financing",
      card_description: "Get the funds you need to fulfill large orders and grow your business with fast financing.",
      card_link: "purchase-order",
      highlights: [
        "Same day funding",
        "Finance $10,000 to $5 million",
        "Terms from 6 months to 10 years"
      ],
      about_description: "In order to qualify for franchise financing you’ll have to have a solid credit score, business financials and a minimum of two years in business. For those looking to financing an additional franchise, business owners may be able to leverage their existing franchise to meet those requirements for their expansion.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "NO MINIMUM FICO",
          description: "Bad credit? No problem! Most of our top financing options have no minimum FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "FLEXIBLE FUNDING",
          description: "Take on large orders you might otherwise decline. Flexibility to pick and choose which purchase orders to finance.",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "NO MINIMUM TIME IN BUSINESS",
          description: "You can qualify for our purchase order financing as a startup with orders from qualified customers."
        },
        {
          image: "chart-icon.png",
          title: "NO MINIMUM MONTHLY GROSS SALES",
          description: "You can qualify for PO financing with no minimum monthly gross sale requirements with qualified purchase orders."
        },
        {
          image: "meter-icon.png",
          title: "NO MINIMUM FICO",
          description: "We have PO financing programs with no minimum FICO score requirements."
        }
      ],
      faqs: [
        {
          q: "HOW DOES PURCHASE ORDER FINANCING WORK?",
          a: "With PO financing, a lender pays the supplier directly to cover the cost of fulfilling the purchase order. Once goods are delivered and an invoice is paid the business repays the financing company."
        },
        {
          q: "WHAT ARE THE BENEFITS OF PO FINANCING?",
          a: "Improved cashflow, no need for additional collateral, and no impacts on personal credit."
        },
        {
          q: "CAN PO FINANCING BE COMBINED WITH OTHER FINANCING PROGRAMS?",
          a: "Yes! PO financing can be combined with other financing programs such as business term loans, lines of credit, AR financing, and more."
        }
      ]
    },
    {
      card_title: "Startup Business Funding",
      card_description: "Get the funds you need to launch your new business without cash flow challenges.",
      card_link: "startup-funding",
      highlights: [
        "Same day funding",
        "Finance $10,000 to $5 million",
        "Terms from 12 months to 5 years"
      ],
      about_description: "Startup business funding, also known as startup capital, is money that entrepreneurs use to start new businesses.",
      about_highlights: [
        {
          title: "SIMPLE APPLICATION",
          description: "Our simple 15-second online application can get you matched with offers in minutes.",
          image: "ic1.png"
        },
        {
          title: "650+ FICO",
          description: "Bad credit? No problem! Most of our top financing options have a minimum of just 650 FICO.",
          image: "ic4.png"
        },
        {
          title: "LARGER AMOUNTS",
          description: "Get matched with the best financing options with the highest funding amounts.",
          image: "ic3.png"
        },
        {
          title: "SAME DAY FUNDING",
          description: "Our fintech speed can get you in and out of Underwriting in just a few hours - and same day funding!",
          image: "ic2.png"
        }
      ],
      qualifications: [
        {
          image: "calendar-icon.png",
          title: "No Minimum Time in Business",
          description: "You can qualify for our top financing options as a startup."
        },
        {
          image: "chart-icon.png",
          title: "No Minimum Monthly Gross Sales",
          description: "You can qualify for startup funding with no minimum in monthly gross sales."
        },
        {
          image: "meter-icon.png",
          title: "650+ Credit Score Required",
          description: "There is a minimum 650+ FICO score required to apply for startup financing."
        }
      ],
      faqs: [
        {
          q: "WHAT ARE THE REQUIREMENTS FOR A STARTUP BUSINESS LOAN?",
          a: "If you have been in business for less than 6 months, you are considered a startup. Most financing options require a minimum of 6 months in business and at least $15,000 gross revenue per month. However, startups can be exempt of these requirements. The only requirement would be a credit score of at least 650+."
        },
        {
          q: "CAN YOU GET A STARTUP BUSINESS LOAN WITH BAD CREDIT?",
          a: "Yes, you can qualify for a startup business loan with bad credit. As long as your credit score is 650 or above, we can provide you with business loan options. Additionally, there are no requirements for time in business or gross revenue. However, your options may be limited."
        },
        {
          q: "DOES THE SBA OFFER STARTUP BUSINESS LOANS?",
          a: "Yes, the Small Business Administration has financing options for business startups. The SBA offers various startup loan options, such as a Micro Loan, 7(a) or 504/CDC Loans, or you may qualify for one of their investment programs. However, you may find challenges to get approved and the time to get funding may not be sufficient."
        }
      ]
    }
  ]
}

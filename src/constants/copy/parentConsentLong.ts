export interface ParentConsentLongSection {
  title: string;
  bullets: string[];
}

export interface ParentConsentLongCopyType {
  version: string;
  intro: string;
  sections: ParentConsentLongSection[];
  closing: string;
  legal: string;
}

export const ParentConsentAgreementText: ParentConsentLongCopyType = {
  version: "2025-09-11",
  intro: "This Parent Consent Agreement (“Agreement”) is entered into by and between {{appName}} (“{{appName}}”) and the undersigned parent or legal guardian (“Parent/Guardian”) on behalf of the minor participant (“Participant”).",
  sections: [
    {
      title: "Section 1 – Introduction and Purpose",
      bullets: [
        "{{appName}} is a platform designed to help high school athletes build and manage their personal brand, including merchandise sales and the facilitation of advertising placements presented as sponsorship opportunities.",
        "This Agreement governs the Participant’s use of the platform and the rights and responsibilities of the Parent/Guardian and {{appName}}."
      ]
    },
    {
      title: "Section 2 – Eligibility and Scope of Use",
      bullets: [
        "The platform is available only to Participants who are enrolled in or entering high school athletics. The Parent/Guardian, on behalf of the Participant, affirms that the Participant meets this eligibility requirement.",
        "The Parent/Guardian acknowledges that certain states, such as California and New York, impose rules for child performers. While {{appName}} does not consider the Participant to be a “child performer,” the Parent/Guardian understands that any such rules are the family’s responsibility to comply with."
      ]
    },
    {
      title: "Section 3 – Merchandise Revenue Sharing",
      bullets: [
        "“Revenue” from merchandise means the gross amounts received by {{appName}} from the sale of merchandise featuring the Participant’s name, image, likeness, or brand assets.",
        "From this Revenue, {{appName}} will deduct necessary expenses, including but not limited to product manufacturing costs, payment processing fees, refunds, applicable taxes, and the platform service fee.",
        "After these deductions, the remaining balance (“Net Revenue”) will be allocated as follows: sixty percent (60%) will be paid to the Participant, and forty percent (40%) will be retained by {{appName}} to cover the ongoing costs of operating, maintaining, and improving the platform.",
        "Net Revenue allocated to the Participant will be paid out through the payment system integrated with {{appName}}, such as Stripe or a comparable provider. Payments will be made on a rolling basis and will not be unreasonably delayed or held beyond what is necessary for processing.",
        "The Parent/Guardian and Participant are responsible for any and all tax obligations arising from these payments. {{appName}} will issue tax reporting forms, such as Form 1099, as required by applicable law.",
        "Refunds and Adjustments: Customer refunds or adjustments may reduce the Revenue attributable to a Participant’s merchandise sales. If a refund or adjustment occurs, the Participant’s Net Revenue share for the affected transaction will not be paid, or if already paid, may be offset against future payments.",
        "Refunds and adjustments are administered by {{appName}} in accordance with its customer-facing policies. The Parent/Guardian, on behalf of the Participant, acknowledges that {{appName}} is solely responsible for administering customer refunds and that the Participant has no role in or claim against any refund decisions."
      ]
    },
    {
      title: "Section 4 – Sponsorship Revenue Sharing",
      bullets: [
        "Sponsorship placements are advertising arrangements contracted directly between {{appName}} and advertisers. The Participant is not a party to such arrangements and has no contractual obligations to the advertiser. The Participant’s involvement is limited to receiving their share of revenue as described in this Agreement.",
        "Refunds and Adjustments: If a refund or adjustment is issued to an advertiser, the Participant’s Net Sponsorship Revenue for the affected campaign will be reduced or reversed accordingly. If the Participant has already received payment for a refunded sponsorship, {{appName}} may offset the amount from future payments.",
        "License Continuation Upon Termination: If the Participant’s account is suspended, terminated, or voluntarily closed while a sponsorship campaign is active, the Parent/Guardian, on behalf of the Participant, grants {{appName}} a limited, royalty-free license to continue using the Participant’s name, image, likeness, and brand assets solely for the purpose of fulfilling the remainder of the sponsorship campaign. In such cases, the Participant forfeits any share of revenue from the remainder of the campaign."
      ]
    },
    {
      title: "Section 5 – Privacy and Data Use",
      bullets: [
        "{{appName}} collects, uses, and protects personal information about the Participant as described in {{appName}}’s Privacy Policy, which is incorporated by reference into this Agreement. The Parent/Guardian acknowledges receipt of and agrees to the Privacy Policy, and consents to the data practices described therein, consistent with applicable U.S. privacy laws.",
        "{{appName}} collects only the information necessary to operate the platform, including account details, profile information, merchandise and sponsorship activity, and related financial data. {{appName}} does not sell the Participant’s personal data or allow behavioral advertising directed at minors.",
        "{{appName}} may share limited Participant information with potential sponsors, such as name, school, sport, grade, and social media handles, solely to evaluate and support potential sponsorship opportunities. {{appName}} does not share direct contact information and does not allow sponsors to contact Participants directly.",
        "{{appName}} may use third-party service providers, such as payment processors, hosting providers, and technology vendors, to operate the platform. These providers are authorized to access personal information only as necessary to perform services on behalf of {{appName}} and are contractually bound to protect the information.",
        "Educational Records and FERPA: {{appName}} does not request or collect official educational records from schools. Any academic information entered in the platform is self-reported by the Participant or Parent/Guardian and is not an official school record, nor is it subject to the Family Educational Rights and Privacy Act (“FERPA”). If {{appName}} later enables integrations with schools or educational systems, additional parental consent will be required before accessing or using any educational records."
      ]
    },
    {
      title: "Section 6 – Artificial Intelligence and Automated Processing",
      bullets: [
        "{{appName}} may use artificial intelligence (“AI”) and automated technologies to support platform functions, including content moderation, recommendations, sponsorship matching, and conversational features. Personal information may be processed by third-party AI providers as necessary to enable these features.",
        "If the Participant engages with AI-powered features, interactions are subject to moderation and filtering. {{appName}} takes reasonable steps to vet vendors but cannot guarantee the absolute accuracy or appropriateness of AI outputs.",
        "The Parent/Guardian acknowledges that AI use is an evolving area of law and practice, and {{appName}} will make commercially reasonable efforts to adapt its practices to comply with applicable U.S. laws and guidance."
      ]
    },
    {
      title: "Section 7 – Social Media Integrations & Permissions",
      bullets: [
        "The Parent/Guardian acknowledges that {{appName}} gives the Participant the option to link social media accounts, including TikTok, Instagram, YouTube, X/Twitter, and Hudl. These connections are used only to bring in public profile details and engagement statistics, and to allow the Participant to share NIL-related content that they choose to approve within the app. All posting requires the Participant’s manual approval; nothing is ever published automatically.",
        "{{appName}} can only access information made available through official platform connections (APIs) and does not have access to private data such as direct messages, private follower lists, or private or hidden videos.",
        "Linked social media content may also appear inside the Participant’s profile or Brand Hub within the app so the family and approved audiences can see their progress.",
        "This permission also extends to future platform connections that work in the same way. The Parent/Guardian or Participant may turn off a connection at any time in the app’s settings, and once turned off, {{appName}} will no longer access that platform."
      ]
    },
    {
      title: "Section 8 – Content Standards and Moderation",
      bullets: [
        "The Participant may upload photos, merchandise designs, and other materials consistent with NIL brand-building. Profiles may include identifiers such as the Participant’s name, grade, school, sport, and social media handles, but not direct contact information (phone number, home address, government ID, or financial details).",
        "{{appName}} reserves the right to review and moderate all content before publication and may remove or restrict access to content at its sole discretion if it violates these standards, applicable laws, or school/athletic association rules.",
        "Prohibited Conduct: In addition to the content restrictions above, the Parent/Guardian, on behalf of the Participant, acknowledges that fraudulent, deceptive, or manipulative activity, including attempts to artificially generate sales, exploit refund processes, or otherwise misuse the platform, is strictly prohibited and may result in immediate suspension or termination under Section 11 (Termination and Revocation)."
      ]
    },
    {
      title: "Section 9 – Eligibility and Compliance",
      bullets: [
        "The Parent/Guardian acknowledges that NIL rules vary by state, school, and athletic association, and may change over time. {{appName}} provides resources to assist families, but final responsibility for compliance rests with the Parent/Guardian and Participant.",
        "{{appName}} does not guarantee eligibility under any state or school NIL rules and is not liable for sanctions or penalties.",
        "School and Association Disclosure: The Parent/Guardian acknowledges that use of {{appName}}, including merchandise sales or sponsorship features, may be considered NIL activity under applicable rules. The Parent/Guardian, on behalf of the Participant, is solely responsible for making any required disclosures to the Participant’s school, district, or athletic association."
      ]
    },
    {
      title: "Section 10 – No Fiduciary Relationship",
      bullets: [
        "The Parent/Guardian, on behalf of the Participant, acknowledges that {{appName}} is not acting as the Participant’s agent, manager, or fiduciary. {{appName}} does not provide legal, financial, or tax advice.",
        "Any sponsorship placements are contracted between {{appName}} and advertisers. The Participant is not a party to these arrangements and has no obligations to advertisers."
      ]
    },
    {
      title: "Section 11 – Termination and Revocation",
      bullets: [
        "Termination by {{appName}}: {{appName}} may suspend or terminate the Participant’s account at any time, with or without notice, if {{appName}} determines in its sole discretion that: (i) the Participant or Parent/Guardian has violated this Agreement or applicable law; (ii) continued participation poses a risk to the safety, integrity, or reputation of the platform; (iii) fraudulent, deceptive, or abusive activity has occurred, including but not limited to attempts to manipulate revenue, exploit refund processes, or otherwise misuse the platform; or (iv) termination is required for legal, compliance, or operational reasons.",
        "Effect of Termination: Termination of an account will result in loss of access to platform features, removal of public-facing content, and cessation of new revenue opportunities. Net Revenue accrued prior to termination will be processed in accordance with Section 3 and Section 4 (Payments and Payouts), provided that {{appName}} may withhold or offset amounts reasonably believed to result from fraudulent, deceptive, or abusive activity. {{appName}} has no obligation to restore deleted accounts or content once termination is completed."
      ]
    },
    {
      title: "Section 12 – Dispute Resolution",
      bullets: [
        "Any dispute shall be resolved exclusively through binding arbitration administered by the American Arbitration Association (“AAA”). The Parent/Guardian waives jury trial rights and agrees to resolve disputes individually, not as part of a class action.",
        "This Agreement is governed by the laws of [Your State]. The seat of arbitration is [Your City/State]. {{appName}} may seek injunctive relief in court to protect its IP, data security, or platform integrity."
      ]
    },
    {
      title: "Section 13 – Intellectual Property",
      bullets: [
        "The Parent/Guardian, on behalf of the Participant, retains ownership of NIL rights but grants {{appName}} a limited, royalty-free license to use them as necessary to operate and promote the platform, including merchandise, sponsorships, and Participant profiles.",
        "All rights in the platform itself remain with {{appName}}."
      ]
    },
    {
      title: "Section 14 – Indemnification",
      bullets: [
        "The Parent/Guardian, on behalf of the Participant, agrees to indemnify and hold harmless {{appName}} from claims arising out of the Participant’s use of the platform, uploaded content, or violations of law."
      ]
    },
    {
      title: "Section 15 – Limitation of Liability",
      bullets: [
        "To the maximum extent permitted by law, {{appName}} is not liable for indirect, incidental, or consequential damages.",
        "Liability is capped at the greater of $100 or the Net Revenue paid to the Participant in the prior twelve months."
      ]
    },
    {
      title: "Section 16 – General Provisions",
      bullets: [
        "This Agreement, together with the Privacy Policy, constitutes the entire agreement. If any provision is held invalid, the rest remain enforceable.",
        "The Parent/Guardian may not assign this Agreement; {{appName}} may assign it in connection with a merger, acquisition, or sale of assets, provided the successor remains bound by this Agreement and Privacy Policy.",
        "Notices may be provided via email, Parent Portal, or other electronic means reasonably designed to reach the Parent/Guardian.",
        "{{appName}} may amend this Agreement; material changes will be communicated, and continued use constitutes acceptance."
      ]
    },
    {
      title: "Section 17 – Consent & Execution",
      bullets: [
        "By electronically agreeing to the Short Form Parent Consent, which incorporates this Agreement by reference, the Parent/Guardian consents to the terms of this Agreement on behalf of the Participant.",
        "No physical signature is required."
      ]
    }
  ],
  closing: "By electronically agreeing to the Short Form Parent Consent, which incorporates this Agreement by reference, the Parent/Guardian consents to the terms of this Agreement on behalf of the Participant. No physical signature is required.",
  legal: "This consent is legally binding under the U.S. Electronic Signatures in Global and National Commerce (E-SIGN) Act and equivalent state laws."
};

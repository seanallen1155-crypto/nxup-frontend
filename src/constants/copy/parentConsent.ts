// parentConsent.ts

// ----------------------
// Types
// ----------------------
export interface ParentConsentSection {
  title: string;
  bullets: string[];
}

export interface ParentConsentCopyType {
  version: string;
  header: string;
  intro: string;
  subheading: string;
  sections: ParentConsentSection[];
  closing: string;
  checkbox: string;
  legal: string;
}

// ----------------------
// Static Copy (with placeholders)
// ----------------------
export const ParentConsentCopy: ParentConsentCopyType = {
  version: "2025-09-11",
  header: "Why you’re seeing this",
  intro: "{{athleteFirstName}} created an account on {{appName}} to safely explore ways to build a personal brand as a student-athlete. We involve parents from the start to ensure any athlete-branded merchandise or sponsorship activity is transparent, compliant, and family-approved.",
  subheading: "By clicking “I Approve”, you confirm that:",
  sections: [
    {
      title: "1. Parent/Guardian Authorization",
      bullets: [
        "You are the legal parent or guardian of this student-athlete.",
        "Your approval creates a valid and enforceable contract on your child’s behalf."
      ]
    },
    {
      title: "2. Name, Image, and Likeness (NIL) Permission",
      bullets: [
        "You give {{appName}} permission to enable your student-athlete to create and sell merchandise and sponsorship opportunities built around their own name, image, and likeness.",
        "This permission allows {{appName}} to display your student-athlete’s name, image, and likeness on products and in connection with sponsorships offered through the platform."
      ]
    },
    {
      title: "3. Privacy and Safety Commitments",
      bullets: [
        "{{appName}} will never sell your child’s personal data.",
        "We do not allow behavioral or targeted advertising directed at minors.",
        "Your child’s account is private by default and reviewed for appropriateness before anything goes public.",
        "We collect only what is needed to operate the platform, such as account information, sales data, and NIL activity.",
        "If social media is linked, we only access public information and all posts require your child’s approval.",
        "You may choose to receive updates about your child’s activity."
      ]
    },
    {
      title: "4. Sponsorship Features",
      bullets: [
        "{{appName}} may work with trusted businesses to sponsor your student-athlete’s store or profile page.",
        "To explore sponsorships, we may share limited public information about your student-athlete, such as name, school, sport, grade, and social media handles. We never share contact information."
      ]
    },
    {
      title: "5. Revenue Sharing",
      bullets: [
        "After necessary costs (production, payment processing, and platform service fee) are covered, your child will receive their share of earnings from merchandise sales and sponsorships.",
        "Full details, including the specific percentage split, are provided in the full agreement."
      ]
    },
    {
      title: "6. Eligibility and Compliance",
      bullets: [
        "If your child competes in high school sports, rules on NIL vary by state, school, and athletic association. We help by checking location and flagging risks, but you and your child are ultimately responsible for ensuring compliance.",
        "We will continue to build with eligibility in mind and keep families informed, but we cannot guarantee eligibility decisions made by a school or athletic association."
      ]
    }
  ],
  closing: "By selecting “I Approve,” you agree to these terms on behalf of your student-athlete. This approval serves as your electronic signature and creates a valid and enforceable contract under the Electronic Signatures in Global and National Commerce Act (E-SIGN Act) and applicable state law.",
  checkbox: "I confirm that I am the legal parent or guardian of this student-athlete and I agree to these terms on their behalf.",
  legal: "By selecting “I Approve,” you agree to these terms on behalf of your child. This consent is legally binding under the Electronic Signatures in Global and National Commerce Act (E-SIGN Act) and applicable state law."
};

// ----------------------
// Helper to render placeholders
// ----------------------
export function renderConsentText(template: string, vars: Record<string, string>): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => vars[key.trim()] ?? "");
}

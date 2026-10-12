import { Link } from "react-router-dom";
import { LegalList, LegalPage, type LegalHighlight, type LegalSection } from "@/components/LegalPage/LegalPage";
import { useSeo } from "@/hooks/useSeo";

const HIGHLIGHTS: LegalHighlight[] = [
  {
    label: "We Collect Little",
    text: "Only what you choose to share with us - such as your email address or the details in an enquiry.",
  },
  {
    label: "We Never Sell It",
    text: "Your personal information is never sold, rented, or traded to advertisers or data brokers.",
  },
  {
    label: "You Stay In Control",
    text: "Ask us to access, correct, or delete your information at any time and we will act on it.",
  },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: (
      <>
        <p>
          GALZVIRT Sports Agency ("GALZVIRT", "we", "us", "our") is a football agency with offices in
          London, United Kingdom and Abuja, Nigeria. We are the controller of the personal information
          described in this policy.
        </p>
        <p>
          This policy explains what we collect when you visit this website or contact us, why we collect
          it, and the choices you have.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect information in three ways:</p>
        <LegalList
          items={[
            <>
              <strong className="text-parchment font-medium">Information you give us</strong> - your name,
              email address, phone number, and anything else you include when you email, call, or write to
              us, or when you subscribe to our updates.
            </>,
            <>
              <strong className="text-parchment font-medium">Representation enquiries</strong> - if you
              approach us as a player, parent, guardian, or club, you may share playing history, footage,
              date of birth, and career details so we can assess the enquiry.
            </>,
            <>
              <strong className="text-parchment font-medium">Technical information</strong> - our hosting
              provider automatically processes basic data such as IP address, browser type, and pages
              requested in order to deliver the site and keep it secure.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use personal information only for clear, limited purposes:</p>
        <LegalList
          items={[
            "To respond to your enquiries and hold the conversations you start with us.",
            "To assess and manage representation, recruitment, and partnership opportunities.",
            "To send agency news and insights where you have asked to receive them.",
            "To operate, protect, and improve this website.",
            "To meet our legal, regulatory, and football governing body obligations.",
          ]}
        />
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Our Legal Bases",
    content: (
      <>
        <p>
          We handle personal information in line with the UK General Data Protection Regulation, the Data
          Protection Act 2018, and the Nigeria Data Protection Act 2023. Depending on the situation, we
          rely on:
        </p>
        <LegalList
          items={[
            "Your consent - for example, when you subscribe to updates. You can withdraw it at any time.",
            "Steps taken at your request before entering into, or performing, a contract with you.",
            "Our legitimate interests in running and growing a professional football agency.",
            "Compliance with a legal obligation that applies to us.",
          ]}
        />
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing & Third Parties",
    content: (
      <>
        <p>
          We do not sell your personal information. We share it only where it is needed to do the work
          you have asked of us, or to run the site:
        </p>
        <LegalList
          items={[
            "Clubs, leagues, and partners - only with your knowledge, as part of an opportunity we are pursuing for you.",
            "Service providers that host this website and deliver our email.",
            "Professional advisers, regulators, and authorities where the law requires it.",
          ]}
        />
        <p>
          This site also loads content from third parties - web fonts from Google, video from YouTube
          when you choose to play it, and football headlines from an external news feed. These providers
          receive your IP address when their content loads. See our{" "}
          <Link to="/cookie-settings" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
            Cookie Settings
          </Link>{" "}
          for more detail.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    content: (
      <p>
        We operate across the United Kingdom and Nigeria, and some of our service providers are based in
        other countries. When personal information moves across borders, we take steps to ensure it
        remains protected to the standard required by applicable data protection law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep It",
    content: (
      <p>
        We keep personal information only for as long as it is needed for the purpose it was collected
        for, and for any period the law requires afterwards. Enquiries that do not lead to a working
        relationship are deleted once they are no longer relevant. You can unsubscribe from our updates
        at any time.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>Subject to the law that applies to you, you have the right to:</p>
        <LegalList
          items={[
            "Ask for a copy of the personal information we hold about you.",
            "Ask us to correct anything that is inaccurate or incomplete.",
            "Ask us to delete your information, or restrict how we use it.",
            "Object to our use of your information, including for direct marketing.",
            "Withdraw consent you have previously given.",
            "Complain to a regulator - the Information Commissioner's Office in the UK, or the Nigeria Data Protection Commission.",
          ]}
        />
        <p>To exercise any of these rights, email us using the details at the end of this page.</p>
      </>
    ),
  },
  {
    id: "young-players",
    title: "Young Players",
    content: (
      <p>
        Football careers often begin early. Where a player is under 18, we ask that a parent or legal
        guardian makes contact on their behalf, and we handle any information about a minor with
        additional care. If you believe a child has shared personal information with us without
        appropriate consent, please tell us and we will remove it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We use appropriate technical and organisational measures to protect personal information against
        loss, misuse, and unauthorised access. No method of transmission over the internet is completely
        secure, so we cannot guarantee absolute security - but discretion is central to how we work, and
        we treat your information accordingly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes To This Policy",
    content: (
      <p>
        We may update this policy as our agency and the law evolve. The current version is always the one
        published on this page, and we will take reasonable steps to tell you about any significant
        change.
      </p>
    ),
  },
];

export function Privacy() {
  useSeo({
    title: "Privacy Policy",
    description:
      "How GALZVIRT Sports Agency collects, uses, and protects personal information - and the rights you have over it.",
    path: "/privacy-policy",
  });

  return (
    <LegalPage
      path="/privacy-policy"
      title="Privacy"
      highlight="Policy"
      intro="Discretion is part of how we work. This is a plain-language account of the information we handle and how we look after it."
      highlights={HIGHLIGHTS}
      sections={SECTIONS}
    />
  );
}

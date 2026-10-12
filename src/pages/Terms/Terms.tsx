import { Link } from "react-router-dom";
import { LegalList, LegalPage, type LegalHighlight, type LegalSection } from "@/components/LegalPage/LegalPage";
import { useSeo } from "@/hooks/useSeo";

const HIGHLIGHTS: LegalHighlight[] = [
  {
    label: "Information Only",
    text: "This website introduces our agency. Browsing it does not create a representation agreement.",
  },
  {
    label: "Our Content",
    text: "The GALZVIRT name, logos, imagery, and copy belong to us or our licensors. Please ask before reusing them.",
  },
  {
    label: "Fair Use",
    text: "Use the site lawfully and respectfully, and it stays open and useful for everyone.",
  },
];

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance Of These Terms",
    content: (
      <p>
        These terms govern your use of the GALZVIRT Sports Agency website. By accessing or using the
        site, you agree to them. If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    id: "about-this-site",
    title: "About This Website",
    content: (
      <>
        <p>
          This website provides general information about GALZVIRT Sports Agency, our services, and the
          players we work with. It is not professional, legal, or financial advice.
        </p>
        <p>
          Nothing on this site, and no enquiry sent through it, creates a representation, agency, or
          client relationship. Any such relationship exists only under a separate written agreement
          signed by both parties.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>When using this website, you agree not to:</p>
        <LegalList
          items={[
            "Use it for any unlawful, fraudulent, or harmful purpose.",
            "Attempt to gain unauthorised access to the site, its servers, or related systems.",
            "Introduce malicious code, or interfere with the site's normal operation.",
            "Scrape, copy, or harvest content or data by automated means without our written permission.",
            "Impersonate GALZVIRT, our staff, or any player we represent.",
          ]}
        />
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content on this site - including the GALZVIRT name, logos, emblems, text, design,
          photography, and video - is owned by GALZVIRT Sports Agency or its licensors and is protected
          by intellectual property law.
        </p>
        <p>
          You may view and share pages for personal, non-commercial purposes. Any other use, including
          reproduction or commercial use of our brand or of a player's name and image, requires our
          prior written consent.
        </p>
      </>
    ),
  },
  {
    id: "player-information",
    title: "Player Information",
    content: (
      <p>
        Player profiles, statistics, and career details are published for information and are kept as
        accurate as we reasonably can. They may change without notice and should not be relied upon as
        the basis for any transfer, commercial, or financial decision without confirming the details
        with us directly.
      </p>
    ),
  },
  {
    id: "third-party-content",
    title: "Third-Party Content & Links",
    content: (
      <p>
        This site displays headlines from external news sources, embeds video hosted by third parties,
        and links to other websites and social platforms. We do not control that content and are not
        responsible for its accuracy, availability, or practices. Following a link takes you to a site
        governed by its own terms and privacy policy.
      </p>
    ),
  },
  {
    id: "communications",
    title: "Enquiries & Communications",
    content: (
      <>
        <p>
          If you contact us or subscribe to our updates, you confirm the details you give are accurate
          and that you are entitled to share them. We handle them as described in our{" "}
          <Link to="/privacy-policy" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          We welcome unsolicited footage and enquiries, but we are under no obligation to respond, to
          review material, or to keep unsolicited submissions confidential.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        This website is provided on an "as is" and "as available" basis. We make no promise that it will
        be uninterrupted, error-free, or fully up to date, and to the extent the law allows we exclude
        all warranties not expressly set out in these terms.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation Of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by law, GALZVIRT Sports Agency is not liable for any indirect
          or consequential loss, loss of profit, or loss of opportunity arising from your use of, or
          inability to use, this website.
        </p>
        <p>
          Nothing in these terms limits or excludes liability that cannot lawfully be limited or
          excluded, including liability for death or personal injury caused by negligence, or for fraud.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These terms are governed by the laws of England and Wales, and the courts of England and Wales
        have jurisdiction over any dispute arising from them. This does not affect any mandatory rights
        you have under the law of the country where you live.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes To These Terms",
    content: (
      <p>
        We may revise these terms from time to time. The current version is always the one published on
        this page, and your continued use of the site means you accept it.
      </p>
    ),
  },
];

export function Terms() {
  useSeo({
    title: "Terms of Service",
    description:
      "The terms that govern your use of the GALZVIRT Sports Agency website, its content, and its services.",
    path: "/terms-of-service",
  });

  return (
    <LegalPage
      path="/terms-of-service"
      title="Terms Of"
      highlight="Service"
      intro="Clear terms, no surprises. These are the ground rules for using our website."
      highlights={HIGHLIGHTS}
      sections={SECTIONS}
    />
  );
}

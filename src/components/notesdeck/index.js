import React from "react";

const index = () => {
  return (
    <div className="mx-8 lg:mx-44">
      <h1 className="my-4 lg:my-8  text-center text-3xl lg:text-4xl font-bold">
        Privacy Policy
      </h1>
      <p>
        Our Notes Deck App is committed to protecting the privacy and personal
        information of our users . This Privacy Policy outlines the types of
        information we collect, how we use and protect it, and the choices you
        have regarding your personal information.
      </p>

      <ul class="space-y-4  list-disc list-inside mt-4">
        <li>
          Information Collection and Use
          <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              Personal Information: We may collect certain personally
              identifiable information ("Personal Information") from you when
              you use our Notes deck App. This may include your name, email
              address, and any other information you choose to provide. We use
              this information to provide you with our services, communicate
              with you, and enhance your user experience.
            </li>
            <li>
              Non-Personal Information: We may also collect non-personally
              identifiable information ("Non-Personal Information") when you use
              our Notes deck App. This may include technical information such as
              your device type, operating system, browser type, and usage
              statistics. We may use this information to analyze trends,
              administer the app, and gather demographic information for
              aggregate use.
            </li>
          </ol>
        </li>
        <li>
          Information Security
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              We take reasonable measures to protect the security of your
              Personal Information and maintain its accuracy. However, please be
              aware that no security measures are foolproof, and we cannot
              guarantee the absolute security of your information. We encourage
              you to use strong passwords and to take appropriate measures to
              protect your personal information.
            </li>
          </ul>
        </li>
        <li>
          Information Sharing and Disclosure
          <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              Service Providers: We may engage third-party service providers to
              perform certain functions on our behalf, such as hosting the app,
              processing payments, or providing customer support. These service
              providers may have access to your Personal Information but are
              only permitted to use it to perform their specific tasks.
            </li>
            <li>
              Legal Requirements: We may disclose your Personal Information if
              required to do so by law or in response to valid requests by
              public authorities (e.g., a court or government agency).
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, or sale
              of our assets, your Personal Information may be transferred as
              part of the transaction. We will notify you via email or prominent
              notice within the app of any change in ownership or uses of your
              Personal Information.
            </li>
          </ul>
        </li>
        <li>
          Third-Party Links
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              Our Note Saving App may contain links to third-party websites or
              services that are not owned or controlled by us. We are not
              responsible for the privacy practices or content of such
              third-party websites or services. We encourage you to review the
              privacy policies of those third parties before providing any
              Personal Information or using their services.
            </li>
          </ul>
        </li>
        <li>
          Changes to this Privacy Policy
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              We may update this Privacy Policy from time to time. We encourage
              you to review this Privacy Policy periodically for any changes.
              Your continued use of our Note Saving App after the posting of any
              changes constitutes your acceptance of such changes.
            </li>
          </ul>
        </li>
        <li>
          Contact Us
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at
              <span className="font-bold">sashidhar.dev@icloud.com</span>.
            </li>
            <li></li>
          </ul>
        </li>
        <li className="list-none pb-6">
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              By using our Notes deck App, you acknowledge that you have read
              and understood this Privacy Policy and agree to its terms.
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default index;

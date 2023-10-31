import React from "react";

const index = () => {
  return (
    <div className="mx-8 lg:mx-44">
      <h1 className="my-4 lg:my-8  text-center text-3xl lg:text-4xl font-bold">
        Privacy Policy
      </h1>
      <p>
        At Boost Productivity, we are committed to protecting the privacy of our
        users and ensuring the security of their personal information. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        user data when using our Soundscape mobile application, including the
        permissions required by the App.
      </p>

      <ul class="space-y-4  list-disc list-inside mt-4">
        <li>
          Information We Collect:
          <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              Personal Information: We may collect personal information that
              users voluntarily provide to us, such as their name, email
              address, and demographic information. This information is
              collected with the user's consent and is used solely for enhancing
              the user experience within the App.
            </li>
            <li>
              Non-Personal Information: We may automatically collect
              non-personal information, including but not limited to device
              information, usage statistics, and technical data. This
              information is collected to improve the functionality of the App
              and provide better services to our users.
            </li>
          </ol>
        </li>
        <li>
          Permissions:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              To provide the intended functionality of the App, we require
              certain permissions from users' devices. These permissions may
              include:
            </li>
          </ul>
          <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              Device Storage: The App may require access to the device's storage
              to save and retrieve user preferences or downloaded sound files.
            </li>
            <li>
              Audio Recording: The App may require permission to access the
              device's microphone for recording and analyzing ambient noise
              levels to provide personalized sound recommendations.
            </li>
            <li>
              Network Access: The App may require internet access to stream and
              download sound files, as well as to provide updates and access
              additional content. d. Push Notifications: With the user's
              consent, the App may send push notifications to provide updates,
              recommendations, or other relevant information.
            </li>
          </ul>
        </li>
        <li>
          Use of Information:
          <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              Personal Information: Personal information collected is used to
              personalize the user experience, improve our services, respond to
              user inquiries, and send periodic emails with updates or
              promotional content. We do not sell, rent, or lease personal
              information to third parties without the user's explicit consent.
            </li>
            <li>
              Non-Personal Information: Non-personal information is used to
              analyze trends, administer the App, gather demographic
              information, and track user activities within the App. This
              information helps us improve our services and enhance user
              experience.
            </li>
          </ul>
        </li>
        <li>
          Data Security:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              We implement appropriate security measures to protect user
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet
              or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </li>
          </ul>
        </li>

        <li>
          Data Retention:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              We retain user information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy unless a longer retention
              period is required or permitted by law.
            </li>
          </ul>
        </li>

        <li>
          Third-Party Services:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              The App may contain links or integrations with third-party
              services, websites, or advertisements that are not controlled or
              owned by us. We are not responsible for the privacy practices or
              content of these third-party services, and users are encouraged to
              review their respective privacy policies.
            </li>
          </ul>
        </li>

        <li>
          Children's Privacy:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              The App is not intended for use by individuals under the age of
              13. We do not knowingly collect personal information from
              children. If a parent or guardian becomes aware that their child
              has provided us with personal information without their consent,
              they should contact us, and we will delete the information from
              our servers.
            </li>
          </ul>
        </li>

        <li>
          Changes to the Privacy Policy:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              the revised Privacy Policy within the App. Users are encouraged to
              review this Privacy Policy periodically for any updates.
            </li>
          </ul>
        </li>

        <li>
          Contact Us:
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              If you have any questions, concerns, or suggestions regarding this
              Privacy Policy or our privacy practices, please contact us at{" "}
              <span className="font-bold">sashidhar.dev@icloud.com</span>.
            </li>
            <li></li>
          </ul>
        </li>

        <li className="list-none pb-6">
          <ul class="pl-5 mt-2 space-y-1 list-none list-inside">
            <li>
              By using the Soundscape App, you agree to the terms of this
              Privacy Policy, including the permissions required by the App.
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default index;

import React from "react";
import Footer from '../../components/Footer';
import MiddleNav from '../../components/MiddleNav';

function PrivacyPolicy() {
  return (
    <>
      <MiddleNav/>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Privacy Policy</h1>
            <p>
              At Travancore Gardens, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.
            </p>

            <h2 className="mt-5">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and payment details when you make a purchase, subscribe to our newsletter, or contact us for inquiries. Additionally, we may collect non-personal information such as your IP address, browser type, and browsing behavior to enhance your experience on our website.
            </p>

            <h2 className="mt-5">How We Use Your Information</h2>
            <ul>
              <li>To process your orders, respond to your inquiries, and provide you with relevant updates and promotions.</li>
              <li>To improve our website, personalize your experience, and conduct marketing research.</li>
              <li>To comply with applicable law or requests received from regulators, government, or judicial authorities.</li>
              <li>To prevent and detect fraud and abuse.</li>
              <li>To fulfill any other purpose for which you provide us the information and/or for any other purpose with your consent.</li>
            </ul>

            <h2 className="mt-5">Data Security</h2>
            <p>
              We take the security of your personal information seriously. We implement a variety of security measures, including encryption and secure servers, to protect your data from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-5">Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and track your interactions with our site. You can choose to disable cookies through your browser settings, but this may affect your ability to access certain features of our website.
            </p>

            <h2 className="mt-5">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights or have any questions about our Privacy Policy, please contact us through our website or at our customer service email. We are here to assist you and ensure your privacy is respected.
            </p>

            <h2 className="mt-5">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and we encourage you to review our Privacy Policy periodically to stay informed.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default PrivacyPolicy;

import React from 'react';
import Footer from '../../components/Footer';
import MiddleNav from '../../components/MiddleNav';

function StorePolicy() {
  return (
    <>
      <MiddleNav />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Store Policy</h1>

            <h2 className="mt-4">General</h2>
            <ol>
              <li>
                <strong>Do I have to create an account to make a purchase?</strong>
                <p>No registration or account creation is required to browse through our store or make a purchase.</p>
              </li>
              <li>
                <strong>How can I see my orders?</strong>
                <p>You can view your orders in the "My Orders" section of the storefront.</p>
              </li>
              <li>
                <strong>Is ordering on your website secure?</strong>
                <p>Yes, ordering on our website is completely secure. We prioritize your privacy and adhere to the highest safety standards. All transactions are processed securely via reputable payment gateways following global standards. Access to information is strictly controlled.</p>
              </li>
            </ol>

            <h2 className="mt-4">Shipping</h2>
            <ol>
              <li>
                <strong>Do you deliver Pan-India?</strong>
                <p>Yes, we deliver to over 28,000 pin codes across India.</p>
              </li>
              <li>
                <strong>What are the general shipping or delivery timelines?</strong>
                <p>Orders are processed within 24-48 hours. Our logistics partner will then take 4-6 days to deliver the product.</p>
              </li>
              <li>
                <strong>What are the shipping charges associated with an order?</strong>
                <p>Shipping charges will be calculated and displayed at checkout. We are currently offering free shipping as part of our launch offer.</p>
              </li>
              <li>
                <strong>How do I track my order?</strong>
                <p>You can track your order through email and WhatsApp notifications from our logistics partner.</p>
              </li>
            </ol>

            <h2 className="mt-4">Payments</h2>
            <ol>
              <li>
                <strong>What payment methods do you accept?</strong>
                <p>We accept the following payment methods:</p>
                <ul>
                  <li>Cards (Visa, Mastercard, Rupay, Discover, Amex)</li>
                  <li>UPI</li>
                  <li>Net Banking</li>
                  <li>Wallets</li>
                  <li>BNPL (Buy Now, Pay Later)</li>
                </ul>
              </li>
              <li>
                <strong>Do you offer COD (Cash on Delivery)?</strong>
                <p>Currently, we do not offer COD.</p>
              </li>
              <li>
                <strong>Will I get an automatic refund for failed payments?</strong>
                <p>Yes, you will receive an automated refund to your original payment source within 7-10 working days for failed payments.</p>
              </li>
              <li>
                <strong>What if I have issues with my order?</strong>
                <p>Please reach out to us using the contact information provided in the "Contact Us" section. We will prioritize resolving any issues you encounter.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StorePolicy;

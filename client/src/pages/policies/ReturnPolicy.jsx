import React from "react";
import Footer from '../../components/Footer';
import MiddleNav from '../../components/MiddleNav';

function ReturnPolicy() {
  return (
    <>
      <MiddleNav />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Return Policy</h1>
            <ol>
              <li>
                We ensure that our products reach you safely and on time and currently do not accept returns. In case of queries, please contact us with the details mentioned in the "About Us" section.
              </li>
              <li>
                If you receive damaged products, please contact us within 24 hours with images, and we will resolve this issue.
              </li>
              <li>
                We understand that sometimes products may not meet your expectations. We will evaluate if we can offer returns at your location for an additional charge. In such cases, please contact us, and we will assess and decide if returns can be offered at your location for an additional charge.
              </li>
              <li>
                Returns, if offered, will incur a nominal cost for picking up the product from your doorstep and delivering it back to us. This cost will be communicated to you before processing the return.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReturnPolicy;

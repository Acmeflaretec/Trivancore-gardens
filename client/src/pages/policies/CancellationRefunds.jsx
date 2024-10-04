import React from "react";
import Footer from '../../components/Footer';
import MiddleNav from '../../components/MiddleNav';

function CancellationRefunds() {
  return (
    <>
      <MiddleNav />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Cancellation & Refund</h1>
            <ol>
              <p>No cancellations & Refunds are entertained.</p></ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CancellationRefunds;

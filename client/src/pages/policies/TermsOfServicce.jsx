import React from "react";
import Footer from '../../components/Footer';
import MiddleNav from '../../components/MiddleNav';

function TermsOfService() {
  return (
    <>
      <MiddleNav />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Terms of Service</h1>

            <h2 className="mt-4"><strong>USER AGREEMENT</strong></h2>
            <p>
              By accessing the KGECO website, you agree to the accompanying terms and conditions. Any orders and purchases made through this site are governed by these terms. We reserve the right to modify these terms and conditions without notice at any time.
            </p>

            <h2 className="mt-4"><strong>GOVERNING LAWS</strong></h2>
            <p>
              This website is governed by the laws and courts of the state of Kerala. Orders placed on this site and the use of this site must comply with applicable provincial and national laws. It is the user’s responsibility to adhere to these laws.
            </p>

            <h2 className="mt-4"><strong>WEBSITE ERRORS</strong></h2>
            <p>
              We reserve the right to correct any errors or inaccuracies and update information on this website at any time without notice. This includes price and item availability.
            </p>

            <h2 className="mt-4"><strong>SHIPPING</strong></h2>
            <p>
              All items are delivered by a third party, and delivery is governed by the third party’s shipping contracts. While we strive to deliver items as quickly as possible, we are not responsible for delivery delays beyond our control. We reserve the right to hold shipments to certain addresses or cancel orders at our discretion.
            </p>

            <h2 className="mt-4"><strong>LINKS</strong></h2>
            <p>
              This site may provide links to other websites. These linked websites are independent of KGECO. We have no control over, and hold no liability for, the content or use of these sites. Accessing other websites through links on this site is done at the user’s own risk.
            </p>

            <h2 className="mt-4"><strong>COPYRIGHT CONSIDERATION</strong></h2>
            <p>
              All textual and graphic content on this site, its organization, presentation, and domain name are the property of, and/or licensed by, KGECO. Materials on this site may not be copied, reproduced, posted, or republished in any way. Republication or use of these materials on any other website is prohibited. All copyright logos and service marks displayed on this site are registered and their use is prohibited.
            </p>

            <h2 className="mt-4"><strong>LIABILITY DISCLAIMER</strong></h2>
            <p>
              This website should be used with discretion. Although we make reasonable efforts to ensure the website is current and free from inaccuracies or errors, we cannot guarantee that these will not occur. We will correct any mistakes as soon as possible and make reasonable efforts to notify affected users. This may result in orders not yet shipped being canceled or postponed. This agreement supersedes any prior agreements or understandings related to this subject matter. KGECO and its owners and employees are not liable for any damages arising from the use or access to our site or linked sites, whether these damages are foreseeable or not and regardless of whether we have been advised of the possibility, including, but not limited to, direct, indirect, special, consequential, incidental, or punitive damages.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfService;

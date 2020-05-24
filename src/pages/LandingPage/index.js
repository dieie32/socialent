import React from "react";
import styles from "./styles";

import mainMan from "../../assets/images/langing-page-main.png";
import logo from "../../assets/images/logo.png";

import Button from "../../components/Button";

function LandingPage() {
  return (
    <div>
      <section style={{ display: "flex" }}>
        <div>
          <h1 style={{ fontSize: 48 }}>
            We manage Facebook Ads for successful businesses.
          </h1>
          <p>
            Driving sales through digital marketing to increase your revenue is
            our number one focus. Your ROI is our Northstar.
          </p>

          <Button text="Get Started" />
        </div>

        <img src={mainMan} alt="Main man Landing" />
      </section>
      <section style={{ display: "flex" }}>
        <img src={mainMan} alt="Main man Landing" />

        <div>
          <h1 style={{ fontSize: 48 }}>
            No matter the size of your business we can help.
          </h1>
          <p>
            We have a very specific goal to achieve when working with our
            clients and that is to bring you a substantial return on your
            investment by driving more sales through digital marketing efforts.
          </p>

          <Button text="Get Started" />
        </div>
      </section>

      <section>
        <h1 style={{ fontSize: 48 }}>
          You will get full access to our whole agency team through our platform
        </h1>
        <p>
          Our team will manage the whole creation process, the targeting
          audience and the posting of your ads.
        </p>

        <img src={mainMan} alt="Main man Landing" />
      </section>

      <section>
        <h1 style={{ fontSize: 48 }}>Your social networks without us</h1>

        <img src={mainMan} alt="Main man Landing" />
      </section>

      <section>
        <h1 style={{ fontSize: 48 }}>With </h1>

        <img src={logo} alt="Logo" />

        <img src={mainMan} alt="Main man Landing" />
      </section>

      <section>
        <h1 style={{ fontSize: 48 }}>Simple pricing</h1>

        <p>A pay-once license, just for you</p>
      </section>

      <section>
        <h1 style={{ fontSize: 48 }}>The questions they ask us most often</h1>

        <div>
          <h3>How do I pay for the Essentials or Premium plan?</h3>
          <p>
            You can pay with a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the
            end of every billing cycle.
          </p>
        </div>

        <div>
          <h3>
            Can I cancel my Essentials or Premium plan subscription at any time?
          </h3>
          <p>
            You can pay with a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the
            end of every billing cycle.
          </p>
        </div>

        <div>
          <h3>
            We need to add new users to our team. How will that be billed?
          </h3>
          <p>
            You can pay with a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the
            end of every billing cycle.
          </p>
        </div>

        <div>
          <h3>
            My team wants to cancel its subscription. How do we do that? Can we
            get a refund?
          </h3>
          <p>
            You can pay with a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the
            end of every billing cycle.
          </p>
        </div>

        <div>
          <h3>
            Do you offer discounts for non-profit organizations or educational
            institutions?
          </h3>
          <p>
            You can pay with a credit card or via net banking (if you’re in
            United States). We will renew your subscription automatically at the
            end of every billing cycle.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

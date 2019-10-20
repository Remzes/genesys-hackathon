import React, {useEffect} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import Widget from '../FAQWidget/Button'
import Container from '../FAQWidget/Container'
import {sendMessage} from "../../../ducks/faqWidget";

const list = [
  {
    id: 1,
    question: "What is Growth Capital?",
    answer: `
      Clearbanc uses a unique corporate revenue share to fund the growth of our portfolio companies. We have powerful predictive models that look at your revenue, ad performance and other third party data to generate funding offers.

      We don't take equity, we don't dilute your investors, we don't take personal guarantees and we don't do a credit check. Our offers are based on your performance.
      
      We can deploy between $10,000 and $10,000,000 and can deploy that capital in less than 3 days.
      
      Clearbanc charges a small flat fee on our capital that ranges from 6% - 12.5% depending on how you spend the funds. This isn't an interest rate, and this is not a loan. You always know how much you owe. 
    `
  },
  {
    id: 2,
    question: "What is a Clearbanc Marketing Card?",
    answer: `
      A Clearbanc marketing card is a Mastercard available to fund your marketing spend. You can spend it on digital ad spend or to pay other items in your marketing budget.
    `
  },
  {
    id: 3,
    question: "What do I need to do to qualify for an advance?",
    answer: `
      We currently only provide financing for eCommerce and Consumer SaaS (software as a service) companies. If your business is not within these categories, we do not currently have a program in place to support you, but check back soon as we expand.

      Minimum eligibility criteria includes:
      
      average monthly revenue of at least $10,000
      at least 6 months of consistent revenue history
      business must be incorporated (ie. corporations or limited liability companies)
    `
  },
  {
    id: 4,
    question: "Can I receive more than one advance at a time?",
    answer: `
      Yes. You may receive an additional advance if you qualify for more capital.

      You may qualify for more capital if:
      
      You did not choose the max amount of capital on the first advance
      Your company revenue has grown significantly since the last advance
      You have a new source of income that significantly increases your revenue
      You are 80%+ repaid on your previous advance
      All offers are subject to due diligence.
    `
  },
  {
    id: 5,
    question: "Will applying affect my credit score?",
    answer: `
      We determine eligibility by analyzing your actual business metrics, so applying for an advance with Clearbanc should NOT affect your credit score.
    `
  },
  {
    id: 6,
    question: "How long does the whole process take?",
    answer: `
      The entire process (application, offer, negotiation, approval, sending funds) can be completed in as little as one to two business days. Large advances and applications requiring special considerations or analysis may take longer.
    `
  },
  {
    id: 7,
    question: 'My card has been declined. What do I do?',
    answer: `
      If this happens, you will receive an email informing you of the reason the card was declined. Please double check the CVC expiry date and card number on your Clearbanc dashboard to ensure you've entered it correctly. Please note that large transactions may be blocked for fraud prevention. If you need to make a large transaction, please let us know ahead of time so we can ensure it is successful.
    `
  }
]

export default connect(state => ({ faq: state.faq }), { send: sendMessage })(
  ({ send }) => {
    useEffect(() => {
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.keyCode === 74) {
          send(`What is ${document.getSelection().toString()}?`)
        }
      })
    }, [])

    return (
      <div className="faq-list">
        <div>
          {
            list.map(item => (
              <div key={item.id} style={{textAlign: "left", width: "80%", margin: "0 0 40px 20px"}}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
                <div style={{display: "flex"}}>
                  <Button type="primary">Leave a question</Button>
                </div>
              </div>
            ))
          }
        </div>
        <Widget/>
        <Container/>
      </div>
    )
  })
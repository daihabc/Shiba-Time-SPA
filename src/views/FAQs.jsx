import { useState } from 'react';
import Accordion from '../components/Accordion';

const defaultFAQs = {
  'Why Shibas are so popular?': `
  Shiba Inus is a beautiful breed with unique personalities. They are loyal, calm, and adoreable. Shiba They rarely barks and are adept to small spaces so they are perfect for city dwellers.
  `,
  'How many colors variations does Shiba have?': `
  There is red, black, tan and sesame shibas. The most common color you likely saw is red. Sesame shibas are the most rare.
  `,
  'Is Shiba one of the genetically closest dog breed to wolves?': `
  Yes, they are! Shibas are one of the oldest domesticated dogs, so they are close to their wolf ancestor. 
  `,
};

function FAQs() {
  const [faqs] = useState(defaultFAQs);
  return (
    <div className="FAQs">
      <div className="FAQs__title">Frequently Asked Questions about Shibas Inus</div>
      <Accordion entries={faqs} />
      <div className="FAQs__img__container">
        <img className="FAQs__img" src="https://images.pexels.com/photos/7960254/pexels-photo-7960254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="shiba under cherry tree by Valeria Boltneva"></img>
      </div>
    </div>
  );
}

export default FAQs;

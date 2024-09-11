// Main.js
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Main() {
  return (
    <main>
      {/* Adding IDs for navigation */}
      <section id="call-to-action">
        <CallToAction />
      </section>
      <section id="specials-section">
        <Specials />
      </section>
      <section id="customers-say-section">
        <CustomersSay />
      </section>
      <section id="chicago-section">
        <Chicago />
      </section>
    </main>
  );
}

export default Main;

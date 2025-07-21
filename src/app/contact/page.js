const ContactPage = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have a question, suggestion, or just want to say hello? We'd love to
        hear from you!
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;

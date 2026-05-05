import { useState } from "react";

const services = [
  { label: "Posters & Flyers", desc: "" },
  { label: "Social Media Graphics", desc: "" },
  { label: "Event Invitations & Stationery", desc: "" },
  { label: "Signage & Banners", desc: "" },
  { label: "Custom Illustration", desc: "" },
  { label: "Merch Design", desc: "" },
  { label: "Custom Print & Keepsakes", desc: "Printed place cards, table menus, party favours, custom decor, and more" },
  { label: "Creative Direction", desc: "Visual concept and theme development for your event" },
  { label: "Content Creation", desc: "" },
  { label: "Other", desc: "" },
];

const eventTypes = [
  "Baby Shower",
  "Birthday",
  "Brand Launch",
  "Bridal Shower",
  "Celebration of Life",
  "Conference",
  "Gala / Fundraiser",
  "Graduation",
  "Private Dining",
  "Social Celebration",
  "Corporate Event",
  "Other",
];

const budgetOptions = [
  "Under ₦500,000",
  "₦500,000 – ₦1,000,000",
  "₦1,000,000 – ₦2,000,000",
  "₦2,000,000 – ₦5,000,000",
  "₦5,000,000+",
  "Not sure yet",
];

const referralOptions = [
  "Friend / Colleague",
  "Referral",
  "Social Media",
  "Online Search",
  "Other",
];

const venueOptions = ["Yes", "No", "Still looking"];

export default function WorkWithMe() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    eventDate: "", services: [], eventLocation: "",
    venueBooked: "", eventType: "", guestCount: "",
    budget: "", details: "", referral: "", clientType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSelect = (field, value) => setForm({ ...form, [field]: value });
  const toggleService = (label) => {
    const current = form.services;
    const updated = current.includes(label)
      ? current.filter((s) => s !== label)
      : [...current, label];
    setForm({ ...form, services: updated });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://formspree.io/f/xqenqwal", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          ...form,
          services: form.services.join(", "),
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly at yellowgirlstudio@gmail.com");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or email us directly at yellowgirlstudio@gmail.com");
    }
  };

  const isComplete =
    form.firstName && form.lastName && form.email &&
    form.phone && form.eventDate && form.services.length > 0 &&
    form.eventType && form.eventLocation;

  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0D0C0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        padding: 32,
      }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ fontSize: 28, color: "#C8A96E", marginBottom: 24 }}>✦</div>
          <h2 style={{ fontSize: 36, fontWeight: 400, color: "#F0EBE0", marginBottom: 20, letterSpacing: "0.03em" }}>
            Thank you, {form.firstName}.
          </h2>
          <p style={{ fontSize: 16, color: "#8A8070", lineHeight: 1.9, fontStyle: "italic" }}>
            Your enquiry has been received. We'll be in touch within 48 hours
            to schedule your consultation and begin bringing your vision to life.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#0D0C0A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, textarea::placeholder { color: #AAA090; font-style: italic; font-family: 'Cormorant Garamond', Georgia, serif; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.4); cursor: pointer; }
        .radio-option { display: flex; align-items: center; gap: 12px; padding: 10px 0; cursor: pointer; border-bottom: 1px solid #F0EBE015; transition: all 0.15s; }
        .radio-option:hover .radio-label { color: #1A1710 !important; }
        .radio-option:last-child { border-bottom: none; }
        .submit-btn:hover:not(:disabled) { background: #C8A96E !important; color: #0D0C0A !important; }
        @media (max-width: 768px) {
          .split { grid-template-columns: 1fr !important; }
          .left { position: relative !important; height: auto !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="split" style={{ display: "grid", gridTemplateColumns: "380px 1fr", minHeight: "100vh" }}>

        {/* Left Panel */}
        <div className="left" style={{
          background: "linear-gradient(170deg, #1C1A14 0%, #0D0C0A 100%)",
          padding: "72px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1px solid #1E1C18",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A96E", marginBottom: 56 }}>
              Yellow Girl Studio
            </div>

            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A5448", marginBottom: 14 }}>
              Begin Your Experience
            </div>

            <h1 style={{
              fontSize: "clamp(34px, 3vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F0EBE0",
              marginBottom: 36,
              letterSpacing: "0.01em",
            }}>
              Let's create<br />
              <em style={{ color: "#C8A96E" }}>something</em><br />
              unforgettable.
            </h1>

            <div style={{ width: 24, height: 1, background: "#C8A96E", marginBottom: 28 }} />

            <p style={{ fontSize: 15, color: "#C8C0B0", lineHeight: 1.9, marginBottom: 16, maxWidth: 280 }}>
              We can't wait to work with you and bring your vision to life. Every experience receives our full creative attention and care.
            </p>

            <p style={{ fontSize: 12, color: "#8A8070", lineHeight: 1.7, maxWidth: 280, fontStyle: "italic", fontWeight: 600 }}>
              Complete the form and we'll be in touch within 48 hours to schedule your consultation.
            </p>
          </div>

          <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A5448", fontStyle: "italic", fontWeight: 700 }}>
            Abuja · Nigeria
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ background: "#F7F4EF", padding: "72px 64px", overflowY: "auto" }}>

          {/* Name */}
          <SectionLabel text="Name" />
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 36 }}>
            <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} focused={focused} setFocused={setFocused} required />
            <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} focused={focused} setFocused={setFocused} required />
          </div>

          {/* Email */}
          <SectionLabel text="Email" />
          <div style={{ marginBottom: 36 }}>
            <Field label="" name="email" type="email" value={form.email} onChange={handleChange} focused={focused} setFocused={setFocused} required />
          </div>

          {/* Phone */}
          <SectionLabel text="Contact Number" />
          <div style={{ marginBottom: 36 }}>
            <Field label="" name="phone" value={form.phone} onChange={handleChange} focused={focused} setFocused={setFocused} required />
          </div>

          {/* Event Date */}
          <SectionLabel text="Event Date" />
          <div style={{ marginBottom: 36 }}>
            <Field label="" name="eventDate" type="date" value={form.eventDate} onChange={handleChange} focused={focused} setFocused={setFocused} required />
          </div>

          {/* Event Type */}
          <SectionLabel text="What event are you planning?" required />
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 36, marginTop: 12 }}>
            {eventTypes.map((t) => (
              <RadioOption
                key={t}
                label={t}
                selected={form.eventType === t}
                onClick={() => handleSelect("eventType", t)}
              />
            ))}
          </div>

          {/* Services — multi select */}
          <SectionLabel text="What services are you interested in?" required />
          <p style={{ fontSize: 12, color: "#9A9080", fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>Select all that apply</p>
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 36 }}>
            {services.map((s) => (
              <CheckOption
                key={s.label}
                label={s.label}
                desc={s.desc}
                selected={form.services.includes(s.label)}
                onClick={() => toggleService(s.label)}
              />
            ))}
          </div>

          {/* Client Type */}
          <SectionLabel text="Are you enquiring as..." required />
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 36, marginTop: 12 }}>
            {["An individual", "A company or organisation"].map((t) => (
              <RadioOption
                key={t}
                label={t}
                selected={form.clientType === t}
                onClick={() => handleSelect("clientType", t)}
              />
            ))}
          </div>

          {/* Event Location */}
          <SectionLabel text="Event Location" required />
          <div style={{ marginBottom: 36, marginTop: 12 }}>
            <Field label="" name="eventLocation" value={form.eventLocation} onChange={handleChange} focused={focused} setFocused={setFocused} required />
          </div>

          {/* Venue Booked */}
          <SectionLabel text="Do you have a venue booked?" />
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 36, marginTop: 12 }}>
            {venueOptions.map((v) => (
              <RadioOption
                key={v}
                label={v}
                selected={form.venueBooked === v}
                onClick={() => handleSelect("venueBooked", v)}
              />
            ))}
          </div>

          {/* Guest Count */}
          <SectionLabel text="Expected no. of guests" />
          <div style={{ marginBottom: 36, marginTop: 12 }}>
            <Field label="" name="guestCount" value={form.guestCount} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="Drop an estimate here" />
          </div>

          {/* Budget */}
          <SectionLabel text="What's your budget?" />
          <p style={{ fontSize: 13, color: "#9A9080", fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>
            We work on a bespoke basis, with fees aligned to the overall event vision.
          </p>
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 36 }}>
            {budgetOptions.map((b) => (
              <RadioOption
                key={b}
                label={b}
                selected={form.budget === b}
                onClick={() => handleSelect("budget", b)}
              />
            ))}
          </div>

          {/* Important Details */}
          <SectionLabel text="Any important details you feel we should know?" />
          <div style={{ marginBottom: 36, marginTop: 12 }}>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              onFocus={() => setFocused("details")}
              onBlur={() => setFocused(null)}
              rows={5}
              placeholder="Share anything that will help us understand your vision..."
              style={{
                width: "100%",
                border: `1px solid ${focused === "details" ? "#C8A96E" : "#D8D0C0"}`,
                background: "#FDFBF8",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 15,
                color: "#1A1710",
                padding: "14px 16px",
                outline: "none",
                resize: "none",
                lineHeight: 1.8,
                transition: "border-color 0.2s",
              }}
            />
          </div>

          {/* Referral */}
          <SectionLabel text="How did you hear about us?" />
          <div style={{ border: "1px solid #D8D0C0", marginBottom: 56, marginTop: 12 }}>
            {referralOptions.map((r) => (
              <RadioOption
                key={r}
                label={r}
                selected={form.referral === r}
                onClick={() => handleSelect("referral", r)}
              />
            ))}
          </div>

          {/* Submit */}
          <div style={{ borderTop: "1px solid #E0D8C8", paddingTop: 40 }}>
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!isComplete}
              style={{
                width: "100%",
                background: isComplete ? "#1A1710" : "#E0D8C8",
                color: isComplete ? "#F7F4EF" : "#B0A890",
                border: "none",
                padding: "20px 0",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                cursor: isComplete ? "pointer" : "not-allowed",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                transition: "all 0.3s",
              }}
            >
              Submit Enquiry
            </button>
            <p style={{ fontSize: 12, color: "#9A9080", fontStyle: "italic", marginTop: 14, textAlign: "center" }}>
              Fields marked <span style={{ color: "#C8A96E" }}>*</span> are required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ text, required }) {
  return (
    <div style={{
      fontSize: 14,
      color: "#1A1710",
      marginBottom: 4,
      fontWeight: 500,
      lineHeight: 1.5,
    }}>
      {text}{required && <span style={{ color: "#C8A96E", marginLeft: 4 }}>*</span>}
    </div>
  );
}

function Field({ label, name, value, onChange, focused, setFocused, type = "text", required, placeholder }) {
  return (
    <div>
      {label && (
        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8070", marginBottom: 6 }}>
          {label}{required && <span style={{ color: "#C8A96E", marginLeft: 4 }}>*</span>}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: `1px solid ${focused === name ? "#C8A96E" : "#D8D0C0"}`,
          background: "#FDFBF8",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 15,
          color: "#1A1710",
          padding: "12px 14px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
      />
    </div>
  );
}

function CheckOption({ label, desc, selected, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      padding: "12px 16px",
      cursor: "pointer",
      borderBottom: "1px solid #EDE8E0",
      background: selected ? "#F0EBE0" : "transparent",
      transition: "background 0.15s",
    }}>
      <div style={{
        width: 18,
        height: 18,
        border: `1px solid ${selected ? "#1A1710" : "#C0B8A8"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
        transition: "all 0.15s",
        background: selected ? "#1A1710" : "transparent",
      }}>
        {selected && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="#F7F4EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div>
        <span style={{
          fontSize: 13,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: selected ? "#1A1710" : "#7A7060",
          fontWeight: selected ? 500 : 400,
          display: "block",
          transition: "color 0.15s",
        }}>
          {label}
        </span>
        {desc && (
          <span style={{
            fontSize: 12,
            color: "#9A9080",
            fontStyle: "italic",
            lineHeight: 1.5,
            marginTop: 2,
            display: "block",
          }}>
            {desc}
          </span>
        )}
      </div>
    </div>
  );
}

function RadioOption({ label, desc, selected, onClick }) {
  return (
    <div className="radio-option" onClick={onClick} style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      padding: "12px 16px",
      cursor: "pointer",
      borderBottom: "1px solid #EDE8E0",
      background: selected ? "#F0EBE0" : "transparent",
      transition: "background 0.15s",
    }}>
      <div style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `1px solid ${selected ? "#1A1710" : "#C0B8A8"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
        transition: "all 0.15s",
      }}>
        {selected && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1A1710" }} />}
      </div>
      <div>
        <span className="radio-label" style={{
          fontSize: 13,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: selected ? "#1A1710" : "#7A7060",
          fontWeight: selected ? 500 : 400,
          transition: "color 0.15s",
          display: "block",
        }}>
          {label}
        </span>
        {desc && (
          <span style={{
            fontSize: 12,
            color: "#9A9080",
            fontStyle: "italic",
            lineHeight: 1.5,
            marginTop: 2,
            display: "block",
          }}>
            {desc}
          </span>
        )}
      </div>
    </div>
  );
}

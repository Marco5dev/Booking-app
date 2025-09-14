import { useState, useMemo, useEffect } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    diners: "2",
    seating: "",
    occasion: "None",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requests: "",
  });
  const [theme, setTheme] = useState(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored) return stored;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return "dark";
    return "light";
  });

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") body.classList.add("dark");
    else body.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const isStep1Complete = !!(form.date && form.time && form.diners);
  const isStep2Complete = !!(form.firstName && form.lastName && form.email);
  const allDone = isStep1Complete && isStep2Complete; // Step 3 condition

  // Determine which step is active: first incomplete, else confirm
  const activeStep = !isStep1Complete ? 1 : !isStep2Complete ? 2 : 3;

  const summary = useMemo(
    () => [
      ["Date", form.date || "—"],
      ["Time", form.time || "—"],
      ["Diners", form.diners],
      ["Seating", form.seating || "Any"],
      ["Occasion", form.occasion],
      [
        "Name",
        (form.firstName || "") + (form.lastName ? " " + form.lastName : "") ||
          "—",
      ],
      ["Email", form.email || "—"],
      ["Phone", form.phone || "—"],
    ],
    [form]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!allDone) return;
    alert("Reservation submitted:\n" + JSON.stringify(form, null, 2));
  }

  return (
    <div className="bg-soft-gradient min-h-screen pb-10 transition">
      <div className="gradient-hero hero">
        <div className="hero-inner container animate-pop gap-4 flex flex-col">
          <div className="flex justify-center items-center mb-4">
            <h1 className="m-0">Reserve a Table</h1>
          </div>
          <p
            className="text-base font-light"
            style={{ color: "rgba(255,255,255,.85)" }}
          >
            Plan your dining experience at Little Lemon. A refined interface to
            book, personalize and confirm.
          </p>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="btn btn-outline text-xs scale-hover"
            style={{ minWidth: "3.2rem" }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <main className="container layout-grid fade-slide mt-6">
        <section className="card card-elevated p-6 rounded flex flex-col gap-6">
          <div className="steps" aria-label="Progress">
            <div
              className="step"
              data-complete={isStep1Complete}
              data-active={activeStep === 1}
            >
              <span className="step-circle">1</span>
              <span>Details</span>
            </div>
            <span style={{ opacity: 0.4 }}>—</span>
            <div
              className="step"
              data-complete={isStep2Complete}
              data-active={activeStep === 2}
            >
              <span className="step-circle">2</span>
              <span>Contact</span>
            </div>
            <span style={{ opacity: 0.4 }}>—</span>
            <div
              className="step"
              data-active={activeStep === 3}
              data-complete={allDone}
            >
              <span className="step-circle">3</span>
              <span>Confirm</span>
            </div>
          </div>

          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div>
              <h2 className="form-section-title">Booking Details</h2>
              <p className="section-description">
                Select when you would like to dine and how many guests you have.
              </p>
              <div className="field-inline-2">
                <div className="field-group">
                  <label htmlFor="date" className="label">
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="input"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="time" className="label">
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="input"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  />
                </div>
              </div>

              <div className="inline-fields mt-4">
                <div className="field-group">
                  <label htmlFor="diners" className="label">
                    Number of Diners
                  </label>
                  <select
                    id="diners"
                    name="diners"
                    className="select"
                    value={form.diners}
                    onChange={(e) => update("diners", e.target.value)}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field-group">
                  <span className="label">Seating</span>
                  <div
                    className="pill-group"
                    role="radiogroup"
                    aria-label="Seating preference"
                  >
                    {["Indoor", "Outdoor"].map((opt) => {
                      const selected = form.seating === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          className="pill transition scale-hover"
                          data-selected={selected}
                          onClick={() => update("seating", selected ? "" : opt)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  <p className="help-text">Optional seating preference.</p>
                </div>
                <div className="field-group">
                  <label htmlFor="occasion" className="label">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    className="select"
                    value={form.occasion}
                    onChange={(e) => update("occasion", e.target.value)}
                  >
                    {["None", "Birthday", "Anniversary", "Business"].map(
                      (o) => (
                        <option key={o}>{o}</option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <hr className="divider" />

            <div>
              <h2 className="form-section-title">Your Information</h2>
              <p className="section-description">
                Tell us who we are expecting and how to reach you.
              </p>
              <div className="field-inline-2">
                <div className="field-group">
                  <label htmlFor="firstName" className="label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="input"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="lastName" className="label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="input"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div className="field-inline-2 mt-4">
                <div className="field-group">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
              </div>
              <div className="field-group mt-4">
                <label htmlFor="requests" className="label">
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={3}
                  className="input"
                  placeholder="Wheelchair access, high chair, etc."
                  value={form.requests}
                  onChange={(e) => update("requests", e.target.value)}
                />
                <p className="help-text">We'll do our best to accommodate.</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                disabled={!allDone}
                type="submit"
                className="btn btn-gradient text-sm uppercase tracking-wide disabled:opacity-50"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </section>

        <aside className="summary-card card glass p-4 rounded shadow-sm animate-pop">
          <h3 className="card-title mb-2">Live Summary</h3>
          <ul className="summary-list mb-4">
            {summary.map(([label, value]) => (
              <li key={label} className="summary-item">
                <span>{label}</span>
                <span>{value || "—"}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mb-3">
            Finish filling out the form to enable confirmation.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn btn-outline text-xs"
              onClick={() =>
                setForm({
                  date: "",
                  time: "",
                  diners: "2",
                  seating: "",
                  occasion: "None",
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  requests: "",
                })
              }
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-accent text-xs"
              onClick={() => alert("Share link copied (demo)")}
            >
              Share
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

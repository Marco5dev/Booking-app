import { useState, useMemo, useEffect } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";

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

  // available times managed at parent level and passed down
  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:30 PM",
  ]);

  useEffect(() => {
    // simple example: if date changes, simulate fetching new times
    if (!form.date) return;
    // for demo, rotate times based on date string hash
    const seed = Array.from(form.date).reduce((s, c) => s + c.charCodeAt(0), 0);
    const rotated = [...availableTimes].sort((a, b) => (seed % 3) - (seed % 2));
    setAvailableTimes(rotated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.date]);

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

          <BookingForm
            form={form}
            update={update}
            onSubmit={handleSubmit}
            availableTimes={availableTimes}
          />
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

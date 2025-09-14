# Personal Portfolio (React + Vite)

A single‑page developer portfolio built with React. Includes a sticky auto‑hiding header with internal smooth scrolling links, social links, a landing (hero) section, featured projects grid, and a validated contact form.

## Sections & Features

1. Header
   - External social links (GitHub, LinkedIn, Twitter – replace with yours)
   - Internal links: Home, Projects, Contact (smooth scroll)
   - Auto hides on scroll down and reappears on scroll up with CSS transition
2. Landing (Hero)
   - Avatar (currently reusing `react.svg` placeholder) + Name + Short bio/tagline
3. Featured Projects
   - Renders 4 project cards in a responsive grid (2x2 on wider screens, auto stacks on mobile)
   - Each card: title, description, tech stack list, optional link button
4. Contact Me Form
   - Fields: Name (required), Email (valid format), Message (min 10 chars)
   - Inline validation on blur + overall validation on submit
   - Success message after valid submit (simulated only; no real backend)

## Tech Stack
- React 19 + Vite
- Functional components with hooks
- No external UI library (pure CSS for clarity)

## Running Locally
```bash
npm install
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## Build & Preview
```bash
npm run build
npm run preview
```

## Customization Checklist
- Update social profile URLs in `src/components/Header.jsx`
- Replace avatar import in `src/components/Landing.jsx` with your image (place file in `src/assets`)
- Edit project entries in `src/components/Projects.jsx` array
- Adjust colors / typography in `src/App.css`
- Update name & bio in `Landing.jsx`

## Peer Review Submission Steps
1. Verify each requirement:
   - Header links work (external open in new tab, internal smooth scroll).
   - Header hides on scroll down and returns on scroll up smoothly.
   - Landing has avatar, name, bio.
   - Projects show a 2x2 grid (≥4 cards) on desktop.
   - Contact form validation triggers on focus/blur and blocks invalid submit.
2. Delete the `node_modules` folder (to shrink size).
3. Zip the project folder (folder containing `package.json`).
4. Upload the zip for peer review.

## Reviewing a Peer’s Project
```bash
npm install
npm run dev
```
Or copy their `App.jsx` / component code into a fresh Vite React sandbox if allowed.

## Potential Improvements
- Add dark/light theme toggle
- Persist submitted form data or send to a serverless endpoint
- Add animation (Framer Motion) for section entrance
- Introduce filtering / tagging for projects
- Add unit tests for validation and scroll behavior

## License
Educational use (course peer review exercise). Replace content & assets with your own branding before public deployment.

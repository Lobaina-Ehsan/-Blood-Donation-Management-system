# Blood Donation Website — Fix Guide

---

## What to DELETE

These files are broken, unused, or should never be in a repo:

| File | Why |
|------|-----|
| `src/pages/Login.jsx` | Duplicate of Login.tsx — had wrong API paths and fields. **Delete it.** |
| `src/pages/Signup.jsx` | Separate signup page that was never routed. Logic is now inside Login.tsx. **Delete it.** |
| `src/pages/Profile.jsx` | Calling a route that didn't exist. Now the profile route exists in the backend so you can keep this later, but it's currently not routed in the frontend — safe to delete for now. |
| `src/pages/pages - Shortcut.lnk` | Windows shortcut file, not a source file. **Delete it.** |
| `backend/node_modules/` | Never commit node_modules. Delete from repo / add to .gitignore. |

---

## What to REPLACE

Copy the fixed files from this guide into your project, overwriting the originals.

### Backend (replace all 5 files)

| Fixed file | Replaces | What changed |
|------------|----------|--------------|
| `backend/.env` | `backend/.env` | JWT_SECRET is now a proper placeholder (change it before deploying) |
| `backend/package.json` | `backend/package.json` | Removed unused `test` script, added `dev` script with `--watch` |
| `backend/server.js` | `backend/server.js` | Minor cleanup only |
| `backend/db.js` | `backend/db.js` | Added `process.exit(1)` so server fails loudly if DB is unreachable |
| `backend/routes/authRoutes.js` | `backend/routes/authRoutes.js` | **Main fix** — routes are now `/register` and `/login`, fields are `email`+`name`, `/profile` route added |
| `backend/middleware/authMiddleware.js` | same | No changes needed, included for completeness |

### Frontend (replace 3 files)

| Fixed file | Replaces | What changed |
|------------|----------|--------------|
| `src/api.js` | `src/api.js` | Added axios interceptor to auto-attach JWT token on every request |
| `src/app/components/Login.tsx` | `src/app/components/Login.tsx` | **Main fix** — wired to real API, correct fields & paths, error display, loading states, auto-switches to login after signup |
| `package.json` (root) | `package.json` (root) | Moved `react` and `react-dom` from `peerDependencies` into `dependencies` |

### New files to ADD

| New file | Where | Purpose |
|----------|--------|---------|
| `backend/setup.sql` | `backend/` | Run once to create the MySQL database and users table |
| `.gitignore` | root | Keeps node_modules, .env, and .lnk files out of git |
| `backend/.gitignore` | `backend/` | Keeps backend's node_modules and .env out of git |

---

## Files you do NOT need to touch

Everything else in your project is fine as-is:
- All `src/app/components/*.tsx` (Home, Dashboard, BloodRequest, DonorMatching, AdminPanel, etc.)
- `src/app/routes.tsx`
- `src/app/App.tsx`
- `src/main.tsx`
- `src/styles/*`
- `index.html`
- `postcss.config.mjs`
- `pnpm-workspace.yaml`
- All `src/app/components/ui/*.tsx` (shadcn components)

---

## How to run the project

### Step 1 — Set up MySQL (one time only)

Make sure MySQL is installed and running, then:

```bash
mysql -u root -p < backend/setup.sql
```

If your root user has a password, enter it when prompted. This creates the `blood_donation` database and the `users` table.

If your MySQL root has a password, also update `backend/.env`:
```
DB_PASSWORD=your_actual_mysql_password
```

### Step 2 — Start the backend

Open a terminal:

```bash
cd backend
npm install
npm start
```

You should see:
```
Server running on http://localhost:5000
MySQL connected successfully
```

For development with auto-restart on file changes, use `npm run dev` instead.

### Step 3 — Start the frontend

Open a second terminal (keep the backend running):

```bash
# from the project root
npm install
npm run dev
```

You should see Vite start at `http://localhost:5173`.

### Step 4 — Open the site

Go to `http://localhost:5173` in your browser.

- Click **Login** in the navbar → goes to the login/register page
- Register a new account → it will be saved to MySQL
- Log in → you get a JWT token stored in localStorage → redirected to Dashboard

---

## API endpoints (for reference)

| Method | Path | Auth required | Description |
|--------|------|--------------|-------------|
| POST | `/api/register` | No | Create new account |
| POST | `/api/login` | No | Login, returns JWT token |
| GET | `/api/profile` | Yes (Bearer token) | Get logged-in user's profile |

---

## Before deploying (checklist)

- [ ] Change `JWT_SECRET` in `backend/.env` to a long random string (32+ characters)
- [ ] Make sure `.env` is in `.gitignore` before pushing to GitHub
- [ ] Delete `src/pages/` folder entirely
- [ ] Set `DB_PASSWORD` to your real MySQL password

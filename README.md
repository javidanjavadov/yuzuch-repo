# MediConnect+ Web

Professional Stage 1 foundation for the Yuzuch healthcare website. This repository is structured for scalable feature development across appointments, diagnostics, laboratory flows, patient accounts, and future medical modules.

Project is ready for scalable feature development.

## Tech Stack

- Next.js 16 + React 19
- Tailwind CSS 4
- TypeScript strict mode
- Zustand for global state
- Axios for API communication
- Zod and React Hook Form for form preparation
- ESLint, Prettier, Husky, lint-staged

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment values:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app:

```txt
http://localhost:3000
```

## Run Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
```

## Environment Setup

Required variables:

```txt
NEXT_PUBLIC_API_BASE_URL=
```

Example values are provided in `.env.example`.

## Folder Structure

```txt
mediconnect-web/
  public/
  src/
    app/
    components/
    modules/
    layouts/
    services/
    store/
    hooks/
    utils/
    constants/
    config/
    styles/
    types/
    assets/
  .env.local
  .env.example
  .gitignore
  next.config.js
  tsconfig.json
  tailwind.config.js
  package.json
  README.md
```

## Foundation Coverage

### UI Foundation

- Buttons
- Inputs
- Search bars
- Cards
- Containers
- Sections
- Tabs
- Modals
- Navigation
- Footer

### Routing

- `/`
- `/home`
- `/services`
- `/laboratory`
- `/doctors`
- `/appointments`
- `/basket`
- `/profile`
- `/login`
- `/register`

### API Foundation

- `src/services/api.ts`
- `src/services/auth.service.ts`
- `src/services/laboratory.service.ts`
- `src/services/doctor.service.ts`
- `src/services/appointment.service.ts`
- `src/services/user.service.ts`

Included behavior:

- Axios client
- Base URL handling
- Request interceptor
- Response interceptor
- Error normalization
- Token attachment
- Timeout handling

### Authentication Preparation

- Persistent `authStore`
- Login/register structure
- OTP form preparation
- Token storage
- Protected route middleware
- Role-based user typing

### State Management

- `authStore`
- `basketStore`
- `appStore`
- `userStore`

### Homepage Foundation

- Hero section
- Categories
- Featured services
- Doctors
- Laboratory/promotional blocks
- Footer CTA

## Development Rules

- Keep code typed, modular, and reusable.
- Prefer shared UI primitives before creating route-local components.
- Use the `@/` import alias.
- Keep business logic in `modules/`, `services/`, `store/`, and `utils/`.
- Preserve the Stage 1 design tokens and responsive system unless the design system is being intentionally evolved.

## Quality Checks

Before pushing changes:

```bash
npm run lint
npm run typecheck
npm run build
```

## Current Status

- Responsive layout foundation is implemented.
- Main layout, mobile navigation, and sidebar state logic are prepared.
- API and auth foundations are ready for backend integration.
- Repository structure matches Stage 1 engineering goals.

Project is ready for scalable feature development.

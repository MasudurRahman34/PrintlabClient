# Printlab Client 🖨️

Modern, responsive frontend web application for **Printlab** — an online printing and print-on-demand e-commerce platform built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **TanStack React Query**.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Local Setup](#-installation--local-setup)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Backend API Integration](#-backend-api-integration)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

- **Product Catalog & Dynamic Configuration**:
  - Category-based product browsing and live search with debouncing.
  - Custom attribute selection (paper types, dimensions, finishes, quantity tiers, turnaround time).
  - Dynamic pricing calculation based on selected attribute combinations.

- **Artwork & Design Uploads**:
  - File upload and management for print-ready artwork (PDF, AI, PSD, images).
  - Artwork proofing and design preview workflow.

- **Shopping Cart & Checkout**:
  - Multi-item shopping basket management with complete price breakdowns.
  - Automated UK/London address search via Postcode lookup.
  - Multi-step checkout process with delivery and payment handling.

- **Customer Account Portal (`/my-account`)**:
  - User authentication (Login, Register, Password Reset, Email Verification).
  - Order history tracking and order status inspection.
  - Saved delivery/billing addresses and payment settings management.
  - Automated PDF invoice generation and download (`jspdf`, `jspdf-invoice-template`).

- **Optimized UI/UX**:
  - Built with Tailwind CSS and accessible Radix UI primitives.
  - Client-side data fetching, caching, and state synchronization via TanStack Query.
  - Mobile-responsive design with responsive sliders/carousels (Swiper & Embla).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16+ with App Router)
- **Library**: [React](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), `@tailwindcss/animate`
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Data Fetching & State**: [TanStack React Query](https://tanstack.com/query/latest), [Axios](https://axios-http.com/)
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/), [Yup](https://github.com/jquense/yup)
- **Document / PDF Generation**: `jspdf`, `jspdf-invoice-template`, `pdf-lib`
- **Icons & Media**: `react-icons`, `@radix-ui/react-icons`, `swiper`, `embla-carousel-react`

---

## 📋 Prerequisites

Before running the project locally, make sure you have the following installed:

- **Node.js**: `v18.18.0` or higher (v20+ recommended). [Download Node.js](https://nodejs.org/)
- **Package Manager**: [Yarn](https://yarnpkg.com/) (recommended) or `npm` / `pnpm`
- **Git**: Installed and configured on your system.

To check your installed versions:
```bash
node -v
yarn -v
```

---

## 🚀 Installation & Local Setup

Follow these steps to get Printlab Client running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/PrintlabClient.git
cd PrintlabClient
```

### 2. Install Dependencies

Using Yarn (recommended):
```bash
yarn install
```

Or using npm:
```bash
npm install
```

### 3. Configure Environment Variables

Create your local `.env.local` configuration file by copying `.env.example`:

```bash
cp .env.example .env.local
```

Open `.env.local` in your editor and update the variables with your environment values:

```env
# Backend REST API base endpoint (must include /api/v1)
NEXT_PUBLIC_BACKEND_URL=https://printlabapi.devtaijul.com/api/v1

# Image and media base URL (no trailing slash)
NEXT_PUBLIC_IMAGE_URL=https://printlabapi.devtaijul.com

# Port for local dev server or custom server
PORT=4444
```

### 4. Run the Development Server

Start the Next.js development server:

```bash
yarn dev
```

The application will be running at:
👉 **[http://localhost:4444](http://localhost:4444)**

*(Note: The default dev script is configured to use port `4444`. You can change this in `package.json` if needed).*

---

## 🔐 Environment Variables

| Variable | Required | Description | Example / Default |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_BACKEND_URL` | **Yes** | Base URL for REST API endpoints (v1) | `https://printlabapi.devtaijul.com/api/v1` |
| `NEXT_PUBLIC_IMAGE_URL` | **Yes** | Base domain where uploaded media/assets reside | `https://printlabapi.devtaijul.com` |
| `PORT` | No | Port used by the custom server (`server.js`) | `4444` (or `3000`) |

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `yarn dev` | Runs the Next.js app in development mode on port `4444` with hot-reloading |
| `yarn build` | Creates an optimized production build in the `.next` directory |
| `yarn start` | Starts the Next.js production server |
| `yarn lint` | Runs ESLint to check for code quality and syntax issues |
| `node server.js` | Runs the custom HTTP Next.js server instance |

---

## 📂 Project Structure

```text
PrintlabClient/
├── public/                 # Static assets (images, icons, fonts)
├── src/
│   ├── app/                # Next.js App Router (pages and layouts)
│   │   ├── (auth)/         # Login, register, password reset pages
│   │   ├── artwork/        # Artwork upload & artwork management
│   │   ├── basket/         # Shopping cart view
│   │   ├── checkout/       # Checkout flow & order placement
│   │   ├── my-account/     # Customer dashboard (orders, profile, invoices)
│   │   ├── product/        # Dynamic product pages & configurator
│   │   ├── layout.js       # Root layout & global metadata
│   │   ├── page.js         # Homepage
│   │   └── providers.js    # React Query & application context providers
│   ├── components/         # Reusable UI & business logic components
│   │   ├── Header/         # Navigation, search bar, cart indicator
│   │   ├── Footer/         # Site footer & policy links
│   │   ├── pages/          # Page-specific modular components
│   │   └── ui/             # Core UI elements (buttons, inputs, modals, tabs)
│   ├── hoc/                # Higher-Order Components (e.g., withAuth route guard)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers, date formatters, URL builders
│   ├── resolvers/          # API layer (Axios mutations & React Query fetchers)
│   │   ├── mutation.js     # API POST / PUT / DELETE operations
│   │   └── query.js        # API GET operations
│   └── styles/             # Global CSS and Tailwind directives
├── .env.example            # Example environment file template
├── .env.local              # Local environment variables (untracked)
├── next.config.mjs         # Next.js configuration (remote image hostnames, etc.)
├── package.json            # Project dependencies and npm scripts
├── server.js               # Custom Node.js HTTP server entry point
├── tailwind.config.js      # Tailwind CSS configuration
└── yarn.lock               # Yarn dependency lockfile
```

---

## 🔌 Backend API Integration

The frontend connects to a Laravel-based REST API for all data operations. API requests are configured under:
- `src/resolvers/query.js` for data fetching.
- `src/resolvers/mutation.js` for modifying state (Cart, User, Orders, Addresses).

Key API Endpoints:
- `/api/v1/categories` — Product categories
- `/api/v1/products` — Product list & filtering
- `/api/v1/product/{category_slug}/{slug}` — Product details & attributes
- `/api/v1/carts` — Cart items & total price calculations
- `/api/v1/cart/{product_id}/files` — Artwork file attachments

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com).
3. Under **Project Settings > Environment Variables**, add:
   - `NEXT_PUBLIC_BACKEND_URL`
   - `NEXT_PUBLIC_IMAGE_URL`
4. Deploy!

### Self-Hosted (Node.js Server)
```bash
# 1. Build application
yarn build

# 2. Run standard Next.js start or custom server
yarn start
# or
NODE_ENV=production PORT=3000 node server.js
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying, modification, or distribution is strictly prohibited.

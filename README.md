# BudgetTracker

**Unlock the potential of full stack development with this comprehensive Next.js course, where you'll learn to build a powerful Budget Tracker application from scratch.**

---

![Budget-Tracker](https://img.enacton.com/ShareX/2025/06/chrome_zxRmKSk87Y.png)

![Budget-Tracker](https://img.enacton.com/ShareX/2025/06/chrome_S3Go29gjOz.png)

---

## Overview

BudgetTracker is a full-featured budget management tool built using modern web technologies including Next.js 14, TypeScript, Prisma ORM, Tailwind CSS, React-Query, and more. This application allows users to manage their financial transactions, analyze spending habits through detailed category statistics, and visualize historical financial data with interactive charts.

Whether you’re a beginner or an experienced developer, this project demonstrates how to integrate cutting-edge technologies to create a seamless, robust, and aesthetically pleasing budgeting application.

---

## Features

- **Transaction Management:** Add, edit, and delete financial transactions with ease.
- **Category Statistics:** Gain insights into spending patterns categorized by custom icons.
- **Historical Data Aggregates:** View and analyze your financial history over time.
- **Icon Selector:** Personalize categories with a diverse icon library for better organization.
- **User Authentication:** Secure login and user management powered by Clerk.
- **Interactive Charts:** Visualize your budget data dynamically using Recharts.
- **Responsive UI:** Built with Tailwind CSS & Shadcn UI for a beautiful and adaptable interface.
- **Robust Backend:** Utilizes Next.js API routes and ServerActions for scalable server-side logic.
- **Database Management:** Efficiently handled with Prisma ORM supporting SQLite and PostgreSQL.
- **Deployment:** Easily deployable on Vercel for fast and secure hosting.

---

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Neon Database](https://neon.tech/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React-Query](https://tanstack.com/query/latest)
- [Recharts](https://recharts.org/en-US/)
- [Clerk Authentication](https://clerk.com/)
- [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js (>= 22.x recommended)
- pnpm
- Vercel account (optional for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Yash-Tibadiya/Budget-Tracker.git
   cd budget-tracker
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Setup environment variables:

   Create a `.env` file at the root and add your database connection and Clerk credentials:

   ```env
    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    # Clerk URLs
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/wizard

    # Database
    DATABASE_URL=""
   ```

4. Run database migrations:

   ```bash
   pnpm dlx prisma generate
   pnpm dlx prisma db push
   ```

5. Start the development server:

   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## Deployment

This project can be deployed easily on [Vercel](https://vercel.com/):

- Connect your GitHub repository to Vercel.
- Configure your environment variables in Vercel dashboard.
- Deploy your application and get your budget tracker live.

---

## Learnings from this Project

- Building backend APIs and server actions with Next.js 14
- Implementing secure user authentication with Clerk
- Writing type-safe code with TypeScript
- Styling modern UI with Tailwind CSS and Shadcn UI
- Managing data persistence using Prisma ORM
- Optimizing data fetching and caching with React-Query
- Creating interactive financial charts with Recharts

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to report any bugs [issues page](https://github.com/Yash-Tibadiya/Budget-Tracker/issues).

---

## License

This project is licensed under the MIT License.

---

## Contact

Created by [Yash Tibadiya](https://github.com/Yash-Tibadiya) - feel free to reach out! 

Email - tibadiyayash@gmail.com

---

⭐ If you like this project, please give it a star!
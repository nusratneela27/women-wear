This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies Used

- **Next.js**: React framework for SSR, SSG, and routing.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS and nextUI**: Utility-first CSS framework for styling.
- **TypeScript**: Programming languages for frontend logic and data handling.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>

   ```

2. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for client.

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result for server.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Women Wear Clothing Website summery

This project is a Women Wear Clothing website built using Next.js, aimed at showcasing and selling clothing items. It includes various features to enhance user experience and facilitate easy navigation through different sections of the website.

### Live link

- [women-wear](https://assignment-8-opal-zeta.vercel.app/)

## Features

### Home Page (”/”)

- Showcases featured clothing items and promotions to capture user attention.
- Includes a navigation bar for easy access to different sections of the website.

### Flash Sale

- Implements ISR (Incremental Static Regeneration) with a 30s revalidation.
- Displays top 4 flash sale clothing items, sorted based on product creation time.
- Provides a "See All" button to direct users to the Flash Sale Products page.

### Category

- Shows 6 categories.
- Clicking a brand or category navigates to an All Products Page with filtered data.

### Trending Products

- Implements ISR with a 30s revalidation.
- Includes a "See All Products" button for exploring the complete product catalog.

### Footer

- Includes clickable links to essential pages such as Trending Products, Categories, About Us, Contact Us, and Customer Care.

### Flash Sale Page (”/flash-sale”) [SSR]

- Utilizes Server-Side Rendering (SSR).
- Presents all flash sale clothing items with a countdown timer indicating time remaining for each offer.

### All Products Page [SSR]

- The route name for All Products Page is dynamic based on the "/women-wear".
- Implements filtering options based on category.

### Single Product’s Detail Page (”/women-wear/:women-wearId”) [SSR + SSG]

- Uses both Static Site Generation (SSG) and Server-Side Rendering (SSR).
- Displays detailed product information including images, title, price, ratings, category, and description.
- SSG for the first 10 products; SSR for the rest.

### Dashboard (”/dashboard”)

- Uses Next.UI Layout feature for the dashboard layout design.
- Includes a Sidebar for All Products navigation route.

### All Products in Dashboard (”/dashboard/all-products”) [SSR]

- Provides a table view of all clothing items for easy management.

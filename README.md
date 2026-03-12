# 🙏 Church in St. Louis Web Application
A modern, responsive web application serving the church in St. Louis.
Built with Next.js, this application provides a highly performant and scalable architecture.

---

## 📚 Table of Contents
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💡 Deployment](#-deployment)

---

## 🛠️ Technology Stack
- **Framework**: Next.js with TypeScript (App Router)
- **UI Components**: Mantine
- **Hosting**: Cloudflare Pages
- **Email API**: Resend

---

## 📦 Project Structure
```
CISTL/
├── frontend/               # Next.js frontend code and API routes
├── README.md               # This documentation
└── AGENTS.MD               # AI development guidelines
```

---

## 🚀 Getting Started
### Prerequisites
Ensure the following are installed on your system:
- Node.js (v18 or newer)
- npm

### Local Development
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Visit http://localhost:3000 to see your application in action!

### Environment Variables
For local development and production, you will need to configure environment variables. Currently, the application uses **Resend** to handle the contact form submissions.
Create a `.env.local` file in the `frontend` directory with your Resend API key:
```env
RESEND_API_KEY=re_your_api_key_here
```

---

## 💡 Deployment
This project is designed to be deployed to **Cloudflare Pages**. 

To deploy:
1. Connect your GitHub repository to Cloudflare Pages.
2. Select the **Next.js** framework preset.
3. Configure the **Build settings**:
   - Build command: `npm run build`
   - Build output directory: `.vercel/output/static` (Cloudflare Pages automatically handles Next.js builds using `@cloudflare/next-on-pages` under the hood).
   - Root directory: `frontend`
4. Add the `RESEND_API_KEY` to the Cloudflare Pages Environment Variables settings.
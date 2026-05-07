import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Churn Predictor — Stop Losing Subscribers',
  description: 'Predict which customers will cancel subscriptions. Analyze Stripe payment patterns and get actionable retention recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b793f12a-9bcf-4cdb-9fad-a12c9246f81c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

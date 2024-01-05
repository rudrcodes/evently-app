This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## My Notes
# what's a webhook ?
Sure, let's break down the concept of a webhook in a simple way.

Imagine you have a friend who loves sending you updates about their day. Normally, you would have to keep asking them, "Hey, what's new?" and wait for them to respond. But with a webhook, it's like your friend automatically telling you whenever something interesting happens.

In technical terms, a webhook is a way for one system (like a website or app) to automatically notify another system when a specific event occurs. It's like saying, "Hey, something just happened, here's the information!" This is handy for real-time updates and keeping different systems in sync.

Let's take an example:

Imagine you have a weather website, and you want to display the current weather on your homepage. Instead of constantly asking a weather service for updates, you can set up a webhook with the weather service. Now, whenever the weather changes, the weather service will automatically send the new information to your website.

In this analogy:

- Your website is waiting for updates (like you waiting for news from your friend).
- The weather service is like your friend who sends updates (the webhook).

So, a webhook is essentially a way for different apps or services to talk to each other automatically, without you having to keep asking for updates.
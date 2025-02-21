// app/page-wrapper.tsx
import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "David Geaney | Web Designer & Developer",
  description:
    "Freelance web designer and developer from Donegal, Ireland. I create websites that help businesses attract leads, convert customers, and grow.",
};

export default function PageWrapper() {
  return <ClientPage />;
}


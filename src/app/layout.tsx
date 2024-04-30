import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="flex">
          <aside className="w-64 bg-blue-800 text-white min-h-screen">
            <ul>
              <li className="hover:bg-blue-900">
                <Link href="/" className="block p-4">
                  Home
                </Link>
              </li>
              <li className="hover:bg-blue-900">
                <Link href="/sign-up" className="block p-4">
                  Sign Up Form (Validation)
                </Link>
              </li>
              <li className="hover:bg-blue-900">
                <Link href="/intake" className="block p-4">
                  Patient Intake Form (Validation and Conditional Rendering)
                </Link>
              </li>
              <li className="hover:bg-blue-900">
                <Link href="/customRender" className="block p-4">
                  Custom Rendered Fields
                </Link>
              </li>
            </ul>
          </aside>
          <main className="flex-1 p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

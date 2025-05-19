import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeepLearning",
  description: "Antecipe, atue e transforme a jornada dos seus alunos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}

import '../styles/globals.css';

export const metadata = {
  title: "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

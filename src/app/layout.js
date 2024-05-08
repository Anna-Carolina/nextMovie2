import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";


export const metadata = {
  title: "React Movies",
  description: "Projeto desenvolvido em Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header>

        </Header>
        {children}
        <Footer>
          
        </Footer>
      </body>
    </html>
  );
}

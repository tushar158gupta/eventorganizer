import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata = {
  title: "Tspot - Events Platform",
  description: "Discover and create events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
               <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
   
{/* Header */}


{/* Main */}
<main className="relative min-h-screen container mx-auto pt-40 md:pt-32 " >
       {/* glow */}
       <div className="pointer-event-none absolute inset-0 -z-10 overflow-hidden">
        <div></div>
        <div></div>

       </div>
       <div className="relative z-10">
        {children}
       </div>
</main>
      {/* footer */}
      </ThemeProvider>
      </body>
    </html>
  );
}

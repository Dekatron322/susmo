import { Metadata } from "next"
import "styles/tailwind.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Susmo",
  description: "Reimagining Sustainable Mobility — On the Ground and in the Sky",
  icons: {
    icon: [
      { url: "/susmo/collapsedLogo.png" },
      { url: "/susmo/collapsedLogo.png", sizes: "16x16", type: "image/svg" },
      { url: "/susmo/collapsedLogo.png", sizes: "32x32", type: "image/svg" },
    ],
    apple: [{ url: "/susmo/collapsedLogo.png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://susmo.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Dekatron322/amd-dashboard/main/public/venus.png?token=GHSAT0AAAAAACSXKXAZP2KPMRTJS6WATSS6ZU5PHZQ",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

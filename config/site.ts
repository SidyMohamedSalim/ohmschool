export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ohm Vision",
  description: "Bienvenu sur le meilleur site pour la gestion dr vos ecoles.",
  mainNav: [
    {
      title: "Accueil",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    signIn: "auth/SignIn/",
    login: "/auth/SignUp",
  },
}

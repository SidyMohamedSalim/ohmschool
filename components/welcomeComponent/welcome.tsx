"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import { siteConfig } from "../../config/site"
import FeatureShow from "../MainMenu/FeatureSecurityShow"
import { Icons } from "../icons"

export default function WelcomePage() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#00b8b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Pour decouvrir plus .{" "}
              <Link href="#" className="font-semibold text-[#00b8b5]">
                <span className="absolute inset-0" aria-hidden="true" />
                lire plus <span aria-hidden="true">&rarr;</span>
              </Link>
            </div> */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              Tout ce dont vous avez besoin pour gérer votre école
            </h1>
            <p className="mt-6 text-lg leading-8 ">
              Ohm-School est un logiciel de gestion scolaire qui vous permet de
              gérer votre école
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={siteConfig.links.signIn}
                rel="noreferrer"
                className={buttonVariants()}
              >
                Commencer maintenant{" "}
              </Link>
              <Link
                href={siteConfig.links.login}
                className="text-sm font-semibold leading-6 "
              >
                Se connecter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#00b8b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <section className="container m-auto grid-cols-2 items-center justify-center gap-6  rounded-t-3xl pb-8 pt-6 sm:grid md:py-10">
        <div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Simplifiez La Gestion Et Le Suivi De Vos Élèves
              <br className="hidden sm:inline" />
              Avec Ohm-School
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Aidez votre école à gagner du temps, à améliorer les résultats des
              élèves et à remplir sa mission.
            </p>
          </div>
          <div className="my-4 flex gap-4">
            <Link
              rel="noreferrer"
              href={siteConfig.links.signIn}
              className={buttonVariants({ variant: "link" })}
            >
              S&lsquo;inscrire
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <Icons.welcomeIllustration />
        </div>
      </section>

      <FeatureShow />

      <section className=" container m-auto grid-cols-2 items-center justify-center gap-6  rounded-t-3xl pb-8 pt-6 sm:grid md:flex-wrap md:pb-10">
        <div className="flex justify-end">
          <Icons.studentillustration />
        </div>
        <div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Des parents toujours informés et impliqués dans la vie scolaire
              <br className="hidden sm:inline" />
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Des canaux de communication efficaces pour une collaboration
              optimale entre l’école et les parents.
            </p>
          </div>
          <div className="my-4 flex gap-4">
            <Link
              rel="noreferrer"
              href={siteConfig.links.signIn}
              className={buttonVariants({ variant: "link" })}
            >
              S&lsquo;inscrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

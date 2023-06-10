import Link from "next/link"

import { Icons } from "../../../components/icons"
import { siteConfig } from "../../../config/site"

export default function AuthenticationPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Icons.logo className=" mx-auto flex h-40 w-auto " />
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Se Connecter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#00b8b5] focus:ring-2 focus:ring-inset focus:ring-[#00b8b5] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#00b8b5] hover:text-[#00b8b5]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5  shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-[#00b8b5} focus:ring-2 focus:ring-inset focus:ring-[#00b8b5] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00b8b5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00b8b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b8b5]"
              >
                Se Connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Vous êtes nouveau?{" "}
            <Link
              href={siteConfig.links.signIn}
              className="font-semibold leading-6 text-[#00b8b5] hover:text-[#00b8b5]"
            >
              enregistrez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

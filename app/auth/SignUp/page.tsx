import Link from "next/link"

import { Icons } from "../../../components/icons"
import { siteConfig } from "../../../config/site"
import { FormSigUp } from "./FormSigUp"

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
          <FormSigUp />
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

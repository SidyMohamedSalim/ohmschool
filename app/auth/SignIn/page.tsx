import Link from "next/link"

import { Icons } from "../../../components/icons"
import { siteConfig } from "../../../config/site"
import { FormSigIn } from "./FormSigIn"

export default function AuthenticationPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Icons.logo className=" mx-auto flex h-40 w-auto " />
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            S'inscrire
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormSigIn />

          <p className="mt-10 text-center text-sm text-gray-500">
            Vous avez deja Compte?{" "}
            <Link
              href={siteConfig.links.login}
              className="font-semibold leading-6 text-[#00b8b5] hover:text-[#00b8b5]"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

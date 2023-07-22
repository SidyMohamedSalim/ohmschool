import React from "react"

export const FormSigUp = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 ">
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
  )
}

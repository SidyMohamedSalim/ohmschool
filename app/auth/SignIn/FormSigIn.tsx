"use client"

import { json } from "node:stream/consumers"
import React from "react"
import { getSession, signIn, signOut, useSession } from "next-auth/react"

import { client } from "../../../src/client/client"

export const FormSigIn = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const newsuperAdimin = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    }

    // await client("/api/auth/register/", { data: newsuperAdimin }).then(
    //   (res) => {
    //     console.log(res)
    //   }
    // )

    await fetch("/api/auth/register/", {
      body: JSON.stringify(newsuperAdimin),
      method: "POST",
    }).then((res) => console.log(res.body))
  }

  return (
    <>
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={(e) => onSubmit(e)}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 "
          >
            Name School
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 px-3 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#00b8b5] focus:ring-2 focus:ring-inset focus:ring-[#00b8b5] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
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
            Sign in
          </button>
        </div>
      </form>
    </>
  )
}

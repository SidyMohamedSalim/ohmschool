import { Home } from "lucide-react"

import WelcomePage from "@/components/welcomeComponent/welcome"

export default function IndexPage() {
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  // return <>
  //   Not signed in <br/>
  //   <button onClick={() => signIn()}>Sign in</button>
  // </>
  return (
    <div>
      <WelcomePage />
    </div>
  )
}

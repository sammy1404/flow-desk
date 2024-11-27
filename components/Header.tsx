'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/nextjs"



function Header() {
    const {user} = useUser()
  return (
    <div className="flex items-center justify-between p-5">
        {user &&(
            <h1  className="text-3xl font-bold">
                {user?.firstName}
                {`'s`} Space
            </h1>
        )}

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Header
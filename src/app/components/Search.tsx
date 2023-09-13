'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import { searchUsername } from '../actions'

export default function Page() {
  const [username, setUsername] = useState<string>('')

  async function handleSearch(formData: FormData) {
    const res = await searchUsername(formData)
    const user = res.result.user

    if (!user) {
      return alert('No user found')
    }

    return redirect(`/users/${res.result.user.fid}`)
  }

  return (
    <div className="search">
      <form action={handleSearch}>
        <input
          id="username"
          name="username"
          placeholder="Search by username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit" disabled={!username}>
          Check User
        </button>
      </form>
      <a>Search by fid or ENS is not supported.</a>
    </div>
  )
}

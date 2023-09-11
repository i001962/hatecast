import sql from '../db.js'
import { cache } from 'react'

export const revalidate = 60

export const getHomeFeed = cache(async () => {
    const data = await sql`
        SELECT *
        FROM links
        WHERE deleted_at IS NOT null
        ORDER BY deleted_at DESC
        LIMIT 10;
      `
    return data
  })
import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import clsx from 'clsx'

export default function Pagination({marginTop = 'mt-10', meta, links}) {
  return (
    <div className={clsx('flex items-center justify-center gap-2', marginTop)}>
        {meta.links.map((link, i) => (
            <Link
                key={i}
                href={link.url}
                className={clsx(link.active && 'text-blue-500', 'text-black')}
                >
                {link.label}
            </Link>
        ))}
    </div>
  )
}

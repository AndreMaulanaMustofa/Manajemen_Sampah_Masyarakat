import { Link } from '@inertiajs/inertia-react'
import clsx from 'clsx'
import React from 'react';

export default function ButtonLink({ className = '', href, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(className, 'inline-flex justify-center items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-sm text-white active:bg-gray-900 transition ease-in-out duration-150')}
        >
            {children}
        </Link>
    );
}

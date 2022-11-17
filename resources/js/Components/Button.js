import clsx from 'clsx'
import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={clsx(processing && 'opacity-25', className, 'inline-flex justify-center items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-sm text-white active:bg-gray-900 transition ease-in-out duration-150')}
            disabled={processing}
        >
            {children}
        </button>
    );
}

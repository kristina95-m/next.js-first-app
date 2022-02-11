import React from 'react';
import Link from 'next/link';

export default function Homepage() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <Link href = "/" class="navbar-brand mb-0 h1">Homepage</Link>
            </div>
        </nav>
    )
}
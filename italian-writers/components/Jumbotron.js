import React from 'react';
import { useRouter } from 'next/router';

export default function Jumbotron() {

    const router = useRouter();

    return (
        <div class="jumbotron jumbotron-fluid mt-5">
            <div class="container">
                <h1 class="display-4">Italian Writers</h1>
                <p class="lead">Explore the Italian literature!</p>
                <button type="button" class="btn btn-secondary" onClick={() => router.push('/writers')}>Start</button>
            </div>
        </div>
    )
}
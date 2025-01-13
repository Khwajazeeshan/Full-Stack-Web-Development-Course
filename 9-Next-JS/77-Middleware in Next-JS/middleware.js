import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.redirect(new URL('/contact', request.url))

    // if statement middleware is used when we rewrite the second file with first file...... 
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', request.url))
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
    // when the user enter /about it will go to /contact instead of about page......
}


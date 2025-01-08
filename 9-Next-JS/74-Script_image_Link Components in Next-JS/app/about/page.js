import React from 'react'
import Script from 'next/script' // Using Script component.....

const about = () => {
    return (
        <div>
            <Script>
                {`alert("welcome to about page")`}
            </Script>
            <h1>i am a about page</h1>
        </div>
    )
}

export default about
export const metadata = {
    title: "about page",
    description: "This is about page",
};

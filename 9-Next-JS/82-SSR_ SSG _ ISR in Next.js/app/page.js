"use client"

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } })// 3600 seconds or 1 hour
  const posts = await data.json()
  return (
    <div>
      {/* Three type of Fetching in NExt-JS... */}
      {/* 1. SSR - Server Side Rendering...(Default Behaviour) */}
      {/* 2. SSG - Static Side Generation...
    Any page which does not have any network call is a static page by default */}
      {/* 3. ISG or ISR - Incremental Side Generation or Incremental Static Regeneration*/}

      {/* This is  hybrid of SSR and SSG */}
      <div>
        Three type of fetching in NExt-JS...
        <ol>
          <li>SSR</li>
          <li>SSG</li>
          <li>ISG or ISR</li>
        </ol>

      </div>
      <br />
      {/* This is ISR */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
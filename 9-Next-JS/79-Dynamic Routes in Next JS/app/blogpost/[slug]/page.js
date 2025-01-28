export default async function Page({ params }) {
    const slug = (await params).slug
    // throw new Error('This is an error')

    let languages = ["python", "javascript", "java", "c++", "c#", "php", "ruby", "swift", "kotlin", "typescript"]
    if (languages.includes(slug)) {
        return <div className="text-green-500 text-xl m-5">My Post: {slug}</div>
    } else {
        return <div className="text-red-500 text-xl m-5">Post not found</div>
    }
}
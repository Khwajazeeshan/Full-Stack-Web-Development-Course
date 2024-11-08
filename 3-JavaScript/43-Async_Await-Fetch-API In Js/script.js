console.log('\n\t Async-Await and Fetch-API in JS \n\n');
// Async-Await............................
async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500)
        }, 5000);
    })
}

// Fetch-API................................
async function getdata1() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);

}
async function main() {

    console.log('loading modules')
    console.log('load data\n')
    let data = await getdata()
    console.log(data);

    console.log('\nloading fetch-API \n')
    let data1 = await getdata1()
    console.log(data1);

}
main()
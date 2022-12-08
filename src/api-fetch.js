export async function goGetTheData() {
    
    const resp = await fetch('https://fakestoreapi.com/products');  
    const items = await resp.json();
    console.log(items);

goGetTheData();
}


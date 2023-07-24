const PRODUCTS_ENDPOINT = "https://64bc0bea7b33a35a4446f898.mockapi.io/products";

class ProductsApi {
    get = async () => {
        try {
            const resp = await fetch(PRODUCTS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log("Error ouccured in ProductsApi get", e);
        }
    };

    put = async (product) => {
        try {
            const resp = await fetch(`${PRODUCTS_ENDPOINT}/${product._id}` ,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            return await resp.json();
        } catch (e) {
          console.log("Error occured in ProductsApi put", e);
        }
    };

    post = async (product) => {
        try {
            const resp = await fetch(`${PRODUCTS_ENDPOINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            return await resp.json();
        } catch (e) {
            console.log("Error occured in ProductsApi post", e);
        }
    };

    delete = async(id) => {
        try {
            const resp = await fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            return await resp.json();
        } catch (e) {
            console.log("Error occured in ProductsApi delete method", e);
        }
    };
    
}

export const productsApi = new ProductsApi();
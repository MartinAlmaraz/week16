
export const remove = async(id) => {
    const response = await fetch("https://64bc0bea7b33a35a4446f898.mockapi.io/products" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}


export const put = async (product) => {
            try {
                const resp = await fetch(`${"https://64bc0bea7b33a35a4446f898.mockapi.io/products"}/${product._id}` ,{
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
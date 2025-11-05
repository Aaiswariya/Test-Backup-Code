// import { useEffect, useState } from "react";

// const simulateProductDetails = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			const data = [
// 				{
// 					id: 1,
// 					name: "Product 1",
// 					description: "This is product 1",
// 				},
// 				{
// 					id: 2,

// 					name: "Product 2",
// 					description: "This is product 2",
// 				},
// 				{
// 					id: 3,
// 					name: "Product 3",
// 					description: "This is product 3",
// 				},
// 			];
// 			resolve(data);
// 		}, 2000);
// 	});
// };

// const simulateProductsWithId = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = [
//                 {
//                     id: 1,
//                     name: "Product 1",
//                     description: "This is product 1",
//                 },
//                 {
//                     id: 2,
//                     name: "Product 2",
//                     description: "This is product 2",
//                 },
//                 {
//                     id: 3,
//                     name: "Product 3",
//                     description: "This is product 3",
//                 },
//             ];
//             resolve(data.find((product) => product.id === id));
//         }, 2000);
//     });
// };  
// export const ProductDetails = () => {
// 	const [products, setProducts] = useState<any[]>([]);
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			try {
// 				const data = await simulateProductDetails();
// 				setProducts(data as any[]);
//                 setLoading(false);
// 			} catch (error) {
// 				console.error("Error fetching product details:", error);
// 			}
// 		};
// 		fetchProducts();
// 	}, []);


//     useEffect(() => {
//         if (loading) {
//             const timer = setTimeout(() => {
//                 setLoading(false);
//             }, 5000);
//             return () => clearTimeout(timer);
//         }

//     }, [loading]);
// };

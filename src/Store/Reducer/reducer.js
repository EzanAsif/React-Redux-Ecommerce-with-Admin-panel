let product = [
    // array of objects each index of array will be a different product
    {   
        id : 1,
        title : "Crew Curve-Hem",
        price : 48,
        description : "Our best selling short sleeve style, the Crew Curve-Hem is as dependable as it gets.",
        pics : ['../../Assets/1st_prod_1.jpg', '../../Assets/1st_prod_2.jpg', '../../Assets/1st_prod_3.jpg'],
        collection : 't-shirts',
        stockAvail : 10,
        sizes : ['small', 'medium', 'large'],
    },
];

let cart = [
    
    // will also be an array of objects and each index will be a different product 
    // {
    //     product : // here will be the product,
    //     qty : int,
    //     total : int * product.price
    // }

];    

let individualOrder = {

    // orderNo : int,
    // details : cart,
    // status : 'string', //can either be 'completed' or 'active' ; active means not completed/delivered
    // total : int, // will map through whole array of cart and will sum all prices

};

let orders = [
    // array of individual orders
];
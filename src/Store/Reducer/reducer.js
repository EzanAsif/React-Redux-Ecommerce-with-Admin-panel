let products = {
    "Crew Curve-Hem" : {   
        id : 1,
        title : "Crew Curve-Hem",
        price : 48,
        description : "Our best selling short sleeve style, the Crew Curve-Hem is as dependable as it gets.",
        pics : ['https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE1.jpg?v=1611962685', 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE4.jpg?v=1611962685', 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE4.jpg?v=1611962685'],
        category : 'T-SHIRTS',
        stockAvail : 10,
        sizes : ['Small', 'Medium', 'Large'],
        thumb : 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE1.jpg?v=1611962685',
        bestSeller : true,
    },
    "New" : {   
        id : 1,
        title : "New",
        price : 48,
        description : "Our best selling short sleeve style, the Crew Curve-Hem is as dependable as it gets.",
        pics : ['https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE1.jpg?v=1611962685', 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE4.jpg?v=1611962685', 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE4.jpg?v=1611962685'],
        category : 'T-SHIRTS',
        stockAvail : 10,
        sizes : ['Small', 'Medium', 'Large'],
        thumb : 'https://cdn.shopify.com/s/files/1/1368/3463/products/VINTAGECREWCURVE1.jpg?v=1611962685',
        bestSeller : false,
    },
};

let cart = [];    


let individualOrder = {

    // orderNo : int,
    // details : cart,
    // status : 'string', //can either be 'completed' or 'active' ; active means not completed/delivered
    // total : int, // will map through whole array of cart and will sum all prices
    // details : []  // will be user details i.e Name, Email, Address, Cell No

};

let orders = [
    // array of individual orders
];

export function prodReducer(state = products, action){
    switch (action.type) {  
        default:
            return state;
    }
}

export function cartReducer(state = cart, action){
    switch (action.type) {  
        case 'ADD_TO_CART' : 
            return[
                ...state,
                action.payload,
            ]

        
        default:
            return state;
    }
}

export function indOrderReducer(state = individualOrder, action){
    switch (action.type) {
        case 'PLACE_ORDER':
            return{
                state : action.payload,
            }
    
        default:
            return state
    }
}
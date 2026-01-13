import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID, 
        name: String,
        description: String,
        price: Float,
        soldout: Boolean,
        inventory: Int,
        stores: [Store]! 
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Query {
        product: Product
        getProducts(id: ID): Product
        updateProduct(id: ID, input: ProductInput): Product
        deleteProduct(id: ID): Product
        showProducts: Product
    }

    type Store {
        store: String
    }

    input StoreInput {
        store: String
    }
    
    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [StoreInput]
        inventory: Int
    }
        
    type Mutation {
        createProduct(input: ProductInput): Product
        getProducts(id: ID): Product
        updateProduct(id: ID, input: ProductInput): Product
        deleteProduct(id: ID): Product
    }
    `);

// stores: [Store]! -- ! means this cant be empty/mandatory field
export default schema;

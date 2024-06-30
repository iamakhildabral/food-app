export default function Review({params}:{
    params: {
        reviewId: string;
        productId : string
    }
}){
    return <h1>The Review of {params.productId} is : {params.reviewId}</h1>;
}
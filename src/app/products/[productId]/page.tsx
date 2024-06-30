import { Metadata } from "next";


type Props = {
  params: {
    productId: String;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product Title : ${params.productId}`,
    description: `Details about Product ${params.productId}`,
  };
}

export default function Product1({params}: Props) {
  return <h1>Details about Product {params.productId}</h1>;
}

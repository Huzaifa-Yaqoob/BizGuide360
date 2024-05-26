import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const businessId = params.businessId;
  return { businessId };
}

export default function Business() {
  const { businessId } = useLoaderData();
  console.log(businessId);
  return <div className="flex-grow">Business </div>;
}

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
console.log("====================================");
console.log(publicRuntimeConfig, publicRuntimeConfig);
console.log("====================================");
export default function Home() {
  return (
    <div className="text-center mt-16">
      <div className="flex justify-center">
        <div>your Static value is:</div>
        <b className="mx-3 text-red-500">{process.env.NEXT_PUBLIC_BASE_URL}</b>
      </div>

      <div className="mt-16 flex justify-center">
        <div>your DYNAMIC value is:</div>
        <b className="mx-3 text-red-500">
          {publicRuntimeConfig.NEXT_PUBLIC_DYNAMIC_VALUE}
        </b>
      </div>
    </div>
  );
}

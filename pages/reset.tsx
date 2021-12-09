import Head from "next/head";
import { useResetRoomMutation } from "../generated/graphql";

export default function Reset() {
  const { mutate } = useResetRoomMutation();
  return (
    <div className="container">
      <Head>
        <title>API Days Paris 2021</title>
      </Head>

      <main className="h-screen">
        <button
          onClick={() => {
            mutate({});
          }}
          className="bg-gray-900 rounded-md p-3 text-white"
        >
          Reset
        </button>
      </main>
    </div>
  );
}

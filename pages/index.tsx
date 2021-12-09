import Head from "next/head";
import { useGetBuildingQuery, Building } from "../generated/graphql";
import { BuildingComp } from "../components/Building";
import { useBuildingSubscription } from "../hooks/useBuildingSubscription";
import { Log } from "../components/Log";

export default function Home() {
  const { data, isLoading, isSuccess } = useGetBuildingQuery(
    {},
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    }
  );
  const { isSubscribing, isSubscribingSuccess } = useBuildingSubscription();
  return (
    <div className="container">
      <Head>
        <title>API Days Paris 2021</title>
      </Head>

      <main className="h-screen">
        {isSuccess && (
          <div className="flex space-around justify-center mt-4">
            {data.building &&
              data.building.map((building: Building, index: number) => (
                <BuildingComp key={index} building={building} />
              ))}
          </div>
        )}
        <Log />
      </main>
    </div>
  );
}

import React from "react";
import { useQuery } from "react-query";
import { useLightSwitchStream } from "../../hooks/useLightSwitchStream";

export interface LogProps {}

export const Log: React.VFC<LogProps> = () => {
  const { data } = useQuery("LightLog", () => [], {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
  });
  const { isSubscribing } = useLightSwitchStream();
  return (
    <div className="w-72 lg:fixed lg:top-px lg:right-px">
      {data && (
        <div
          className="overflow-y-scroll h-72 b
        order border-gray-200 rounded-lg"
        >
          {data.map((event, index) => {
            return (
              <div className="py-4 border-b border-gray-200" key={index}>
                <p>
                  <strong>Room:</strong>
                  {event.id.slice(0, 4)}
                </p>
                <p>
                  <strong>At:</strong>
                  {new Date(event.updated_at).toLocaleTimeString()}
                </p>
                <p>
                  <strong>Raw:</strong>
                  {event.updated_at}
                </p>
                <p>
                  <strong>Status:</strong>
                  {event.on ? "On" : "Off"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

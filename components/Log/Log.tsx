import React from "react";
import { useQuery } from "react-query";
import { useLightSwitchStream } from "../../hooks/useLightSwitchStream";

import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

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
              <div
                className="py-4 border-b border-gray-200 flex items-center"
                key={index}
              >
                <div className="text-4xl align-baseline mr-4">
                  {event.on ? (
                    <FaLightbulb className="text-yellow-400" />
                  ) : (
                    <FaRegLightbulb />
                  )}
                </div>
                <div>
                  <p>
                    <strong>Room:</strong>
                    {event.id.slice(0, 4)}
                  </p>
                  <p>
                    <strong>At:</strong>
                    {new Date(event.updated_at).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Light } from "../generated/graphql";

const url = process.env.NEXT_PUBLIC_GRAPHQL_SERVER.replace("https", "wss");

function dateToLocalISO(date) {
  const off = date.getTimezoneOffset();
  const absoff = Math.abs(off);
  return (
    new Date(date.getTime() - off * 60 * 1000).toISOString().substr(0, 23) +
    (off > 0 ? "-" : "+") +
    Math.floor(absoff / 60)
      .toFixed(0)
      .padStart(2, "0") +
    ":" +
    (absoff % 60).toString().padStart(2, "0")
  );
}

export const useLightSwitchStream = () => {
  const queryClient = useQueryClient();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribingSuccess, setIsSubscribingSuccess] = useState(false);

  useEffect(() => {
    if (!isSubscribingSuccess) {
      const nowStamp = dateToLocalISO(new Date());
      console.log(nowStamp);

      const ws = new WebSocket(url, "graphql-ws");
      setIsSubscribing(true);

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "connection_init", payload: {} }));
        ws.send(
          JSON.stringify({
            id: "1",
            type: "start",
            payload: {
              variables: {},
              extensions: {},
              operationName: "LightSwitchStream",
              query: `subscription LightSwitchStream {
              light_stream(batch_size: 100, cursor: {
                updated_at: "${nowStamp}",
                ordering: ASC
              }){
                id
                updated_at
                on
                room {
                  id
                  floor {
                    id
                    building {
                      id
                    }
                  }
                }
              }
            }
            `,
            },
          })
        );
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === "data") {
          setIsSubscribingSuccess(true);
          setIsSubscribing(false);
          const data = msg.payload.data.room_light_stream as Array<Light>;

          queryClient.setQueriesData(["LightLog"], (oldData: Array<Light>) => {
            console.log(oldData);
            return [...data, ...oldData];
          });
        }
      };

      return () => {
        ws.send(JSON.stringify({ id: "1", type: "stop" }));
        ws.close();
      };
    }
  }, [queryClient]);
  return { isSubscribing, isSubscribingSuccess };
};

import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Room_Light } from '../generated/graphql';

const url = 'wss://hasura-pngv.onrender.com/v1/graphql';

export const useLightSwitchStream = () => {
  const queryClient = useQueryClient();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribingSuccess, setIsSubscribingSuccess] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url, 'graphql-ws');
    setIsSubscribing(true);

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'connection_init', payload: {} }));
      ws.send(
        JSON.stringify({
          id: '1',
          type: 'start',
          payload: {
            variables: {},
            extensions: {},
            operationName: 'LightSwitchStream',
            query: `subscription LightSwitchStream {
              room_light_stream(batch_size: 100, cursor: {
                updated_at: "2021-12-09T06:48:16Z",
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
      if (msg.type === 'data') {
        setIsSubscribingSuccess(true);
        setIsSubscribing(false);
        const data = msg.payload.data.room_light_stream as Array<Room_Light>;

        queryClient.setQueriesData(
          ['LightLog'],
          (oldData: Array<Room_Light>) => {
            console.log(oldData);
            return [...data, ...oldData];
          }
        );
      }
    };

    return () => {
      ws.send(JSON.stringify({ id: '1', type: 'stop' }));
      ws.close();
    };
  }, [queryClient]);
  return { isSubscribing, isSubscribingSuccess };
};

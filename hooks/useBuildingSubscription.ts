import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

const url = 'wss://hasura-pngv.onrender.com/v1/graphql';

export const useBuildingSubscription = () => {
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
            operationName: 'GetBuildingSubscription',
            query: `subscription GetBuildingSubscription {
                building {
                  slug
                  id
                  floors(order_by: {
                    position:desc
                  }) {
                    id
                    color,
                    rooms {
                      id
                      room_lights {
                        id
                        on
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
        const data = msg.payload.data;

        queryClient.setQueriesData(['GetBuilding', {}], data);
      }
    };

    return () => {
      ws.send(JSON.stringify({ id: '1', type: 'stop' }));
      ws.close();
    };
  }, [queryClient]);
  return { isSubscribing, isSubscribingSuccess };
};

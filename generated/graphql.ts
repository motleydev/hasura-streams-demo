import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://hasura-pngv.onrender.com/v1/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "building" */
export type Building = {
  __typename?: 'building';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  floors: Array<Floor>;
  id: Scalars['uuid'];
  slug: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "building" */
export type BuildingFloorsArgs = {
  distinct_on?: InputMaybe<Array<Floor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Floor_Order_By>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "building". All fields are combined with a logical 'AND'. */
export type Building_Bool_Exp = {
  _and?: InputMaybe<Array<Building_Bool_Exp>>;
  _not?: InputMaybe<Building_Bool_Exp>;
  _or?: InputMaybe<Array<Building_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  floors?: InputMaybe<Floor_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "building". */
export type Building_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floors_aggregate?: InputMaybe<Floor_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "building" */
export enum Building_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "building" */
export type Building_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "floor" */
export type Floor = {
  __typename?: 'floor';
  /** An object relationship */
  building: Building;
  building_id: Scalars['uuid'];
  color?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  position: Scalars['Int'];
  /** An array relationship */
  rooms: Array<Room>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "floor" */
export type FloorRoomsArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** order by aggregate values of table "floor" */
export type Floor_Aggregate_Order_By = {
  avg?: InputMaybe<Floor_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Floor_Max_Order_By>;
  min?: InputMaybe<Floor_Min_Order_By>;
  stddev?: InputMaybe<Floor_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Floor_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Floor_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Floor_Sum_Order_By>;
  var_pop?: InputMaybe<Floor_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Floor_Var_Samp_Order_By>;
  variance?: InputMaybe<Floor_Variance_Order_By>;
};

/** order by avg() on columns of table "floor" */
export type Floor_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "floor". All fields are combined with a logical 'AND'. */
export type Floor_Bool_Exp = {
  _and?: InputMaybe<Array<Floor_Bool_Exp>>;
  _not?: InputMaybe<Floor_Bool_Exp>;
  _or?: InputMaybe<Array<Floor_Bool_Exp>>;
  building?: InputMaybe<Building_Bool_Exp>;
  building_id?: InputMaybe<Uuid_Comparison_Exp>;
  color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  rooms?: InputMaybe<Room_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "floor" */
export type Floor_Max_Order_By = {
  building_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "floor" */
export type Floor_Min_Order_By = {
  building_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "floor" */
export type Floor_Mutation_Response = {
  __typename?: 'floor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Floor>;
};

/** Ordering options when selecting data from "floor". */
export type Floor_Order_By = {
  building?: InputMaybe<Building_Order_By>;
  building_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  rooms_aggregate?: InputMaybe<Room_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: floor */
export type Floor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "floor" */
export enum Floor_Select_Column {
  /** column name */
  BuildingId = 'building_id',
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "floor" */
export type Floor_Set_Input = {
  color?: InputMaybe<Scalars['String']>;
};

/** order by stddev() on columns of table "floor" */
export type Floor_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "floor" */
export type Floor_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "floor" */
export type Floor_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "floor" */
export type Floor_Stream_Cursor_Input = {
  building_id?: InputMaybe<Scalars['uuid']>;
  color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  position?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "floor" */
export type Floor_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "floor" */
export type Floor_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "floor" */
export type Floor_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "floor" */
export type Floor_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** update data of the table: "floor" */
  update_floor?: Maybe<Floor_Mutation_Response>;
  /** update single row of the table: "floor" */
  update_floor_by_pk?: Maybe<Floor>;
  /** update data of the table: "room_light" */
  update_room_light?: Maybe<Room_Light_Mutation_Response>;
  /** update single row of the table: "room_light" */
  update_room_light_by_pk?: Maybe<Room_Light>;
};


/** mutation root */
export type Mutation_RootUpdate_FloorArgs = {
  _set?: InputMaybe<Floor_Set_Input>;
  where: Floor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Floor_By_PkArgs = {
  _set?: InputMaybe<Floor_Set_Input>;
  pk_columns: Floor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_LightArgs = {
  _set?: InputMaybe<Room_Light_Set_Input>;
  where: Room_Light_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Light_By_PkArgs = {
  _set?: InputMaybe<Room_Light_Set_Input>;
  pk_columns: Room_Light_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "building" */
  building: Array<Building>;
  /** fetch data from the table: "building" using primary key columns */
  building_by_pk?: Maybe<Building>;
  /** fetch data from the table: "floor" */
  floor: Array<Floor>;
  /** fetch data from the table: "floor" using primary key columns */
  floor_by_pk?: Maybe<Floor>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "room_light" */
  room_light: Array<Room_Light>;
  /** fetch data from the table: "room_light" using primary key columns */
  room_light_by_pk?: Maybe<Room_Light>;
};


export type Query_RootBuildingArgs = {
  distinct_on?: InputMaybe<Array<Building_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Building_Order_By>>;
  where?: InputMaybe<Building_Bool_Exp>;
};


export type Query_RootBuilding_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFloorArgs = {
  distinct_on?: InputMaybe<Array<Floor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Floor_Order_By>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};


export type Query_RootFloor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Query_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRoom_LightArgs = {
  distinct_on?: InputMaybe<Array<Room_Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Light_Order_By>>;
  where?: InputMaybe<Room_Light_Bool_Exp>;
};


export type Query_RootRoom_Light_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "room" */
export type Room = {
  __typename?: 'room';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  floor: Floor;
  floor_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  room_lights: Array<Room_Light>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "room" */
export type RoomRoom_LightsArgs = {
  distinct_on?: InputMaybe<Array<Room_Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Light_Order_By>>;
  where?: InputMaybe<Room_Light_Bool_Exp>;
};

/** order by aggregate values of table "room" */
export type Room_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Max_Order_By>;
  min?: InputMaybe<Room_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "room". All fields are combined with a logical 'AND'. */
export type Room_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Bool_Exp>>;
  _not?: InputMaybe<Room_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  floor?: InputMaybe<Floor_Bool_Exp>;
  floor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_lights?: InputMaybe<Room_Light_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "room_light" */
export type Room_Light = {
  __typename?: 'room_light';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  on: Scalars['Boolean'];
  /** An object relationship */
  room: Room;
  room_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  usage?: Maybe<Scalars['Int']>;
};

/** order by aggregate values of table "room_light" */
export type Room_Light_Aggregate_Order_By = {
  avg?: InputMaybe<Room_Light_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Light_Max_Order_By>;
  min?: InputMaybe<Room_Light_Min_Order_By>;
  stddev?: InputMaybe<Room_Light_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Room_Light_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Room_Light_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Room_Light_Sum_Order_By>;
  var_pop?: InputMaybe<Room_Light_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Room_Light_Var_Samp_Order_By>;
  variance?: InputMaybe<Room_Light_Variance_Order_By>;
};

/** order by avg() on columns of table "room_light" */
export type Room_Light_Avg_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "room_light". All fields are combined with a logical 'AND'. */
export type Room_Light_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Light_Bool_Exp>>;
  _not?: InputMaybe<Room_Light_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Light_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  on?: InputMaybe<Boolean_Comparison_Exp>;
  room?: InputMaybe<Room_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  usage?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "room_light" */
export type Room_Light_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usage?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "room_light" */
export type Room_Light_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usage?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_light" */
export type Room_Light_Mutation_Response = {
  __typename?: 'room_light_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Light>;
};

/** Ordering options when selecting data from "room_light". */
export type Room_Light_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  on?: InputMaybe<Order_By>;
  room?: InputMaybe<Room_Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_light */
export type Room_Light_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "room_light" */
export enum Room_Light_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  On = 'on',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Usage = 'usage'
}

/** input type for updating data in table "room_light" */
export type Room_Light_Set_Input = {
  on?: InputMaybe<Scalars['Boolean']>;
};

/** order by stddev() on columns of table "room_light" */
export type Room_Light_Stddev_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "room_light" */
export type Room_Light_Stddev_Pop_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "room_light" */
export type Room_Light_Stddev_Samp_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "room_light" */
export type Room_Light_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  on?: InputMaybe<Scalars['Boolean']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  room_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  usage?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "room_light" */
export type Room_Light_Sum_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "room_light" */
export type Room_Light_Var_Pop_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "room_light" */
export type Room_Light_Var_Samp_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "room_light" */
export type Room_Light_Variance_Order_By = {
  usage?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "room" */
export type Room_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "room" */
export type Room_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "room". */
export type Room_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor?: InputMaybe<Floor_Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_lights_aggregate?: InputMaybe<Room_Light_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "room" */
export enum Room_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "room" */
export type Room_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  floor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "building" */
  building: Array<Building>;
  /** fetch data from the table: "building" using primary key columns */
  building_by_pk?: Maybe<Building>;
  /** fetch data from the table via streaming : "building" */
  building_stream: Array<Building>;
  /** fetch data from the table: "floor" */
  floor: Array<Floor>;
  /** fetch data from the table: "floor" using primary key columns */
  floor_by_pk?: Maybe<Floor>;
  /** fetch data from the table via streaming : "floor" */
  floor_stream: Array<Floor>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "room_light" */
  room_light: Array<Room_Light>;
  /** fetch data from the table: "room_light" using primary key columns */
  room_light_by_pk?: Maybe<Room_Light>;
  /** fetch data from the table via streaming : "room_light" */
  room_light_stream: Array<Room_Light>;
  /** fetch data from the table via streaming : "room" */
  room_stream: Array<Room>;
};


export type Subscription_RootBuildingArgs = {
  distinct_on?: InputMaybe<Array<Building_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Building_Order_By>>;
  where?: InputMaybe<Building_Bool_Exp>;
};


export type Subscription_RootBuilding_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBuilding_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Building_Stream_Cursor_Input>>;
  where?: InputMaybe<Building_Bool_Exp>;
};


export type Subscription_RootFloorArgs = {
  distinct_on?: InputMaybe<Array<Floor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Floor_Order_By>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};


export type Subscription_RootFloor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFloor_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Floor_Stream_Cursor_Input>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};


export type Subscription_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Subscription_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRoom_LightArgs = {
  distinct_on?: InputMaybe<Array<Room_Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Light_Order_By>>;
  where?: InputMaybe<Room_Light_Bool_Exp>;
};


export type Subscription_RootRoom_Light_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRoom_Light_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Room_Light_Stream_Cursor_Input>>;
  where?: InputMaybe<Room_Light_Bool_Exp>;
};


export type Subscription_RootRoom_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Room_Stream_Cursor_Input>>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetBuildingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBuildingQuery = { __typename?: 'query_root', building: Array<{ __typename?: 'building', slug: string, id: any, floors: Array<{ __typename?: 'floor', id: any, color?: string | null | undefined, rooms: Array<{ __typename?: 'room', id: any, room_lights: Array<{ __typename?: 'room_light', id: any, on: boolean }> }> }> }> };

export type ToggleLightSwitchMutationVariables = Exact<{
  id: Scalars['uuid'];
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type ToggleLightSwitchMutation = { __typename?: 'mutation_root', update_room_light_by_pk?: { __typename?: 'room_light', on: boolean } | null | undefined };

export type UpdateFloorColorMutationVariables = Exact<{
  color?: InputMaybe<Scalars['String']>;
  id: Scalars['uuid'];
}>;


export type UpdateFloorColorMutation = { __typename?: 'mutation_root', update_floor_by_pk?: { __typename?: 'floor', color?: string | null | undefined } | null | undefined };


export const GetBuildingDocument = `
    query GetBuilding {
  building {
    slug
    id
    floors(order_by: {position: desc}) {
      id
      color
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
    `;
export const useGetBuildingQuery = <
      TData = GetBuildingQuery,
      TError = unknown
    >(
      variables?: GetBuildingQueryVariables,
      options?: UseQueryOptions<GetBuildingQuery, TError, TData>
    ) =>
    useQuery<GetBuildingQuery, TError, TData>(
      variables === undefined ? ['GetBuilding'] : ['GetBuilding', variables],
      fetcher<GetBuildingQuery, GetBuildingQueryVariables>(GetBuildingDocument, variables),
      options
    );
export const ToggleLightSwitchDocument = `
    mutation ToggleLightSwitch($id: uuid!, $status: Boolean) {
  update_room_light_by_pk(pk_columns: {id: $id}, _set: {on: $status}) {
    on
  }
}
    `;
export const useToggleLightSwitchMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ToggleLightSwitchMutation, TError, ToggleLightSwitchMutationVariables, TContext>) =>
    useMutation<ToggleLightSwitchMutation, TError, ToggleLightSwitchMutationVariables, TContext>(
      'ToggleLightSwitch',
      (variables?: ToggleLightSwitchMutationVariables) => fetcher<ToggleLightSwitchMutation, ToggleLightSwitchMutationVariables>(ToggleLightSwitchDocument, variables)(),
      options
    );
export const UpdateFloorColorDocument = `
    mutation UpdateFloorColor($color: String, $id: uuid!) {
  update_floor_by_pk(pk_columns: {id: $id}, _set: {color: $color}) {
    color
  }
}
    `;
export const useUpdateFloorColorMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateFloorColorMutation, TError, UpdateFloorColorMutationVariables, TContext>) =>
    useMutation<UpdateFloorColorMutation, TError, UpdateFloorColorMutationVariables, TContext>(
      'UpdateFloorColor',
      (variables?: UpdateFloorColorMutationVariables) => fetcher<UpdateFloorColorMutation, UpdateFloorColorMutationVariables>(UpdateFloorColorDocument, variables)(),
      options
    );
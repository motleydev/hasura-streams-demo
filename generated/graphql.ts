import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://hasura-9auy.onrender.com/v1/graphql", {
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
  /** An aggregate relationship */
  floors_aggregate: Floor_Aggregate;
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


/** columns and relationships of "building" */
export type BuildingFloors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Floor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Floor_Order_By>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};

/** aggregated selection of "building" */
export type Building_Aggregate = {
  __typename?: 'building_aggregate';
  aggregate?: Maybe<Building_Aggregate_Fields>;
  nodes: Array<Building>;
};

/** aggregate fields of "building" */
export type Building_Aggregate_Fields = {
  __typename?: 'building_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Building_Max_Fields>;
  min?: Maybe<Building_Min_Fields>;
};


/** aggregate fields of "building" */
export type Building_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Building_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** unique or primary key constraints on table "building" */
export enum Building_Constraint {
  /** unique or primary key constraint */
  BuildingPkey = 'building_pkey'
}

/** input type for inserting data into table "building" */
export type Building_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  floors?: InputMaybe<Floor_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Building_Max_Fields = {
  __typename?: 'building_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Building_Min_Fields = {
  __typename?: 'building_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "building" */
export type Building_Mutation_Response = {
  __typename?: 'building_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Building>;
};

/** input type for inserting object relation for remote table "building" */
export type Building_Obj_Rel_Insert_Input = {
  data: Building_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Building_On_Conflict>;
};

/** on conflict condition type for table "building" */
export type Building_On_Conflict = {
  constraint: Building_Constraint;
  update_columns?: Array<Building_Update_Column>;
  where?: InputMaybe<Building_Bool_Exp>;
};

/** Ordering options when selecting data from "building". */
export type Building_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floors_aggregate?: InputMaybe<Floor_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: building */
export type Building_Pk_Columns_Input = {
  id: Scalars['uuid'];
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

/** input type for updating data in table "building" */
export type Building_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "building" */
export type Building_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "building" */
export enum Building_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

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
  building?: Maybe<Building>;
  building_id: Scalars['uuid'];
  color: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  position: Scalars['Int'];
  /** An array relationship */
  rooms: Array<Room>;
  /** An aggregate relationship */
  rooms_aggregate: Room_Aggregate;
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


/** columns and relationships of "floor" */
export type FloorRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** aggregated selection of "floor" */
export type Floor_Aggregate = {
  __typename?: 'floor_aggregate';
  aggregate?: Maybe<Floor_Aggregate_Fields>;
  nodes: Array<Floor>;
};

/** aggregate fields of "floor" */
export type Floor_Aggregate_Fields = {
  __typename?: 'floor_aggregate_fields';
  avg?: Maybe<Floor_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Floor_Max_Fields>;
  min?: Maybe<Floor_Min_Fields>;
  stddev?: Maybe<Floor_Stddev_Fields>;
  stddev_pop?: Maybe<Floor_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Floor_Stddev_Samp_Fields>;
  sum?: Maybe<Floor_Sum_Fields>;
  var_pop?: Maybe<Floor_Var_Pop_Fields>;
  var_samp?: Maybe<Floor_Var_Samp_Fields>;
  variance?: Maybe<Floor_Variance_Fields>;
};


/** aggregate fields of "floor" */
export type Floor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Floor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting array relation for remote table "floor" */
export type Floor_Arr_Rel_Insert_Input = {
  data: Array<Floor_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Floor_On_Conflict>;
};

/** aggregate avg on columns */
export type Floor_Avg_Fields = {
  __typename?: 'floor_avg_fields';
  position?: Maybe<Scalars['Float']>;
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

/** unique or primary key constraints on table "floor" */
export enum Floor_Constraint {
  /** unique or primary key constraint */
  FloorsPkey = 'floors_pkey'
}

/** input type for incrementing numeric columns in table "floor" */
export type Floor_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "floor" */
export type Floor_Insert_Input = {
  building?: InputMaybe<Building_Obj_Rel_Insert_Input>;
  building_id?: InputMaybe<Scalars['uuid']>;
  color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Scalars['Int']>;
  rooms?: InputMaybe<Room_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Floor_Max_Fields = {
  __typename?: 'floor_max_fields';
  building_id?: Maybe<Scalars['uuid']>;
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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

/** aggregate min on columns */
export type Floor_Min_Fields = {
  __typename?: 'floor_min_fields';
  building_id?: Maybe<Scalars['uuid']>;
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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

/** input type for inserting object relation for remote table "floor" */
export type Floor_Obj_Rel_Insert_Input = {
  data: Floor_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Floor_On_Conflict>;
};

/** on conflict condition type for table "floor" */
export type Floor_On_Conflict = {
  constraint: Floor_Constraint;
  update_columns?: Array<Floor_Update_Column>;
  where?: InputMaybe<Floor_Bool_Exp>;
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
  building_id?: InputMaybe<Scalars['uuid']>;
  color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Floor_Stddev_Fields = {
  __typename?: 'floor_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "floor" */
export type Floor_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Floor_Stddev_Pop_Fields = {
  __typename?: 'floor_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "floor" */
export type Floor_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Floor_Stddev_Samp_Fields = {
  __typename?: 'floor_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
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

/** aggregate sum on columns */
export type Floor_Sum_Fields = {
  __typename?: 'floor_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "floor" */
export type Floor_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "floor" */
export enum Floor_Update_Column {
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

/** aggregate var_pop on columns */
export type Floor_Var_Pop_Fields = {
  __typename?: 'floor_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "floor" */
export type Floor_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Floor_Var_Samp_Fields = {
  __typename?: 'floor_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "floor" */
export type Floor_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Floor_Variance_Fields = {
  __typename?: 'floor_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "floor" */
export type Floor_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "light" */
export type Light = {
  __typename?: 'light';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  on: Scalars['Boolean'];
  /** An object relationship */
  room?: Maybe<Room>;
  room_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "light" */
export type Light_Aggregate = {
  __typename?: 'light_aggregate';
  aggregate?: Maybe<Light_Aggregate_Fields>;
  nodes: Array<Light>;
};

/** aggregate fields of "light" */
export type Light_Aggregate_Fields = {
  __typename?: 'light_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Light_Max_Fields>;
  min?: Maybe<Light_Min_Fields>;
};


/** aggregate fields of "light" */
export type Light_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Light_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "light" */
export type Light_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Light_Max_Order_By>;
  min?: InputMaybe<Light_Min_Order_By>;
};

/** input type for inserting array relation for remote table "light" */
export type Light_Arr_Rel_Insert_Input = {
  data: Array<Light_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Light_On_Conflict>;
};

/** Boolean expression to filter rows from the table "light". All fields are combined with a logical 'AND'. */
export type Light_Bool_Exp = {
  _and?: InputMaybe<Array<Light_Bool_Exp>>;
  _not?: InputMaybe<Light_Bool_Exp>;
  _or?: InputMaybe<Array<Light_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  on?: InputMaybe<Boolean_Comparison_Exp>;
  room?: InputMaybe<Room_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "light" */
export enum Light_Constraint {
  /** unique or primary key constraint */
  LightPkey = 'light_pkey'
}

/** input type for inserting data into table "light" */
export type Light_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  on?: InputMaybe<Scalars['Boolean']>;
  room?: InputMaybe<Room_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Light_Max_Fields = {
  __typename?: 'light_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  room_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "light" */
export type Light_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Light_Min_Fields = {
  __typename?: 'light_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  room_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "light" */
export type Light_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "light" */
export type Light_Mutation_Response = {
  __typename?: 'light_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Light>;
};

/** on conflict condition type for table "light" */
export type Light_On_Conflict = {
  constraint: Light_Constraint;
  update_columns?: Array<Light_Update_Column>;
  where?: InputMaybe<Light_Bool_Exp>;
};

/** Ordering options when selecting data from "light". */
export type Light_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  on?: InputMaybe<Order_By>;
  room?: InputMaybe<Room_Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: light */
export type Light_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "light" */
export enum Light_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  On = 'on',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "light" */
export type Light_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  on?: InputMaybe<Scalars['Boolean']>;
  room_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "light" */
export type Light_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  on?: InputMaybe<Scalars['Boolean']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  room_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "light" */
export enum Light_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  On = 'on',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "building" */
  delete_building?: Maybe<Building_Mutation_Response>;
  /** delete single row from the table: "building" */
  delete_building_by_pk?: Maybe<Building>;
  /** delete data from the table: "floor" */
  delete_floor?: Maybe<Floor_Mutation_Response>;
  /** delete single row from the table: "floor" */
  delete_floor_by_pk?: Maybe<Floor>;
  /** delete data from the table: "light" */
  delete_light?: Maybe<Light_Mutation_Response>;
  /** delete single row from the table: "light" */
  delete_light_by_pk?: Maybe<Light>;
  /** delete data from the table: "room" */
  delete_room?: Maybe<Room_Mutation_Response>;
  /** delete single row from the table: "room" */
  delete_room_by_pk?: Maybe<Room>;
  /** insert data into the table: "building" */
  insert_building?: Maybe<Building_Mutation_Response>;
  /** insert a single row into the table: "building" */
  insert_building_one?: Maybe<Building>;
  /** insert data into the table: "floor" */
  insert_floor?: Maybe<Floor_Mutation_Response>;
  /** insert a single row into the table: "floor" */
  insert_floor_one?: Maybe<Floor>;
  /** insert data into the table: "light" */
  insert_light?: Maybe<Light_Mutation_Response>;
  /** insert a single row into the table: "light" */
  insert_light_one?: Maybe<Light>;
  /** insert data into the table: "room" */
  insert_room?: Maybe<Room_Mutation_Response>;
  /** insert a single row into the table: "room" */
  insert_room_one?: Maybe<Room>;
  /** update data of the table: "building" */
  update_building?: Maybe<Building_Mutation_Response>;
  /** update single row of the table: "building" */
  update_building_by_pk?: Maybe<Building>;
  /** update data of the table: "floor" */
  update_floor?: Maybe<Floor_Mutation_Response>;
  /** update single row of the table: "floor" */
  update_floor_by_pk?: Maybe<Floor>;
  /** update data of the table: "light" */
  update_light?: Maybe<Light_Mutation_Response>;
  /** update single row of the table: "light" */
  update_light_by_pk?: Maybe<Light>;
  /** update data of the table: "room" */
  update_room?: Maybe<Room_Mutation_Response>;
  /** update single row of the table: "room" */
  update_room_by_pk?: Maybe<Room>;
};


/** mutation root */
export type Mutation_RootDelete_BuildingArgs = {
  where: Building_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Building_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FloorArgs = {
  where: Floor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Floor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LightArgs = {
  where: Light_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Light_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoomArgs = {
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BuildingArgs = {
  objects: Array<Building_Insert_Input>;
  on_conflict?: InputMaybe<Building_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Building_OneArgs = {
  object: Building_Insert_Input;
  on_conflict?: InputMaybe<Building_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FloorArgs = {
  objects: Array<Floor_Insert_Input>;
  on_conflict?: InputMaybe<Floor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Floor_OneArgs = {
  object: Floor_Insert_Input;
  on_conflict?: InputMaybe<Floor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LightArgs = {
  objects: Array<Light_Insert_Input>;
  on_conflict?: InputMaybe<Light_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Light_OneArgs = {
  object: Light_Insert_Input;
  on_conflict?: InputMaybe<Light_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomArgs = {
  objects: Array<Room_Insert_Input>;
  on_conflict?: InputMaybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_OneArgs = {
  object: Room_Insert_Input;
  on_conflict?: InputMaybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BuildingArgs = {
  _set?: InputMaybe<Building_Set_Input>;
  where: Building_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Building_By_PkArgs = {
  _set?: InputMaybe<Building_Set_Input>;
  pk_columns: Building_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FloorArgs = {
  _inc?: InputMaybe<Floor_Inc_Input>;
  _set?: InputMaybe<Floor_Set_Input>;
  where: Floor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Floor_By_PkArgs = {
  _inc?: InputMaybe<Floor_Inc_Input>;
  _set?: InputMaybe<Floor_Set_Input>;
  pk_columns: Floor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LightArgs = {
  _set?: InputMaybe<Light_Set_Input>;
  where: Light_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Light_By_PkArgs = {
  _set?: InputMaybe<Light_Set_Input>;
  pk_columns: Light_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomArgs = {
  _set?: InputMaybe<Room_Set_Input>;
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_By_PkArgs = {
  _set?: InputMaybe<Room_Set_Input>;
  pk_columns: Room_Pk_Columns_Input;
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
  /** fetch aggregated fields from the table: "building" */
  building_aggregate: Building_Aggregate;
  /** fetch data from the table: "building" using primary key columns */
  building_by_pk?: Maybe<Building>;
  /** fetch data from the table: "floor" */
  floor: Array<Floor>;
  /** fetch aggregated fields from the table: "floor" */
  floor_aggregate: Floor_Aggregate;
  /** fetch data from the table: "floor" using primary key columns */
  floor_by_pk?: Maybe<Floor>;
  /** fetch data from the table: "light" */
  light: Array<Light>;
  /** fetch aggregated fields from the table: "light" */
  light_aggregate: Light_Aggregate;
  /** fetch data from the table: "light" using primary key columns */
  light_by_pk?: Maybe<Light>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch aggregated fields from the table: "room" */
  room_aggregate: Room_Aggregate;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
};


export type Query_RootBuildingArgs = {
  distinct_on?: InputMaybe<Array<Building_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Building_Order_By>>;
  where?: InputMaybe<Building_Bool_Exp>;
};


export type Query_RootBuilding_AggregateArgs = {
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


export type Query_RootFloor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Floor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Floor_Order_By>>;
  where?: InputMaybe<Floor_Bool_Exp>;
};


export type Query_RootFloor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLightArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


export type Query_RootLight_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


export type Query_RootLight_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Query_RootRoom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Query_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "room" */
export type Room = {
  __typename?: 'room';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  floor?: Maybe<Floor>;
  floor_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An array relationship */
  lights: Array<Light>;
  /** An aggregate relationship */
  lights_aggregate: Light_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "room" */
export type RoomLightsArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


/** columns and relationships of "room" */
export type RoomLights_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};

/** aggregated selection of "room" */
export type Room_Aggregate = {
  __typename?: 'room_aggregate';
  aggregate?: Maybe<Room_Aggregate_Fields>;
  nodes: Array<Room>;
};

/** aggregate fields of "room" */
export type Room_Aggregate_Fields = {
  __typename?: 'room_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Room_Max_Fields>;
  min?: Maybe<Room_Min_Fields>;
};


/** aggregate fields of "room" */
export type Room_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room" */
export type Room_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Max_Order_By>;
  min?: InputMaybe<Room_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room" */
export type Room_Arr_Rel_Insert_Input = {
  data: Array<Room_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Room_On_Conflict>;
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
  lights?: InputMaybe<Light_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "room" */
export enum Room_Constraint {
  /** unique or primary key constraint */
  RoomPkey = 'room_pkey'
}

/** input type for inserting data into table "room" */
export type Room_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  floor?: InputMaybe<Floor_Obj_Rel_Insert_Input>;
  floor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lights?: InputMaybe<Light_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Room_Max_Fields = {
  __typename?: 'room_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  floor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "room" */
export type Room_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Min_Fields = {
  __typename?: 'room_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  floor_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "room" */
export type Room_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room" */
export type Room_Mutation_Response = {
  __typename?: 'room_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Room>;
};

/** input type for inserting object relation for remote table "room" */
export type Room_Obj_Rel_Insert_Input = {
  data: Room_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Room_On_Conflict>;
};

/** on conflict condition type for table "room" */
export type Room_On_Conflict = {
  constraint: Room_Constraint;
  update_columns?: Array<Room_Update_Column>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** Ordering options when selecting data from "room". */
export type Room_Order_By = {
  created_at?: InputMaybe<Order_By>;
  floor?: InputMaybe<Floor_Order_By>;
  floor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lights_aggregate?: InputMaybe<Light_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room */
export type Room_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "room" */
export type Room_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  floor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "room" */
export type Room_Stream_Cursor_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  floor_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "room" */
export enum Room_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "building" */
  building: Array<Building>;
  /** fetch aggregated fields from the table: "building" */
  building_aggregate: Building_Aggregate;
  /** fetch data from the table: "building" using primary key columns */
  building_by_pk?: Maybe<Building>;
  /** fetch data from the table via streaming : "building" */
  building_stream: Array<Building>;
  /** fetch data from the table: "floor" */
  floor: Array<Floor>;
  /** fetch aggregated fields from the table: "floor" */
  floor_aggregate: Floor_Aggregate;
  /** fetch data from the table: "floor" using primary key columns */
  floor_by_pk?: Maybe<Floor>;
  /** fetch data from the table via streaming : "floor" */
  floor_stream: Array<Floor>;
  /** fetch data from the table: "light" */
  light: Array<Light>;
  /** fetch aggregated fields from the table: "light" */
  light_aggregate: Light_Aggregate;
  /** fetch data from the table: "light" using primary key columns */
  light_by_pk?: Maybe<Light>;
  /** fetch data from the table via streaming : "light" */
  light_stream: Array<Light>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch aggregated fields from the table: "room" */
  room_aggregate: Room_Aggregate;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
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


export type Subscription_RootBuilding_AggregateArgs = {
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


export type Subscription_RootFloor_AggregateArgs = {
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


export type Subscription_RootLightArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


export type Subscription_RootLight_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Light_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Light_Order_By>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


export type Subscription_RootLight_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLight_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Light_Stream_Cursor_Input>>;
  where?: InputMaybe<Light_Bool_Exp>;
};


export type Subscription_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Subscription_RootRoom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Subscription_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
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


export type GetBuildingQuery = { __typename?: 'query_root', building: Array<{ __typename?: 'building', slug: string, id: any, floors: Array<{ __typename?: 'floor', id: any, color: string, rooms: Array<{ __typename?: 'room', id: any, lights: Array<{ __typename?: 'light', id: any, on: boolean }> }> }> }> };

export type ResetRoomMutationVariables = Exact<{ [key: string]: never; }>;


export type ResetRoomMutation = { __typename?: 'mutation_root', update_light?: { __typename?: 'light_mutation_response', returning: Array<{ __typename?: 'light', id: any }> } | null | undefined, update_floor?: { __typename?: 'floor_mutation_response', returning: Array<{ __typename?: 'floor', id: any }> } | null | undefined };

export type ToggleLightSwitchMutationVariables = Exact<{
  id: Scalars['uuid'];
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type ToggleLightSwitchMutation = { __typename?: 'mutation_root', update_light_by_pk?: { __typename?: 'light', on: boolean } | null | undefined };

export type UpdateFloorColorMutationVariables = Exact<{
  color?: InputMaybe<Scalars['String']>;
  id: Scalars['uuid'];
}>;


export type UpdateFloorColorMutation = { __typename?: 'mutation_root', update_floor_by_pk?: { __typename?: 'floor', color: string } | null | undefined };


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
        lights {
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
export const ResetRoomDocument = `
    mutation ResetRoom {
  update_light(where: {on: {_eq: true}}, _set: {on: false}) {
    returning {
      id
    }
  }
  update_floor(where: {color: {_neq: "#000"}}, _set: {color: "#000"}) {
    returning {
      id
    }
  }
}
    `;
export const useResetRoomMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ResetRoomMutation, TError, ResetRoomMutationVariables, TContext>) =>
    useMutation<ResetRoomMutation, TError, ResetRoomMutationVariables, TContext>(
      'ResetRoom',
      (variables?: ResetRoomMutationVariables) => fetcher<ResetRoomMutation, ResetRoomMutationVariables>(ResetRoomDocument, variables)(),
      options
    );
export const ToggleLightSwitchDocument = `
    mutation ToggleLightSwitch($id: uuid!, $status: Boolean) {
  update_light_by_pk(pk_columns: {id: $id}, _set: {on: $status}) {
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

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Brushed
 * 
 */
export type Brushed = $Result.DefaultSelection<Prisma.$BrushedPayload>
/**
 * Model Contents
 * 
 */
export type Contents = $Result.DefaultSelection<Prisma.$ContentsPayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model Schedules
 * 
 */
export type Schedules = $Result.DefaultSelection<Prisma.$SchedulesPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BrushedBrushedStatus: {
  No: 'No',
  Ok: 'Ok',
  EarlyLeave: 'EarlyLeave',
  Travel: 'Travel',
  Workshop: 'Workshop',
  Absence: 'Absence'
};

export type BrushedBrushedStatus = (typeof BrushedBrushedStatus)[keyof typeof BrushedBrushedStatus]


export const StudentStudentGender: {
  male: 'male',
  female: 'female'
};

export type StudentStudentGender = (typeof StudentStudentGender)[keyof typeof StudentStudentGender]


export const BoardStatus: {
  UNANSWERED: 'UNANSWERED',
  ANSWERED: 'ANSWERED',
  DELETED: 'DELETED'
};

export type BoardStatus = (typeof BoardStatus)[keyof typeof BoardStatus]


export const SchoolSchoolType: {
  master: 'master',
  teacher: 'teacher'
};

export type SchoolSchoolType = (typeof SchoolSchoolType)[keyof typeof SchoolSchoolType]


export const SchoolSchoolLevel: {
  elementary: 'elementary',
  middle: 'middle',
  high: 'high'
};

export type SchoolSchoolLevel = (typeof SchoolSchoolLevel)[keyof typeof SchoolSchoolLevel]

}

export type BrushedBrushedStatus = $Enums.BrushedBrushedStatus

export const BrushedBrushedStatus: typeof $Enums.BrushedBrushedStatus

export type StudentStudentGender = $Enums.StudentStudentGender

export const StudentStudentGender: typeof $Enums.StudentStudentGender

export type BoardStatus = $Enums.BoardStatus

export const BoardStatus: typeof $Enums.BoardStatus

export type SchoolSchoolType = $Enums.SchoolSchoolType

export const SchoolSchoolType: typeof $Enums.SchoolSchoolType

export type SchoolSchoolLevel = $Enums.SchoolSchoolLevel

export const SchoolSchoolLevel: typeof $Enums.SchoolSchoolLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brushed`: Exposes CRUD operations for the **Brushed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brusheds
    * const brusheds = await prisma.brushed.findMany()
    * ```
    */
  get brushed(): Prisma.BrushedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contents`: Exposes CRUD operations for the **Contents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.contents.findMany()
    * ```
    */
  get contents(): Prisma.ContentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **Schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.SchedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Board: 'Board',
    Brushed: 'Brushed',
    Contents: 'Contents',
    Holiday: 'Holiday',
    Schedules: 'Schedules',
    School: 'School',
    Student: 'Student'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "board" | "brushed" | "contents" | "holiday" | "schedules" | "school" | "student"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Brushed: {
        payload: Prisma.$BrushedPayload<ExtArgs>
        fields: Prisma.BrushedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrushedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrushedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          findFirst: {
            args: Prisma.BrushedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrushedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          findMany: {
            args: Prisma.BrushedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>[]
          }
          create: {
            args: Prisma.BrushedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          createMany: {
            args: Prisma.BrushedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrushedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          update: {
            args: Prisma.BrushedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          deleteMany: {
            args: Prisma.BrushedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrushedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrushedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrushedPayload>
          }
          aggregate: {
            args: Prisma.BrushedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrushed>
          }
          groupBy: {
            args: Prisma.BrushedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrushedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrushedCountArgs<ExtArgs>
            result: $Utils.Optional<BrushedCountAggregateOutputType> | number
          }
        }
      }
      Contents: {
        payload: Prisma.$ContentsPayload<ExtArgs>
        fields: Prisma.ContentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          findFirst: {
            args: Prisma.ContentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          findMany: {
            args: Prisma.ContentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>[]
          }
          create: {
            args: Prisma.ContentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          createMany: {
            args: Prisma.ContentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          update: {
            args: Prisma.ContentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          deleteMany: {
            args: Prisma.ContentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          aggregate: {
            args: Prisma.ContentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContents>
          }
          groupBy: {
            args: Prisma.ContentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentsCountArgs<ExtArgs>
            result: $Utils.Optional<ContentsCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      Schedules: {
        payload: Prisma.$SchedulesPayload<ExtArgs>
        fields: Prisma.SchedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          findFirst: {
            args: Prisma.SchedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          findMany: {
            args: Prisma.SchedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>[]
          }
          create: {
            args: Prisma.SchedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          createMany: {
            args: Prisma.SchedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          update: {
            args: Prisma.SchedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          deleteMany: {
            args: Prisma.SchedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulesPayload>
          }
          aggregate: {
            args: Prisma.SchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedules>
          }
          groupBy: {
            args: Prisma.SchedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulesCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulesCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    board?: BoardOmit
    brushed?: BrushedOmit
    contents?: ContentsOmit
    holiday?: HolidayOmit
    schedules?: SchedulesOmit
    school?: SchoolOmit
    student?: StudentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    board: number
    contents: number
    schedules: number
    student: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | SchoolCountOutputTypeCountBoardArgs
    contents?: boolean | SchoolCountOutputTypeCountContentsArgs
    schedules?: boolean | SchoolCountOutputTypeCountSchedulesArgs
    student?: boolean | SchoolCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentsWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulesWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    brushed: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brushed?: boolean | StudentCountOutputTypeCountBrushedArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountBrushedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrushedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    content: string | null
    schoolId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    status: $Enums.BoardStatus | null
    title: string | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    content: string | null
    schoolId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    status: $Enums.BoardStatus | null
    title: string | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    content: number
    schoolId: number
    comment: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    status: number
    title: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    content?: true
    schoolId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
    title?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    content?: true
    schoolId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
    title?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    content?: true
    schoolId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
    title?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    content: string
    schoolId: string
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    status: $Enums.BoardStatus
    title: string
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    schoolId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
    title?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>



  export type BoardSelectScalar = {
    id?: boolean
    content?: boolean
    schoolId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
    title?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "schoolId" | "comment" | "createdAt" | "updatedAt" | "deletedAt" | "status" | "title", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      schoolId: string
      comment: string | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      status: $Enums.BoardStatus
      title: string
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly content: FieldRef<"Board", 'String'>
    readonly schoolId: FieldRef<"Board", 'String'>
    readonly comment: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
    readonly deletedAt: FieldRef<"Board", 'DateTime'>
    readonly status: FieldRef<"Board", 'BoardStatus'>
    readonly title: FieldRef<"Board", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Brushed
   */

  export type AggregateBrushed = {
    _count: BrushedCountAggregateOutputType | null
    _avg: BrushedAvgAggregateOutputType | null
    _sum: BrushedSumAggregateOutputType | null
    _min: BrushedMinAggregateOutputType | null
    _max: BrushedMaxAggregateOutputType | null
  }

  export type BrushedAvgAggregateOutputType = {
    id: number | null
  }

  export type BrushedSumAggregateOutputType = {
    id: number | null
  }

  export type BrushedMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    brushedAt: Date | null
    brushedStatus: $Enums.BrushedBrushedStatus | null
  }

  export type BrushedMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    brushedAt: Date | null
    brushedStatus: $Enums.BrushedBrushedStatus | null
  }

  export type BrushedCountAggregateOutputType = {
    id: number
    studentId: number
    brushedAt: number
    brushedStatus: number
    _all: number
  }


  export type BrushedAvgAggregateInputType = {
    id?: true
  }

  export type BrushedSumAggregateInputType = {
    id?: true
  }

  export type BrushedMinAggregateInputType = {
    id?: true
    studentId?: true
    brushedAt?: true
    brushedStatus?: true
  }

  export type BrushedMaxAggregateInputType = {
    id?: true
    studentId?: true
    brushedAt?: true
    brushedStatus?: true
  }

  export type BrushedCountAggregateInputType = {
    id?: true
    studentId?: true
    brushedAt?: true
    brushedStatus?: true
    _all?: true
  }

  export type BrushedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brushed to aggregate.
     */
    where?: BrushedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brusheds to fetch.
     */
    orderBy?: BrushedOrderByWithRelationInput | BrushedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrushedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brusheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brusheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brusheds
    **/
    _count?: true | BrushedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrushedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrushedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrushedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrushedMaxAggregateInputType
  }

  export type GetBrushedAggregateType<T extends BrushedAggregateArgs> = {
        [P in keyof T & keyof AggregateBrushed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrushed[P]>
      : GetScalarType<T[P], AggregateBrushed[P]>
  }




  export type BrushedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrushedWhereInput
    orderBy?: BrushedOrderByWithAggregationInput | BrushedOrderByWithAggregationInput[]
    by: BrushedScalarFieldEnum[] | BrushedScalarFieldEnum
    having?: BrushedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrushedCountAggregateInputType | true
    _avg?: BrushedAvgAggregateInputType
    _sum?: BrushedSumAggregateInputType
    _min?: BrushedMinAggregateInputType
    _max?: BrushedMaxAggregateInputType
  }

  export type BrushedGroupByOutputType = {
    id: number
    studentId: string
    brushedAt: Date
    brushedStatus: $Enums.BrushedBrushedStatus
    _count: BrushedCountAggregateOutputType | null
    _avg: BrushedAvgAggregateOutputType | null
    _sum: BrushedSumAggregateOutputType | null
    _min: BrushedMinAggregateOutputType | null
    _max: BrushedMaxAggregateOutputType | null
  }

  type GetBrushedGroupByPayload<T extends BrushedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrushedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrushedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrushedGroupByOutputType[P]>
            : GetScalarType<T[P], BrushedGroupByOutputType[P]>
        }
      >
    >


  export type BrushedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    brushedAt?: boolean
    brushedStatus?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brushed"]>



  export type BrushedSelectScalar = {
    id?: boolean
    studentId?: boolean
    brushedAt?: boolean
    brushedStatus?: boolean
  }

  export type BrushedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "brushedAt" | "brushedStatus", ExtArgs["result"]["brushed"]>
  export type BrushedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $BrushedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brushed"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      brushedAt: Date
      brushedStatus: $Enums.BrushedBrushedStatus
    }, ExtArgs["result"]["brushed"]>
    composites: {}
  }

  type BrushedGetPayload<S extends boolean | null | undefined | BrushedDefaultArgs> = $Result.GetResult<Prisma.$BrushedPayload, S>

  type BrushedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrushedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrushedCountAggregateInputType | true
    }

  export interface BrushedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brushed'], meta: { name: 'Brushed' } }
    /**
     * Find zero or one Brushed that matches the filter.
     * @param {BrushedFindUniqueArgs} args - Arguments to find a Brushed
     * @example
     * // Get one Brushed
     * const brushed = await prisma.brushed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrushedFindUniqueArgs>(args: SelectSubset<T, BrushedFindUniqueArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brushed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrushedFindUniqueOrThrowArgs} args - Arguments to find a Brushed
     * @example
     * // Get one Brushed
     * const brushed = await prisma.brushed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrushedFindUniqueOrThrowArgs>(args: SelectSubset<T, BrushedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brushed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedFindFirstArgs} args - Arguments to find a Brushed
     * @example
     * // Get one Brushed
     * const brushed = await prisma.brushed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrushedFindFirstArgs>(args?: SelectSubset<T, BrushedFindFirstArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brushed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedFindFirstOrThrowArgs} args - Arguments to find a Brushed
     * @example
     * // Get one Brushed
     * const brushed = await prisma.brushed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrushedFindFirstOrThrowArgs>(args?: SelectSubset<T, BrushedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brusheds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brusheds
     * const brusheds = await prisma.brushed.findMany()
     * 
     * // Get first 10 Brusheds
     * const brusheds = await prisma.brushed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brushedWithIdOnly = await prisma.brushed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrushedFindManyArgs>(args?: SelectSubset<T, BrushedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brushed.
     * @param {BrushedCreateArgs} args - Arguments to create a Brushed.
     * @example
     * // Create one Brushed
     * const Brushed = await prisma.brushed.create({
     *   data: {
     *     // ... data to create a Brushed
     *   }
     * })
     * 
     */
    create<T extends BrushedCreateArgs>(args: SelectSubset<T, BrushedCreateArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brusheds.
     * @param {BrushedCreateManyArgs} args - Arguments to create many Brusheds.
     * @example
     * // Create many Brusheds
     * const brushed = await prisma.brushed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrushedCreateManyArgs>(args?: SelectSubset<T, BrushedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brushed.
     * @param {BrushedDeleteArgs} args - Arguments to delete one Brushed.
     * @example
     * // Delete one Brushed
     * const Brushed = await prisma.brushed.delete({
     *   where: {
     *     // ... filter to delete one Brushed
     *   }
     * })
     * 
     */
    delete<T extends BrushedDeleteArgs>(args: SelectSubset<T, BrushedDeleteArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brushed.
     * @param {BrushedUpdateArgs} args - Arguments to update one Brushed.
     * @example
     * // Update one Brushed
     * const brushed = await prisma.brushed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrushedUpdateArgs>(args: SelectSubset<T, BrushedUpdateArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brusheds.
     * @param {BrushedDeleteManyArgs} args - Arguments to filter Brusheds to delete.
     * @example
     * // Delete a few Brusheds
     * const { count } = await prisma.brushed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrushedDeleteManyArgs>(args?: SelectSubset<T, BrushedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brusheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brusheds
     * const brushed = await prisma.brushed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrushedUpdateManyArgs>(args: SelectSubset<T, BrushedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brushed.
     * @param {BrushedUpsertArgs} args - Arguments to update or create a Brushed.
     * @example
     * // Update or create a Brushed
     * const brushed = await prisma.brushed.upsert({
     *   create: {
     *     // ... data to create a Brushed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brushed we want to update
     *   }
     * })
     */
    upsert<T extends BrushedUpsertArgs>(args: SelectSubset<T, BrushedUpsertArgs<ExtArgs>>): Prisma__BrushedClient<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brusheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedCountArgs} args - Arguments to filter Brusheds to count.
     * @example
     * // Count the number of Brusheds
     * const count = await prisma.brushed.count({
     *   where: {
     *     // ... the filter for the Brusheds we want to count
     *   }
     * })
    **/
    count<T extends BrushedCountArgs>(
      args?: Subset<T, BrushedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrushedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brushed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrushedAggregateArgs>(args: Subset<T, BrushedAggregateArgs>): Prisma.PrismaPromise<GetBrushedAggregateType<T>>

    /**
     * Group by Brushed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrushedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrushedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrushedGroupByArgs['orderBy'] }
        : { orderBy?: BrushedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrushedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrushedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brushed model
   */
  readonly fields: BrushedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brushed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrushedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brushed model
   */
  interface BrushedFieldRefs {
    readonly id: FieldRef<"Brushed", 'Int'>
    readonly studentId: FieldRef<"Brushed", 'String'>
    readonly brushedAt: FieldRef<"Brushed", 'DateTime'>
    readonly brushedStatus: FieldRef<"Brushed", 'BrushedBrushedStatus'>
  }
    

  // Custom InputTypes
  /**
   * Brushed findUnique
   */
  export type BrushedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter, which Brushed to fetch.
     */
    where: BrushedWhereUniqueInput
  }

  /**
   * Brushed findUniqueOrThrow
   */
  export type BrushedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter, which Brushed to fetch.
     */
    where: BrushedWhereUniqueInput
  }

  /**
   * Brushed findFirst
   */
  export type BrushedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter, which Brushed to fetch.
     */
    where?: BrushedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brusheds to fetch.
     */
    orderBy?: BrushedOrderByWithRelationInput | BrushedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brusheds.
     */
    cursor?: BrushedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brusheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brusheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brusheds.
     */
    distinct?: BrushedScalarFieldEnum | BrushedScalarFieldEnum[]
  }

  /**
   * Brushed findFirstOrThrow
   */
  export type BrushedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter, which Brushed to fetch.
     */
    where?: BrushedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brusheds to fetch.
     */
    orderBy?: BrushedOrderByWithRelationInput | BrushedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brusheds.
     */
    cursor?: BrushedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brusheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brusheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brusheds.
     */
    distinct?: BrushedScalarFieldEnum | BrushedScalarFieldEnum[]
  }

  /**
   * Brushed findMany
   */
  export type BrushedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter, which Brusheds to fetch.
     */
    where?: BrushedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brusheds to fetch.
     */
    orderBy?: BrushedOrderByWithRelationInput | BrushedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brusheds.
     */
    cursor?: BrushedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brusheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brusheds.
     */
    skip?: number
    distinct?: BrushedScalarFieldEnum | BrushedScalarFieldEnum[]
  }

  /**
   * Brushed create
   */
  export type BrushedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * The data needed to create a Brushed.
     */
    data: XOR<BrushedCreateInput, BrushedUncheckedCreateInput>
  }

  /**
   * Brushed createMany
   */
  export type BrushedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brusheds.
     */
    data: BrushedCreateManyInput | BrushedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brushed update
   */
  export type BrushedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * The data needed to update a Brushed.
     */
    data: XOR<BrushedUpdateInput, BrushedUncheckedUpdateInput>
    /**
     * Choose, which Brushed to update.
     */
    where: BrushedWhereUniqueInput
  }

  /**
   * Brushed updateMany
   */
  export type BrushedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brusheds.
     */
    data: XOR<BrushedUpdateManyMutationInput, BrushedUncheckedUpdateManyInput>
    /**
     * Filter which Brusheds to update
     */
    where?: BrushedWhereInput
    /**
     * Limit how many Brusheds to update.
     */
    limit?: number
  }

  /**
   * Brushed upsert
   */
  export type BrushedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * The filter to search for the Brushed to update in case it exists.
     */
    where: BrushedWhereUniqueInput
    /**
     * In case the Brushed found by the `where` argument doesn't exist, create a new Brushed with this data.
     */
    create: XOR<BrushedCreateInput, BrushedUncheckedCreateInput>
    /**
     * In case the Brushed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrushedUpdateInput, BrushedUncheckedUpdateInput>
  }

  /**
   * Brushed delete
   */
  export type BrushedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    /**
     * Filter which Brushed to delete.
     */
    where: BrushedWhereUniqueInput
  }

  /**
   * Brushed deleteMany
   */
  export type BrushedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brusheds to delete
     */
    where?: BrushedWhereInput
    /**
     * Limit how many Brusheds to delete.
     */
    limit?: number
  }

  /**
   * Brushed without action
   */
  export type BrushedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
  }


  /**
   * Model Contents
   */

  export type AggregateContents = {
    _count: ContentsCountAggregateOutputType | null
    _avg: ContentsAvgAggregateOutputType | null
    _sum: ContentsSumAggregateOutputType | null
    _min: ContentsMinAggregateOutputType | null
    _max: ContentsMaxAggregateOutputType | null
  }

  export type ContentsAvgAggregateOutputType = {
    id: number | null
    seq: number | null
    fileSize: number | null
  }

  export type ContentsSumAggregateOutputType = {
    id: number | null
    seq: number | null
    fileSize: number | null
  }

  export type ContentsMinAggregateOutputType = {
    id: number | null
    schoolId: string | null
    fileType: string | null
    fileName: string | null
    seq: number | null
    contentsStatus: boolean | null
    userFileName: string | null
    fileSize: number | null
  }

  export type ContentsMaxAggregateOutputType = {
    id: number | null
    schoolId: string | null
    fileType: string | null
    fileName: string | null
    seq: number | null
    contentsStatus: boolean | null
    userFileName: string | null
    fileSize: number | null
  }

  export type ContentsCountAggregateOutputType = {
    id: number
    schoolId: number
    fileType: number
    fileName: number
    seq: number
    contentsStatus: number
    userFileName: number
    fileSize: number
    _all: number
  }


  export type ContentsAvgAggregateInputType = {
    id?: true
    seq?: true
    fileSize?: true
  }

  export type ContentsSumAggregateInputType = {
    id?: true
    seq?: true
    fileSize?: true
  }

  export type ContentsMinAggregateInputType = {
    id?: true
    schoolId?: true
    fileType?: true
    fileName?: true
    seq?: true
    contentsStatus?: true
    userFileName?: true
    fileSize?: true
  }

  export type ContentsMaxAggregateInputType = {
    id?: true
    schoolId?: true
    fileType?: true
    fileName?: true
    seq?: true
    contentsStatus?: true
    userFileName?: true
    fileSize?: true
  }

  export type ContentsCountAggregateInputType = {
    id?: true
    schoolId?: true
    fileType?: true
    fileName?: true
    seq?: true
    contentsStatus?: true
    userFileName?: true
    fileSize?: true
    _all?: true
  }

  export type ContentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to aggregate.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentsMaxAggregateInputType
  }

  export type GetContentsAggregateType<T extends ContentsAggregateArgs> = {
        [P in keyof T & keyof AggregateContents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContents[P]>
      : GetScalarType<T[P], AggregateContents[P]>
  }




  export type ContentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentsWhereInput
    orderBy?: ContentsOrderByWithAggregationInput | ContentsOrderByWithAggregationInput[]
    by: ContentsScalarFieldEnum[] | ContentsScalarFieldEnum
    having?: ContentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentsCountAggregateInputType | true
    _avg?: ContentsAvgAggregateInputType
    _sum?: ContentsSumAggregateInputType
    _min?: ContentsMinAggregateInputType
    _max?: ContentsMaxAggregateInputType
  }

  export type ContentsGroupByOutputType = {
    id: number
    schoolId: string
    fileType: string
    fileName: string
    seq: number
    contentsStatus: boolean
    userFileName: string | null
    fileSize: number | null
    _count: ContentsCountAggregateOutputType | null
    _avg: ContentsAvgAggregateOutputType | null
    _sum: ContentsSumAggregateOutputType | null
    _min: ContentsMinAggregateOutputType | null
    _max: ContentsMaxAggregateOutputType | null
  }

  type GetContentsGroupByPayload<T extends ContentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentsGroupByOutputType[P]>
            : GetScalarType<T[P], ContentsGroupByOutputType[P]>
        }
      >
    >


  export type ContentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    fileType?: boolean
    fileName?: boolean
    seq?: boolean
    contentsStatus?: boolean
    userFileName?: boolean
    fileSize?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contents"]>



  export type ContentsSelectScalar = {
    id?: boolean
    schoolId?: boolean
    fileType?: boolean
    fileName?: boolean
    seq?: boolean
    contentsStatus?: boolean
    userFileName?: boolean
    fileSize?: boolean
  }

  export type ContentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "fileType" | "fileName" | "seq" | "contentsStatus" | "userFileName" | "fileSize", ExtArgs["result"]["contents"]>
  export type ContentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $ContentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contents"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: string
      fileType: string
      fileName: string
      seq: number
      contentsStatus: boolean
      userFileName: string | null
      fileSize: number | null
    }, ExtArgs["result"]["contents"]>
    composites: {}
  }

  type ContentsGetPayload<S extends boolean | null | undefined | ContentsDefaultArgs> = $Result.GetResult<Prisma.$ContentsPayload, S>

  type ContentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentsCountAggregateInputType | true
    }

  export interface ContentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contents'], meta: { name: 'Contents' } }
    /**
     * Find zero or one Contents that matches the filter.
     * @param {ContentsFindUniqueArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentsFindUniqueArgs>(args: SelectSubset<T, ContentsFindUniqueArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentsFindUniqueOrThrowArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindFirstArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentsFindFirstArgs>(args?: SelectSubset<T, ContentsFindFirstArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindFirstOrThrowArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.contents.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.contents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentsWithIdOnly = await prisma.contents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentsFindManyArgs>(args?: SelectSubset<T, ContentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contents.
     * @param {ContentsCreateArgs} args - Arguments to create a Contents.
     * @example
     * // Create one Contents
     * const Contents = await prisma.contents.create({
     *   data: {
     *     // ... data to create a Contents
     *   }
     * })
     * 
     */
    create<T extends ContentsCreateArgs>(args: SelectSubset<T, ContentsCreateArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentsCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const contents = await prisma.contents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentsCreateManyArgs>(args?: SelectSubset<T, ContentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contents.
     * @param {ContentsDeleteArgs} args - Arguments to delete one Contents.
     * @example
     * // Delete one Contents
     * const Contents = await prisma.contents.delete({
     *   where: {
     *     // ... filter to delete one Contents
     *   }
     * })
     * 
     */
    delete<T extends ContentsDeleteArgs>(args: SelectSubset<T, ContentsDeleteArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contents.
     * @param {ContentsUpdateArgs} args - Arguments to update one Contents.
     * @example
     * // Update one Contents
     * const contents = await prisma.contents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentsUpdateArgs>(args: SelectSubset<T, ContentsUpdateArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentsDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.contents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentsDeleteManyArgs>(args?: SelectSubset<T, ContentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const contents = await prisma.contents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentsUpdateManyArgs>(args: SelectSubset<T, ContentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contents.
     * @param {ContentsUpsertArgs} args - Arguments to update or create a Contents.
     * @example
     * // Update or create a Contents
     * const contents = await prisma.contents.upsert({
     *   create: {
     *     // ... data to create a Contents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contents we want to update
     *   }
     * })
     */
    upsert<T extends ContentsUpsertArgs>(args: SelectSubset<T, ContentsUpsertArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.contents.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentsCountArgs>(
      args?: Subset<T, ContentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentsAggregateArgs>(args: Subset<T, ContentsAggregateArgs>): Prisma.PrismaPromise<GetContentsAggregateType<T>>

    /**
     * Group by Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentsGroupByArgs['orderBy'] }
        : { orderBy?: ContentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contents model
   */
  readonly fields: ContentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contents model
   */
  interface ContentsFieldRefs {
    readonly id: FieldRef<"Contents", 'Int'>
    readonly schoolId: FieldRef<"Contents", 'String'>
    readonly fileType: FieldRef<"Contents", 'String'>
    readonly fileName: FieldRef<"Contents", 'String'>
    readonly seq: FieldRef<"Contents", 'Int'>
    readonly contentsStatus: FieldRef<"Contents", 'Boolean'>
    readonly userFileName: FieldRef<"Contents", 'String'>
    readonly fileSize: FieldRef<"Contents", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Contents findUnique
   */
  export type ContentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents findUniqueOrThrow
   */
  export type ContentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents findFirst
   */
  export type ContentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents findFirstOrThrow
   */
  export type ContentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents findMany
   */
  export type ContentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents create
   */
  export type ContentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contents.
     */
    data: XOR<ContentsCreateInput, ContentsUncheckedCreateInput>
  }

  /**
   * Contents createMany
   */
  export type ContentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentsCreateManyInput | ContentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contents update
   */
  export type ContentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contents.
     */
    data: XOR<ContentsUpdateInput, ContentsUncheckedUpdateInput>
    /**
     * Choose, which Contents to update.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents updateMany
   */
  export type ContentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentsUpdateManyMutationInput, ContentsUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentsWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Contents upsert
   */
  export type ContentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contents to update in case it exists.
     */
    where: ContentsWhereUniqueInput
    /**
     * In case the Contents found by the `where` argument doesn't exist, create a new Contents with this data.
     */
    create: XOR<ContentsCreateInput, ContentsUncheckedCreateInput>
    /**
     * In case the Contents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentsUpdateInput, ContentsUncheckedUpdateInput>
  }

  /**
   * Contents delete
   */
  export type ContentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    /**
     * Filter which Contents to delete.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents deleteMany
   */
  export type ContentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentsWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Contents without action
   */
  export type ContentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayAvgAggregateOutputType = {
    id: number | null
  }

  export type HolidaySumAggregateOutputType = {
    id: number | null
  }

  export type HolidayMinAggregateOutputType = {
    id: number | null
    holidayName: string | null
    holidayAt: Date | null
    holidayStatus: boolean | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: number | null
    holidayName: string | null
    holidayAt: Date | null
    holidayStatus: boolean | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    holidayName: number
    holidayAt: number
    holidayStatus: number
    _all: number
  }


  export type HolidayAvgAggregateInputType = {
    id?: true
  }

  export type HolidaySumAggregateInputType = {
    id?: true
  }

  export type HolidayMinAggregateInputType = {
    id?: true
    holidayName?: true
    holidayAt?: true
    holidayStatus?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    holidayName?: true
    holidayAt?: true
    holidayStatus?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    holidayName?: true
    holidayAt?: true
    holidayStatus?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HolidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HolidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _avg?: HolidayAvgAggregateInputType
    _sum?: HolidaySumAggregateInputType
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: number
    holidayName: string
    holidayAt: Date
    holidayStatus: boolean
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holidayName?: boolean
    holidayAt?: boolean
    holidayStatus?: boolean
  }, ExtArgs["result"]["holiday"]>



  export type HolidaySelectScalar = {
    id?: boolean
    holidayName?: boolean
    holidayAt?: boolean
    holidayStatus?: boolean
  }

  export type HolidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "holidayName" | "holidayAt" | "holidayStatus", ExtArgs["result"]["holiday"]>

  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      holidayName: string
      holidayAt: Date
      holidayStatus: boolean
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Holiday model
   */
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'Int'>
    readonly holidayName: FieldRef<"Holiday", 'String'>
    readonly holidayAt: FieldRef<"Holiday", 'DateTime'>
    readonly holidayStatus: FieldRef<"Holiday", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to delete.
     */
    limit?: number
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
  }


  /**
   * Model Schedules
   */

  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesAvgAggregateOutputType = {
    id: number | null
  }

  export type SchedulesSumAggregateOutputType = {
    id: number | null
  }

  export type SchedulesMinAggregateOutputType = {
    id: number | null
    schoolId: string | null
    scheduleName: string | null
    scheduleTarget: string | null
    scheduleAt: Date | null
    scheduleStatus: boolean | null
  }

  export type SchedulesMaxAggregateOutputType = {
    id: number | null
    schoolId: string | null
    scheduleName: string | null
    scheduleTarget: string | null
    scheduleAt: Date | null
    scheduleStatus: boolean | null
  }

  export type SchedulesCountAggregateOutputType = {
    id: number
    schoolId: number
    scheduleName: number
    scheduleTarget: number
    scheduleAt: number
    scheduleStatus: number
    _all: number
  }


  export type SchedulesAvgAggregateInputType = {
    id?: true
  }

  export type SchedulesSumAggregateInputType = {
    id?: true
  }

  export type SchedulesMinAggregateInputType = {
    id?: true
    schoolId?: true
    scheduleName?: true
    scheduleTarget?: true
    scheduleAt?: true
    scheduleStatus?: true
  }

  export type SchedulesMaxAggregateInputType = {
    id?: true
    schoolId?: true
    scheduleName?: true
    scheduleTarget?: true
    scheduleAt?: true
    scheduleStatus?: true
  }

  export type SchedulesCountAggregateInputType = {
    id?: true
    schoolId?: true
    scheduleName?: true
    scheduleTarget?: true
    scheduleAt?: true
    scheduleStatus?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to aggregate.
     */
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: SchedulesOrderByWithRelationInput | SchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type SchedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulesWhereInput
    orderBy?: SchedulesOrderByWithAggregationInput | SchedulesOrderByWithAggregationInput[]
    by: SchedulesScalarFieldEnum[] | SchedulesScalarFieldEnum
    having?: SchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _avg?: SchedulesAvgAggregateInputType
    _sum?: SchedulesSumAggregateInputType
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }

  export type SchedulesGroupByOutputType = {
    id: number
    schoolId: string
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date
    scheduleStatus: boolean
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends SchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type SchedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    scheduleName?: boolean
    scheduleTarget?: boolean
    scheduleAt?: boolean
    scheduleStatus?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>



  export type SchedulesSelectScalar = {
    id?: boolean
    schoolId?: boolean
    scheduleName?: boolean
    scheduleTarget?: boolean
    scheduleAt?: boolean
    scheduleStatus?: boolean
  }

  export type SchedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "scheduleName" | "scheduleTarget" | "scheduleAt" | "scheduleStatus", ExtArgs["result"]["schedules"]>
  export type SchedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedules"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: string
      scheduleName: string
      scheduleTarget: string
      scheduleAt: Date
      scheduleStatus: boolean
    }, ExtArgs["result"]["schedules"]>
    composites: {}
  }

  type SchedulesGetPayload<S extends boolean | null | undefined | SchedulesDefaultArgs> = $Result.GetResult<Prisma.$SchedulesPayload, S>

  type SchedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface SchedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedules'], meta: { name: 'Schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {SchedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulesFindUniqueArgs>(args: SelectSubset<T, SchedulesFindUniqueArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulesFindFirstArgs>(args?: SelectSubset<T, SchedulesFindFirstArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulesWithIdOnly = await prisma.schedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulesFindManyArgs>(args?: SelectSubset<T, SchedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedules.
     * @param {SchedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
     */
    create<T extends SchedulesCreateArgs>(args: SelectSubset<T, SchedulesCreateArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {SchedulesCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulesCreateManyArgs>(args?: SelectSubset<T, SchedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedules.
     * @param {SchedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
     */
    delete<T extends SchedulesDeleteArgs>(args: SelectSubset<T, SchedulesDeleteArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedules.
     * @param {SchedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulesUpdateArgs>(args: SelectSubset<T, SchedulesUpdateArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {SchedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulesDeleteManyArgs>(args?: SelectSubset<T, SchedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulesUpdateManyArgs>(args: SelectSubset<T, SchedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedules.
     * @param {SchedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
     */
    upsert<T extends SchedulesUpsertArgs>(args: SelectSubset<T, SchedulesUpsertArgs<ExtArgs>>): Prisma__SchedulesClient<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends SchedulesCountArgs>(
      args?: Subset<T, SchedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulesGroupByArgs['orderBy'] }
        : { orderBy?: SchedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedules model
   */
  readonly fields: SchedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedules model
   */
  interface SchedulesFieldRefs {
    readonly id: FieldRef<"Schedules", 'Int'>
    readonly schoolId: FieldRef<"Schedules", 'String'>
    readonly scheduleName: FieldRef<"Schedules", 'String'>
    readonly scheduleTarget: FieldRef<"Schedules", 'String'>
    readonly scheduleAt: FieldRef<"Schedules", 'DateTime'>
    readonly scheduleStatus: FieldRef<"Schedules", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Schedules findUnique
   */
  export type SchedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where: SchedulesWhereUniqueInput
  }

  /**
   * Schedules findUniqueOrThrow
   */
  export type SchedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where: SchedulesWhereUniqueInput
  }

  /**
   * Schedules findFirst
   */
  export type SchedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: SchedulesOrderByWithRelationInput | SchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * Schedules findFirstOrThrow
   */
  export type SchedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: SchedulesOrderByWithRelationInput | SchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * Schedules findMany
   */
  export type SchedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: SchedulesOrderByWithRelationInput | SchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * Schedules create
   */
  export type SchedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedules.
     */
    data: XOR<SchedulesCreateInput, SchedulesUncheckedCreateInput>
  }

  /**
   * Schedules createMany
   */
  export type SchedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: SchedulesCreateManyInput | SchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedules update
   */
  export type SchedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedules.
     */
    data: XOR<SchedulesUpdateInput, SchedulesUncheckedUpdateInput>
    /**
     * Choose, which Schedules to update.
     */
    where: SchedulesWhereUniqueInput
  }

  /**
   * Schedules updateMany
   */
  export type SchedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<SchedulesUpdateManyMutationInput, SchedulesUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: SchedulesWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedules upsert
   */
  export type SchedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedules to update in case it exists.
     */
    where: SchedulesWhereUniqueInput
    /**
     * In case the Schedules found by the `where` argument doesn't exist, create a new Schedules with this data.
     */
    create: XOR<SchedulesCreateInput, SchedulesUncheckedCreateInput>
    /**
     * In case the Schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulesUpdateInput, SchedulesUncheckedUpdateInput>
  }

  /**
   * Schedules delete
   */
  export type SchedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    /**
     * Filter which Schedules to delete.
     */
    where: SchedulesWhereUniqueInput
  }

  /**
   * Schedules deleteMany
   */
  export type SchedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: SchedulesWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedules without action
   */
  export type SchedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    schoolId: string | null
    schoolName: string | null
    loginId: string | null
    loginPw: string | null
    teacherName: string | null
    teacherEmail: string | null
    teacherPhone: string | null
    schoolLogo: string | null
    startAt: Date | null
    endAt: Date | null
    schoolType: $Enums.SchoolSchoolType | null
    schoolLevel: $Enums.SchoolSchoolLevel | null
    createdAt: Date | null
    schoolStatus: boolean | null
    officeCode: string | null
    schoolCode: string | null
    address: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    schoolId: string | null
    schoolName: string | null
    loginId: string | null
    loginPw: string | null
    teacherName: string | null
    teacherEmail: string | null
    teacherPhone: string | null
    schoolLogo: string | null
    startAt: Date | null
    endAt: Date | null
    schoolType: $Enums.SchoolSchoolType | null
    schoolLevel: $Enums.SchoolSchoolLevel | null
    createdAt: Date | null
    schoolStatus: boolean | null
    officeCode: string | null
    schoolCode: string | null
    address: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    schoolId: number
    schoolName: number
    loginId: number
    loginPw: number
    teacherName: number
    teacherEmail: number
    teacherPhone: number
    schoolLogo: number
    startAt: number
    endAt: number
    schoolType: number
    schoolLevel: number
    createdAt: number
    schoolStatus: number
    officeCode: number
    schoolCode: number
    address: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    schoolId?: true
    schoolName?: true
    loginId?: true
    loginPw?: true
    teacherName?: true
    teacherEmail?: true
    teacherPhone?: true
    schoolLogo?: true
    startAt?: true
    endAt?: true
    schoolType?: true
    schoolLevel?: true
    createdAt?: true
    schoolStatus?: true
    officeCode?: true
    schoolCode?: true
    address?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    schoolId?: true
    schoolName?: true
    loginId?: true
    loginPw?: true
    teacherName?: true
    teacherEmail?: true
    teacherPhone?: true
    schoolLogo?: true
    startAt?: true
    endAt?: true
    schoolType?: true
    schoolLevel?: true
    createdAt?: true
    schoolStatus?: true
    officeCode?: true
    schoolCode?: true
    address?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    schoolId?: true
    schoolName?: true
    loginId?: true
    loginPw?: true
    teacherName?: true
    teacherEmail?: true
    teacherPhone?: true
    schoolLogo?: true
    startAt?: true
    endAt?: true
    schoolType?: true
    schoolLevel?: true
    createdAt?: true
    schoolStatus?: true
    officeCode?: true
    schoolCode?: true
    address?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo: string | null
    startAt: Date
    endAt: Date
    schoolType: $Enums.SchoolSchoolType
    schoolLevel: $Enums.SchoolSchoolLevel
    createdAt: Date
    schoolStatus: boolean
    officeCode: string
    schoolCode: string
    address: string
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    schoolName?: boolean
    loginId?: boolean
    loginPw?: boolean
    teacherName?: boolean
    teacherEmail?: boolean
    teacherPhone?: boolean
    schoolLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    schoolType?: boolean
    schoolLevel?: boolean
    createdAt?: boolean
    schoolStatus?: boolean
    officeCode?: boolean
    schoolCode?: boolean
    address?: boolean
    board?: boolean | School$boardArgs<ExtArgs>
    contents?: boolean | School$contentsArgs<ExtArgs>
    schedules?: boolean | School$schedulesArgs<ExtArgs>
    student?: boolean | School$studentArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    id?: boolean
    schoolId?: boolean
    schoolName?: boolean
    loginId?: boolean
    loginPw?: boolean
    teacherName?: boolean
    teacherEmail?: boolean
    teacherPhone?: boolean
    schoolLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    schoolType?: boolean
    schoolLevel?: boolean
    createdAt?: boolean
    schoolStatus?: boolean
    officeCode?: boolean
    schoolCode?: boolean
    address?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "schoolName" | "loginId" | "loginPw" | "teacherName" | "teacherEmail" | "teacherPhone" | "schoolLogo" | "startAt" | "endAt" | "schoolType" | "schoolLevel" | "createdAt" | "schoolStatus" | "officeCode" | "schoolCode" | "address", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | School$boardArgs<ExtArgs>
    contents?: boolean | School$contentsArgs<ExtArgs>
    schedules?: boolean | School$schedulesArgs<ExtArgs>
    student?: boolean | School$studentArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>[]
      contents: Prisma.$ContentsPayload<ExtArgs>[]
      schedules: Prisma.$SchedulesPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: string
      schoolName: string
      loginId: string
      loginPw: string
      teacherName: string
      teacherEmail: string
      teacherPhone: string
      schoolLogo: string | null
      startAt: Date
      endAt: Date
      schoolType: $Enums.SchoolSchoolType
      schoolLevel: $Enums.SchoolSchoolLevel
      createdAt: Date
      schoolStatus: boolean
      officeCode: string
      schoolCode: string
      address: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends School$boardArgs<ExtArgs> = {}>(args?: Subset<T, School$boardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends School$contentsArgs<ExtArgs> = {}>(args?: Subset<T, School$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends School$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, School$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends School$studentArgs<ExtArgs> = {}>(args?: Subset<T, School$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly schoolId: FieldRef<"School", 'String'>
    readonly schoolName: FieldRef<"School", 'String'>
    readonly loginId: FieldRef<"School", 'String'>
    readonly loginPw: FieldRef<"School", 'String'>
    readonly teacherName: FieldRef<"School", 'String'>
    readonly teacherEmail: FieldRef<"School", 'String'>
    readonly teacherPhone: FieldRef<"School", 'String'>
    readonly schoolLogo: FieldRef<"School", 'String'>
    readonly startAt: FieldRef<"School", 'DateTime'>
    readonly endAt: FieldRef<"School", 'DateTime'>
    readonly schoolType: FieldRef<"School", 'SchoolSchoolType'>
    readonly schoolLevel: FieldRef<"School", 'SchoolSchoolLevel'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly schoolStatus: FieldRef<"School", 'Boolean'>
    readonly officeCode: FieldRef<"School", 'String'>
    readonly schoolCode: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.board
   */
  export type School$boardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * School.contents
   */
  export type School$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsInclude<ExtArgs> | null
    where?: ContentsWhereInput
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    cursor?: ContentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * School.schedules
   */
  export type School$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedules
     */
    select?: SchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedules
     */
    omit?: SchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulesInclude<ExtArgs> | null
    where?: SchedulesWhereInput
    orderBy?: SchedulesOrderByWithRelationInput | SchedulesOrderByWithRelationInput[]
    cursor?: SchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * School.student
   */
  export type School$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    studentGrade: number | null
    studentNumber: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    studentGrade: number | null
    studentNumber: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    schoolId: string | null
    studentGrade: number | null
    studentClass: string | null
    studentNumber: number | null
    studentName: string | null
    studentGender: $Enums.StudentStudentGender | null
    studentStatus: boolean | null
    createdAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    schoolId: string | null
    studentGrade: number | null
    studentClass: string | null
    studentNumber: number | null
    studentName: string | null
    studentGender: $Enums.StudentStudentGender | null
    studentStatus: boolean | null
    createdAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentId: number
    schoolId: number
    studentGrade: number
    studentClass: number
    studentNumber: number
    studentName: number
    studentGender: number
    studentStatus: number
    createdAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    studentGrade?: true
    studentNumber?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    studentGrade?: true
    studentNumber?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    studentGrade?: true
    studentClass?: true
    studentNumber?: true
    studentName?: true
    studentGender?: true
    studentStatus?: true
    createdAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    studentGrade?: true
    studentClass?: true
    studentNumber?: true
    studentName?: true
    studentGender?: true
    studentStatus?: true
    createdAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    studentGrade?: true
    studentClass?: true
    studentNumber?: true
    studentName?: true
    studentGender?: true
    studentStatus?: true
    createdAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    studentId: string
    schoolId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus: boolean
    createdAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    studentGrade?: boolean
    studentClass?: boolean
    studentNumber?: boolean
    studentName?: boolean
    studentGender?: boolean
    studentStatus?: boolean
    createdAt?: boolean
    brushed?: boolean | Student$brushedArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    studentGrade?: boolean
    studentClass?: boolean
    studentNumber?: boolean
    studentName?: boolean
    studentGender?: boolean
    studentStatus?: boolean
    createdAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "schoolId" | "studentGrade" | "studentClass" | "studentNumber" | "studentName" | "studentGender" | "studentStatus" | "createdAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brushed?: boolean | Student$brushedArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      brushed: Prisma.$BrushedPayload<ExtArgs>[]
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      schoolId: string
      studentGrade: number
      studentClass: string
      studentNumber: number
      studentName: string
      studentGender: $Enums.StudentStudentGender
      studentStatus: boolean
      createdAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brushed<T extends Student$brushedArgs<ExtArgs> = {}>(args?: Subset<T, Student$brushedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrushedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly studentId: FieldRef<"Student", 'String'>
    readonly schoolId: FieldRef<"Student", 'String'>
    readonly studentGrade: FieldRef<"Student", 'Int'>
    readonly studentClass: FieldRef<"Student", 'String'>
    readonly studentNumber: FieldRef<"Student", 'Int'>
    readonly studentName: FieldRef<"Student", 'String'>
    readonly studentGender: FieldRef<"Student", 'StudentStudentGender'>
    readonly studentStatus: FieldRef<"Student", 'Boolean'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.brushed
   */
  export type Student$brushedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brushed
     */
    select?: BrushedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brushed
     */
    omit?: BrushedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrushedInclude<ExtArgs> | null
    where?: BrushedWhereInput
    orderBy?: BrushedOrderByWithRelationInput | BrushedOrderByWithRelationInput[]
    cursor?: BrushedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrushedScalarFieldEnum | BrushedScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardScalarFieldEnum: {
    id: 'id',
    content: 'content',
    schoolId: 'schoolId',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    status: 'status',
    title: 'title'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BrushedScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    brushedAt: 'brushedAt',
    brushedStatus: 'brushedStatus'
  };

  export type BrushedScalarFieldEnum = (typeof BrushedScalarFieldEnum)[keyof typeof BrushedScalarFieldEnum]


  export const ContentsScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    fileType: 'fileType',
    fileName: 'fileName',
    seq: 'seq',
    contentsStatus: 'contentsStatus',
    userFileName: 'userFileName',
    fileSize: 'fileSize'
  };

  export type ContentsScalarFieldEnum = (typeof ContentsScalarFieldEnum)[keyof typeof ContentsScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    holidayName: 'holidayName',
    holidayAt: 'holidayAt',
    holidayStatus: 'holidayStatus'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    scheduleName: 'scheduleName',
    scheduleTarget: 'scheduleTarget',
    scheduleAt: 'scheduleAt',
    scheduleStatus: 'scheduleStatus'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    schoolName: 'schoolName',
    loginId: 'loginId',
    loginPw: 'loginPw',
    teacherName: 'teacherName',
    teacherEmail: 'teacherEmail',
    teacherPhone: 'teacherPhone',
    schoolLogo: 'schoolLogo',
    startAt: 'startAt',
    endAt: 'endAt',
    schoolType: 'schoolType',
    schoolLevel: 'schoolLevel',
    createdAt: 'createdAt',
    schoolStatus: 'schoolStatus',
    officeCode: 'officeCode',
    schoolCode: 'schoolCode',
    address: 'address'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    schoolId: 'schoolId',
    studentGrade: 'studentGrade',
    studentClass: 'studentClass',
    studentNumber: 'studentNumber',
    studentName: 'studentName',
    studentGender: 'studentGender',
    studentStatus: 'studentStatus',
    createdAt: 'createdAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BoardOrderByRelevanceFieldEnum: {
    content: 'content',
    schoolId: 'schoolId',
    comment: 'comment',
    title: 'title'
  };

  export type BoardOrderByRelevanceFieldEnum = (typeof BoardOrderByRelevanceFieldEnum)[keyof typeof BoardOrderByRelevanceFieldEnum]


  export const BrushedOrderByRelevanceFieldEnum: {
    studentId: 'studentId'
  };

  export type BrushedOrderByRelevanceFieldEnum = (typeof BrushedOrderByRelevanceFieldEnum)[keyof typeof BrushedOrderByRelevanceFieldEnum]


  export const ContentsOrderByRelevanceFieldEnum: {
    schoolId: 'schoolId',
    fileType: 'fileType',
    fileName: 'fileName',
    userFileName: 'userFileName'
  };

  export type ContentsOrderByRelevanceFieldEnum = (typeof ContentsOrderByRelevanceFieldEnum)[keyof typeof ContentsOrderByRelevanceFieldEnum]


  export const HolidayOrderByRelevanceFieldEnum: {
    holidayName: 'holidayName'
  };

  export type HolidayOrderByRelevanceFieldEnum = (typeof HolidayOrderByRelevanceFieldEnum)[keyof typeof HolidayOrderByRelevanceFieldEnum]


  export const SchedulesOrderByRelevanceFieldEnum: {
    schoolId: 'schoolId',
    scheduleName: 'scheduleName',
    scheduleTarget: 'scheduleTarget'
  };

  export type SchedulesOrderByRelevanceFieldEnum = (typeof SchedulesOrderByRelevanceFieldEnum)[keyof typeof SchedulesOrderByRelevanceFieldEnum]


  export const SchoolOrderByRelevanceFieldEnum: {
    schoolId: 'schoolId',
    schoolName: 'schoolName',
    loginId: 'loginId',
    loginPw: 'loginPw',
    teacherName: 'teacherName',
    teacherEmail: 'teacherEmail',
    teacherPhone: 'teacherPhone',
    schoolLogo: 'schoolLogo',
    officeCode: 'officeCode',
    schoolCode: 'schoolCode',
    address: 'address'
  };

  export type SchoolOrderByRelevanceFieldEnum = (typeof SchoolOrderByRelevanceFieldEnum)[keyof typeof SchoolOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    studentId: 'studentId',
    schoolId: 'schoolId',
    studentClass: 'studentClass',
    studentName: 'studentName'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BoardStatus'
   */
  export type EnumBoardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoardStatus'>
    


  /**
   * Reference to a field of type 'BrushedBrushedStatus'
   */
  export type EnumBrushedBrushedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BrushedBrushedStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'SchoolSchoolType'
   */
  export type EnumSchoolSchoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolSchoolType'>
    


  /**
   * Reference to a field of type 'SchoolSchoolLevel'
   */
  export type EnumSchoolSchoolLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolSchoolLevel'>
    


  /**
   * Reference to a field of type 'StudentStudentGender'
   */
  export type EnumStudentStudentGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStudentGender'>
    
  /**
   * Deep Input Types
   */


  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    content?: StringFilter<"Board"> | string
    schoolId?: StringFilter<"Board"> | string
    comment?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    status?: EnumBoardStatusFilter<"Board"> | $Enums.BoardStatus
    title?: StringFilter<"Board"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    schoolId?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    school?: SchoolOrderByWithRelationInput
    _relevance?: BoardOrderByRelevanceInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    content?: StringFilter<"Board"> | string
    schoolId?: StringFilter<"Board"> | string
    comment?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    status?: EnumBoardStatusFilter<"Board"> | $Enums.BoardStatus
    title?: StringFilter<"Board"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    schoolId?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    content?: StringWithAggregatesFilter<"Board"> | string
    schoolId?: StringWithAggregatesFilter<"Board"> | string
    comment?: StringNullableWithAggregatesFilter<"Board"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Board"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Board"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Board"> | Date | string | null
    status?: EnumBoardStatusWithAggregatesFilter<"Board"> | $Enums.BoardStatus
    title?: StringWithAggregatesFilter<"Board"> | string
  }

  export type BrushedWhereInput = {
    AND?: BrushedWhereInput | BrushedWhereInput[]
    OR?: BrushedWhereInput[]
    NOT?: BrushedWhereInput | BrushedWhereInput[]
    id?: IntFilter<"Brushed"> | number
    studentId?: StringFilter<"Brushed"> | string
    brushedAt?: DateTimeFilter<"Brushed"> | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFilter<"Brushed"> | $Enums.BrushedBrushedStatus
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type BrushedOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    brushedAt?: SortOrder
    brushedStatus?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: BrushedOrderByRelevanceInput
  }

  export type BrushedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrushedWhereInput | BrushedWhereInput[]
    OR?: BrushedWhereInput[]
    NOT?: BrushedWhereInput | BrushedWhereInput[]
    studentId?: StringFilter<"Brushed"> | string
    brushedAt?: DateTimeFilter<"Brushed"> | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFilter<"Brushed"> | $Enums.BrushedBrushedStatus
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type BrushedOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    brushedAt?: SortOrder
    brushedStatus?: SortOrder
    _count?: BrushedCountOrderByAggregateInput
    _avg?: BrushedAvgOrderByAggregateInput
    _max?: BrushedMaxOrderByAggregateInput
    _min?: BrushedMinOrderByAggregateInput
    _sum?: BrushedSumOrderByAggregateInput
  }

  export type BrushedScalarWhereWithAggregatesInput = {
    AND?: BrushedScalarWhereWithAggregatesInput | BrushedScalarWhereWithAggregatesInput[]
    OR?: BrushedScalarWhereWithAggregatesInput[]
    NOT?: BrushedScalarWhereWithAggregatesInput | BrushedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brushed"> | number
    studentId?: StringWithAggregatesFilter<"Brushed"> | string
    brushedAt?: DateTimeWithAggregatesFilter<"Brushed"> | Date | string
    brushedStatus?: EnumBrushedBrushedStatusWithAggregatesFilter<"Brushed"> | $Enums.BrushedBrushedStatus
  }

  export type ContentsWhereInput = {
    AND?: ContentsWhereInput | ContentsWhereInput[]
    OR?: ContentsWhereInput[]
    NOT?: ContentsWhereInput | ContentsWhereInput[]
    id?: IntFilter<"Contents"> | number
    schoolId?: StringFilter<"Contents"> | string
    fileType?: StringFilter<"Contents"> | string
    fileName?: StringFilter<"Contents"> | string
    seq?: IntFilter<"Contents"> | number
    contentsStatus?: BoolFilter<"Contents"> | boolean
    userFileName?: StringNullableFilter<"Contents"> | string | null
    fileSize?: FloatNullableFilter<"Contents"> | number | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type ContentsOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fileType?: SortOrder
    fileName?: SortOrder
    seq?: SortOrder
    contentsStatus?: SortOrder
    userFileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    _relevance?: ContentsOrderByRelevanceInput
  }

  export type ContentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fileName?: string
    AND?: ContentsWhereInput | ContentsWhereInput[]
    OR?: ContentsWhereInput[]
    NOT?: ContentsWhereInput | ContentsWhereInput[]
    schoolId?: StringFilter<"Contents"> | string
    fileType?: StringFilter<"Contents"> | string
    seq?: IntFilter<"Contents"> | number
    contentsStatus?: BoolFilter<"Contents"> | boolean
    userFileName?: StringNullableFilter<"Contents"> | string | null
    fileSize?: FloatNullableFilter<"Contents"> | number | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "fileName">

  export type ContentsOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fileType?: SortOrder
    fileName?: SortOrder
    seq?: SortOrder
    contentsStatus?: SortOrder
    userFileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    _count?: ContentsCountOrderByAggregateInput
    _avg?: ContentsAvgOrderByAggregateInput
    _max?: ContentsMaxOrderByAggregateInput
    _min?: ContentsMinOrderByAggregateInput
    _sum?: ContentsSumOrderByAggregateInput
  }

  export type ContentsScalarWhereWithAggregatesInput = {
    AND?: ContentsScalarWhereWithAggregatesInput | ContentsScalarWhereWithAggregatesInput[]
    OR?: ContentsScalarWhereWithAggregatesInput[]
    NOT?: ContentsScalarWhereWithAggregatesInput | ContentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contents"> | number
    schoolId?: StringWithAggregatesFilter<"Contents"> | string
    fileType?: StringWithAggregatesFilter<"Contents"> | string
    fileName?: StringWithAggregatesFilter<"Contents"> | string
    seq?: IntWithAggregatesFilter<"Contents"> | number
    contentsStatus?: BoolWithAggregatesFilter<"Contents"> | boolean
    userFileName?: StringNullableWithAggregatesFilter<"Contents"> | string | null
    fileSize?: FloatNullableWithAggregatesFilter<"Contents"> | number | null
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: IntFilter<"Holiday"> | number
    holidayName?: StringFilter<"Holiday"> | string
    holidayAt?: DateTimeFilter<"Holiday"> | Date | string
    holidayStatus?: BoolFilter<"Holiday"> | boolean
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    holidayName?: SortOrder
    holidayAt?: SortOrder
    holidayStatus?: SortOrder
    _relevance?: HolidayOrderByRelevanceInput
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    holidayName?: StringFilter<"Holiday"> | string
    holidayAt?: DateTimeFilter<"Holiday"> | Date | string
    holidayStatus?: BoolFilter<"Holiday"> | boolean
  }, "id">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    holidayName?: SortOrder
    holidayAt?: SortOrder
    holidayStatus?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _avg?: HolidayAvgOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
    _sum?: HolidaySumOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Holiday"> | number
    holidayName?: StringWithAggregatesFilter<"Holiday"> | string
    holidayAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    holidayStatus?: BoolWithAggregatesFilter<"Holiday"> | boolean
  }

  export type SchedulesWhereInput = {
    AND?: SchedulesWhereInput | SchedulesWhereInput[]
    OR?: SchedulesWhereInput[]
    NOT?: SchedulesWhereInput | SchedulesWhereInput[]
    id?: IntFilter<"Schedules"> | number
    schoolId?: StringFilter<"Schedules"> | string
    scheduleName?: StringFilter<"Schedules"> | string
    scheduleTarget?: StringFilter<"Schedules"> | string
    scheduleAt?: DateTimeFilter<"Schedules"> | Date | string
    scheduleStatus?: BoolFilter<"Schedules"> | boolean
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type SchedulesOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    scheduleName?: SortOrder
    scheduleTarget?: SortOrder
    scheduleAt?: SortOrder
    scheduleStatus?: SortOrder
    school?: SchoolOrderByWithRelationInput
    _relevance?: SchedulesOrderByRelevanceInput
  }

  export type SchedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchedulesWhereInput | SchedulesWhereInput[]
    OR?: SchedulesWhereInput[]
    NOT?: SchedulesWhereInput | SchedulesWhereInput[]
    schoolId?: StringFilter<"Schedules"> | string
    scheduleName?: StringFilter<"Schedules"> | string
    scheduleTarget?: StringFilter<"Schedules"> | string
    scheduleAt?: DateTimeFilter<"Schedules"> | Date | string
    scheduleStatus?: BoolFilter<"Schedules"> | boolean
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type SchedulesOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    scheduleName?: SortOrder
    scheduleTarget?: SortOrder
    scheduleAt?: SortOrder
    scheduleStatus?: SortOrder
    _count?: SchedulesCountOrderByAggregateInput
    _avg?: SchedulesAvgOrderByAggregateInput
    _max?: SchedulesMaxOrderByAggregateInput
    _min?: SchedulesMinOrderByAggregateInput
    _sum?: SchedulesSumOrderByAggregateInput
  }

  export type SchedulesScalarWhereWithAggregatesInput = {
    AND?: SchedulesScalarWhereWithAggregatesInput | SchedulesScalarWhereWithAggregatesInput[]
    OR?: SchedulesScalarWhereWithAggregatesInput[]
    NOT?: SchedulesScalarWhereWithAggregatesInput | SchedulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedules"> | number
    schoolId?: StringWithAggregatesFilter<"Schedules"> | string
    scheduleName?: StringWithAggregatesFilter<"Schedules"> | string
    scheduleTarget?: StringWithAggregatesFilter<"Schedules"> | string
    scheduleAt?: DateTimeWithAggregatesFilter<"Schedules"> | Date | string
    scheduleStatus?: BoolWithAggregatesFilter<"Schedules"> | boolean
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    schoolId?: StringFilter<"School"> | string
    schoolName?: StringFilter<"School"> | string
    loginId?: StringFilter<"School"> | string
    loginPw?: StringFilter<"School"> | string
    teacherName?: StringFilter<"School"> | string
    teacherEmail?: StringFilter<"School"> | string
    teacherPhone?: StringFilter<"School"> | string
    schoolLogo?: StringNullableFilter<"School"> | string | null
    startAt?: DateTimeFilter<"School"> | Date | string
    endAt?: DateTimeFilter<"School"> | Date | string
    schoolType?: EnumSchoolSchoolTypeFilter<"School"> | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFilter<"School"> | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFilter<"School"> | Date | string
    schoolStatus?: BoolFilter<"School"> | boolean
    officeCode?: StringFilter<"School"> | string
    schoolCode?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    board?: BoardListRelationFilter
    contents?: ContentsListRelationFilter
    schedules?: SchedulesListRelationFilter
    student?: StudentListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    teacherPhone?: SortOrder
    schoolLogo?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    schoolType?: SortOrder
    schoolLevel?: SortOrder
    createdAt?: SortOrder
    schoolStatus?: SortOrder
    officeCode?: SortOrder
    schoolCode?: SortOrder
    address?: SortOrder
    board?: BoardOrderByRelationAggregateInput
    contents?: ContentsOrderByRelationAggregateInput
    schedules?: SchedulesOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
    _relevance?: SchoolOrderByRelevanceInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    schoolId?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolName?: StringFilter<"School"> | string
    loginId?: StringFilter<"School"> | string
    loginPw?: StringFilter<"School"> | string
    teacherName?: StringFilter<"School"> | string
    teacherEmail?: StringFilter<"School"> | string
    teacherPhone?: StringFilter<"School"> | string
    schoolLogo?: StringNullableFilter<"School"> | string | null
    startAt?: DateTimeFilter<"School"> | Date | string
    endAt?: DateTimeFilter<"School"> | Date | string
    schoolType?: EnumSchoolSchoolTypeFilter<"School"> | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFilter<"School"> | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFilter<"School"> | Date | string
    schoolStatus?: BoolFilter<"School"> | boolean
    officeCode?: StringFilter<"School"> | string
    schoolCode?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    board?: BoardListRelationFilter
    contents?: ContentsListRelationFilter
    schedules?: SchedulesListRelationFilter
    student?: StudentListRelationFilter
  }, "schoolId" | "id" | "schoolId">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    teacherPhone?: SortOrder
    schoolLogo?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    schoolType?: SortOrder
    schoolLevel?: SortOrder
    createdAt?: SortOrder
    schoolStatus?: SortOrder
    officeCode?: SortOrder
    schoolCode?: SortOrder
    address?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    schoolId?: StringWithAggregatesFilter<"School"> | string
    schoolName?: StringWithAggregatesFilter<"School"> | string
    loginId?: StringWithAggregatesFilter<"School"> | string
    loginPw?: StringWithAggregatesFilter<"School"> | string
    teacherName?: StringWithAggregatesFilter<"School"> | string
    teacherEmail?: StringWithAggregatesFilter<"School"> | string
    teacherPhone?: StringWithAggregatesFilter<"School"> | string
    schoolLogo?: StringNullableWithAggregatesFilter<"School"> | string | null
    startAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    schoolType?: EnumSchoolSchoolTypeWithAggregatesFilter<"School"> | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelWithAggregatesFilter<"School"> | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    schoolStatus?: BoolWithAggregatesFilter<"School"> | boolean
    officeCode?: StringWithAggregatesFilter<"School"> | string
    schoolCode?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    studentId?: StringFilter<"Student"> | string
    schoolId?: StringFilter<"Student"> | string
    studentGrade?: IntFilter<"Student"> | number
    studentClass?: StringFilter<"Student"> | string
    studentNumber?: IntFilter<"Student"> | number
    studentName?: StringFilter<"Student"> | string
    studentGender?: EnumStudentStudentGenderFilter<"Student"> | $Enums.StudentStudentGender
    studentStatus?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    brushed?: BrushedListRelationFilter
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    studentGrade?: SortOrder
    studentClass?: SortOrder
    studentNumber?: SortOrder
    studentName?: SortOrder
    studentGender?: SortOrder
    studentStatus?: SortOrder
    createdAt?: SortOrder
    brushed?: BrushedOrderByRelationAggregateInput
    school?: SchoolOrderByWithRelationInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    schoolId?: StringFilter<"Student"> | string
    studentGrade?: IntFilter<"Student"> | number
    studentClass?: StringFilter<"Student"> | string
    studentNumber?: IntFilter<"Student"> | number
    studentName?: StringFilter<"Student"> | string
    studentGender?: EnumStudentStudentGenderFilter<"Student"> | $Enums.StudentStudentGender
    studentStatus?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    brushed?: BrushedListRelationFilter
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "studentId" | "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    studentGrade?: SortOrder
    studentClass?: SortOrder
    studentNumber?: SortOrder
    studentName?: SortOrder
    studentGender?: SortOrder
    studentStatus?: SortOrder
    createdAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    studentId?: StringWithAggregatesFilter<"Student"> | string
    schoolId?: StringWithAggregatesFilter<"Student"> | string
    studentGrade?: IntWithAggregatesFilter<"Student"> | number
    studentClass?: StringWithAggregatesFilter<"Student"> | string
    studentNumber?: IntWithAggregatesFilter<"Student"> | number
    studentName?: StringWithAggregatesFilter<"Student"> | string
    studentGender?: EnumStudentStudentGenderWithAggregatesFilter<"Student"> | $Enums.StudentStudentGender
    studentStatus?: BoolWithAggregatesFilter<"Student"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type BoardCreateInput = {
    content: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
    school: SchoolCreateNestedOneWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    content: string
    schoolId: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
  }

  export type BoardUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateManyInput = {
    id?: number
    content: string
    schoolId: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
  }

  export type BoardUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BrushedCreateInput = {
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
    student: StudentCreateNestedOneWithoutBrushedInput
  }

  export type BrushedUncheckedCreateInput = {
    id?: number
    studentId: string
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
  }

  export type BrushedUpdateInput = {
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
    student?: StudentUpdateOneRequiredWithoutBrushedNestedInput
  }

  export type BrushedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }

  export type BrushedCreateManyInput = {
    id?: number
    studentId: string
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
  }

  export type BrushedUpdateManyMutationInput = {
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }

  export type BrushedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }

  export type ContentsCreateInput = {
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
    school: SchoolCreateNestedOneWithoutContentsInput
  }

  export type ContentsUncheckedCreateInput = {
    id?: number
    schoolId: string
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
  }

  export type ContentsUpdateInput = {
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
    school?: SchoolUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContentsCreateManyInput = {
    id?: number
    schoolId: string
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
  }

  export type ContentsUpdateManyMutationInput = {
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HolidayCreateInput = {
    holidayName: string
    holidayAt: Date | string
    holidayStatus?: boolean
  }

  export type HolidayUncheckedCreateInput = {
    id?: number
    holidayName: string
    holidayAt: Date | string
    holidayStatus?: boolean
  }

  export type HolidayUpdateInput = {
    holidayName?: StringFieldUpdateOperationsInput | string
    holidayAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HolidayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    holidayName?: StringFieldUpdateOperationsInput | string
    holidayAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HolidayCreateManyInput = {
    id?: number
    holidayName: string
    holidayAt: Date | string
    holidayStatus?: boolean
  }

  export type HolidayUpdateManyMutationInput = {
    holidayName?: StringFieldUpdateOperationsInput | string
    holidayAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    holidayName?: StringFieldUpdateOperationsInput | string
    holidayAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulesCreateInput = {
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
    school: SchoolCreateNestedOneWithoutSchedulesInput
  }

  export type SchedulesUncheckedCreateInput = {
    id?: number
    schoolId: string
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
  }

  export type SchedulesUpdateInput = {
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
    school?: SchoolUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type SchedulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulesCreateManyInput = {
    id?: number
    schoolId: string
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
  }

  export type SchedulesUpdateManyMutationInput = {
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchoolCreateInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardCreateNestedManyWithoutSchoolInput
    contents?: ContentsCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesCreateNestedManyWithoutSchoolInput
    student?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardUncheckedCreateNestedManyWithoutSchoolInput
    contents?: ContentsUncheckedCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesUncheckedCreateNestedManyWithoutSchoolInput
    student?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUpdateManyWithoutSchoolNestedInput
    student?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUncheckedUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUncheckedUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUncheckedUpdateManyWithoutSchoolNestedInput
    student?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
  }

  export type SchoolUpdateManyMutationInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: number
    studentId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
    brushed?: BrushedCreateNestedManyWithoutStudentInput
    school: SchoolCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    studentId: string
    schoolId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
    brushed?: BrushedUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushed?: BrushedUpdateManyWithoutStudentNestedInput
    school?: SchoolUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushed?: BrushedUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    studentId: string
    schoolId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumBoardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardStatus | EnumBoardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoardStatus[]
    notIn?: $Enums.BoardStatus[]
    not?: NestedEnumBoardStatusFilter<$PrismaModel> | $Enums.BoardStatus
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoardOrderByRelevanceInput = {
    fields: BoardOrderByRelevanceFieldEnum | BoardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    schoolId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
    title?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    schoolId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
    title?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    schoolId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
    title?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumBoardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardStatus | EnumBoardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoardStatus[]
    notIn?: $Enums.BoardStatus[]
    not?: NestedEnumBoardStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardStatusFilter<$PrismaModel>
    _max?: NestedEnumBoardStatusFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumBrushedBrushedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BrushedBrushedStatus | EnumBrushedBrushedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BrushedBrushedStatus[]
    notIn?: $Enums.BrushedBrushedStatus[]
    not?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel> | $Enums.BrushedBrushedStatus
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type BrushedOrderByRelevanceInput = {
    fields: BrushedOrderByRelevanceFieldEnum | BrushedOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BrushedCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    brushedAt?: SortOrder
    brushedStatus?: SortOrder
  }

  export type BrushedAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrushedMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    brushedAt?: SortOrder
    brushedStatus?: SortOrder
  }

  export type BrushedMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    brushedAt?: SortOrder
    brushedStatus?: SortOrder
  }

  export type BrushedSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBrushedBrushedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BrushedBrushedStatus | EnumBrushedBrushedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BrushedBrushedStatus[]
    notIn?: $Enums.BrushedBrushedStatus[]
    not?: NestedEnumBrushedBrushedStatusWithAggregatesFilter<$PrismaModel> | $Enums.BrushedBrushedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel>
    _max?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ContentsOrderByRelevanceInput = {
    fields: ContentsOrderByRelevanceFieldEnum | ContentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentsCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fileType?: SortOrder
    fileName?: SortOrder
    seq?: SortOrder
    contentsStatus?: SortOrder
    userFileName?: SortOrder
    fileSize?: SortOrder
  }

  export type ContentsAvgOrderByAggregateInput = {
    id?: SortOrder
    seq?: SortOrder
    fileSize?: SortOrder
  }

  export type ContentsMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fileType?: SortOrder
    fileName?: SortOrder
    seq?: SortOrder
    contentsStatus?: SortOrder
    userFileName?: SortOrder
    fileSize?: SortOrder
  }

  export type ContentsMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fileType?: SortOrder
    fileName?: SortOrder
    seq?: SortOrder
    contentsStatus?: SortOrder
    userFileName?: SortOrder
    fileSize?: SortOrder
  }

  export type ContentsSumOrderByAggregateInput = {
    id?: SortOrder
    seq?: SortOrder
    fileSize?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type HolidayOrderByRelevanceInput = {
    fields: HolidayOrderByRelevanceFieldEnum | HolidayOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    holidayName?: SortOrder
    holidayAt?: SortOrder
    holidayStatus?: SortOrder
  }

  export type HolidayAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    holidayName?: SortOrder
    holidayAt?: SortOrder
    holidayStatus?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    holidayName?: SortOrder
    holidayAt?: SortOrder
    holidayStatus?: SortOrder
  }

  export type HolidaySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchedulesOrderByRelevanceInput = {
    fields: SchedulesOrderByRelevanceFieldEnum | SchedulesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchedulesCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    scheduleName?: SortOrder
    scheduleTarget?: SortOrder
    scheduleAt?: SortOrder
    scheduleStatus?: SortOrder
  }

  export type SchedulesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    scheduleName?: SortOrder
    scheduleTarget?: SortOrder
    scheduleAt?: SortOrder
    scheduleStatus?: SortOrder
  }

  export type SchedulesMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    scheduleName?: SortOrder
    scheduleTarget?: SortOrder
    scheduleAt?: SortOrder
    scheduleStatus?: SortOrder
  }

  export type SchedulesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSchoolSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolType | EnumSchoolSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolType[]
    notIn?: $Enums.SchoolSchoolType[]
    not?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel> | $Enums.SchoolSchoolType
  }

  export type EnumSchoolSchoolLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolLevel | EnumSchoolSchoolLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolLevel[]
    notIn?: $Enums.SchoolSchoolLevel[]
    not?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel> | $Enums.SchoolSchoolLevel
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type ContentsListRelationFilter = {
    every?: ContentsWhereInput
    some?: ContentsWhereInput
    none?: ContentsWhereInput
  }

  export type SchedulesListRelationFilter = {
    every?: SchedulesWhereInput
    some?: SchedulesWhereInput
    none?: SchedulesWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolOrderByRelevanceInput = {
    fields: SchoolOrderByRelevanceFieldEnum | SchoolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    teacherPhone?: SortOrder
    schoolLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    schoolType?: SortOrder
    schoolLevel?: SortOrder
    createdAt?: SortOrder
    schoolStatus?: SortOrder
    officeCode?: SortOrder
    schoolCode?: SortOrder
    address?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    teacherPhone?: SortOrder
    schoolLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    schoolType?: SortOrder
    schoolLevel?: SortOrder
    createdAt?: SortOrder
    schoolStatus?: SortOrder
    officeCode?: SortOrder
    schoolCode?: SortOrder
    address?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    teacherPhone?: SortOrder
    schoolLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    schoolType?: SortOrder
    schoolLevel?: SortOrder
    createdAt?: SortOrder
    schoolStatus?: SortOrder
    officeCode?: SortOrder
    schoolCode?: SortOrder
    address?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSchoolSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolType | EnumSchoolSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolType[]
    notIn?: $Enums.SchoolSchoolType[]
    not?: NestedEnumSchoolSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolSchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel>
  }

  export type EnumSchoolSchoolLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolLevel | EnumSchoolSchoolLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolLevel[]
    notIn?: $Enums.SchoolSchoolLevel[]
    not?: NestedEnumSchoolSchoolLevelWithAggregatesFilter<$PrismaModel> | $Enums.SchoolSchoolLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel>
    _max?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel>
  }

  export type EnumStudentStudentGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStudentGender | EnumStudentStudentGenderFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStudentGender[]
    notIn?: $Enums.StudentStudentGender[]
    not?: NestedEnumStudentStudentGenderFilter<$PrismaModel> | $Enums.StudentStudentGender
  }

  export type BrushedListRelationFilter = {
    every?: BrushedWhereInput
    some?: BrushedWhereInput
    none?: BrushedWhereInput
  }

  export type BrushedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    studentGrade?: SortOrder
    studentClass?: SortOrder
    studentNumber?: SortOrder
    studentName?: SortOrder
    studentGender?: SortOrder
    studentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentGrade?: SortOrder
    studentNumber?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    studentGrade?: SortOrder
    studentClass?: SortOrder
    studentNumber?: SortOrder
    studentName?: SortOrder
    studentGender?: SortOrder
    studentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    studentGrade?: SortOrder
    studentClass?: SortOrder
    studentNumber?: SortOrder
    studentName?: SortOrder
    studentGender?: SortOrder
    studentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    studentGrade?: SortOrder
    studentNumber?: SortOrder
  }

  export type EnumStudentStudentGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStudentGender | EnumStudentStudentGenderFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStudentGender[]
    notIn?: $Enums.StudentStudentGender[]
    not?: NestedEnumStudentStudentGenderWithAggregatesFilter<$PrismaModel> | $Enums.StudentStudentGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStudentGenderFilter<$PrismaModel>
    _max?: NestedEnumStudentStudentGenderFilter<$PrismaModel>
  }

  export type SchoolCreateNestedOneWithoutBoardInput = {
    create?: XOR<SchoolCreateWithoutBoardInput, SchoolUncheckedCreateWithoutBoardInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutBoardInput
    connect?: SchoolWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumBoardStatusFieldUpdateOperationsInput = {
    set?: $Enums.BoardStatus
  }

  export type SchoolUpdateOneRequiredWithoutBoardNestedInput = {
    create?: XOR<SchoolCreateWithoutBoardInput, SchoolUncheckedCreateWithoutBoardInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutBoardInput
    upsert?: SchoolUpsertWithoutBoardInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutBoardInput, SchoolUpdateWithoutBoardInput>, SchoolUncheckedUpdateWithoutBoardInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentCreateNestedOneWithoutBrushedInput = {
    create?: XOR<StudentCreateWithoutBrushedInput, StudentUncheckedCreateWithoutBrushedInput>
    connectOrCreate?: StudentCreateOrConnectWithoutBrushedInput
    connect?: StudentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumBrushedBrushedStatusFieldUpdateOperationsInput = {
    set?: $Enums.BrushedBrushedStatus
  }

  export type StudentUpdateOneRequiredWithoutBrushedNestedInput = {
    create?: XOR<StudentCreateWithoutBrushedInput, StudentUncheckedCreateWithoutBrushedInput>
    connectOrCreate?: StudentCreateOrConnectWithoutBrushedInput
    upsert?: StudentUpsertWithoutBrushedInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutBrushedInput, StudentUpdateWithoutBrushedInput>, StudentUncheckedUpdateWithoutBrushedInput>
  }

  export type SchoolCreateNestedOneWithoutContentsInput = {
    create?: XOR<SchoolCreateWithoutContentsInput, SchoolUncheckedCreateWithoutContentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutContentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<SchoolCreateWithoutContentsInput, SchoolUncheckedCreateWithoutContentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutContentsInput
    upsert?: SchoolUpsertWithoutContentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutContentsInput, SchoolUpdateWithoutContentsInput>, SchoolUncheckedUpdateWithoutContentsInput>
  }

  export type SchoolCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<SchoolCreateWithoutSchedulesInput, SchoolUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchedulesInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<SchoolCreateWithoutSchedulesInput, SchoolUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchedulesInput
    upsert?: SchoolUpsertWithoutSchedulesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSchedulesInput, SchoolUpdateWithoutSchedulesInput>, SchoolUncheckedUpdateWithoutSchedulesInput>
  }

  export type BoardCreateNestedManyWithoutSchoolInput = {
    create?: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput> | BoardCreateWithoutSchoolInput[] | BoardUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutSchoolInput | BoardCreateOrConnectWithoutSchoolInput[]
    createMany?: BoardCreateManySchoolInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type ContentsCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput> | ContentsCreateWithoutSchoolInput[] | ContentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ContentsCreateOrConnectWithoutSchoolInput | ContentsCreateOrConnectWithoutSchoolInput[]
    createMany?: ContentsCreateManySchoolInputEnvelope
    connect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
  }

  export type SchedulesCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput> | SchedulesCreateWithoutSchoolInput[] | SchedulesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchedulesCreateOrConnectWithoutSchoolInput | SchedulesCreateOrConnectWithoutSchoolInput[]
    createMany?: SchedulesCreateManySchoolInputEnvelope
    connect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput> | BoardCreateWithoutSchoolInput[] | BoardUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutSchoolInput | BoardCreateOrConnectWithoutSchoolInput[]
    createMany?: BoardCreateManySchoolInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type ContentsUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput> | ContentsCreateWithoutSchoolInput[] | ContentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ContentsCreateOrConnectWithoutSchoolInput | ContentsCreateOrConnectWithoutSchoolInput[]
    createMany?: ContentsCreateManySchoolInputEnvelope
    connect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
  }

  export type SchedulesUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput> | SchedulesCreateWithoutSchoolInput[] | SchedulesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchedulesCreateOrConnectWithoutSchoolInput | SchedulesCreateOrConnectWithoutSchoolInput[]
    createMany?: SchedulesCreateManySchoolInputEnvelope
    connect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumSchoolSchoolTypeFieldUpdateOperationsInput = {
    set?: $Enums.SchoolSchoolType
  }

  export type EnumSchoolSchoolLevelFieldUpdateOperationsInput = {
    set?: $Enums.SchoolSchoolLevel
  }

  export type BoardUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput> | BoardCreateWithoutSchoolInput[] | BoardUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutSchoolInput | BoardCreateOrConnectWithoutSchoolInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutSchoolInput | BoardUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: BoardCreateManySchoolInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutSchoolInput | BoardUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutSchoolInput | BoardUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type ContentsUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput> | ContentsCreateWithoutSchoolInput[] | ContentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ContentsCreateOrConnectWithoutSchoolInput | ContentsCreateOrConnectWithoutSchoolInput[]
    upsert?: ContentsUpsertWithWhereUniqueWithoutSchoolInput | ContentsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ContentsCreateManySchoolInputEnvelope
    set?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    disconnect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    delete?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    connect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    update?: ContentsUpdateWithWhereUniqueWithoutSchoolInput | ContentsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ContentsUpdateManyWithWhereWithoutSchoolInput | ContentsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ContentsScalarWhereInput | ContentsScalarWhereInput[]
  }

  export type SchedulesUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput> | SchedulesCreateWithoutSchoolInput[] | SchedulesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchedulesCreateOrConnectWithoutSchoolInput | SchedulesCreateOrConnectWithoutSchoolInput[]
    upsert?: SchedulesUpsertWithWhereUniqueWithoutSchoolInput | SchedulesUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchedulesCreateManySchoolInputEnvelope
    set?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    disconnect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    delete?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    connect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    update?: SchedulesUpdateWithWhereUniqueWithoutSchoolInput | SchedulesUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchedulesUpdateManyWithWhereWithoutSchoolInput | SchedulesUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchedulesScalarWhereInput | SchedulesScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput> | BoardCreateWithoutSchoolInput[] | BoardUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutSchoolInput | BoardCreateOrConnectWithoutSchoolInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutSchoolInput | BoardUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: BoardCreateManySchoolInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutSchoolInput | BoardUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutSchoolInput | BoardUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type ContentsUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput> | ContentsCreateWithoutSchoolInput[] | ContentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ContentsCreateOrConnectWithoutSchoolInput | ContentsCreateOrConnectWithoutSchoolInput[]
    upsert?: ContentsUpsertWithWhereUniqueWithoutSchoolInput | ContentsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ContentsCreateManySchoolInputEnvelope
    set?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    disconnect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    delete?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    connect?: ContentsWhereUniqueInput | ContentsWhereUniqueInput[]
    update?: ContentsUpdateWithWhereUniqueWithoutSchoolInput | ContentsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ContentsUpdateManyWithWhereWithoutSchoolInput | ContentsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ContentsScalarWhereInput | ContentsScalarWhereInput[]
  }

  export type SchedulesUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput> | SchedulesCreateWithoutSchoolInput[] | SchedulesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchedulesCreateOrConnectWithoutSchoolInput | SchedulesCreateOrConnectWithoutSchoolInput[]
    upsert?: SchedulesUpsertWithWhereUniqueWithoutSchoolInput | SchedulesUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchedulesCreateManySchoolInputEnvelope
    set?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    disconnect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    delete?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    connect?: SchedulesWhereUniqueInput | SchedulesWhereUniqueInput[]
    update?: SchedulesUpdateWithWhereUniqueWithoutSchoolInput | SchedulesUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchedulesUpdateManyWithWhereWithoutSchoolInput | SchedulesUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchedulesScalarWhereInput | SchedulesScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type BrushedCreateNestedManyWithoutStudentInput = {
    create?: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput> | BrushedCreateWithoutStudentInput[] | BrushedUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BrushedCreateOrConnectWithoutStudentInput | BrushedCreateOrConnectWithoutStudentInput[]
    createMany?: BrushedCreateManyStudentInputEnvelope
    connect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
  }

  export type SchoolCreateNestedOneWithoutStudentInput = {
    create?: XOR<SchoolCreateWithoutStudentInput, SchoolUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentInput
    connect?: SchoolWhereUniqueInput
  }

  export type BrushedUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput> | BrushedCreateWithoutStudentInput[] | BrushedUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BrushedCreateOrConnectWithoutStudentInput | BrushedCreateOrConnectWithoutStudentInput[]
    createMany?: BrushedCreateManyStudentInputEnvelope
    connect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
  }

  export type EnumStudentStudentGenderFieldUpdateOperationsInput = {
    set?: $Enums.StudentStudentGender
  }

  export type BrushedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput> | BrushedCreateWithoutStudentInput[] | BrushedUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BrushedCreateOrConnectWithoutStudentInput | BrushedCreateOrConnectWithoutStudentInput[]
    upsert?: BrushedUpsertWithWhereUniqueWithoutStudentInput | BrushedUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BrushedCreateManyStudentInputEnvelope
    set?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    disconnect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    delete?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    connect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    update?: BrushedUpdateWithWhereUniqueWithoutStudentInput | BrushedUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BrushedUpdateManyWithWhereWithoutStudentInput | BrushedUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BrushedScalarWhereInput | BrushedScalarWhereInput[]
  }

  export type SchoolUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentInput, SchoolUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentInput
    upsert?: SchoolUpsertWithoutStudentInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentInput, SchoolUpdateWithoutStudentInput>, SchoolUncheckedUpdateWithoutStudentInput>
  }

  export type BrushedUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput> | BrushedCreateWithoutStudentInput[] | BrushedUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BrushedCreateOrConnectWithoutStudentInput | BrushedCreateOrConnectWithoutStudentInput[]
    upsert?: BrushedUpsertWithWhereUniqueWithoutStudentInput | BrushedUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BrushedCreateManyStudentInputEnvelope
    set?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    disconnect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    delete?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    connect?: BrushedWhereUniqueInput | BrushedWhereUniqueInput[]
    update?: BrushedUpdateWithWhereUniqueWithoutStudentInput | BrushedUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BrushedUpdateManyWithWhereWithoutStudentInput | BrushedUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BrushedScalarWhereInput | BrushedScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBoardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardStatus | EnumBoardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoardStatus[]
    notIn?: $Enums.BoardStatus[]
    not?: NestedEnumBoardStatusFilter<$PrismaModel> | $Enums.BoardStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBoardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardStatus | EnumBoardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoardStatus[]
    notIn?: $Enums.BoardStatus[]
    not?: NestedEnumBoardStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardStatusFilter<$PrismaModel>
    _max?: NestedEnumBoardStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumBrushedBrushedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BrushedBrushedStatus | EnumBrushedBrushedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BrushedBrushedStatus[]
    notIn?: $Enums.BrushedBrushedStatus[]
    not?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel> | $Enums.BrushedBrushedStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBrushedBrushedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BrushedBrushedStatus | EnumBrushedBrushedStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BrushedBrushedStatus[]
    notIn?: $Enums.BrushedBrushedStatus[]
    not?: NestedEnumBrushedBrushedStatusWithAggregatesFilter<$PrismaModel> | $Enums.BrushedBrushedStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel>
    _max?: NestedEnumBrushedBrushedStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSchoolSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolType | EnumSchoolSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolType[]
    notIn?: $Enums.SchoolSchoolType[]
    not?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel> | $Enums.SchoolSchoolType
  }

  export type NestedEnumSchoolSchoolLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolLevel | EnumSchoolSchoolLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolLevel[]
    notIn?: $Enums.SchoolSchoolLevel[]
    not?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel> | $Enums.SchoolSchoolLevel
  }

  export type NestedEnumSchoolSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolType | EnumSchoolSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolType[]
    notIn?: $Enums.SchoolSchoolType[]
    not?: NestedEnumSchoolSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolSchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolSchoolTypeFilter<$PrismaModel>
  }

  export type NestedEnumSchoolSchoolLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolSchoolLevel | EnumSchoolSchoolLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolSchoolLevel[]
    notIn?: $Enums.SchoolSchoolLevel[]
    not?: NestedEnumSchoolSchoolLevelWithAggregatesFilter<$PrismaModel> | $Enums.SchoolSchoolLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel>
    _max?: NestedEnumSchoolSchoolLevelFilter<$PrismaModel>
  }

  export type NestedEnumStudentStudentGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStudentGender | EnumStudentStudentGenderFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStudentGender[]
    notIn?: $Enums.StudentStudentGender[]
    not?: NestedEnumStudentStudentGenderFilter<$PrismaModel> | $Enums.StudentStudentGender
  }

  export type NestedEnumStudentStudentGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStudentGender | EnumStudentStudentGenderFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStudentGender[]
    notIn?: $Enums.StudentStudentGender[]
    not?: NestedEnumStudentStudentGenderWithAggregatesFilter<$PrismaModel> | $Enums.StudentStudentGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStudentGenderFilter<$PrismaModel>
    _max?: NestedEnumStudentStudentGenderFilter<$PrismaModel>
  }

  export type SchoolCreateWithoutBoardInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    contents?: ContentsCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesCreateNestedManyWithoutSchoolInput
    student?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutBoardInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    contents?: ContentsUncheckedCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesUncheckedCreateNestedManyWithoutSchoolInput
    student?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutBoardInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutBoardInput, SchoolUncheckedCreateWithoutBoardInput>
  }

  export type SchoolUpsertWithoutBoardInput = {
    update: XOR<SchoolUpdateWithoutBoardInput, SchoolUncheckedUpdateWithoutBoardInput>
    create: XOR<SchoolCreateWithoutBoardInput, SchoolUncheckedCreateWithoutBoardInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutBoardInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutBoardInput, SchoolUncheckedUpdateWithoutBoardInput>
  }

  export type SchoolUpdateWithoutBoardInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contents?: ContentsUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUpdateManyWithoutSchoolNestedInput
    student?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contents?: ContentsUncheckedUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUncheckedUpdateManyWithoutSchoolNestedInput
    student?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type StudentCreateWithoutBrushedInput = {
    id?: number
    studentId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBrushedInput = {
    id?: number
    studentId: string
    schoolId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutBrushedInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBrushedInput, StudentUncheckedCreateWithoutBrushedInput>
  }

  export type StudentUpsertWithoutBrushedInput = {
    update: XOR<StudentUpdateWithoutBrushedInput, StudentUncheckedUpdateWithoutBrushedInput>
    create: XOR<StudentCreateWithoutBrushedInput, StudentUncheckedCreateWithoutBrushedInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutBrushedInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutBrushedInput, StudentUncheckedUpdateWithoutBrushedInput>
  }

  export type StudentUpdateWithoutBrushedInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBrushedInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateWithoutContentsInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesCreateNestedManyWithoutSchoolInput
    student?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutContentsInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardUncheckedCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesUncheckedCreateNestedManyWithoutSchoolInput
    student?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutContentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutContentsInput, SchoolUncheckedCreateWithoutContentsInput>
  }

  export type SchoolUpsertWithoutContentsInput = {
    update: XOR<SchoolUpdateWithoutContentsInput, SchoolUncheckedUpdateWithoutContentsInput>
    create: XOR<SchoolCreateWithoutContentsInput, SchoolUncheckedCreateWithoutContentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutContentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutContentsInput, SchoolUncheckedUpdateWithoutContentsInput>
  }

  export type SchoolUpdateWithoutContentsInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUpdateManyWithoutSchoolNestedInput
    student?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUncheckedUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUncheckedUpdateManyWithoutSchoolNestedInput
    student?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutSchedulesInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardCreateNestedManyWithoutSchoolInput
    contents?: ContentsCreateNestedManyWithoutSchoolInput
    student?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSchedulesInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardUncheckedCreateNestedManyWithoutSchoolInput
    contents?: ContentsUncheckedCreateNestedManyWithoutSchoolInput
    student?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSchedulesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSchedulesInput, SchoolUncheckedCreateWithoutSchedulesInput>
  }

  export type SchoolUpsertWithoutSchedulesInput = {
    update: XOR<SchoolUpdateWithoutSchedulesInput, SchoolUncheckedUpdateWithoutSchedulesInput>
    create: XOR<SchoolCreateWithoutSchedulesInput, SchoolUncheckedCreateWithoutSchedulesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSchedulesInput, SchoolUncheckedUpdateWithoutSchedulesInput>
  }

  export type SchoolUpdateWithoutSchedulesInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUpdateManyWithoutSchoolNestedInput
    student?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUncheckedUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUncheckedUpdateManyWithoutSchoolNestedInput
    student?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type BoardCreateWithoutSchoolInput = {
    content: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
  }

  export type BoardUncheckedCreateWithoutSchoolInput = {
    id?: number
    content: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
  }

  export type BoardCreateOrConnectWithoutSchoolInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput>
  }

  export type BoardCreateManySchoolInputEnvelope = {
    data: BoardCreateManySchoolInput | BoardCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ContentsCreateWithoutSchoolInput = {
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
  }

  export type ContentsUncheckedCreateWithoutSchoolInput = {
    id?: number
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
  }

  export type ContentsCreateOrConnectWithoutSchoolInput = {
    where: ContentsWhereUniqueInput
    create: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput>
  }

  export type ContentsCreateManySchoolInputEnvelope = {
    data: ContentsCreateManySchoolInput | ContentsCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchedulesCreateWithoutSchoolInput = {
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
  }

  export type SchedulesUncheckedCreateWithoutSchoolInput = {
    id?: number
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
  }

  export type SchedulesCreateOrConnectWithoutSchoolInput = {
    where: SchedulesWhereUniqueInput
    create: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput>
  }

  export type SchedulesCreateManySchoolInputEnvelope = {
    data: SchedulesCreateManySchoolInput | SchedulesCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutSchoolInput = {
    id?: number
    studentId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
    brushed?: BrushedCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: number
    studentId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
    brushed?: BrushedUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: StudentCreateManySchoolInput | StudentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutSchoolInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutSchoolInput, BoardUncheckedUpdateWithoutSchoolInput>
    create: XOR<BoardCreateWithoutSchoolInput, BoardUncheckedCreateWithoutSchoolInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutSchoolInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutSchoolInput, BoardUncheckedUpdateWithoutSchoolInput>
  }

  export type BoardUpdateManyWithWhereWithoutSchoolInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutSchoolInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: IntFilter<"Board"> | number
    content?: StringFilter<"Board"> | string
    schoolId?: StringFilter<"Board"> | string
    comment?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    status?: EnumBoardStatusFilter<"Board"> | $Enums.BoardStatus
    title?: StringFilter<"Board"> | string
  }

  export type ContentsUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ContentsWhereUniqueInput
    update: XOR<ContentsUpdateWithoutSchoolInput, ContentsUncheckedUpdateWithoutSchoolInput>
    create: XOR<ContentsCreateWithoutSchoolInput, ContentsUncheckedCreateWithoutSchoolInput>
  }

  export type ContentsUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ContentsWhereUniqueInput
    data: XOR<ContentsUpdateWithoutSchoolInput, ContentsUncheckedUpdateWithoutSchoolInput>
  }

  export type ContentsUpdateManyWithWhereWithoutSchoolInput = {
    where: ContentsScalarWhereInput
    data: XOR<ContentsUpdateManyMutationInput, ContentsUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ContentsScalarWhereInput = {
    AND?: ContentsScalarWhereInput | ContentsScalarWhereInput[]
    OR?: ContentsScalarWhereInput[]
    NOT?: ContentsScalarWhereInput | ContentsScalarWhereInput[]
    id?: IntFilter<"Contents"> | number
    schoolId?: StringFilter<"Contents"> | string
    fileType?: StringFilter<"Contents"> | string
    fileName?: StringFilter<"Contents"> | string
    seq?: IntFilter<"Contents"> | number
    contentsStatus?: BoolFilter<"Contents"> | boolean
    userFileName?: StringNullableFilter<"Contents"> | string | null
    fileSize?: FloatNullableFilter<"Contents"> | number | null
  }

  export type SchedulesUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchedulesWhereUniqueInput
    update: XOR<SchedulesUpdateWithoutSchoolInput, SchedulesUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchedulesCreateWithoutSchoolInput, SchedulesUncheckedCreateWithoutSchoolInput>
  }

  export type SchedulesUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchedulesWhereUniqueInput
    data: XOR<SchedulesUpdateWithoutSchoolInput, SchedulesUncheckedUpdateWithoutSchoolInput>
  }

  export type SchedulesUpdateManyWithWhereWithoutSchoolInput = {
    where: SchedulesScalarWhereInput
    data: XOR<SchedulesUpdateManyMutationInput, SchedulesUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchedulesScalarWhereInput = {
    AND?: SchedulesScalarWhereInput | SchedulesScalarWhereInput[]
    OR?: SchedulesScalarWhereInput[]
    NOT?: SchedulesScalarWhereInput | SchedulesScalarWhereInput[]
    id?: IntFilter<"Schedules"> | number
    schoolId?: StringFilter<"Schedules"> | string
    scheduleName?: StringFilter<"Schedules"> | string
    scheduleTarget?: StringFilter<"Schedules"> | string
    scheduleAt?: DateTimeFilter<"Schedules"> | Date | string
    scheduleStatus?: BoolFilter<"Schedules"> | boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    studentId?: StringFilter<"Student"> | string
    schoolId?: StringFilter<"Student"> | string
    studentGrade?: IntFilter<"Student"> | number
    studentClass?: StringFilter<"Student"> | string
    studentNumber?: IntFilter<"Student"> | number
    studentName?: StringFilter<"Student"> | string
    studentGender?: EnumStudentStudentGenderFilter<"Student"> | $Enums.StudentStudentGender
    studentStatus?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type BrushedCreateWithoutStudentInput = {
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
  }

  export type BrushedUncheckedCreateWithoutStudentInput = {
    id?: number
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
  }

  export type BrushedCreateOrConnectWithoutStudentInput = {
    where: BrushedWhereUniqueInput
    create: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput>
  }

  export type BrushedCreateManyStudentInputEnvelope = {
    data: BrushedCreateManyStudentInput | BrushedCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolCreateWithoutStudentInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardCreateNestedManyWithoutSchoolInput
    contents?: ContentsCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentInput = {
    id?: number
    schoolId: string
    schoolName: string
    loginId: string
    loginPw: string
    teacherName: string
    teacherEmail: string
    teacherPhone: string
    schoolLogo?: string | null
    startAt?: Date | string
    endAt: Date | string
    schoolType?: $Enums.SchoolSchoolType
    schoolLevel?: $Enums.SchoolSchoolLevel
    createdAt?: Date | string
    schoolStatus?: boolean
    officeCode: string
    schoolCode: string
    address: string
    board?: BoardUncheckedCreateNestedManyWithoutSchoolInput
    contents?: ContentsUncheckedCreateNestedManyWithoutSchoolInput
    schedules?: SchedulesUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentInput, SchoolUncheckedCreateWithoutStudentInput>
  }

  export type BrushedUpsertWithWhereUniqueWithoutStudentInput = {
    where: BrushedWhereUniqueInput
    update: XOR<BrushedUpdateWithoutStudentInput, BrushedUncheckedUpdateWithoutStudentInput>
    create: XOR<BrushedCreateWithoutStudentInput, BrushedUncheckedCreateWithoutStudentInput>
  }

  export type BrushedUpdateWithWhereUniqueWithoutStudentInput = {
    where: BrushedWhereUniqueInput
    data: XOR<BrushedUpdateWithoutStudentInput, BrushedUncheckedUpdateWithoutStudentInput>
  }

  export type BrushedUpdateManyWithWhereWithoutStudentInput = {
    where: BrushedScalarWhereInput
    data: XOR<BrushedUpdateManyMutationInput, BrushedUncheckedUpdateManyWithoutStudentInput>
  }

  export type BrushedScalarWhereInput = {
    AND?: BrushedScalarWhereInput | BrushedScalarWhereInput[]
    OR?: BrushedScalarWhereInput[]
    NOT?: BrushedScalarWhereInput | BrushedScalarWhereInput[]
    id?: IntFilter<"Brushed"> | number
    studentId?: StringFilter<"Brushed"> | string
    brushedAt?: DateTimeFilter<"Brushed"> | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFilter<"Brushed"> | $Enums.BrushedBrushedStatus
  }

  export type SchoolUpsertWithoutStudentInput = {
    update: XOR<SchoolUpdateWithoutStudentInput, SchoolUncheckedUpdateWithoutStudentInput>
    create: XOR<SchoolCreateWithoutStudentInput, SchoolUncheckedCreateWithoutStudentInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentInput, SchoolUncheckedUpdateWithoutStudentInput>
  }

  export type SchoolUpdateWithoutStudentInput = {
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    teacherPhone?: StringFieldUpdateOperationsInput | string
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolType?: EnumSchoolSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolSchoolType
    schoolLevel?: EnumSchoolSchoolLevelFieldUpdateOperationsInput | $Enums.SchoolSchoolLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolStatus?: BoolFieldUpdateOperationsInput | boolean
    officeCode?: StringFieldUpdateOperationsInput | string
    schoolCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    board?: BoardUncheckedUpdateManyWithoutSchoolNestedInput
    contents?: ContentsUncheckedUpdateManyWithoutSchoolNestedInput
    schedules?: SchedulesUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type BoardCreateManySchoolInput = {
    id?: number
    content: string
    comment?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    status?: $Enums.BoardStatus
    title: string
  }

  export type ContentsCreateManySchoolInput = {
    id?: number
    fileType: string
    fileName: string
    seq: number
    contentsStatus?: boolean
    userFileName?: string | null
    fileSize?: number | null
  }

  export type SchedulesCreateManySchoolInput = {
    id?: number
    scheduleName: string
    scheduleTarget: string
    scheduleAt: Date | string
    scheduleStatus?: boolean
  }

  export type StudentCreateManySchoolInput = {
    id?: number
    studentId: string
    studentGrade: number
    studentClass: string
    studentNumber: number
    studentName: string
    studentGender: $Enums.StudentStudentGender
    studentStatus?: boolean
    createdAt?: Date | string
  }

  export type BoardUpdateWithoutSchoolInput = {
    content?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumBoardStatusFieldUpdateOperationsInput | $Enums.BoardStatus
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ContentsUpdateWithoutSchoolInput = {
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContentsUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ContentsUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    seq?: IntFieldUpdateOperationsInput | number
    contentsStatus?: BoolFieldUpdateOperationsInput | boolean
    userFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SchedulesUpdateWithoutSchoolInput = {
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulesUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulesUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleName?: StringFieldUpdateOperationsInput | string
    scheduleTarget?: StringFieldUpdateOperationsInput | string
    scheduleAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUpdateWithoutSchoolInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushed?: BrushedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushed?: BrushedUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentGrade?: IntFieldUpdateOperationsInput | number
    studentClass?: StringFieldUpdateOperationsInput | string
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    studentGender?: EnumStudentStudentGenderFieldUpdateOperationsInput | $Enums.StudentStudentGender
    studentStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrushedCreateManyStudentInput = {
    id?: number
    brushedAt?: Date | string
    brushedStatus: $Enums.BrushedBrushedStatus
  }

  export type BrushedUpdateWithoutStudentInput = {
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }

  export type BrushedUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }

  export type BrushedUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    brushedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brushedStatus?: EnumBrushedBrushedStatusFieldUpdateOperationsInput | $Enums.BrushedBrushedStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
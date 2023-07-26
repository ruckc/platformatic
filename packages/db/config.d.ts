/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CrudOperationAuth =
  | {
      /**
       * checks for the operation
       */
      checks?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      /**
       * array of enabled field for the operation
       */
      fields?: string[];
    }
  | boolean;

export interface PlatformaticDB {
  server: {
    hostname: string;
    port: number | string;
    pluginTimeout?: number;
    healthCheck?:
      | boolean
      | {
          enabled?: boolean;
          interval?: number;
          [k: string]: unknown;
        };
    ignoreTrailingSlash?: boolean;
    ignoreDuplicateSlashes?: boolean;
    connectionTimeout?: number;
    keepAliveTimeout?: number;
    maxRequestsPerSocket?: number;
    forceCloseConnections?: boolean | string;
    requestTimeout?: number;
    bodyLimit?: number;
    maxParamLength?: number;
    disableRequestLogging?: boolean;
    exposeHeadRoutes?: boolean;
    logger?:
      | boolean
      | {
          level?: string;
          [k: string]: unknown;
        };
    serializerOpts?: {
      schema?: {
        [k: string]: unknown;
      };
      ajv?: {
        [k: string]: unknown;
      };
      rounding?: "floor" | "ceil" | "round" | "trunc";
      debugMode?: boolean;
      mode?: "debug" | "standalone";
      largeArraySize?: number | string;
      largeArrayMechanism?: "default" | "json-stringify";
      [k: string]: unknown;
    };
    caseSensitive?: boolean;
    requestIdHeader?: string | false;
    requestIdLogLabel?: string;
    jsonShorthand?: boolean;
    trustProxy?: boolean | string | string[] | number;
    https?: {
      key:
        | string
        | {
            path?: string;
          }
        | (
            | string
            | {
                path?: string;
              }
          )[];
      cert:
        | string
        | {
            path?: string;
          }
        | (
            | string
            | {
                path?: string;
              }
          )[];
      requestCert?: boolean;
      rejectUnauthorized?: boolean;
    };
    cors?: {
      origin?:
        | boolean
        | string
        | (
            | string
            | {
                regexp: string;
                [k: string]: unknown;
              }
          )[]
        | {
            regexp: string;
            [k: string]: unknown;
          };
      methods?: string[];
      /**
       * Comma separated string of allowed headers.
       */
      allowedHeaders?: string;
      exposedHeaders?: string[] | string;
      credentials?: boolean;
      maxAge?: number;
      preflightContinue?: boolean;
      optionsSuccessStatus?: number;
      preflight?: boolean;
      strictPreflight?: boolean;
      hideOptionsRoute?: boolean;
    };
    [k: string]: unknown;
  };
  db: {
    connectionString: string;
    schema?: string[];
    schemalock?:
      | boolean
      | {
          path?: string;
          [k: string]: unknown;
        };
    poolSize?: number;
    autoTimestamp?:
      | {
          createdAt?: string;
          updatedAt?: string;
          [k: string]: unknown;
        }
      | boolean;
    graphql?:
      | boolean
      | {
          graphiql?: boolean;
          ignore?: {
            [k: string]: boolean;
          };
          subscriptionIgnore?: string[];
          schema?: string;
          schemaPath?: string;
          [k: string]: unknown;
        };
    openapi?:
      | boolean
      | {
          info?: Info;
          jsonSchemaDialect?: string;
          servers?: Server[];
          paths?: Paths;
          webhooks?: {
            [k: string]: PathItemOrReference;
          };
          components?: Components;
          security?: SecurityRequirement[];
          tags?: Tag[];
          externalDocs?: ExternalDocumentation;
          /**
           * Base URL for the OpenAPI
           */
          prefix?: string;
          ignore?: {
            [k: string]: boolean;
          };
        };
    ignore?: {
      [k: string]: boolean;
    };
    limit?: {
      default?: number;
      max?: number;
      [k: string]: unknown;
    };
    events?:
      | boolean
      | {
          connectionString?: string;
        };
    [k: string]: unknown;
  };
  dashboard?:
    | boolean
    | {
        /**
         * The path where the dashboard should be served.
         */
        path?: string;
      };
  authorization?: {
    /**
     * The password should be used to login dashboard and to access routes under /_admin prefix and for admin access to REST and GraphQL endpoints with X-PLATFORMATIC-ADMIN-SECRET header.
     */
    adminSecret?: string;
    /**
     * The user metadata key to store user roles
     */
    roleKey?: string;
    /**
     * The role name for anonymous users
     */
    anonymousRole?: string;
    jwt?: {
      secret?:
        | string
        | {
            [k: string]: unknown;
          };
      /**
       * the namespace for JWT custom claims
       */
      namespace?: string;
      jwks?:
        | boolean
        | {
            [k: string]: unknown;
          };
      [k: string]: unknown;
    };
    webhook?: {
      /**
       * the webhook url
       */
      url?: string;
    };
    rules?: (
      | {
          /**
           * the DB entity type to which the rule applies
           */
          entity?: string;
          /**
           * the role name to match the rule
           */
          role: string;
          /**
           * defaults for entity creation
           */
          defaults?: {
            [k: string]: string;
          };
          find?: CrudOperationAuth;
          save?: CrudOperationAuth;
          delete?: CrudOperationAuth;
        }
      | {
          /**
           * the DB entity types to which the rule applies
           */
          entities?: string[];
          /**
           * the role name to match the rule
           */
          role: string;
          /**
           * defaults for entity creation
           */
          defaults?: {
            [k: string]: string;
          };
          find?: CrudOperationAuth;
          save?: CrudOperationAuth;
          delete?: CrudOperationAuth;
        }
    )[];
  };
  migrations?: {
    /**
     * The path to the directory containing the migrations.
     */
    dir: string;
    table?: string;
    validateChecksums?: boolean;
    /**
     * Whether to automatically apply migrations when running the migrate command.
     */
    autoApply?: boolean;
  };
  metrics?:
    | boolean
    | {
        port?: number | string;
        hostname?: string;
        auth?: {
          username: string;
          password: string;
        };
      };
  types?: {
    autogenerate?: boolean;
    /**
     * The path to the directory the types should be generated in.
     */
    dir?: string;
  };
  plugins?: Plugins;
  clients?: {
    serviceId?: string;
    name?: string;
    type?: "openapi" | "graphql";
    path?: string;
    schema?: string;
    url?: string;
  }[];
  watch?:
    | {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
        ignore?: string[];
      }
    | boolean;
  $schema?: string;
}
export interface Info {
  title: string;
  summary?: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface Contact {
  name?: string;
  url?: string;
  email?: string;
  /**
   * This interface was referenced by `Contact`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface License {
  name: string;
  identifier?: string;
  url?: string;
  /**
   * This interface was referenced by `License`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface Server {
  url: string;
  description?: string;
  variables?: {
    [k: string]: ServerVariable;
  };
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface ServerVariable {
  /**
   * @minItems 1
   */
  enum?: [string, ...string[]];
  default: string;
  description?: string;
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface Paths {
  [k: string]: PathItem;
}
/**
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^/".
 */
export interface PathItem {
  summary?: string;
  description?: string;
  servers?: Server[];
  parameters?: ParameterOrReference[];
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  /**
   * This interface was referenced by `PathItem`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface ParameterOrReference {
  [k: string]: unknown;
}
export interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: ParameterOrReference[];
  requestBody?: RequestBodyOrReference;
  responses?: Responses;
  callbacks?: {
    [k: string]: CallbacksOrReference;
  };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
  /**
   * This interface was referenced by `Operation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface ExternalDocumentation {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `ExternalDocumentation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface RequestBodyOrReference {
  [k: string]: unknown;
}
export interface Responses {
  [k: string]: ResponseOrReference;
}
export interface ResponseOrReference {
  [k: string]: unknown;
}
export interface CallbacksOrReference {
  [k: string]: unknown;
}
export interface SecurityRequirement {
  [k: string]: string[];
}
export interface PathItemOrReference {
  [k: string]: unknown;
}
export interface Components {
  schemas?: {
    [k: string]: unknown;
  };
  responses?: {
    [k: string]: ResponseOrReference;
  };
  parameters?: {
    [k: string]: ParameterOrReference;
  };
  examples?: {
    [k: string]: ExampleOrReference;
  };
  requestBodies?: {
    [k: string]: RequestBodyOrReference;
  };
  headers?: {
    [k: string]: HeaderOrReference;
  };
  securitySchemes?: {
    [k: string]: SecuritySchemeOrReference;
  };
  links?: {
    [k: string]: LinkOrReference;
  };
  callbacks?: {
    [k: string]: CallbacksOrReference;
  };
  pathItems?: {
    [k: string]: PathItemOrReference;
  };
  /**
   * This interface was referenced by `Components`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface ExampleOrReference {
  [k: string]: unknown;
}
export interface HeaderOrReference {
  [k: string]: unknown;
}
export interface SecuritySchemeOrReference {
  [k: string]: unknown;
}
export interface LinkOrReference {
  [k: string]: unknown;
}
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  /**
   * This interface was referenced by `Tag`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
export interface Plugins {
  paths: (
    | string
    | {
        path?: string;
        encapsulate?: boolean;
        maxDepth?: number;
        options?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }
  )[];
  stopTimeout?: number;
  typescript?:
    | {
        enabled?: boolean | string;
        tsConfig?: string;
        outDir?: string;
        flags?: string[];
        [k: string]: unknown;
      }
    | boolean
    | string;
}

import type { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import type { DeepRequired } from 'ts-essentials'

import type {
  CustomPreviewButton,
  CustomPublishButton,
  CustomSaveButton,
  CustomSaveDraftButton,
} from '../../admin/types.js'
import type {
  Access,
  EditConfig,
  Endpoint,
  EntityDescription,
  EntityDescriptionComponent,
  GeneratePreviewURL,
  LivePreviewConfig,
  MetaConfig,
} from '../../config/types.js'
import type { DBIdentifierName } from '../../database/types.js'
import type { Field } from '../../fields/config/types.js'
import type { GlobalSlug, TypedGlobal, TypedGlobalSelect } from '../../index.js'
import type { PayloadRequest, RequestContext, Where } from '../../types/index.js'
import type { IncomingGlobalVersions, SanitizedGlobalVersions } from '../../versions/types.js'

export type DataFromGlobalSlug<TSlug extends GlobalSlug> = TypedGlobal[TSlug]

export type SelectFromGlobalSlug<TSlug extends GlobalSlug> = TypedGlobalSelect[TSlug]

export type BeforeValidateHook = (args: {
  context: RequestContext
  data?: any
  /** The global which this hook is being run on */
  global: SanitizedGlobalConfig
  originalDoc?: any
  req: PayloadRequest
}) => any

export type BeforeChangeHook = (args: {
  context: RequestContext
  data: any
  /** The global which this hook is being run on */
  global: SanitizedGlobalConfig
  originalDoc?: any
  req: PayloadRequest
}) => any

export type AfterChangeHook = (args: {
  context: RequestContext
  doc: any
  /** The global which this hook is being run on */
  global: SanitizedGlobalConfig
  previousDoc: any
  req: PayloadRequest
}) => any

export type BeforeReadHook = (args: {
  context: RequestContext
  doc: any
  /** The global which this hook is being run on */
  global: SanitizedGlobalConfig
  req: PayloadRequest
}) => any

export type AfterReadHook = (args: {
  context: RequestContext
  doc: any
  findMany?: boolean
  /** The global which this hook is being run on */
  global: SanitizedGlobalConfig
  query?: Where
  req: PayloadRequest
}) => any

export type GlobalAdminOptions = {
  /**
   * Custom admin components
   */
  components?: {
    elements?: {
      Description?: EntityDescriptionComponent
      /**
       * Replaces the "Preview" button
       */
      PreviewButton?: CustomPreviewButton
      /**
       * Replaces the "Publish" button
       * + drafts must be enabled
       */
      PublishButton?: CustomPublishButton
      /**
       * Replaces the "Save" button
       * + drafts must be disabled
       */
      SaveButton?: CustomSaveButton
      /**
       * Replaces the "Save Draft" button
       * + drafts must be enabled
       * + autosave must be disabled
       */
      SaveDraftButton?: CustomSaveDraftButton
    }
    views?: {
      /**
       * Set to a React component to replace the entire Edit View, including all nested routes.
       * Set to an object to replace or modify individual nested routes, or to add new ones.
       */
      edit?: EditConfig
    }
  }
  /** Extension point to add your custom data. Available in server and client. */
  custom?: Record<string, any>
  /**
   * Custom description for collection
   */
  description?: EntityDescription
  /**
   * Place globals into a navigational group
   * */
  group?: Record<string, string> | string
  /**
   * Exclude the global from the admin nav and routes
   */
  hidden?: ((args: { user: PayloadRequest['user'] }) => boolean) | boolean
  /**
   * Hide the API URL within the Edit View
   */
  hideAPIURL?: boolean
  /**
   * Live preview options
   */
  livePreview?: LivePreviewConfig
  meta?: MetaConfig
  /**
   * Function to generate custom preview URL
   */
  preview?: GeneratePreviewURL
}

export type GlobalConfig = {
  access?: {
    read?: Access
    readDrafts?: Access
    readVersions?: Access
    update?: Access
  }
  admin?: GlobalAdminOptions
  /** Extension point to add your custom data. Server only. */
  custom?: Record<string, any>
  /**
   * Customize the SQL table name
   */
  dbName?: DBIdentifierName
  endpoints?: false | Omit<Endpoint, 'root'>[]
  fields: Field[]
  graphQL?:
    | {
        name?: string
      }
    | false
  hooks?: {
    afterChange?: AfterChangeHook[]
    afterRead?: AfterReadHook[]
    beforeChange?: BeforeChangeHook[]
    beforeRead?: BeforeReadHook[]
    beforeValidate?: BeforeValidateHook[]
  }
  label?: Record<string, string> | string
  /**
   * Enables / Disables the ability to lock documents while editing
   * @default true
   */
  lockDocuments?:
    | {
        duration: number
      }
    | false
  slug: string
  /**
   * Options used in typescript generation
   */
  typescript?: {
    /**
     * Typescript generation name given to the interface type
     */
    interface?: string
  }
  versions?: boolean | IncomingGlobalVersions
}

export interface SanitizedGlobalConfig
  extends Omit<DeepRequired<GlobalConfig>, 'endpoints' | 'fields' | 'versions'> {
  endpoints: Endpoint[] | false
  fields: Field[]
  versions: SanitizedGlobalVersions
}

export type Globals = {
  config: SanitizedGlobalConfig[]
  graphQL?:
    | {
        [slug: string]: {
          mutationInputType: GraphQLNonNull<any>
          type: GraphQLObjectType
          versionType?: GraphQLObjectType
        }
      }
    | false
}

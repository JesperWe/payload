import type { Data, FormState } from 'payload'
import type React from 'react'
import type { HTMLAttributes } from 'react'

import type { DocumentInfoContext } from '../../providers/DocumentInfo/types.js'
import type { Props as DrawerProps } from '../Drawer/types.js'

export type DocumentDrawerProps = {
  readonly AfterFields?: React.ReactNode
  readonly collectionSlug: string
  readonly disableActions?: boolean
  readonly drawerSlug?: string
  readonly id?: null | number | string
  readonly initialData?: Data
  readonly initialState?: FormState
  readonly onDelete?: DocumentInfoContext['onDelete']
  readonly onDuplicate?: DocumentInfoContext['onDuplicate']
  readonly onSave?: DocumentInfoContext['onSave']
  readonly redirectAfterDelete?: boolean
  readonly redirectAfterDuplicate?: boolean
} & Pick<DrawerProps, 'Header'>

export type DocumentTogglerProps = {
  readonly children?: React.ReactNode
  readonly className?: string
  readonly collectionSlug: string
  readonly disabled?: boolean
  readonly drawerSlug?: string
  readonly id?: string
  readonly onClick?: () => void
} & Readonly<HTMLAttributes<HTMLButtonElement>>

export type UseDocumentDrawer = (args: { collectionSlug: string; id?: number | string }) => [
  React.FC<Omit<DocumentDrawerProps, 'collectionSlug' | 'id'>>, // drawer
  React.FC<Omit<DocumentTogglerProps, 'collectionSlug' | 'id'>>, // toggler
  {
    closeDrawer: () => void
    drawerDepth: number
    drawerSlug: string
    isDrawerOpen: boolean
    openDrawer: () => void
    toggleDrawer: () => void
  },
]

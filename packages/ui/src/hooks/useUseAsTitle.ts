'use client'
import type { ClientCollectionConfig, ClientField } from 'payload'

import { flattenFieldMap } from '../utilities/flattenFieldMap.js'

export const useUseTitleField = (
  collection: ClientCollectionConfig,
  fields: ClientField[],
): ClientField => {
  const {
    admin: { useAsTitle },
  } = collection

  const topLevelFields = flattenFieldMap(fields)
  return topLevelFields.find((field) => 'name' in field && field.name === useAsTitle)
}

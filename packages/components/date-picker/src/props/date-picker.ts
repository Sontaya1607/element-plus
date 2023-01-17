import { buildProps, definePropType } from '@element-plus/utils'

import { buddhistEraSharedProps } from './shared'
import type { ExtractPropTypes } from 'vue'
import type { IDatePickerType } from '../date-picker.type'

const { buddhistEra } = buddhistEraSharedProps

export const datePickerProps = buildProps({
  type: {
    type: definePropType<IDatePickerType>(String),
    default: 'date',
  },
  buddhistEra,
} as const)

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>

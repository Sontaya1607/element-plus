import { buildProps, definePropType } from '@element-plus/utils'
import { buddhistEraSharedProps, panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

const { buddhistEra } = buddhistEraSharedProps

export const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
  },
  visible: {
    type: Boolean,
  },
  format: {
    type: String,
    default: '',
  },
  buddhistEra,
} as const)

export type PanelDatePickProps = ExtractPropTypes<typeof panelDatePickProps>

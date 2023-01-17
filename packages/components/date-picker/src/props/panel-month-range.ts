import { buildProps } from '@element-plus/utils'
import { buddhistEraSharedProps, panelRangeSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

const { buddhistEra } = buddhistEraSharedProps

export const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
  buddhistEra,
} as const)

export const panelMonthRangeEmits = ['pick', 'set-picker-option']

export type PanelMonthRangeProps = ExtractPropTypes<typeof panelMonthRangeProps>

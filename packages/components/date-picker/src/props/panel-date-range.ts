import { buildProps } from '@element-plus/utils'
import {
  buddhistEraSharedProps,
  panelRangeSharedProps,
  panelSharedProps,
} from './shared'

import type { ExtractPropTypes } from 'vue'

const { buddhistEra } = buddhistEraSharedProps

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  buddhistEra,
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>

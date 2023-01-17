import { buildProps } from '@element-plus/utils'
import { buddhistEraSharedProps, datePickerSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

const { date, disabledDate, parsedValue } = datePickerSharedProps
const { buddhistEra } = buddhistEraSharedProps

export const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
  buddhistEra,
})

export type BasicYearTableProps = ExtractPropTypes<typeof basicYearTableProps>

import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElDatePicker from '@element-plus/date-picker'
import ElForm from '@element-plus/form'
import ElFormItem from '@element-plus/form-item'
import ElInput from '@element-plus/input'
import ElPopper from '@element-plus/popper'
import ElScrollbar from '@element-plus/scrollbar'
import ElTimePicker from '@element-plus/time-picker'
import { use, i18n } from '@element-plus/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@element-plus/utils/config'
import { setConfig } from '@element-plus/utils/config'
import isServer from '@element-plus/utils/isServer'
import dayjs from 'dayjs'

type DWindow =  Window & typeof globalThis & {
  dayjs?: typeof dayjs
}

// expose Day.js to window to make full bundle i18n work
if (!isServer) {
  const _window: DWindow = window

  if (!_window.dayjs) {
    _window.dayjs = dayjs
  }
}

const version = version_ // version_ to fix tsc issue

const locale = use

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElPopper,
  ElScrollbar,
  ElTimePicker,
]

const plugins = [
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElPopper,
  ElScrollbar,
  ElTimePicker,
  version,
  install,
  locale,
}

export default {
  version,
  install,
}

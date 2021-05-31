import type { FileAdapter } from '@geislabs/file'
import { LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer-core'

export interface PuppeteerConfig {
    file?: FileAdapter
    waitfor?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
    options: LaunchOptions
}

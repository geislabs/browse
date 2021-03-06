import { LocalFileAdapter } from '@geislabs/file'
import { SessionProvider } from './sessions/sessionAdapter'
import { BrowseTestAdapter } from './test'

export const DEFAULT_PROVIDER: SessionProvider = () =>
    new BrowseTestAdapter({
        file: new LocalFileAdapter({ rootDir: __dirname }),
    })

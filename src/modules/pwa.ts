import { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router }) => {
  if (!isClient)
    return

  router.isReady().then(async() => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })

  router.options.scrollBehavior = async(to, from, savedPosition): Promise<any> => {
    if (savedPosition)
      return savedPosition

    const findEl = async(hash: string, x: any) => {
      return (
        document.querySelector(hash)
        || new Promise<void>((resolve, reject) => {
          if (x > 50)
            return resolve()

          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (to.hash) {
      const el = await findEl(to.hash, null)
      if ('scrollBehavior' in document.documentElement.style)
        return window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })

      else
        return window.scrollTo(0, el.offsetTop)
    }

    return { x: 0, y: 0 }
  }
}

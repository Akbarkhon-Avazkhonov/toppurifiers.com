import { NextRequest, NextResponse } from 'next/server'

const slugsWithUrl: { [key: string]: string } = {
  "crimson-wind": "blueair-211i-max",
  "silent-meadow": "levoit-core-400s",
  "frozen-horizon": "coway-airmega-400",
  "amber-leaf": "blueair-signature",
  "iron-cloud": "honeywell-hpa300",
  "velvet-dawn": "airdoctor-ad5500i",
  "silver-tide": "molekule-air-pro",
  "shadow-bloom": "rabbit-air-spa-1000n",
  "golden-echo": "alen-breathesmart-75i"
}


export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.startsWith('https://candlesoul.shop')) {

    const { pathname } = req.nextUrl
    const key = pathname.replace(/^\/+/, '') // убираем "/"

    const value = slugsWithUrl[key]

    if (value) {
      const url = req.nextUrl.clone()
      url.pathname = `/reviews/${value}`

      const res = NextResponse.redirect(url)
      res.cookies.set('checkout', 'true', { path: '/', maxAge: 60 })

      return res
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/:slug*',

  ],
}

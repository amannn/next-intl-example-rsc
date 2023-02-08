import {createIntlMiddleware} from 'next-intl/server';
import {NextRequest} from 'next/server';

const middleware = createIntlMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export default function handler(req: NextRequest) {
  const value = req.headers.get('host') || 'N/A';

  const response = middleware(req);

  response.cookies.set('test', value);

  return response;
}

export const config = {
  matcher: ['/((?!_next).*)']
};

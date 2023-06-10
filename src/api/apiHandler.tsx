import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const MethodScheme = z.union([
  z.literal('DELETE'),
  z.literal('GET'),
  z.literal('OPTIONS'),
  z.literal('PATCH'),
  z.literal('POST'),
  z.literal('PUT'),
]);

type Method = z.infer<typeof MethodScheme>;

type Endpoint<TQuery, TBody> = (
  req: NextApiRequest,
  res: NextApiResponse,
  options: {
    query: TQuery;
    body: TBody;
  }
) => Promise<void>;

type PartialRecord<K extends keyof never, T> = {
  [P in K]?: T;
};

type ApiOptions<TQuery, TBody> = {
  endpoints: PartialRecord<Method, Endpoint<TQuery, TBody>>;
  queryScheme?: z.ZodSchema<TQuery>;
  bodyScheme?: z.ZodSchema<TBody>;
};

export const apiHandler =
  <TQuery = undefined, TBody = undefined>({
    endpoints,
    queryScheme,
    bodyScheme,
  }: ApiOptions<TQuery, TBody>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const method = MethodScheme.parse(req.method);

    const endpoint = endpoints[method];

    if (!endpoint) {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }

    if (typeof req.body === 'string') {
      try {
        const body = JSON.parse(req.body);
        req.body = body;
      } catch {
        // nothing
      }
    }

    try {
      const query = queryScheme?.parse(req.query);
      const body = bodyScheme?.parse(req.body);

      await endpoint(req, res, { query, body } as {
        query: TQuery;
        body: TBody;
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: 'An error occure', message: error.message });
        return;
      }

      res.status(400).json({ error: 'An error occure', message: error });
    }
  };

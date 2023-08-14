type Params = Record<string, string | number | boolean | null | undefined>;

const getUrl = (route: string): string => {
    // If the route contains a full url, don't prefix it with the API host
    if (/(http:\/\/)|(https:\/\/)|(www\.)/.test(route)) {
        return route;
    }
    return `${process.env['NEXT_PUBLIC_SUPABASE_URL']}${route}`;
};

const addQueryStringParameter = (uri: string, key: string, value: string): string => {
    const regex = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
    const separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(regex)) {
        return uri.replace(regex, `$1${key}=${value}$2`);
    }
    return `${uri + separator + key}=${value}`;
};

const getUrlWithParams = (route: string, params: Params): string => {
    let url = getUrl(route);
    if (params) {
        for (const property in params) {
            if (params[property] !== null && params[property] !== undefined) {
                url = addQueryStringParameter(url, property, `${params[property]}`);
            }
        }
    }
    return url;
};

type Body = Record<string, unknown>;

type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

// eslint-disable-next-line no-undef
type Options = Omit<RequestInit, 'body'> & {
    body?: Body;
    params?: Params;
    responseType?: ResponseType;
};

export const getNetwork = () => {
    // we do not write it as a hook (useNetwork) because the hook won't be allowed in a server component, fetching data serverside is the way to go!
    const fetchWrapper = async <T>(route: string, { params = {}, headers = {}, body, responseType = 'json', ...options }: Options) => {
        const url = getUrlWithParams(route, params);
        let res: Response;
        try {
            res = await fetch(url, {
                ...options,
                body: body ? JSON.stringify(body) : undefined,
                credentials: 'include',
                headers: {
                    ['apikey']: `${process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']}`,
                    ['content-type']: 'application/json',
                    ...headers,
                },
            });
        } catch (err) {
            console.log(err);
            throw {
                message: "Couldn't handle the network request. Please check the fetch function and all your params.",
                status: 500,
            };
        }

        if (!res.ok) {
            throw { message: res.statusText, status: res?.status || 500 };
        }
        if (res.status === 201) {
            return res.text() as T;
        }
        if (responseType === 'json') {
            const data: T = await res.json();
            return data;
        }
        if (responseType === 'blob') {
            return res.blob() as T;
        }
        if (responseType === 'text') {
            return res.text() as T;
        }
        if (responseType === 'arraybuffer') {
            return res.arrayBuffer() as T;
        }
    };

    const get = async <T>(route: string, options?: Omit<Options, 'method'>) => {
        return fetchWrapper<T>(route, { ...options, method: 'GET' });
    };

    type ExternalOptions = Omit<Options, 'method' | 'body'>;
    const post = async <T>(route: string, body?: Body, options?: ExternalOptions) => {
        return fetchWrapper<T>(route, { ...options, body, method: 'POST' });
    };

    const patch = async <T>(route: string, body: Body, options?: ExternalOptions) => {
        return fetchWrapper<T>(route, { ...options, body, method: 'PATCH' });
    };

    const put = async <T>(route: string, body: Body, options?: ExternalOptions) => {
        return fetchWrapper<T>(route, { ...options, body, method: 'PUT' });
    };

    const remove = async <T>(route: string, options?: Omit<Options, 'method' | 'body'>) => {
        return fetchWrapper<T>(route, { ...options, method: 'DELETE' });
    };

    return { delete: remove, get, patch, post, put };
};

// client side

export const useNetwork = () => {
    return getNetwork();
};

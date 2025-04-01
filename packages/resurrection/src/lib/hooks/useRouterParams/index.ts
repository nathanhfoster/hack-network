'use client';

import { ParsedUrlQuery } from 'querystring';

import { isArray, isNotNotTrue } from '@hack-network/utils';
import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import NextRouterAugmented from './types';

export type UseRouterParamsOptions = {
  method?: 'push' | 'replace';
  shallow?: boolean;
};

const useRouterParams = (
  options?: UseRouterParamsOptions
): NextRouterAugmented => {
  const { query, pathname, push, replace, ...restOfRouter } = useRouter();

  const reload = options?.method === 'replace' ? replace : push;
  const shallow = options?.shallow ?? true;

  /**
   * Checks whether a param is exposed in the URL string or not.
   * @param name The name of the param.
   * @param value Optional, the param must have the specified value.
   * @returns true/false depending on the presence of the param.
   */
  const hasParam = useCallback(
    (name: string, value?: string | number | boolean) => {
      const { [name]: param } = query;

      if (!value) {
        return isNotNotTrue(param);
      }
      if (!param) {
        return false;
      } else if (isArray(param)) {
        return param.indexOf(encodeURIComponent(value)) > -1;
      } else {
        return param === encodeURIComponent(value);
      }
    },
    [query]
  );

  /**
   *  Retrieves from the URL the value of the provided param.
   * @param name The name of the param.
   * @returns The value of the param.
   */
  const getParamValue = useCallback(
    (name: string) => {
      const value = query[name];

      return !value
        ? value
        : isArray(value)
        ? value.map((el) => decodeURIComponent(el))
        : decodeURIComponent(value);
    },
    [query]
  );

  /**
   * Adds a query param to the URL string. Multiple params with the same name
   * and different values can be added.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  const addParam = useCallback(
    (name: string, value: string | boolean | number) => {
      const { [name]: param, ...rest } = query;

      let newQuery;

      if (!param) {
        newQuery = { ...rest, [name]: encodeURIComponent(value) };
      } else if (isArray(param)) {
        if (param.indexOf(encodeURIComponent(value)) > -1) return;
        newQuery = { ...rest, [name]: [...param, encodeURIComponent(value)] };
      } else {
        if (param === encodeURIComponent(value)) return;
        newQuery = { ...rest, [name]: [param, encodeURIComponent(value)] };
      }

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, shallow]
  );

  /**
   * Removes the provided params with a specific value from the URL.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  const removeParam = useCallback(
    (
      name: string,
      value?: string | number | boolean | string[] | number[] | boolean[]
    ) => {
      const { [name]: param, ...rest } = query;

      if (!param) {
        return;
      }

      let newQuery;

      if (value && isArray(param) && !isArray(value)) {
        newQuery = {
          ...rest,
          [name]: param.filter(
            (element: string) => element !== encodeURIComponent(value as string)
          ),
        };
      } else {
        newQuery = { ...rest };
      }

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, shallow]
  );

  const removeParams = useCallback(
    (params: string[]) => {
      if (!params.length) {
        return;
      }

      const newQuery = Object.keys(query).reduce((acc, curr) => {
        if (params.includes(curr)) {
          delete acc[curr];
        }

        return acc;
      }, query);

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, shallow]
  );

  /**
   * It sets a query param in the URL to a given value. If it already exists, it
   * will be overriden.
   * @param name The name of the param.
   * @param value The value of the param, it can be single or multiple values.
   */
  const setParam = useCallback(
    (
      name: string,
      value?: string | boolean | number | string[] | boolean[] | number[]
    ) => {
      if (!value) {
        removeParam(name);

        return;
      }
      const { [name]: param, ...rest } = query;

      reload(
        {
          pathname,
          query: {
            ...rest,
            [name]: isArray(value)
              ? value.map((el: string | number | boolean) =>
                  encodeURIComponent(String(el))
                )
              : encodeURIComponent(String(value)),
          },
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, removeParam, shallow]
  );

  const setParams = useCallback(
    (
      params: [
        string,
        string | number | boolean | string[] | boolean[] | number[]
      ][]
    ) => {
      const newQuery = params.reduce((acc: ParsedUrlQuery, [name, value]) => {
        acc[name] = isArray(value)
          ? value.map((el: string | number | boolean) =>
              encodeURIComponent(String(el))
            )
          : encodeURIComponent(String(value));

        return acc;
      }, query);

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, reload, shallow, query]
  );

  /**
   * If no argument is passed, it clears all the query params from the URL.
   * If one or more params are passed as arguments, only those will be cleared
   * from the URL.
   * @param params one or more params to remove.
   */
  const clearParams = useCallback(
    (...params: string[]) => {
      // Clear all params
      if (!params.length) {
        reload(
          {
            pathname,
          },
          undefined,
          { shallow }
        );

        return;
      }
      // Clear the given params
      const newQuery = Object.keys(query).reduce((acc, curr) => {
        if (params.indexOf(curr) === -1) {
          acc[curr] = query[curr];
        }

        return acc;
      }, {} as ParsedUrlQuery);

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, shallow]
  );

  /**
   * Adds the query param to the URL if it's not already there or removes it
   * otherwise.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  const toggleParam = useCallback(
    (name: string, value: string | boolean | number) => {
      const { [name]: param, ...rest } = query;

      let newQuery;

      if (!param) {
        // It doesn't exists -> add it.
        newQuery = { ...rest, [name]: encodeURIComponent(value) };
      } else if (isArray(param)) {
        if (param.indexOf(encodeURIComponent(value)) > -1) {
          // There are multiple values for the same param and the value it's there
          // -> remove the value.
          newQuery = {
            ...rest,
            [name]: param.filter(
              (element: string) =>
                element !== encodeURIComponent(value as string)
            ),
          };
        } else {
          // There are multiple values for the same param and the value it's not there
          // -> add the new value.
          newQuery = { ...rest, [name]: [...param, encodeURIComponent(value)] };
        }
      } else {
        if (param === encodeURIComponent(value)) {
          // The param exists with the same value -> remove it from the url.
          newQuery = { ...rest };
        } else {
          // The param exists with other values -> add the value.
          newQuery = { ...rest, [name]: [param, encodeURIComponent(value)] };
        }
      }

      reload(
        {
          pathname,
          query: newQuery,
        },
        undefined,
        { shallow }
      );
    },
    [pathname, query, reload, shallow]
  );

  const shallowPush = useCallback(
    (url: string) => {
      push(url, undefined, { shallow: true });
    },
    [push]
  );

  const shallowReplace = useCallback(
    (url: Url) => {
      replace(url, undefined, { shallow: true });
    },
    [replace]
  );

  const router = useMemo<NextRouterAugmented>(
    () => ({
      hasParam,
      getParamValue,
      addParam,
      setParam,
      setParams,
      clearParams,
      removeParam,
      removeParams,
      toggleParam,
      pathname,
      query,
      push,
      replace,
      shallowPush,
      shallowReplace,
      ...restOfRouter,
    }),
    [
      addParam,
      clearParams,
      getParamValue,
      hasParam,
      pathname,
      push,
      query,
      removeParam,
      removeParams,
      replace,
      restOfRouter,
      setParam,
      setParams,
      shallowPush,
      shallowReplace,
      toggleParam,
    ]
  );

  return router;
};

export default useRouterParams;

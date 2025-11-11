// src/middleware.ts
import { defineMiddleware } from 'astro/middleware';
import { getLangFromUrl } from './i18n/utils';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url;
  const lang = getLangFromUrl(url);
  
  // 現在の言語をresponseに追加
  context.locals.lang = lang;
  
  return next();
});
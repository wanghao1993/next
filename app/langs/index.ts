import { useI18n } from "nextjs-i18n";
import EnLans from './en'
import ZhLans from "./zh-CN";
export function t(text: string) {
  return {
    en: EnLans[text],
    zh: ZhLans[text]
  }
}
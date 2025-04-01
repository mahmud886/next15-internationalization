
import { useTranslations } from 'next-intl'
import Link from "next/link";
import LogoIcon from "@/icons/logo";
import ThemeSwitch from "@/components/ThemeSwitch";
import LangSwitcher from "@/components/LangSwitcher";
import GithubIcon from "@/icons/github";

export const Header = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>

          <strong className='mx-2 select-none'>Next15 Internationalization</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/support`}>{t('Support')}</Link>
          <Link lang={locale} href={`/other`}>{t('Other')}</Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}

export default function () {
  const { t } = useI18n();

  interface NavItem {
    to: string;
    label: string;
  }

  const navItems: NavItem[] = [
    {
      to: '/',
      label: t('header.nav.home'),
    },
    {
      to: '/',
      label: t('header.nav.portfolio'),
    },
    {
      to: '/',
      label: t('header.nav.contact'),
    },
  ];

  return navItems;
}

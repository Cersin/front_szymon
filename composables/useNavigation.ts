export default function () {
  const { t } = useI18n();

  interface NavItem {
    to: string;
    label: string;
  }

  const navItems: NavItem[] = [
    {
      to: '/',
      label: t('nav.route.home'),
    },
    {
      to: '/',
      label: t('nav.route.portfolio'),
    },
    {
      to: '/',
      label: t('nav.route.contact'),
    },
  ];

  return navItems;
}

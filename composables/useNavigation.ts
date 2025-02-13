export default function () {
  const { t } = useI18n();

  interface NavItem {
    to: string;
    label: string;
  }

  const navItems: NavItem[] = [
    {
      to: '#header',
      label: t('nav.route.home'),
    },
    {
      to: '#about',
      label: t('nav.route.about'),
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

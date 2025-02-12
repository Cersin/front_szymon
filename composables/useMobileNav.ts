export default function () {
  return useState<boolean>('navState', () => false);
}

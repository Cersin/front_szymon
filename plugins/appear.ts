export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    beforeMount(element: HTMLElement) {
      element.style.visibility = 'hidden';
    },
    updated(element: HTMLElement, binding: DirectiveBinding<boolean>, node: VNode) {
      if (!binding.value === !binding.oldValue || null === node.transition) {
        return;
      }

      if (!binding.value) {
        node.transition.leave(element, () => {
          element.style.visibility = 'hidden';
        });
        return;
      }

      node.transition.beforeEnter(element);
      element.style.visibility = '';
      node.transition.enter(element);
    },
  });
});

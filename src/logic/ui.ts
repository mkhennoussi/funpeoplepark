const isOpen = ref(false)

export const useUI = () => {
  function closeDrawer() {
    return isOpen.value = false
  }

  function openDrawer() {
    return isOpen.value = true
  }

  function toggleDrawer() {
    return isOpen.value ? closeDrawer() : openDrawer()
  }

  return {
    isOpen: computed(() => isOpen.value),
    closeDrawer,
    openDrawer,
    toggleDrawer,
  }
}

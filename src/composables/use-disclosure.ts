import { ref } from 'vue'

interface DisclosureProps {
  opened?: boolean;
  initial?: boolean;
}

export function useDisclosure(props: DisclosureProps = {}) {
  const opened = ref(props.initial || false)
  const onToggle = () => opened.value = !opened.value
  const onOpen = () => opened.value = true
  const onClose = () => opened.value = false
  
  return { opened, onToggle, onOpen, onClose }
}
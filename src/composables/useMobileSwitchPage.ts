import type { ISlideSelectModelValue } from '@/components/common/SlideSelect/types';
import { ref } from 'vue';

const page = ref<ISlideSelectModelValue>({ id: '1', label: 'Charts' });

export const useMobileSwitchPage = () => {
  const setPage = (inputPage: ISlideSelectModelValue) => {
    page.value = inputPage;
  };

  return { setPage, page };
};

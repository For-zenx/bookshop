import { defineStore } from "pinia";

export const useOpenModal = defineStore("modal", {
  state: () => ({
    isOpenSearchModal: false,
  }),
  actions: {
    async toggleSearchModal() {
      this.isOpenSearchModal = !this.isOpenSearchModal;
    },
  },
});

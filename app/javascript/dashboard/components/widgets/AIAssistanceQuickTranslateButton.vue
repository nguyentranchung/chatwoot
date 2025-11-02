<script>
import NextButton from 'dashboard/components-next/button/Button.vue';
import { useAdmin } from 'dashboard/composables/useAdmin';
import { useAI } from 'dashboard/composables/useAI';
import { useKeyboardEvents } from 'dashboard/composables/useKeyboardEvents';
import { useUISettings } from 'dashboard/composables/useUISettings';
import { CMD_AI_ASSIST } from 'dashboard/helper/commandbar/events';
import { emitter } from 'shared/helpers/mitt';
import { ref } from 'vue';
import AIAssistanceModal from './AIAssistanceModal.vue';

export default {
  components: {
    NextButton,
    AIAssistanceModal,
  },
  emits: ['replaceText'],
  setup(props, { emit }) {
    const { uiSettings, updateUISettings } = useUISettings();

    const { isAIIntegrationEnabled, draftMessage, recordAnalytics } = useAI();

    const { isAdmin } = useAdmin();

    const initialMessage = ref('');

    const initializeMessage = draftMsg => {
      initialMessage.value = draftMsg;
    };
    const keyboardEvents = {
      '$mod+KeyZ': {
        action: () => {
          if (initialMessage.value) {
            emit('replaceText', initialMessage.value);
            initialMessage.value = '';
          }
        },
        allowOnFocusedInput: true,
      },
    };
    useKeyboardEvents(keyboardEvents);

    return {
      uiSettings,
      updateUISettings,
      isAdmin,
      initialMessage,
      initializeMessage,
      recordAnalytics,
      isAIIntegrationEnabled,
      draftMessage,
    };
  },
  data: () => ({
    showAIAssistanceModal: false,
    showAICtaModal: false,
    aiOption: 'to_en',
  }),
  computed: {
    isAICTAModalDismissed() {
      return this.uiSettings.is_open_ai_cta_modal_dismissed;
    },
  },

  mounted() {
    emitter.on(CMD_AI_ASSIST, this.onAIAssist);
    this.initializeMessage(this.draftMessage);
  },

  methods: {
    hideAIAssistanceModal() {
      this.recordAnalytics('DISMISS_AI_SUGGESTION', {
        aiOption: this.aiOption,
      });
      this.showAIAssistanceModal = false;
    },
    openAIAssist() {
      // Dismiss the CTA modal if it is not dismissed
      if (!this.isAICTAModalDismissed) {
        this.updateUISettings({
          is_open_ai_cta_modal_dismissed: true,
        });
      }
      this.initializeMessage(this.draftMessage);
      this.showAIAssistanceModal = true;
    },
    onAIAssist(option) {
      this.aiOption = option;
      this.showAIAssistanceModal = true;
    },
    insertText(message) {
      this.$emit('replaceText', message);
    },
  },
};
</script>

<template>
  <NextButton
    v-tooltip.top-end="'Translate to English'"
    icon="i-ph-translate-duotone"
    slate
    faded
    sm
    @click="openAIAssist"
  />
  <woot-modal
    v-model:show="showAIAssistanceModal"
    :on-close="hideAIAssistanceModal"
  >
    <AIAssistanceModal
      :ai-option="aiOption"
      @apply-text="insertText"
      @close="hideAIAssistanceModal"
    />
  </woot-modal>
</template>

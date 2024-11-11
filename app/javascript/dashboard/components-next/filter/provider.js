import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useOperators } from './operators';

export function useConversationFilterContext() {
  const { t } = useI18n();

  const {
    equalityOperators,
    presenceOperators,
    containmentOperators,
    dateOperators,
  } = useOperators();

  const filterTypes = computed(() => [
    {
      attributeKey: 'status',
      attributeName: t('FILTER.ATTRIBUTES.STATUS'),
      inputType: 'multiSelect',
      dataType: 'text',
      filterOperators: equalityOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'assignee_id',
      attributeName: t('FILTER.ATTRIBUTES.ASSIGNEE_NAME'),
      inputType: 'searchSelect',
      dataType: 'text',
      filterOperators: presenceOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'inbox_id',
      attributeName: t('FILTER.ATTRIBUTES.INBOX_NAME'),
      inputType: 'searchSelect',
      dataType: 'text',
      filterOperators: presenceOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'team_id',
      attributeName: t('FILTER.ATTRIBUTES.TEAM_NAME'),
      inputType: 'searchSelect',
      dataType: 'number',
      filterOperators: presenceOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'display_id',
      attributeName: t('FILTER.ATTRIBUTES.CONVERSATION_IDENTIFIER'),
      inputType: 'plainText',
      dataType: 'Number',
      filterOperators: containmentOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'campaign_id',
      attributeName: t('FILTER.ATTRIBUTES.CAMPAIGN_NAME'),
      inputType: 'searchSelect',
      dataType: 'Number',
      filterOperators: presenceOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'labels',
      attributeName: t('FILTER.ATTRIBUTES.LABELS'),
      inputType: 'multiSelect',
      dataType: 'text',
      filterOperators: presenceOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'browser_language',
      attributeName: t('FILTER.ATTRIBUTES.BROWSER_LANGUAGE'),
      inputType: 'searchSelect',
      dataType: 'text',
      filterOperators: equalityOperators.value,
      attributeModel: 'additional',
    },
    {
      attributeKey: 'country_code',
      attributeName: t('FILTER.ATTRIBUTES.COUNTRY_NAME'),
      inputType: 'searchSelect',
      dataType: 'text',
      filterOperators: equalityOperators.value,
      attributeModel: 'additional',
    },
    {
      attributeKey: 'referer',
      attributeName: t('FILTER.ATTRIBUTES.REFERER_LINK'),
      inputType: 'plainText',
      dataType: 'text',
      filterOperators: containmentOperators.value,
      attributeModel: 'additional',
    },
    {
      attributeKey: 'created_at',
      attributeName: t('FILTER.ATTRIBUTES.CREATED_AT'),
      inputType: 'date',
      dataType: 'text',
      filterOperators: dateOperators.value,
      attributeModel: 'standard',
    },
    {
      attributeKey: 'last_activity_at',
      attributeName: t('FILTER.ATTRIBUTES.LAST_ACTIVITY'),
      inputType: 'date',
      dataType: 'text',
      filterOperators: dateOperators.value,
      attributeModel: 'standard',
    },
  ]);

  return { filterTypes };
}
export const filterTypes = [
  {
    attributeKey: 'status',
    value: 'status',
    attributeName: 'Status',
    label: 'Status',
    inputType: 'multiSelect',
    options: [
      { id: 'open', name: 'Open' },
      { id: 'resolved', name: 'Resolved' },
      { id: 'pending', name: 'Pending' },
      { id: 'snoozed', name: 'Snoozed' },
      { id: 'all', name: 'All' },
    ],
    dataType: 'text',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'assignee_id',
    value: 'assignee_id',
    attributeName: 'Assignee name',
    label: 'Assignee name',
    inputType: 'searchSelect',
    options: [
      { id: 14, name: 'Ben Nugent' },
      { id: 30, name: 'Bruce' },
      { id: 16, name: 'Cathy Simms' },
      { id: 7, name: 'Charles Miner' },
      { id: 10, name: 'Craig D' },
      { id: 9, name: 'Dan Gore' },
      { id: 13, name: 'Danny Cordray' },
      { id: 3, name: 'David Wallace' },
      { id: 4, name: 'Deangelo Vickers' },
      { id: 33, name: 'Devon White' },
      { id: 8, name: 'Ed Truck' },
      { id: 31, name: 'Frank' },
      { id: 29, name: 'Gideon' },
      { id: 24, name: 'Glenn Max' },
    ],
    dataType: 'text',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'is_present',
        label: 'Is present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-member-of-bold',
      },
      {
        value: 'is_not_present',
        label: 'Is not present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-not-member-of',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'team_id',
    value: 'team_id',
    attributeName: 'Team name',
    label: 'Team name',
    inputType: 'searchSelect',
    options: [
      { id: 223, name: '💰 sales' },
      { id: 224, name: '💼 management' },
      { id: 225, name: '👩‍💼 administration' },
      { id: 226, name: '🚛 warehouse' },
    ],
    dataType: 'number',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'is_present',
        label: 'Is present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-member-of-bold',
      },
      {
        value: 'is_not_present',
        label: 'Is not present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-not-member-of',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'display_id',
    value: 'display_id',
    attributeName: 'Conversation identifier',
    label: 'Conversation identifier',
    inputType: 'plainText',
    datatype: 'number',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'contains',
        label: 'Contains',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-superset-of-bold',
      },
      {
        value: 'does_not_contain',
        label: 'Does not contain',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-superset-of',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'campaign_id',
    value: 'campaign_id',
    attributeName: 'Campaign name',
    label: 'Campaign name',
    inputType: 'searchSelect',
    options: [],
    datatype: 'number',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'is_present',
        label: 'Is present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-member-of-bold',
      },
      {
        value: 'is_not_present',
        label: 'Is not present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-not-member-of',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'labels',
    value: 'labels',
    attributeName: 'Labels',
    label: 'Labels',
    inputType: 'multiSelect',
    options: [
      { id: 'billing', name: 'billing' },
      { id: 'delivery', name: 'delivery' },
      { id: 'lead', name: 'lead' },
      { id: 'ops-handover', name: 'ops-handover' },
      { id: 'premium-customer', name: 'premium-customer' },
      { id: 'software', name: 'software' },
    ],
    dataType: 'text',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'is_present',
        label: 'Is present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-member-of-bold',
      },
      {
        value: 'is_not_present',
        label: 'Is not present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-not-member-of',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'referer',
    value: 'referer',
    attributeName: 'Referer link',
    label: 'Referer link',
    inputType: 'plainText',
    dataType: 'text',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'contains',
        label: 'Contains',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-superset-of-bold',
      },
      {
        value: 'does_not_contain',
        label: 'Does not contain',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-superset-of',
      },
    ],
    attributeModel: 'additional',
  },
  {
    attributeKey: 'created_at',
    value: 'created_at',
    attributeName: 'Created at',
    label: 'Created at',
    inputType: 'date',
    dataType: 'text',
    filterOperators: [
      {
        value: 'is_greater_than',
        label: 'Is greater than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-greater-than-bold',
      },
      {
        value: 'is_less_than',
        label: 'Is lesser than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-less-than-bold',
      },
      {
        value: 'days_before',
        label: 'Is x days before',
        hasInput: true,
        inputOverride: 'plainText',
        icon: 'i-ph-calendar-minus-bold',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'last_activity_at',
    value: 'last_activity_at',
    attributeName: 'Last activity',
    label: 'Last activity',
    inputType: 'date',
    dataType: 'text',
    filterOperators: [
      {
        value: 'is_greater_than',
        label: 'Is greater than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-greater-than-bold',
      },
      {
        value: 'is_less_than',
        label: 'Is lesser than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-less-than-bold',
      },
      {
        value: 'days_before',
        label: 'Is x days before',
        hasInput: true,
        inputOverride: 'plainText',
        icon: 'i-ph-calendar-minus-bold',
      },
    ],
    attributeModel: 'standard',
  },
  {
    attributeKey: 'are_you_a_paid_customer',
    value: 'are_you_a_paid_customer',
    attributeName: 'Are you a paid customer?',
    label: 'Are you a paid customer?',
    inputType: 'booleanSelect',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    options: [],
    attributeModel: 'customAttributes',
  },
  {
    attributeKey: 'date_of_purchase',
    value: 'date_of_purchase',
    attributeName: 'Date of Purchase',
    label: 'Date of Purchase',
    inputType: 'date',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
      {
        value: 'is_present',
        label: 'Is present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-member-of-bold',
      },
      {
        value: 'is_not_present',
        label: 'Is not present',
        hasInput: false,
        inputOverride: null,
        icon: 'i-ph-not-member-of',
      },
      {
        value: 'is_greater_than',
        label: 'Is greater than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-greater-than-bold',
      },
      {
        value: 'is_less_than',
        label: 'Is lesser than',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-less-than-bold',
      },
    ],
    options: [],
    attributeModel: 'customAttributes',
  },
  {
    attributeKey: 'your_website',
    value: 'your_website',
    attributeName: 'Your website',
    label: 'Your website',
    inputType: 'plainText',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    options: [],
    attributeModel: 'customAttributes',
  },
  {
    attributeKey: 'are_you_residing_in_india',
    value: 'are_you_residing_in_india',
    attributeName: 'Are you residing in India?',
    label: 'Are you residing in India?',
    inputType: 'booleanSelect',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    options: [],
    attributeModel: 'customAttributes',
  },
  {
    attributeKey: 'cloud',
    value: 'cloud',
    attributeName: 'Cloud',
    label: 'Cloud',
    inputType: 'booleanSelect',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    options: [],
    attributeModel: 'customAttributes',
  },
  {
    attributeKey: 'license_type',
    value: 'license_type',
    attributeName: 'License Type',
    label: 'License Type',
    inputType: 'searchSelect',
    filterOperators: [
      {
        value: 'equal_to',
        label: 'Equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-equals-bold',
      },
      {
        value: 'not_equal_to',
        label: 'Not equal to',
        hasInput: true,
        inputOverride: null,
        icon: 'i-ph-not-equals-bold',
      },
    ],
    options: [
      {
        id: 'Personal',
        name: 'Personal',
      },
      {
        id: 'Enterprise',
        name: 'Enterprise',
      },
      {
        id: 'Teams',
        name: 'Teams',
      },
      {
        id: 'Professional',
        name: 'Professional',
      },
    ],
    attributeModel: 'customAttributes',
  },
];

export const sampleActiveFilters = [
  {
    attributeKey: 'name',
    filterOperator: 'contains',
    values: 'John',
    queryOperator: 'and',
  },
  {
    attributeKey: 'email',
    filterOperator: 'does_not_contain',
    values: 'test@chatwoot.com',
    queryOperator: 'or',
  },
  {
    attributeKey: 'phone_number',
    filterOperator: 'is_present',
    values: '+928383822',
    queryOperator: 'and',
  },
  {
    attributeKey: 'created_at',
    filterOperator: 'is_greater_than',
    values: '2024-01-01',
    queryOperator: 'and',
  },
  {
    attributeKey: 'last_activity',
    filterOperator: 'days_before',
    values: '30',
    queryOperator: 'and',
  },
  {
    attributeKey: 'date_of_birth',
    filterOperator: 'is_not_present',
    values: '',
    queryOperator: 'and',
  },
  {
    attributeKey: 'country',
    filterOperator: 'not_equal_to',
    values: { id: 1, name: 'India' },
    queryOperator: 'and',
  },
];
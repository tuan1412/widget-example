import React from 'react';

import Payment from '../packages/ui/root/Payment';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Payment',
  component: Payment,

};

const Template = (args) => <Payment {...args} />;

export const Primary = Template.bind({});

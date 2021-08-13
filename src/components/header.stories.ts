import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import HeaderComponent from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const header = Template.bind({});
header.args = {
  user: {},
};

